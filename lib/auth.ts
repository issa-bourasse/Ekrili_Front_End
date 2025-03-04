import NextAuth from "next-auth";

export const { auth, signIn, signOut, handlers } = NextAuth({
  session: { 
    strategy: "jwt" 
  }
});

export async function getSession() {
  return await auth();
}
