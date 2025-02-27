"use client"

import { useState } from "react"
import { BarChart, Home, Calendar, MessageSquare } from "lucide-react"
import DashboardLayout from "./dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PropertiesTable } from "./properties-table"
import { BookingsTable } from "./bookings-table"
import { PropertyForm } from "./property-form"
import { Notification } from "./notification"
import { renterSidebarItems } from "@/lib/sidebar-items"

export default function RenterDashboard() {
  const [showNotification, setShowNotification] = useState(false)

  // Mock data
  const properties = [
    { id: "1", name: "Cozy Apartment", location: "New York", price: 100, status: "Available" },
    { id: "2", name: "Beach House", location: "Miami", price: 200, status: "Booked" },
  ]

  const bookings = [
    { id: "1", property: "Cozy Apartment", client: "John Doe", dates: "Aug 1-5, 2023", status: "Pending" },
    { id: "2", property: "Beach House", client: "Jane Smith", dates: "Aug 10-15, 2023", status: "Confirmed" },
  ]

  const handlePropertyEdit = (id: string) => {
    // Handle property edit
  }

  const handlePropertyDelete = (id: string) => {
    // Handle property delete
  }

  const handleBookingApprove = (id: string) => {
    // Handle booking approve
    setShowNotification(true)
  }

  const handleBookingReject = (id: string) => {
    // Handle booking reject
  }

  return (
    <DashboardLayout sidebarItems={renterSidebarItems} userRole="Renter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+5 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Properties Listed</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">2 pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 unread inquiries</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>My Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <PropertiesTable properties={properties} onEdit={handlePropertyEdit} onDelete={handlePropertyDelete} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingsTable bookings={bookings} onApprove={handleBookingApprove} onReject={handleBookingReject} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add New Property</CardTitle>
          </CardHeader>
          <CardContent>
            <PropertyForm />
          </CardContent>
        </Card>
      </div>

      {showNotification && (
        <Notification
          message="Booking approved successfully!"
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
    </DashboardLayout>
  )
}

