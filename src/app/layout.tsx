import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";
import { ThemeInitializer } from "@/components/ThemeInitializer";
import { Navbar } from "@/components/layout";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Nexora - College Community Platform",
  description: "A centralized digital platform for college students to view subjects, units, notes, and cheatsheets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
        <ThemeInitializer />
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}