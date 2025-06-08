import { Shield, Facebook, Twitter, Instagram, Moon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-green-500 mr-2" />
              <span className="text-xl font-bold text-gray-900">AllergyGuard</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Your trusted companion for safe eating. Scan, detect, and stay protected from allergens in food products.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-500 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <Facebook
                className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter
                className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram
                className="h-6 w-6 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Dark Mode</span>
              <Moon
                className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2024 AllergyGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
