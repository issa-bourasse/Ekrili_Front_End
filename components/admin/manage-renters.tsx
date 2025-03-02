'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const renters = [
  { id: "1", name: "John Doe", email: "john@example.com", properties: 3, status: "Active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", properties: 2, status: "Pending" },
]

export default function ManageRenters() {
  const handleEdit = (id: string) => {
    console.log("Editing renter:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting renter:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Renters</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Properties</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renters.map((renter) => (
              <TableRow key={renter.id}>
                <TableCell>{renter.name}</TableCell>
                <TableCell>{renter.email}</TableCell>
                <TableCell>{renter.properties}</TableCell>
                <TableCell>{renter.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(renter.id)} className="mr-2">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(renter.id)} variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

