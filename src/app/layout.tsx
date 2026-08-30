import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA/FloatingCTA";
import { SearchModal } from "@/components/ui/SearchModal/SearchModal";

// ─── Font Loading ──────────────────────────────────────────────────────────

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lora",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Jaju & Jaju Associates | Advocates & Legal Consultants Pune",
  description: "Justice, Handled With Precision. Pune's premier law firm specializing in Divorce, Civil Litigation, Property, and Corporate Law.",
};

// ─── Root Layout ──────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${lora.variable}`}
    >
      <body>
        <SearchModal />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
