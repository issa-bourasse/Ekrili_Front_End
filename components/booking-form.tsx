"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingForm() {
  const [loading, setLoading] = useState(false)

  return (
    <form className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="property">Property</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a property" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="property1">Property 1</SelectItem>
            <SelectItem value="property2">Property 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Dates</Label>
        <DatePickerWithRange className="w-full" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Number of Guests</Label>
        <Input type="number" id="guests" min="1" />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Creating booking..." : "Create Booking"}
      </Button>
    </form>
  )
}
