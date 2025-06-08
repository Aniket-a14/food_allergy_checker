import { Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-green-500 mr-2" />
            <span className="text-xl font-bold text-gray-900">AllergyGuard</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 font-medium transition-colors">
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 font-medium transition-colors">
              How It Works
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 font-medium transition-colors">
              My Allergens
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-500 font-medium transition-colors">
              Contact
            </a>
          </div>

          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6">Scan Now</Button>
        </div>
      </div>
    </nav>
  );
}
