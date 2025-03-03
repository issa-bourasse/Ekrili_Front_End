"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Use dynamic import
const UsersTable = dynamic(() => import("@/components/users-table").then(mod => mod.UsersTable), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading users...</div>
})

export default function AdminUsersPage() {
  const users: any[] = [] // Placeholder for users data
  const handleEdit = (id: string) => {
    // Handle edit action
  }
  const handleDelete = (id: string) => {
    // Handle delete action
  }

  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </DashboardLayout>
  )
}
