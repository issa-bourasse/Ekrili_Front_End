import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Property {
  id: string
  name: string
  location: string
  price: number
  status: string
}

interface PropertiesTableProps {
  properties: Property[]
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function PropertiesTable({ properties, onEdit, onDelete }: PropertiesTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {properties.map((property) => (
          <TableRow key={property.id}>
            <TableCell>{property.name}</TableCell>
            <TableCell>{property.location}</TableCell>
            <TableCell>${property.price}/night</TableCell>
            <TableCell>{property.status}</TableCell>
            <TableCell>
              <Button onClick={() => onEdit(property.id)} className="mr-2">
                Edit
              </Button>
              <Button onClick={() => onDelete(property.id)} variant="destructive">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

