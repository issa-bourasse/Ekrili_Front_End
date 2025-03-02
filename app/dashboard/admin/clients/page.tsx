'use client'
import ManageClients from "@/components/admin/manage-clients"
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

export default function AdminClientsPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <ManageClients />
    </DashboardLayout>
  )
}

