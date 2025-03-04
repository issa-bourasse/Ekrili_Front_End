"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

// Use dynamic import
const DashboardOverview = dynamic(
  () => import("@/components/admin/dashboard-overview").then(mod => mod.default),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function AdminDashboardPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <DashboardOverview />
    </DashboardLayout>
  )
}
