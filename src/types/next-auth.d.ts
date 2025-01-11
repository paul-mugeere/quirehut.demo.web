import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
    },
    accessToken?: string; 
  }

  interface Profile {
    id: string;
  }
}