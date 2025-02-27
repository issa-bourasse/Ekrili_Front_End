"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"

export default function PropertyForm() {
  const [availability, setAvailability] = useState({ from: new Date(), to: new Date() })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" required />
      </div>
      <div>
        <Label htmlFor="price">Price per Night</Label>
        <Input type="number" id="price" min="0" step="0.01" required />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" required />
      </div>
      <div>
        <Label htmlFor="images">Images</Label>
        <Input id="images" type="file" multiple accept="image/*" />
      </div>
      <div>
        <Label>Availability</Label>
        <DatePickerWithRange selected={availability} onSelect={setAvailability} />
      </div>
      <Button type="submit">Add Property</Button>
    </form>
  )
}

