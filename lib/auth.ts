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
    return session.user as User;
  }
  return {
    id: "0",
    name: "",
    email: "",
    image: ""
  } as User;
}
