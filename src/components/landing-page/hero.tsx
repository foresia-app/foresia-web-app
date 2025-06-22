import { Button } from "@/components/ui/button";
import { Star, Lightbulb, Download, Github } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";

const NumberedAvatar = ({ number }: { number: number }) => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-200 text-green-800 font-bold text-sm ring-2 ring-white">
    {number}
  </div>
);

export const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold py-1 px-3 rounded-full mb-4">
            <Lightbulb className="w-4 h-4 mr-2" />
          De nieuwe standaard in schoolbeheer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
            <span className="text-gray-800">De toekomst van schoolbeheer</span>
            <br />
            <span className="text-green-600">Samen Groeien in Academisch Succes</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8">
          <b>De</b> toekomst van schoolplanning en leerlinginformatiesystemen.  
          <br />
          <b>Een</b> platform dat meegroeit met jouw onderwijsgemeenschap.  
          <br />
          <b>Plan</b> slimmer, leer beter, slaag samen.
          <br />
          </p>
          <div className="flex space-x-4 mb-8">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20"
            >
              <Download className="mr-2 h-5 w-5" />
              Test vandaag het schoolbeheer van morgen
            </Button>
            <Button size="lg" variant="outline" className="bg-white">
              <Github className="mr-2 h-5 w-5" />
              <a href="https://github.com/foresia-app" target="_blank" rel="noopener noreferrer">
              Bekijk op GitHub
              </a>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <NumberedAvatar number={1} />
              <NumberedAvatar number={2} />
              <NumberedAvatar number={3} />
              <NumberedAvatar number={4} />
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-gray-800">2,500+</span>{" "}
                Leerlingen &{" "}
                <span className="font-bold text-gray-800">4.9/5</span>{" "}
                Beoordeling
              </p>
            </div>
          </div>
        </div>
        <div>
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}; 