import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Scan Before You Eat</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Protect yourself and your loved ones by instantly detecting allergens in food products. Simply scan, upload,
          or search to get comprehensive allergen information.
        </p>
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 text-lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
