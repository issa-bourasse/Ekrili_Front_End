"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Use dynamic import
const ManageProperties = dynamic(() => import("@/components/admin/manage-properties"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading properties...</div>
})

export const dynamicConfig = "force-dynamic"

export default function AdminPropertiesPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <ManageProperties />
    </DashboardLayout>
  )
}
