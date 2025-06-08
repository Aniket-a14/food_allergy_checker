"use client";

import { useEffect, useState } from "react"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UserAllergens() {
  const [allergens, setAllergens] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("user_allergens");
    if (saved) setAllergens(JSON.parse(saved));
  }, []);

  const saveAllergens = () => {
    const arr = input.split(",").map(a => a.trim()).filter(Boolean);
    setAllergens(arr);
    localStorage.setItem("user_allergens", JSON.stringify(arr));
    setInput("");
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Allergens</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-green-500" />
              Personal Allergen Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add your allergens (comma-separated)
                </label>
                <Input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="e.g., peanuts, dairy, gluten, shellfish..."
                  className="border-2 border-gray-200 focus:border-green-500"
                />
              </div>
              <Button onClick={saveAllergens} className="w-full bg-green-500 hover:bg-green-600">Save Allergens</Button>
              <div className="pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Current Allergens:</h4>
                <div className="flex flex-wrap gap-2">
                  {allergens.length === 0 ? (
                    <span className="text-gray-500">No allergens set.</span>
                  ) : (
                    allergens.map((a, i) => (
                      <Badge key={i} className="bg-red-100 text-red-800 hover:bg-red-100">{a}</Badge>
                    ))
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
