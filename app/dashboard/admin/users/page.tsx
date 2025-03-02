"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Use the correct export name for dynamic rendering
export const dynamic = "force-dynamic"

// Use dynamic import
const UsersTable = dynamic(() => import("@/components/users-table"), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading users...</div>
})

export default function AdminUsersPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <UsersTable />
    </DashboardLayout>
  )
}