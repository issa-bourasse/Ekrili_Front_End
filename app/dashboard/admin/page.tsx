"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Use the correct export name for dynamic rendering
export const dynamic = "force-dynamic"

// Use dynamic import
const DashboardOverview = dynamic(() => import("@/components/admin/dashboard-overview"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading dashboard...</div>
})

export default function AdminDashboardPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <DashboardOverview />
    </DashboardLayout>
  )
}