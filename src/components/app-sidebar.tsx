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
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
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
      title: "Rapporten",
      url: "/reports",
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image
                  src="/logo.png"
                  alt="Foresia Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-emerald-600">Foresia</span>
                  <span className="truncate text-xs">Schoolbeheer</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
