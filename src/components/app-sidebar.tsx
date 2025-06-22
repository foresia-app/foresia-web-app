"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  LifeBuoy,
  MessageSquare,
  PieChart,
  Settings2,
  Users,
  FileText,
  Bell,
  CalendarDays,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Role } from "@/lib/types"

const data = {
  user: {
    name: "Alex van der Berg",
    email: "alex@school.nl",
    avatar: "/avatars/alex.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
      items: [
        {
          title: "Overzicht",
          url: "/dashboard",
        },
        {
          title: "Recente Activiteit",
          url: "/dashboard/activity",
        },
        {
          title: "Meldingen",
          url: "/dashboard/notifications",
        },
      ],
    },
    {
      title: "Agenda",
      url: "/dashboard/agenda",
      icon: CalendarDays,
      items: [
        {
          title: "Vandaag",
          url: "/dashboard/agenda",
        },
        {
          title: "Deze Week",
          url: "/dashboard/agenda/week",
        },
        {
          title: "Deze Maand",
          url: "/dashboard/agenda/month",
        },
      ],
    },
    {
      title: "Leerlingen",
      url: "/students",
      icon: GraduationCap,
      items: [
        {
          title: "Alle Leerlingen",
          url: "/students",
        },
        {
          title: "Nieuwe Leerling",
          url: "/students/new",
        },
        {
          title: "Klassen",
          url: "/students/classes",
        },
      ],
    },
    {
      title: "Docenten",
      url: "/teachers",
      icon: Users,
      items: [
        {
          title: "Alle Docenten",
          url: "/teachers",
        },
        {
          title: "Nieuwe Docent",
          url: "/teachers/new",
        },
        {
          title: "Roosters",
          url: "/teachers/schedules",
        },
      ],
    },
    {
      title: "Vakken",
      url: "/subjects",
      icon: BookOpen,
      items: [
        {
          title: "Alle Vakken",
          url: "/subjects",
        },
        {
          title: "Nieuw Vak",
          url: "/subjects/new",
        },
        {
          title: "Curriculum",
          url: "/subjects/curriculum",
        },
      ],
    },
    {
      title: "Cijfers",
      url: "/marks",
      icon: FileText,
      items: [
        {
          title: "Prestaties",
          url: "/reports/performance",
        },
        {
          title: "Aanwezigheid",
          url: "/reports/attendance",
        },
        {
          title: "Financieel",
          url: "/reports/financial",
        },
      ],
    },
    {
      title: "Instellingen",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "Algemeen",
          url: "/settings/general",
        },
        {
          title: "Gebruikers",
          url: "/settings/users",
        },
        {
          title: "School Info",
          url: "/settings/school",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Ondersteuning",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: MessageSquare,
    },
  ],
  projects: [
    {
      name: "Schooljaar 2024-2025",
      url: "/academic-year/2024-2025",
      icon: Calendar,
    },
    {
      name: "Prestatie Analyse",
      url: "/analytics/performance",
      icon: PieChart,
    },
    {
      name: "Communicatie",
      url: "/communication",
      icon: Bell,
    },
  ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role: Role
  setRole: (role: Role) => void
}

export function AppSidebar({ role, setRole, ...props }: AppSidebarProps) {
  const navMain = data.navMain.filter(item => {
    if (role === 'student') {
      return ['Dashboard', 'Agenda', 'Cijfers'].includes(item.title);
    }
    if (role === 'teacher') {
      return ['Dashboard', 'Agenda', 'Leerlingen', 'Docenten', 'Cijfers'].includes(item.title);
    }
    return true; // admin sees all
  });

  return (
    <Sidebar
      className="top-[var(--header-height)] h-[calc(100svh-var(--header-height))] flex flex-col"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image
                  src="/logo.png"
                  width={24}
                  height={24}
                  alt="Foresia"
                  className="rounded-lg"
                />
                <span className="text-xl">Foresia</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex-1">
        <NavMain items={navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-sidebar-foreground">Wissel Rol</h3>
            <p className="text-xs text-sidebar-foreground/70">Selecteer een rol om de UI te testen.</p>
          </div>
          <Select value={role} onValueChange={(value) => setRole(value as Role)}>
            <SelectTrigger className="bg-sidebar-accent hover:bg-sidebar-accent/90 border-sidebar-border text-sidebar-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
              <SelectValue placeholder="Selecteer een rol" />
            </SelectTrigger>
            <SelectContent className="bg-card border-sidebar-border text-card-foreground">
              <SelectItem value="student">Leerling</SelectItem>
              <SelectItem value="teacher">Docent</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="pt-4">
          <NavUser user={data.user} />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
