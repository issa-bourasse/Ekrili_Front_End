import Messages from "@/components/client/messages"
import DashboardLayout from "@/components/dashboard-layout"
import { clientSidebarItems } from "@/lib/sidebar-items"

export default function ClientMessagesPage() {
  return (
    <DashboardLayout sidebarItems={clientSidebarItems} userRole="Client">
      <Messages />
    </DashboardLayout>
  )
}

