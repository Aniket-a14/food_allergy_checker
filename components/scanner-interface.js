import { Camera, Mic, Upload, Barcode, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function ScannerInterface() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Scanning Method</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Barcode className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Enter Barcode</h3>
              <p className="text-sm text-gray-600">Type the product barcode manually</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Upload className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Upload Image</h3>
              <p className="text-sm text-gray-600">Upload a photo of the product</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Mic className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Voice Input</h3>
              <p className="text-sm text-gray-600">Say the product name aloud</p>
            </CardContent>
          </Card>

          <Card
            className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-200">
            <CardContent className="p-6 text-center">
              <Camera className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Live Scan</h3>
              <p className="text-sm text-gray-600">Use camera to scan barcode</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
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
