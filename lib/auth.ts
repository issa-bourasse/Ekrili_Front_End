import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// Make sure this file correctly exports handlers
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  session: { 
    strategy: "jwt" 
  }
});


// Create a separate function to get the session
export async function getSession() {
  return await auth();
}
