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
          <div className="hidden bmd:contents w-fit ">
            <Secondsidebar />
          </div>
          <div className="flex-col w-full overflow-scroll h-screen">
            <Navbar />
            {/*TODO Change the overflow and the overflow mangement scroller style */}
            <div className="px-2 py-1 overflow-y-scroll">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
