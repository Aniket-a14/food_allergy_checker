import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ScannerInterface from "@/components/scanner-interface"
import ResultsDisplay from "@/components/results-display"
import UserAllergens from "@/components/user-allergens"
import ScanHistory from "@/components/scan-history"
import Footer from "@/components/footer"

export default function AllergyCheckerApp() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ScannerInterface />
      <ResultsDisplay />
      <UserAllergens />
      <ScanHistory />
      <Footer />
    </div>
  );
}
