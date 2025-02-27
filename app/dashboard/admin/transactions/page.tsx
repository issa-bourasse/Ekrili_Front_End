import Transactions from "@/components/admin/transactions"
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

export default function AdminTransactionsPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <Transactions />
    </DashboardLayout>
  )
}

