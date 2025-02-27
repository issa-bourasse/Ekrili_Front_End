import BrowseProperties from "@/components/client/browse-properties"
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

export default function ClientBrowsePropertiesPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <BrowseProperties />
    </DashboardLayout>
  )
}

