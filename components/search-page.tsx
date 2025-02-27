"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Bed, Bath, DollarSign } from "lucide-react"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for demonstration
  const properties = [
    {
      id: 1,
      title: "Cozy Studio Apartment",
      location: "New York, NY",
      price: 1500,
      beds: 1,
      baths: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Spacious 2BR with View",
      location: "Los Angeles, CA",
      price: 2500,
      beds: 2,
      baths: 2,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Modern Loft in Downtown",
      location: "Chicago, IL",
      price: 1800,
      beds: 1,
      baths: 1,
      image: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Family Home with Garden",
      location: "Houston, TX",
      price: 3000,
      beds: 3,
      baths: 2,
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <Input
              type="text"
              placeholder="Search for properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Button className="ml-2">Search</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Card key={property.id}>
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{property.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {property.beds} {property.beds === 1 ? "bed" : "beds"}
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    {property.baths} {property.baths === 1 ? "bath" : "baths"}
                  </div>
                  <div className="flex items-center font-semibold">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {property.price}/month
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

