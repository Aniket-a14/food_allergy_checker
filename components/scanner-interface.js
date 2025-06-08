"use client"

import { useRef, useState } from "react";
import { Camera, Mic, Upload, Barcode, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import dynamic from "next/dynamic";

let Quagga = null;
if (typeof window !== "undefined") {
  Quagga = require("quagga").default;
}
import Tesseract from "tesseract.js";

export default function ScannerInterface() {
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);

  const [cameraActive, setCameraActive] = useState(false);
  const [scanMode, setScanMode] = useState(null);
  const [scanResult, setScanResult] = useState("");
  const [ocrLoading, setOcrLoading] = useState(false);
  const [listening, setListening] = useState(false);

  const handleLiveScan = async (mode) => {
    setScanMode(mode);
    setCameraActive(true);
    setScanResult("");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        setTimeout(() => {
          if (mode === "barcode") startQuagga();
        }, 500);
      } catch (err) {
        alert("Camera access denied or unavailable.");
        setCameraActive(false);
      }
    } else {
      alert("Camera not supported in this browser.");
      setCameraActive(false);
    }
  };

  const startQuagga = () => {
    if (!Quagga) return;
    Quagga.init({
      inputStream: {
        type: "LiveStream",
        target: videoRef.current,
        constraints: {
          facingMode: "environment"
        }
      },
      decoder: {
        readers: ["ean_reader", "upc_reader", "code_128_reader"]
      }
    }, (err) => {
      if (err) {
        alert("Quagga init error: " + err);
        stopCamera();
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      setScanResult(data.codeResult.code);
      if (inputRef.current) inputRef.current.value = data.codeResult.code;
      Quagga.stop();
    });
  };

  const handleOcrScan = async () => {
    setOcrLoading(true);
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");

    const { data: { text } } = await Tesseract.recognize(dataUrl, "eng");
    setScanResult(text.trim());
    if (inputRef.current) inputRef.current.value = text.trim();
    setOcrLoading(false);
  };

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Web Speech API not supported in this browser.");
      return;
    }
    setListening(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (inputRef.current) inputRef.current.value = transcript;
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setScanResult("Processing image...");
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target.result;

      if (Quagga) {
        Quagga.decodeSingle({
          src: dataUrl,
          numOfWorkers: 0,
          decoder: {
            readers: ["ean_reader", "upc_reader", "code_128_reader"]
          }
        }, async (result) => {
          if (result && result.codeResult) {
            setScanResult(result.codeResult.code);
            if (inputRef.current) inputRef.current.value = result.codeResult.code;
          } else {
            setScanResult("No barcode found. Running OCR...");
            const { data: { text } } = await Tesseract.recognize(dataUrl, "eng");
            setScanResult(text.trim());
            if (inputRef.current) inputRef.current.value = text.trim();
          }
        });
      } else {
        const { data: { text } } = await Tesseract.recognize(dataUrl, "eng");
        setScanResult(text.trim());
        if (inputRef.current) inputRef.current.value = text.trim();
      }
    };
    reader.readAsDataURL(file);
  };

  const stopCamera = () => {
    setCameraActive(false);
    setScanMode(null);
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    if (Quagga) Quagga.stop();
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Scanning Method</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            onClick={() => inputRef.current && inputRef.current.focus()}
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Barcode className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Enter Barcode</h3>
              <p className="text-sm text-gray-600">Type the product barcode manually</p>
            </CardContent>
          </Card>

          <Card
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Upload className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Upload Image</h3>
              <p className="text-sm text-gray-600">Upload a photo of the product</p>
            </CardContent>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </Card>

          <Card
            onClick={handleVoiceInput}
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Mic className={`h-12 w-12 mx-auto mb-4 ${listening ? "animate-pulse text-green-700" : "text-green-500"}`} />
              <h3 className="font-semibold text-gray-900 mb-2">Voice Input</h3>
              <p className="text-sm text-gray-600">
                {listening ? "Listening..." : "Say the product name aloud"}
              </p>
            </CardContent>
          </Card>

          <Card
            onClick={() => handleLiveScan("barcode")}
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Live Scan</h3>
              <p className="text-sm text-gray-600">Use camera to scan barcode</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <Button onClick={() => handleLiveScan("barcode")} className="bg-green-500 hover:bg-green-600">Barcode Scan</Button>
          <Button onClick={() => handleLiveScan("ocr")} className="bg-blue-500 hover:bg-blue-600">Text Scan (OCR)</Button>
        </div>

        {cameraActive && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
            <video ref={videoRef} className="rounded-lg shadow-lg mb-4" width={400} autoPlay playsInline />
            {scanMode === "ocr" && (
              <Button onClick={handleOcrScan} disabled={ocrLoading} className="mb-2 bg-blue-500 hover:bg-blue-600">
                {ocrLoading ? "Scanning..." : "Scan Text"}
              </Button>
            )}
            <Button onClick={stopCamera} className="bg-red-500 hover:bg-red-600">Close Camera</Button>
            {scanResult && (
              <div className="mt-4 bg-white text-black p-2 rounded shadow">
                <b>Result:</b> {scanResult}
              </div>
            )}
          </div>
        )}

        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              placeholder="Enter barcode number..."
              className="flex-1 h-12 border-2 border-gray-200 focus:border-green-500" />
            <Button className="bg-green-500 hover:bg-green-600 h-12 px-6">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}