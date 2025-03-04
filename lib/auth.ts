import NextAuth from "next-auth";
import { User } from "next-auth";

export const { auth, signIn, signOut, handlers } = NextAuth({
  session: { 
    strategy: "jwt" 
  }
});

export async function getSession() {
  const session = await auth();
  if (session && session.user) {
    return {
      id: session.user.id ?? "0",
      name: session.user.name ?? "",
      email: session.user.email ?? "",
      image: session.user.image ?? ""
    } as User;
  }
  return {
    id: "0",
    name: "",
    email: "",
    image: ""
  } as User;
}
