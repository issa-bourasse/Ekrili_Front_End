"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

// Use the correct export name for dynamic rendering

// Use dynamic import
const ManageProperties = dynamic(
  () => import("@/components/admin/manage-properties").then(mod => mod.default),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function AdminPropertiesPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <ManageProperties />
    </DashboardLayout>
  )
}