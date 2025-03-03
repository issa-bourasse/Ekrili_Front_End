"use client"

import { PropertiesTable } from "@/components/properties-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const properties = [
  { id: "1", name: "Cozy Apartment", location: "New York", price: 100, status: "Available" },
  { id: "2", name: "Beach House", location: "Miami", price: 200, status: "Booked" },
]

export default function MyProperties() {
  const handleEdit = (id: string) => {
    // Handle edit
    console.log("Editing property:", id)
  }

  const handleDelete = (id: string) => {
    // Handle delete
    console.log("Deleting property:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <PropertiesTable properties={properties} onEdit={handleEdit} onDelete={handleDelete} />
      </CardContent>
    </Card>
  )
}