"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

export function PropertyForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-2xl">
      <div className="space-y-2">
        <Label htmlFor="title">Property Title</Label>
        <Input id="title" placeholder="Enter property title" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Describe your property" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Enter property address" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="price">Price per Night</Label>
        <Input type="number" id="price" min="0" step="0.01" required />
      </div>

      <div className="space-y-2">
        <Label>Availability</Label>
        <DatePickerWithRange className="w-full" />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Creating property..." : "Create Property"}
      </Button>
    </form>
  )
}
