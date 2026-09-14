import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA/FloatingCTA";
import { SearchModal } from "@/components/ui/SearchModal/SearchModal";
import { DisclaimerModal } from "@/components/ui/DisclaimerModal/DisclaimerModal";

// ─── Font Loading ──────────────────────────────────────────────────────────

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
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
      className={`${jakarta.variable} ${cormorant.variable}`}
    >
      <body>
        <DisclaimerModal />
        <SearchModal />
        <Header />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
