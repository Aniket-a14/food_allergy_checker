import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ResultsDisplay() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Information</h2>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 flex items-center justify-center bg-gray-50">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Product"
                  className="max-w-full h-auto rounded-lg shadow-md" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Organic Almond Butter</h3>
                <p className="text-lg text-gray-600 mb-1">Brand: Nature's Best</p>
                <p className="text-sm text-gray-500 mb-6">Made in USA</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Allergen Status</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Contains: Tree Nuts</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Gluten Free</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Dairy Free</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Soy Free</Badge>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Ingredients</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Organic roasted almonds, organic palm oil, sea salt
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Labels</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Organic</Badge>
                    <Badge variant="outline">Non-GMO</Badge>
                    <Badge variant="outline">Vegan</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Nutrition Facts</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Calories:</span>
                      <span className="font-medium ml-2">190</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Fat:</span>
                      <span className="font-medium ml-2">17g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Protein:</span>
                      <span className="font-medium ml-2">7g</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Carbs:</span>
                      <span className="font-medium ml-2">6g</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
