"use client"

import { useState } from "react"
import { Users, Home, DollarSign, HelpCircle } from "lucide-react"
import DashboardLayout from "./dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UsersTable } from "./users-table"
import { PropertiesTable } from "./properties-table"
import { Notification } from "./notification"
import { adminSidebarItems } from "@/lib/sidebar-items"
import { BookingsTable } from "@/components/bookings-table"

export default function AdminDashboard() {
  const [showNotification, setShowNotification] = useState(false)

  // Mock data
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "Renter", status: "Active" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "Client", status: "Active" },
  ]

  const properties = [
    { id: "1", title: "Cozy Apartment", name: "Cozy Apartment", location: "New York", price: 100, status: "Approved" },
    { id: "2", title: "Beach House", name: "Beach House", location: "Miami", price: 200, status: "Pending" },
  ]

  const bookings = [
    {
      id: "1",
      property: "Luxury Apartment",
      client: "John Doe",
      dates: "Dec 1 - Dec 15, 2023",
      status: "Pending",
    },
    // Add more bookings as needed
  ]

  const handleUserEdit = (id: string) => {
    // Handle user edit
  }

  const handleUserDelete = (id: string) => {
    // Handle user delete
    setShowNotification(true)
  }

  const handlePropertyApprove = (id: string) => {
    // Handle property approve
  }

  const handlePropertyReject = (id: string) => {
    // Handle property reject
  }

  const handleApprove = (id: string) => {
    console.log("Approving booking:", id)
  }

  const handleReject = (id: string) => {
    console.log("Rejecting booking:", id)
  }

  const handleEdit = (id: string) => {
    console.log("Editing property:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting property:", id)
  }

  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,567.89</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">+7% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Listed Properties</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-muted-foreground">23 pending approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">5 high priority</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Manage Users</CardTitle>
          </CardHeader>
          <CardContent>
            <UsersTable users={users} onEdit={handleUserEdit} onDelete={handleUserDelete} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manage Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <PropertiesTable properties={properties} onEdit={handlePropertyApprove} onDelete={handlePropertyReject} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingsTable bookings={bookings} onApprove={handleApprove} onReject={handleReject} />
          </CardContent>
        </Card>
      </div>

      {showNotification && (
        <Notification message="User deleted successfully!" type="success" onClose={() => setShowNotification(false)} />
      )}
    </DashboardLayout>
  )
}
