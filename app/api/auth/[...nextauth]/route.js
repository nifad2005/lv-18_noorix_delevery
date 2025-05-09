import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const hanlder =NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise ),
  secret: process.env.NEXTAUTH_SECRET, // Optional but good practice
});

// For NextAuth v4, you need to export the auth handler as default
export { hanlder as GET, hanlder as POST };