"use client"

import type React from "react"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface BookingFormProps {
  onSubmit: (data: BookingFormData) => void
}

export interface BookingFormData {
  name: string
  email: string
  dates: DateRange
  message: string
}

export function BookingForm({ onSubmit }: BookingFormProps) {
  const defaultEndDate = new Date()
  defaultEndDate.setDate(defaultEndDate.getDate() + 7)

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    dates: {
      from: new Date(),
      to: defaultEndDate, // Default to a week-long booking
    },
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate that dates are selected
    if (!formData.dates.from || !formData.dates.to) {
      alert("Please select both start and end dates")
      return
    }
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Dates</Label>
        <DateRangePicker
          value={formData.dates}
          onChange={(dates) => setFormData({ ...formData, dates: dates || formData.dates })}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <Button type="submit">Submit Booking</Button>
    </form>
  )
}
