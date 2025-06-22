import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Lock, ArrowRightLeft, Eye } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-green-600" />,
    title: "Keuzevrijheid",
    description:
      "Het platform sluit probleemloos aan op de digitale applicaties en leermiddelen van uiteenlopende partners.",
  },
  {
    icon: <ArrowRightLeft className="w-8 h-8 text-green-600" />,
    title: "Integratie",
    description:
      "Bespaar tijd en geld door uw schoolsystemen veilig en snel te koppelen via Foresia.",
    },
    {
    icon: <Eye className="w-8 h-8 text-green-600" />,
    title: "Inzicht",
    description:
      "Houd de vinger aan de pols bij leerlingen en speel tijdig in op verandering met heldere dashboards.",
    },
    {
    icon: <Lock className="w-8 h-8 text-green-600" />,
    title: "Toekomstvast",
    description:
      "Onderwijs verandert voortdurend. Foresia beweegt dynamisch mee met de eisen van morgen.",
  },
];

export const Features = () => {
  return (
    <section className="py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">
          Integraal Platform voor Persoonlijke Talentontwikkeling
          </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          Alles wat u nodig heeft om elke leerling goed uit te rusten voor de
          toekomst. Op één integraal platform dat al uw leer- en werkprocessen
          ondersteunt.
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <Card key={i} className="bg-white text-left p-6">
              <CardHeader>
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}; 