'use client'

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Settings updated")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="siteName">Site Name</Label>
            <Input id="siteName" defaultValue="Ekrili" />
          </div>
          <div>
            <Label htmlFor="supportEmail">Support Email</Label>
            <Input id="supportEmail" type="email" defaultValue="support@ekrili.com" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="maintenanceMode" />
            <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
          </div>
          <Button type="submit">Update Settings</Button>
        </form>
      </CardContent>
    </Card>
  )
}

