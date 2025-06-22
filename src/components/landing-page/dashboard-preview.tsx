import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Target, GraduationCap } from "lucide-react";
import Image from "next/image";

export const DashboardPreview = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-12 bg-green-300/20 rounded-full opacity-50 blur-3xl"></div>
      <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="bg-green-600 p-4">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-md p-1">
              <Image src="/logo.png" alt="Foresia Logo" width={24} height={24} />
            </div>
            <span className="font-bold text-lg text-white">Foresia.app</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-semibold">Welkom terug, Alex!</h2>
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-green-100 text-green-800"
            >
              Examenjaar
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Actieve Vakken
                </CardTitle>
                <Book className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Huiswerk
                </CardTitle>
                <Target className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gemiddelde</CardTitle>
                <GraduationCap className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.1</div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Rooster van Vandaag</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center border-l-4 border-blue-400">
                <div>
                  <p className="font-semibold">Wiskunde A</p>
                  <p className="text-sm text-gray-500">Lokaal 204 • 9:00</p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Volgende
                </Badge>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg flex justify-between items-center border-l-4 border-purple-400">
                <div>
                  <p className="font-semibold">Scheikunde Lab</p>
                  <p className="text-sm text-gray-500">Lab B • 11:00</p>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Later
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 