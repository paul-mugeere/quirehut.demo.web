import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {Header} from "@/components/header";
import { auth } from "@/lib/auth/auth-config"
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} ${"text-qh-slate-800"}` }>
        <SessionProvider session={session}>
          <Header />
          <div className="max-w-[1280px] px-4 md:px-8 mx-auto py-6">
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
