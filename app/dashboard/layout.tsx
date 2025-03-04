import { DashboardNav } from "@/components/dashboard/nav";
import { getSession } from "next-auth/react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession();

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <DashboardNav user={session?.user ?? { name: "", email: "", image: "" }} />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          {/* Add your sidebar navigation here */}
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
