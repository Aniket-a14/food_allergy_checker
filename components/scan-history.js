"use client";

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ScanHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("scan_history");
    if (saved) setHistory(JSON.parse(saved).slice(0, 5));
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("scan_history");
    setHistory([]);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Clock className="h-8 w-8 text-green-500" />
            Scan History
          </h2>
          <Button onClick={clearHistory} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
            Clear History
          </Button>
        </div>
        <div className="space-y-4">
          {history.length === 0 ? (
            <div className="text-gray-500">No products scanned yet. Products will be shown below.</div>
          ) : (
            history.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.product_name || item.name || "Unknown Product"}</h4>
                      <p className="text-sm text-gray-600">{item.brands || item.brand || ""}</p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {item.code}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
