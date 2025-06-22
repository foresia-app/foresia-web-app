import { Navbar } from "@/components/landing-page";
import { Footer } from "@/components/landing-page/footer";

export default function PrivacyPage() {
  return (
    <div className="bg-[#f0faf6] min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">Privacybeleid</h1>
        <p className="text-gray-700 mb-6">
          Bij Foresia nemen we uw privacy serieus. In dit privacybeleid leggen we uit hoe we uw
          persoonlijke gegevens verzamelen, gebruiken, bewaren en beschermen.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Gegevensverzameling</h2>
        <p className="text-gray-700 mb-4">
          We verzamelen alleen de gegevens die nodig zijn om onze diensten te leveren en te verbeteren.
          Dit kan informatie omvatten zoals naam, e-mailadres en gebruikersactiviteiten.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Gegevensgebruik</h2>
        <p className="text-gray-700 mb-4">
          Uw gegevens worden gebruikt om uw account te beheren, ondersteuning te bieden en
          persoonlijke ervaringen te optimaliseren.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">
          Voor vragen over ons privacybeleid kunt u contact opnemen via
          <a href="mailto:privacy@foresia.app" className="text-green-600 hover:underline">
            privacy@foresia.app
          </a>.
        </p>
      </div>
      <Footer />
    </div>
  );
} 