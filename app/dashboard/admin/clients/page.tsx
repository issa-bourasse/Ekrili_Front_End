"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"

const ManageClients = dynamic(
  () => import("@/components/admin/manage-clients").then(mod => mod.default),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

export default function AdminClientsPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <ManageClients />
    </DashboardLayout>
  )
}
