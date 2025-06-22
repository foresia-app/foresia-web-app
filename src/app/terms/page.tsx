import { Navbar } from "@/components/landing-page";
import { Footer } from "@/components/landing-page/footer";

export default function TermsPage() {
  return (
    <div className="bg-[#f0faf6] min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">Gebruiksvoorwaarden</h1>
        <p className="text-gray-700 mb-6">
          Welkom bij Foresia. Door onze diensten te gebruiken, gaat u akkoord met de volgende
          voorwaarden. Lees deze zorgvuldig door.
        </p>
        <h2 className="text-2xl font-semibold mb-2">1. Acceptatie van Voorwaarden</h2>
        <p className="text-gray-700 mb-4">
          Door toegang te krijgen tot en gebruik te maken van Foresia, stemt u in met deze
          voorwaarden en met ons privacybeleid.
        </p>
        <h2 className="text-2xl font-semibold mb-2">2. Gebruik van de Diensten</h2>
        <p className="text-gray-700 mb-4">
          U mag de diensten alleen gebruiken in overeenstemming met de wet en deze voorwaarden.
        </p>
        <h2 className="text-2xl font-semibold mb-2">3. Aansprakelijkheidsbeperking</h2>
        <p className="text-gray-700">
          Foresia is niet aansprakelijk voor indirecte schade of verlies van gegevens als gevolg
          van gebruik van onze diensten.
        </p>
      </div>
      <Footer />
    </div>
  );
} 