import { BookingsTable } from "@/components/bookings-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const bookings = [
  { id: "1", property: "Cozy Apartment", client: "John Doe", dates: "Aug 1-5, 2023", status: "Pending" },
  { id: "2", property: "Beach House", client: "Jane Smith", dates: "Aug 10-15, 2023", status: "Confirmed" },
]

export default function Bookings() {
  const handleApprove = (id: string) => {
    // Handle approve
    console.log("Approving booking:", id)
  }

  const handleReject = (id: string) => {
    // Handle reject
    console.log("Rejecting booking:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <BookingsTable bookings={bookings} onApprove={handleApprove} onReject={handleReject} />
      </CardContent>
    </Card>
  )
}

