import DashboardOverview from "@/components/admin/dashboard-overview"
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

export default function AdminDashboardPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <DashboardOverview />
    </DashboardLayout>
  )
}

