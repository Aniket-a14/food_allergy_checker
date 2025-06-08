# AllergyGuard

AllergyGuard is a Next.js web app that helps you scan, search, and check food products for allergens using the [OpenFoodFacts API](https://world.openfoodfacts.org/). Instantly detect allergens by scanning barcodes, uploading images, or using voice input. Your personal allergen profile and scan history are saved locally for a safer eating experience.

## Features

- **Barcode Scanning:** Use your device camera to scan product barcodes (QuaggaJS).
- **Image Upload:** Upload product images for barcode or text (OCR) extraction (Tesseract.js).
- **Voice Input:** Search for products by speaking their name (Web Speech API).
- **Manual Entry:** Enter barcodes manually.
- **Allergen Profile:** Save your allergens and see them highlighted in product results.
- **Scan History:** View your last 5 scanned products.
- **OpenFoodFacts Integration:** Product data and allergen info are fetched live from OpenFoodFacts.

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Scan:** Use the "Live Scan" or "Barcode Scan" button to scan a product.
- **Upload:** Click "Upload Image" to upload a product photo.
- **Voice:** Click "Voice Input" and speak the product name.
- **Allergens:** Set your allergens in the "My Allergens" section.
- **History:** Your last 5 scans appear in the "Scan History" section.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [QuaggaJS](https://serratus.github.io/quaggaJS/) (barcode scanning)
- [Tesseract.js](https://tesseract.projectnaptha.com/) (OCR)
- [OpenFoodFacts API](https://world.openfoodfacts.org/data)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [Lucide Icons](https://lucide.dev/)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenFoodFacts API Docs](https://world.openfoodfacts.org/data)
- [QuaggaJS Docs](https://serratus.github.io/quaggaJS/)
- [Tesseract.js Docs](https://tesseract.projectnaptha.com/)

## License

This project is for educational/demo purposes. Product data is provided by OpenFoodFacts.

---
