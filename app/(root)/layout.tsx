import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@components/Navbar";
import AuthProvider from "@context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cine hub",
  description: "Next14 cine hub project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black-1`}  >
       <AuthProvider>
          {children}
          </AuthProvider>
        
        </body>
    </html>
  );
}
