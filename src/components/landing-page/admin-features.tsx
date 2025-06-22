import {
    Users,
    Settings,
    LayoutDashboard
  } from "lucide-react";
  
  const adminFeaturesList = [
    {
      icon: <Users size={32} />,
      title: "Gebruikersbeheer",
      description: "Maak en beheer accounts for leerlingen, ouders en docenten.",
    },
    {
      icon: <LayoutDashboard size={32} />,
      title: "Gegevensbeheer en Rapportage",
      description: "Genereer rapporten over prestaties van leerlingen, aanwezigheid en andere belangrijke statistieken.",
    },
    {
      icon: <Settings size={32} />,
      title: "Systeemconfiguratie",
      description: "Pas het platform aan de specifieke behoeften van de school aan.",
    },
  ];
  
  const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
      <div className="bg-card p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center h-12 w-12 bg-primary/10 text-primary rounded-full mb-4">
              {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
      </div>
  )
  
  export const AdminFeatures = () => {
    return (
      <section id="features" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Voor Schoolbeheerders
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                Krachtige tools om uw hele schoolgemeenschap te beheren.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
            {adminFeaturesList.map(feature => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
      </section>
    );
  }; 