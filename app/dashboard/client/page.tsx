"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

// Use the correct export name for dynamic rendering

// Use dynamic import
const ClientDashboard = dynamic(() => import("@/components/client-dashboard"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading dashboard...</div>
})

export default function ClientDashboardPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <ClientDashboard />
    </DashboardLayout>
  )
}