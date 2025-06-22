"use client"

import { createContext, useContext, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import type { Role } from "@/lib/types"

interface RoleContextType {
  role: Role
  setRole: (role: Role) => void
}

const RoleContext = createContext<RoleContextType | undefined>(undefined)

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [role, setRole] = useState<Role>("student")

  return (
    <div className="[--header-height:calc(--spacing(14))] min-h-screen">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar role={role} setRole={setRole} />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-6 p-6">
              <RoleContext.Provider value={{ role, setRole }}>
                {children}
              </RoleContext.Provider>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
} 