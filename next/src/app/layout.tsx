import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ze Market",
  description: "Best shop in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />

        <main className="min-h-screen shadow-md">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
