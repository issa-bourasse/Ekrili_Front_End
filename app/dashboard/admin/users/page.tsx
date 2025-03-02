"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

// Renamed from 'dynamic' to 'dynamicConfig' to avoid conflict
export const dynamicConfig = "force-dynamic"

// Use dynamic import with ssr: false
const UsersTable = dynamic(() => import("@/components/users-table"), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-screen">Loading users...</div>
})

export default function AdminUsersPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Users Management</h1>
        <UsersTable 
          users={[
            { id: "1", name: "John Doe", email: "john@example.com", role: "Renter", status: "Active" },
            { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Owner", status: "Active" },
          ]} 
          onEdit={(id) => console.log("Edit user:", id)}
          onDelete={(id) => console.log("Delete user:", id)}
        />
      </div>
    </DashboardLayout>
  )
}
