import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1280px] px-4 md:px-8 mx-auto py-60">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
              Library Demo
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
              {children}
            </div>
          </div >
        </div>
      </body>
    </html>
  );
}
