import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db/drizzle";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Twitter],
});
