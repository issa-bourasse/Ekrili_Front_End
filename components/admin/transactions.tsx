import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const transactions = [
  {
    id: "1",
    property: "Cozy Apartment",
    client: "Alice Johnson",
    amount: 500,
    date: "2023-08-01",
    status: "Completed",
  },
  { id: "2", property: "Beach House", client: "Bob Williams", amount: 1000, date: "2023-07-30", status: "Pending" },
]

export default function Transactions() {
  const handleViewDetails = (id: string) => {
    console.log("Viewing transaction details:", id)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.property}</TableCell>
                <TableCell>{transaction.client}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleViewDetails(transaction.id)}>View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

