"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PropertiesTable } from "./properties-table"
import { BookingsTable } from "./bookings-table"

export default function RenterDashboard() {
  // Mock data
  const properties = [
    { id: "1", title: "Luxury Villa", name: "Luxury Villa", location: "Bali", price: 200, status: "Available" },
    { id: "2", title: "Beach House", name: "Beach House", location: "Miami", price: 150, status: "Booked" },
  ]

  const bookings = [
    { id: "1", property: "Luxury Villa", client: "John Doe", dates: "Mar 1-5, 2024", status: "Confirmed" },
    { id: "2", property: "Beach House", client: "Jane Smith", dates: "Mar 10-15, 2024", status: "Pending" },
  ]

  const handlePropertyEdit = (id: string) => {
    console.log("Edit property:", id)
  }

  const handlePropertyDelete = (id: string) => {
    console.log("Delete property:", id)
  }

  const handleBookingApprove = (id: string) => {
    console.log("Approve booking:", id)
  }

  const handleBookingReject = (id: string) => {
    console.log("Reject booking:", id)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Renter Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{properties.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bookings.filter(b => b.status === "Confirmed").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bookings.filter(b => b.status === "Pending").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <PropertiesTable
              properties={properties}
              onEdit={handlePropertyEdit}
              onDelete={handlePropertyDelete}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingsTable
              bookings={bookings}
              onApprove={handleBookingApprove}
              onReject={handleBookingReject}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
