"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { SessionProvider } from "next-auth/react";
import Footer from "./_components/Footer";
export default function RootLayout({ children }) {
  return (
    <SessionProvider refetchInterval={1 * 60}>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />{children}<Footer />
        </body>
      </html >
    </SessionProvider>
  );
}
