"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

// Use dynamic import
const ClientDashboard = dynamic(() => import("@/components/client-dashboard"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading dashboard...</div>
})

export const dynamicConfig = "force-dynamic"

export default function ClientDashboardPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <ClientDashboard />
    </DashboardLayout>
  )
}
