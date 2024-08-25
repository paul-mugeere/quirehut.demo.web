import NextAuth from "next-auth"
import { authProviders } from "./auth-providers"
import { authCallBacks } from "./auth-callbacks"

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: authProviders,
    callbacks: authCallBacks,
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout"
    },
    theme: {
        colorScheme: "light",
    },
    secret: process.env.NEXTAUTH_SECRET
});