import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const messages = [
  { id: "1", from: "John Doe", subject: "Booking Inquiry", date: "2023-08-01", read: false },
  { id: "2", from: "Jane Smith", subject: "Maintenance Request", date: "2023-07-30", read: true },
]

export default function Messages() {
  const handleRead = (id: string) => {
    console.log("Marking message as read:", id)
  }

  const handleDelete = (id: string) => {
    console.log("Deleting message:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>From</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.from}</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{message.date}</TableCell>
                <TableCell>{message.read ? "Read" : "Unread"}</TableCell>
                <TableCell>
                  <Button onClick={() => handleRead(message.id)} className="mr-2">
                    Mark as Read
                  </Button>
                  <Button onClick={() => handleDelete(message.id)} variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

