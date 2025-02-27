import ManageProperties from "@/components/admin/manage-properties"
import DashboardLayout from "@/components/dashboard-layout"
import { adminSidebarItems } from "@/lib/sidebar-items"

export default function AdminPropertiesPage() {
  return (
    <DashboardLayout sidebarItems={adminSidebarItems} userRole="Admin">
      <ManageProperties />
    </DashboardLayout>
  )
}

