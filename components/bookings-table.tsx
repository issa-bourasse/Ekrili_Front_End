"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Booking {
  id: string
  property: string
  client: string
  dates: string
  status: string
}

interface BookingsTableProps {
  bookings: Booking[]
  onApprove?: (id: string) => void
  onReject?: (id: string) => void
  onCancel?: (id: string) => void
}

export function BookingsTable({ bookings, onApprove, onReject, onCancel }: BookingsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Property</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Dates</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell>{booking.property}</TableCell>
            <TableCell>{booking.client}</TableCell>
            <TableCell>{booking.dates}</TableCell>
            <TableCell>{booking.status}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                {onApprove && booking.status === "Pending" && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onApprove(booking.id)}
                  >
                    Approve
                  </Button>
                )}
                {onReject && booking.status === "Pending" && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onReject(booking.id)}
                  >
                    Reject
                  </Button>
                )}
                {onCancel && booking.status === "Confirmed" && (
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onCancel(booking.id)}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
