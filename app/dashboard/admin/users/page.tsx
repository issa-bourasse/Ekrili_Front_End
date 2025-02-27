import { UsersTable } from "@/components/users-table"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { sidebarItems } from "@/lib/admin-sidebar-items"

const users = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Renter", status: "Active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Client", status: "Active" },
]

export default function AdminUsersPage() {
  const handleEdit = (id: string) => {
    // Handle edit
  }

  const handleDelete = (id: string) => {
    // Handle delete
  }

  return (
    <DashboardLayout sidebarItems={sidebarItems} userRole="Admin">
      <Card>
        <CardHeader>
          <CardTitle>Manage Users</CardTitle>
        </CardHeader>
        <CardContent>
          <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

