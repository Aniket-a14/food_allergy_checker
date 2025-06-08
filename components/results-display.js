"use client";

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ResultsDisplay({ barcode }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!barcode) return;
    setLoading(true);
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        setLoading(false);
        // Save to scan history
        let history = JSON.parse(localStorage.getItem("scan_history") || "[]");
        history.unshift(data.product);
        history = history.slice(0, 5);
        localStorage.setItem("scan_history", JSON.stringify(history));
      });
  }, [barcode]);

  if (!barcode) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Information</h2>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {loading ? (
              <div className="p-8 text-center text-gray-500">Loading...</div>
            ) : product ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 flex items-center justify-center bg-gray-50">
                  <img
                    src={product.image_url || "/placeholder.svg?height=300&width=300"}
                    alt={product.product_name || "Product"}
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.product_name || "Unknown Product"}</h3>
                  <p className="text-lg text-gray-600 mb-1">Brand: {product.brands || "Unknown"}</p>
                  <p className="text-sm text-gray-500 mb-6">{product.countries_tags?.join(", ")}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Allergen Status</h4>
                    <div className="flex flex-wrap gap-2">
                      {(product.allergens_tags && product.allergens_tags.length > 0) ? (
                        product.allergens_tags.map((a, i) => (
                          <Badge key={i} className="bg-red-100 text-red-800 hover:bg-red-100">
                            {a.replace("en:", "")}
                          </Badge>
                        ))
                      ) : (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">No allergens listed</Badge>
                      )}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ingredients</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {product.ingredients_text || "No ingredient info"}
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Labels</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.labels_tags && product.labels_tags.length > 0 ? (
                        product.labels_tags.map((l, i) => (
                          <Badge key={i} variant="outline">{l.replace("en:", "")}</Badge>
                        ))
                      ) : (
                        <Badge variant="outline">No labels</Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Nutrition Facts</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Calories:</span>
                        <span className="font-medium ml-2">{product.nutriments?.energy_kcal || "?"}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Total Fat:</span>
                        <span className="font-medium ml-2">{product.nutriments?.fat || "?"}g</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Protein:</span>
                        <span className="font-medium ml-2">{product.nutriments?.proteins || "?"}g</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Carbs:</span>
                        <span className="font-medium ml-2">{product.nutriments?.carbohydrates || "?"}g</span>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-6" />
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500">No product found for this barcode.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
