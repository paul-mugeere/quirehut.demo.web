import type { NextAuthConfig } from "next-auth"

export const authCallBacks: NextAuthConfig["callbacks"] =
{
    async jwt({ token, account, profile }) {
        if (account) {
            token.accessToken = account.access_token;
            token.id = profile?.id;
        }
        return token;
    },
    async session({ session, token }) {
        if (token) {
            session.user.id = token.sub as string;
            session.accessToken = token.accessToken as string;
        }
        return session;
    },
    async redirect({ url, baseUrl }) {
        if (url.startsWith("/")) return `${baseUrl}${url}`;

        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url;
        return baseUrl;
    },
    // authorized routes
   
}
