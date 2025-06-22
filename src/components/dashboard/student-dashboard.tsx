import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle } from "lucide-react"

export function StudentDashboard() {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Mijn Cijfers</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Hier komen de recente cijfers van de leerling.</p>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aankomende Toetsen</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">in de komende 2 weken</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ingeleverd Huiswerk</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5/5</div>
            <p className="text-xs text-muted-foreground">alles op tijd ingeleverd</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 