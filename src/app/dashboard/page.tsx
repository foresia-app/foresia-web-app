"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap, Users, BookOpen, TrendingUp, Bell } from "lucide-react"
import { StudentDashboard } from "@/components/dashboard/student-dashboard"
import { TeacherDashboard } from "@/components/dashboard/teacher-dashboard"
import { AdminDashboard } from "@/components/dashboard/admin-dashboard"
import { Button } from "@/components/ui/button"
import { useRole } from "./layout"
import type { Role } from "@/lib/types"

export const iframeHeight = "800px"

export const description = "Foresia school management dashboard with sidebar navigation."

const roleDashboards: Record<Role, React.ReactNode> = {
  student: <StudentDashboard />,
  teacher: <TeacherDashboard />,
  admin: <AdminDashboard />,
};

export default function Page() {
  const { role } = useRole()

  return (
    <>
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Welkom terug, Alex!</h1>
        <p className="text-muted-foreground">Huidige rol: <span className="font-semibold capitalize">{role}</span>. Hier is je dagelijkse overzicht van de school activiteiten.</p>
      </div>

      {roleDashboards[role]}

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Totaal Leerlingen</CardTitle>
            <GraduationCap className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% vanaf vorige maand
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Actieve Docenten</CardTitle>
            <Users className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">
              +3 nieuwe docenten
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vakken</CardTitle>
            <BookOpen className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Alle niveaus
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gemiddeld Cijfer</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.8</div>
            <p className="text-xs text-muted-foreground">
              +0.3 dit semester
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recente Activiteiten</CardTitle>
            <CardDescription>
              Laatste updates van je school
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-emerald-100 p-2 rounded-full">
                <GraduationCap className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Nieuwe leerling geregistreerd</p>
                <p className="text-xs text-muted-foreground">Emma de Jong is toegevoegd aan klas 3A</p>
              </div>
              <Badge variant="secondary">2 min geleden</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Ouderavond gepland</p>
                <p className="text-xs text-muted-foreground">15 november 2024, 19:00 - 21:00</p>
              </div>
              <Badge variant="secondary">1 uur geleden</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <BookOpen className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Nieuwe cursus beschikbaar</p>
                <p className="text-xs text-muted-foreground">Digitale Vaardigheden voor docenten</p>
              </div>
              <Badge variant="secondary">3 uur geleden</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Snelle Acties</CardTitle>
            <CardDescription>
              Veel gebruikte functies
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {role === "student" && (
               <Button variant="outline" className="w-full justify-start">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Mijn Cijfers Bekijken</span>
                </div>
              </Button>
            )}
            {(role === "teacher" || role === "admin") && (
              <Button variant="outline" className="w-full justify-start">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-medium">Nieuwe Leerling</span>
                </div>
              </Button>
            )}
            {(role === "teacher" || role === "admin") && (
              <Button variant="outline" className="w-full justify-start">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Docent Toevoegen</span>
                </div>
              </Button>
            )}
            {role === "admin" && (
            <Button variant="outline" className="w-full justify-start">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Rooster Maken</span>
              </div>
            </Button>
            )}
            {(role === "teacher" || role === "admin") && (
            <Button variant="outline" className="w-full justify-start">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">Melding Sturen</span>
              </div>
            </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
