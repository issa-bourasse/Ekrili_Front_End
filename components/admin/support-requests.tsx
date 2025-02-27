import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const supportRequests = [
  { id: "1", user: "Alice Johnson", issue: "Booking cancellation", priority: "High", status: "Open" },
  { id: "2", user: "Bob Williams", issue: "Payment issue", priority: "Medium", status: "In Progress" },
]

export default function SupportRequests() {
  const handleViewRequest = (id: string) => {
    console.log("Viewing support request:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {supportRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.user}</TableCell>
                <TableCell>{request.issue}</TableCell>
                <TableCell>{request.priority}</TableCell>
                <TableCell>{request.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleViewRequest(request.id)}>View Request</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

