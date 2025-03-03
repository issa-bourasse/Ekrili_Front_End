"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

const UsersTable = dynamic(() => import("@/components/users-table").then(mod => mod.UsersTable), {
  loading: () => <div className="flex items-center justify-center h-screen">Loading users...</div>
})

export default function AdminUsersPage() {
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Renter", status: "Active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Client", status: "Active" },
  ]

  const handleUserEdit = (id: string) => {
    // Handle user edit
  }

  const handleUserDelete = (id: string) => {
    // Handle user delete
  }

  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <UsersTable users={users} onEdit={handleUserEdit} onDelete={handleUserDelete} />
    </DashboardLayout>
  )
}
