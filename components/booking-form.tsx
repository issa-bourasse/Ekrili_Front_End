"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingForm() {
  const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="property">Property</Label>
        <Select>
          <SelectTrigger id="property">
            <SelectValue placeholder="Select a property" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="property1">Property 1</SelectItem>
            <SelectItem value="property2">Property 2</SelectItem>
            <SelectItem value="property3">Property 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Date Range</Label>
        <DatePickerWithRange selected={dateRange} onSelect={setDateRange} />
      </div>
      <div>
        <Label htmlFor="guests">Number of Guests</Label>
        <Input type="number" id="guests" min="1" />
      </div>
      <div>
        <Label htmlFor="payment">Payment Method</Label>
        <Select>
          <SelectTrigger id="payment">
            <SelectValue placeholder="Select a payment method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="credit">Credit Card</SelectItem>
            <SelectItem value="debit">Debit Card</SelectItem>
            <SelectItem value="paypal">PayPal</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Book Property</Button>
    </form>
  )
}

