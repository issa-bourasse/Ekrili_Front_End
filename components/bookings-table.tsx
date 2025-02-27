import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Booking {
  id: string
  property: string
  client: string
  dates: string
  status: string
}

interface BookingsTableProps {
  bookings: Booking[]
  onApprove: (id: string) => void
  onReject: (id: string) => void
}

export function BookingsTable({ bookings, onApprove, onReject }: BookingsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Property</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Dates</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>{booking.property}</TableCell>
            <TableCell>{booking.client}</TableCell>
            <TableCell>{booking.dates}</TableCell>
            <TableCell>{booking.status}</TableCell>
            <TableCell>
              <Button onClick={() => onApprove(booking.id)} className="mr-2">
                Approve
              </Button>
              <Button onClick={() => onReject(booking.id)} variant="destructive">
                Reject
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

