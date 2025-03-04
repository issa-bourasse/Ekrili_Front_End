"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingsTable } from "./bookings-table"
import { Notification } from "./notification"
import type { BookingFormData } from "./booking-form"

const MOCK_BOOKINGS = [
  { id: "1", property: "Cozy Apartment", client: "You", dates: "Aug 1-5, 2023", status: "Confirmed" },
  { id: "2", property: "Beach House", client: "You", dates: "Aug 10-15, 2023", status: "Pending" },
]

export default function ClientDashboard() {
  const [showNotification, setShowNotification] = useState(false)
  const [bookings] = useState(MOCK_BOOKINGS)

  const handleBookingCancel = (id: string) => {
    setShowNotification(true)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingsTable bookings={bookings} onCancel={handleBookingCancel} />
        </CardContent>
      </Card>
      {showNotification && (
        <Notification 
          type="success"
          message="Action completed successfully"
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  )
}