'use client'

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Settings() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Settings updated")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Jane Doe" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="jane@example.com" />
          </div>
          <div>
            <Label htmlFor="password">New Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit">Update Settings</Button>
        </form>
      </CardContent>
    </Card>
  )
}

