"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

const AdminSupport = dynamic(
  () => import("@/components/admin/support-dashboard"),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function AdminSupportPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <AdminSupport />
    </DashboardLayout>
  )
}

