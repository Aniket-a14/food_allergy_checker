import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UserAllergens() {
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
                  placeholder="e.g., peanuts, dairy, gluten, shellfish..."
                  className="border-2 border-gray-200 focus:border-green-500" />
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600">Save Allergens</Button>

              <div className="pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Current Allergens:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Peanuts</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Dairy</Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Shellfish</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
