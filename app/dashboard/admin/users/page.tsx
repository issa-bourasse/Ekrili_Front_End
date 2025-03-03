"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Use dynamic import
const UsersTable = dynamic(() => import("@/components/users-table"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading users...</div>
})

export const dynamicConfig = "force-dynamic"

export default function AdminUsersPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <UsersTable />
    </DashboardLayout>
  )
}
