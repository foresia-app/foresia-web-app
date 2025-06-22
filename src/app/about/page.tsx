import { Navbar } from "@/components/landing-page";
import { Footer } from "@/components/landing-page/footer";
import { Mail, Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Over Foresia
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ontdek ons verhaal, onze missie en hoe we de toekomst van onderwijs vormgeven
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Onze Missie</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Een open, flexibel platform bieden dat scholen helpt zich aan te passen aan het veranderende onderwijs
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ons Team</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ontwikkelaars, onderwijskundigen en dromers die geloven in de kracht van de juiste tools
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Source</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Samenwerking met een wereldwijde gemeenschap van bijdragers voor continue verbetering
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-emerald-100 shadow-xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Wie zijn wij?</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Foresia is ontstaan uit een passie voor onderwijs en technologie. 
                  Wij zijn een team van ontwikkelaars, onderwijskundigen en dromers 
                  die geloven dat de juiste tools een wereld van verschil kunnen 
                  maken in het leven van leerlingen en docenten.
                </p>
                <p>
                  Onze missie is om een open, flexibel en gebruiksvriendelijk platform 
                  te bieden dat scholen helpt om zich aan te passen aan de steeds 
                  veranderende educatieve landschap.
                </p>
                <p>
                  We zijn toegewijd aan open-source. Dit betekent dat we samenwerken 
                  met een wereldwijde gemeenschap van bijdragers om Foresia voortdurend 
                  te verbeteren en te innoveren. Transparantie en samenwerking zitten 
                  in ons DNA.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Neem contact op</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Heeft u vragen of wilt u met ons samenwerken? We horen graag van u.
              </p>
              
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email ons op</p>
                    <a
                      href="mailto:contact@foresia.app"
                      className="text-emerald-600 font-semibold text-lg hover:text-emerald-700 transition-colors duration-200"
                    >
                      contact@foresia.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 