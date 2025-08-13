import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./Admin/Store/Store";

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
          <StoreProvider>{children}</StoreProvider> 
      </body>
    </html>
  );
}
