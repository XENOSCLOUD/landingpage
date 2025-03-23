import type { Metadata } from "next";
import { Roboto, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "XENOS - eXtended Enterprise & Neural Operating Systems",
  description: "Revolutionieren Sie Ihr Business mit intelligenter, skalierbarer AI-Unternehmenssoftware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth dark">
      <body
        className={`${roboto.variable} ${lato.variable} antialiased bg-[#0f1116] text-foreground`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
