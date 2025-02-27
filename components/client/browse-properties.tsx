import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const properties = [
  { id: "1", name: "Cozy Apartment", location: "New York", price: 100 },
  { id: "2", name: "Beach House", location: "Miami", price: 200 },
]

export default function BrowseProperties() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Browse Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input placeholder="Search properties..." />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <Card key={property.id}>
              <CardHeader>
                <CardTitle>{property.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{property.location}</p>
                <p>${property.price}/night</p>
                <Button className="mt-2">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

