import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Secondsidebar from "@/components/Secondsidebar/Secondsidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus University",
  description: "A School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="hidden lg:contents  w-fit">
            <Secondsidebar />
          </div>
          <div className="flex-col w-full">
            <Navbar />
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
