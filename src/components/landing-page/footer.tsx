import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[#f0faf6] text-gray-700">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-green-600 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Foresia.app</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Moderne schoolbeheersoftware die onderwijs en administratie samenbrengt. 
            Eenvoudig, veilig en efficiënt.
          </p>
          <div className="flex space-x-3">
            <a
              href="https://github.com/foresia-app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://demo.foresia.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
            Product
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/features" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Features
              </Link>
            </li>
            <li>
              <a
                href="https://demo.foresia.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm flex items-center space-x-1"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </li>
            <li>
              <Link href="/pricing" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Prijzen
              </Link>
            </li>
            <li>
              <Link href="/integrations" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Integraties
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
            Ondersteuning
          </h3>
          <ul className="space-y-3">
            <li>
              <Link href="/docs" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Documentatie
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Helpcentrum
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors text-sm">
                Over Ons
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2 text-gray-600 text-sm">
              <Mail className="h-4 w-4 text-green-600" />
              <span>info@foresia.app</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 text-sm">
              <Phone className="h-4 w-4 text-green-600" />
              <span>+31 20 123 4567</span>
            </li>
            <li className="flex items-start space-x-2 text-gray-600 text-sm">
              <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
              <span>Amsterdam, Nederland</span>
            </li>
          </ul>
          
          <div className="mt-6">
            <Link
              href="/login"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Inloggen
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Foresia.app. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
              Voorwaarden
            </Link>
            <Link href="/cookies" className="text-gray-600 hover:text-green-600 text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
); 