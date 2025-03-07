import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const clients = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", bookings: 2, status: "Active" },
  { id: "2", name: "Bob Williams", email: "bob@example.com", bookings: 1, status: "Inactive" },
]

export function ManageClients() {
  const handleEdit = (id: string) => {
    console.log("Editing client:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting client:", id)
  }

  // Ensure all functions and variables used within the ManageClients component are correctly defined and imported
  if (!clients || !handleEdit || !handleDelete) {
    console.error("Required functions or variables are missing in ManageClients component")
    return null
  }

  // Verify that there are no issues with the data being passed to the ManageClients component
  if (!Array.isArray(clients)) {
    console.error("Clients data is not an array")
    return null
  }

  return (
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
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.bookings}</TableCell>
                <TableCell>{client.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(client.id)} className="mr-2">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(client.id)} variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default ManageClients
export { clients }
