"use client"

import dynamic from 'next/dynamic'
import { renterSidebarItems } from "@/lib/sidebar-items"
import DashboardLayout from "@/components/dashboard-layout"

// Renamed from 'dynamic' to 'dynamicConfig' to avoid conflict
export const dynamicConfig = "force-dynamic"

// Use dynamic import with ssr: false to prevent server-side rendering
const RenterDashboard = dynamic(() => import("@/components/renter-dashboard"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading dashboard...</div>
})

export default function RenterDashboardPage() {
  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <RenterDashboard />
    </DashboardLayout>
  )
}
