"use client"

import { useState } from "react"
import { Home, Calendar, MessageSquare, CreditCard } from "lucide-react"
import DashboardLayout from "./dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingsTable } from "./bookings-table"
import { BookingForm } from "./booking-form"
import { Notification } from "./notification"
import { clientSidebarItems } from "@/lib/sidebar-items"
import type { BookingFormData } from "./booking-form"

export default function ClientDashboard() {
  const [showNotification, setShowNotification] = useState(false)

  // Mock data
  const bookings = [
    { id: "1", property: "Cozy Apartment", client: "You", dates: "Aug 1-5, 2023", status: "Confirmed" },
    { id: "2", property: "Beach House", client: "You", dates: "Aug 10-15, 2023", status: "Pending" },
  ]

  const handleBookingCancel = (id: string) => {
    // Handle booking cancellation
    setShowNotification(true)
  }

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", data)
    // Here you would typically send this to your API
    setShowNotification(true)
  }

  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next booking in 5 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,345.00</div>
            <p className="text-xs text-muted-foreground">Across 5 bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Properties</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">In 3 different cities</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">2 from property owners</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingsTable bookings={bookings} onApprove={() => {}} onReject={handleBookingCancel} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Book a Property</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingForm onSubmit={handleBookingSubmit} />
          </CardContent>
        </Card>
      </div>

      {showNotification && (
        <Notification
          message="Your action has been completed successfully."
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
    </DashboardLayout>
  )
}