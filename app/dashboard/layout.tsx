import { DashboardNav } from "@/components/dashboard/nav";
import { auth } from "@/lib/auth";
import type { User } from "next-auth";

interface ExtendedUser extends User {
  id: string;
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();

  const defaultUser: ExtendedUser = {
    id: "guest",
    name: "",
    email: "",
    image: ""
  };

  const user: ExtendedUser = session?.user ? {
    ...session.user,
    id: session.user.id || defaultUser.id,
  } : defaultUser;

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <DashboardNav user={user} />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          {/* Sidebar content */}
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
