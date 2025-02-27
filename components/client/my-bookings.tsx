import { BookingsTable } from "@/components/bookings-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const bookings = [
  { id: "1", property: "Cozy Apartment", client: "You", dates: "Aug 1-5, 2023", status: "Confirmed" },
  { id: "2", property: "Beach House", client: "You", dates: "Aug 10-15, 2023", status: "Pending" },
]

export default function MyBookings() {
  const handleCancel = (id: string) => {
    console.log("Cancelling booking:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <BookingsTable bookings={bookings} onApprove={() => {}} onReject={handleCancel} />
      </CardContent>
    </Card>
  )
}

