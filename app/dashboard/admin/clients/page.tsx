"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import ManageClients from "@/components/admin/manage-clients"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AdminClientsPage() {
  const handleEdit = (id: string) => {
    console.log("Editing client:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting client:", id)
  }

  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <Card>
        <CardHeader>
          <CardTitle>Manage Clients</CardTitle>
        </CardHeader>
        <CardContent>
          <ManageClients />
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
