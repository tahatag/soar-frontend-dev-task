import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Soar Front-End Dev Task",
  description: "Submitted by Taha Taghaddos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lato.variable} antialiased`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
