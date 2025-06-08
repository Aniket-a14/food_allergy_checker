import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ScanHistory() {
  const historyItems = [
    { name: "Organic Almond Butter", brand: "Nature's Best", time: "2 minutes ago", safe: false },
    { name: "Gluten-Free Bread", brand: "Healthy Choice", time: "1 hour ago", safe: true },
    { name: "Greek Yogurt", brand: "Farm Fresh", time: "3 hours ago", safe: false },
    { name: "Rice Crackers", brand: "Crispy Co", time: "1 day ago", safe: true },
    { name: "Chocolate Bar", brand: "Sweet Treats", time: "2 days ago", safe: false },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Clock className="h-8 w-8 text-green-500" />
            Scan History
          </h2>
          <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
            Clear History
          </Button>
        </div>

        <div className="space-y-4">
          {historyItems.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      className={
                        item.safe
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }>
                      {item.safe ? "Safe" : "Contains Allergens"}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
