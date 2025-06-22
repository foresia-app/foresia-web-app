import { Navbar } from "@/components/landing-page";
import { Footer } from "@/components/landing-page/footer";

export default function CookiesPage() {
  return (
    <div className="bg-[#f0faf6] min-h-screen">
      <Navbar />
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">Cookiebeleid</h1>
        <p className="text-gray-700 mb-6">
          Foresia maakt gebruik van cookies om uw ervaring te verbeteren. In dit cookiebeleid leggen we
          uit welke cookies we gebruiken en hoe u ze kunt beheren.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Wat zijn cookies?</h2>
        <p className="text-gray-700 mb-4">
          Cookies zijn kleine tekstbestanden die worden opgeslagen op uw apparaat wanneer u een website
          bezoekt.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Type cookies</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Essentiële cookies: noodzakelijk voor de basisfeatures van de site.</li>
          <li>Analytische cookies: helpen bij het begrijpen hoe gebruikers de site gebruiken.</li>
          <li>Marketingcookies: worden gebruikt om gerichte advertenties weer te geven.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Cookiebeheer</h2>
        <p className="text-gray-700">
          U kunt cookies beheren via uw browserinstellingen. Raadpleeg de helpfunctie van uw browser
          voor meer informatie.
        </p>
      </div>
      <Footer />
    </div>
  );
} 