import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const staffMembers = [
  { id: "1", name: "Alice Johnson", role: "Property Manager", status: "Active" },
  { id: "2", name: "Bob Smith", role: "Maintenance", status: "Active" },
]

export default function StaffManagement() {
  const handleEdit = (id: string) => {
    console.log("Editing staff member:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting staff member:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffMembers.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell>{staff.name}</TableCell>
                <TableCell>{staff.role}</TableCell>
                <TableCell>{staff.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(staff.id)} className="mr-2">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(staff.id)} variant="destructive">
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

