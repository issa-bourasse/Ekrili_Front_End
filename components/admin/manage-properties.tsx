import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const properties = [
  { id: "1", name: "Cozy Apartment", location: "New York", owner: "John Doe", status: "Active" },
  { id: "2", name: "Beach House", location: "Miami", owner: "Jane Smith", status: "Pending" },
]

export default function ManageProperties() {
  const handleEdit = (id: string) => {
    console.log("Editing property:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting property:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.name}</TableCell>
                <TableCell>{property.location}</TableCell>
                <TableCell>{property.owner}</TableCell>
                <TableCell>{property.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(property.id)} className="mr-2">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(property.id)} variant="destructive">
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

