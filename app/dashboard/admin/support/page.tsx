import SupportRequests from "@/components/admin/support-requests"
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

export default function AdminSupportPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <SupportRequests />
    </DashboardLayout>
  )
}

