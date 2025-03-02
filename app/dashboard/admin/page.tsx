'use client'

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Renamed from 'dynamic' to 'dynamicConfig' to avoid conflict
export const dynamicConfig = "force-dynamic"

// Use dynamic import with ssr: false
const DashboardOverview = dynamic(() => import("@/components/admin/dashboard-overview"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading dashboard...</div>
})

export default function AdminDashboardPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <DashboardOverview />
    </DashboardLayout>
  )
}

