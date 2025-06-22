"use client";

import {
  ClipboardList,
  GraduationCap,
  Users,
  Calendar,
  BarChart,
  MessageCircle,
} from "lucide-react";
import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";

const coreFeatures = [
    {
        icon: GraduationCap,
        title: "Studentenbeheer",
        description: "Beheer studentenprofielen, cijfers en aanwezigheid op één centrale plek.",
        category: "Beheer",
    },
    {
        icon: Users,
        title: "Personeelsbeheer",
        description: "Organiseer personeelsgegevens, roosters en communicatie moeiteloos.",
        category: "Beheer",
    },
    {
        icon: ClipboardList,
        title: "Lesplanning",
        description: "Maak en deel lesplannen, opdrachten en curriculummateriaal.",
        category: "Academisch",
    },
    {
        icon: Calendar,
        title: "Roosterbeheer",
        description: "Creëer en beheer dynamische schoolroosters voor alle klassen.",
        category: "Planning",
    },
    {
        icon: BarChart,
        title: "Cijferadministratie",
        description: "Voer cijfers in, bereken gemiddelden en genereer rapporten.",
        category: "Academisch",
    },
    {
        icon: MessageCircle,
        title: "Communicatie",
        description: "Communiceer met studenten, ouders en personeel via aankondigingen en berichten.",
        category: "Communicatie",
    },
];

const advancedFeatures = [
    {
        title: "Geautomatiseerde Aanwezigheidsregistratie",
        description: "Bespaar tijd door aanwezigheid automatisch te registreren met slimme tools.",
        category: "Beheer",
    },
    {
        title: "Analyse van Studentprestaties",
        description: "Krijg diepgaand inzicht in de prestaties van studenten met visuele rapporten.",
        category: "Academisch",
    },
    {
        title: "Ouderportaal",
        description: "Geef ouders toegang tot de voortgang, cijfers en aanwezigheid van hun kinderen.",
        category: "Communicatie",
    },
    {
        title: "Financieel Beheer",
        description: "Beheer schoolgeld, facturering en financiële rapportages.",
        category: "Financieel",
    },
    {
        title: "Integratie met E-learning",
        description: "Koppel met populaire e-learning platforms voor een naadloze ervaring.",
        category: "Technologie",
    },
    {
        title: "Resource Management",
        description: "Beheer schoolmiddelen zoals boeken, lokalen en apparatuur.",
        category: "Planning",
    },
];

const categoryColors: { [key: string]: string } = {
  Beheer: "from-blue-500 to-indigo-600",
  Academisch: "from-green-500 to-emerald-600",
  Planning: "from-yellow-500 to-amber-600",
  Communicatie: "from-pink-500 to-rose-600",
  Financieel: "from-purple-500 to-violet-600",
  Technologie: "from-gray-500 to-slate-600",
};

export default function FeaturesPage() {

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-4 py-1 mb-4 font-semibold text-sm">
              Alles-in-één Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent">
              Onze features
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Foresia biedt een complete suite aan tools om je onderwijsinstelling te moderniseren, van administratie tot communicatie.
            </p>
          </div>

          <div className="mb-16">
            {/* Filter and Search UI can go here */}
          </div>

          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Kernfeatures</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                De fundamentele eigenschappen die Foresia onderscheiden als educatief platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                >
                  <div className={`inline-block p-4 rounded-xl mb-6 bg-gradient-to-br ${categoryColors[feature.category]}`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="container mt-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Geavanceerde Mogelijkheden</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ontgrendel het volledige potentieel van je school met deze krachtige tools.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <span className={`mt-4 inline-block text-sm font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[feature.category]}`}>
                    {feature.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 