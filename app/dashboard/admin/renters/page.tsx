'use client'

import ManageRenters from "@/components/admin/manage-renters"
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

export default function AdminRentersPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <ManageRenters />
    </DashboardLayout>
  )
}

