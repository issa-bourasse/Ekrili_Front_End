"use client"

import ClientDashboard from "@/components/client-dashboard"
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

export const dynamic = 'force-dynamic'

export default async function Page() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <ClientDashboard />
    </DashboardLayout>
  )
}
