"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"
import ManageClients from "@/components/admin/manage-clients"

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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Bookings</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ManageClients />
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}
