"use client"

import dynamic from 'next/dynamic'
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"
import Loading from "@/components/loading"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Use dynamic import
const ManageClients = dynamic(
  () => import("@/components/admin/manage-clients").then(mod => mod.default),
  {
    loading: () => <Loading />,
    ssr: false
  }
)

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
