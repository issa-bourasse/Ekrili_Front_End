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
