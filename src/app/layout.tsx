import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DataDaur",
  description: "A software company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
