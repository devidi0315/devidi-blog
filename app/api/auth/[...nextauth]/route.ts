import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prismaClient from "@/src/prisma"

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  adapter: PrismaAdapter(prismaClient),
})

export { handler as GET, handler as POST }