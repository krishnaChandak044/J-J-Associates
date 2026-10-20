import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA/FloatingCTA";
import { SearchModal } from "@/components/ui/SearchModal/SearchModal";
import { jsonLd, organizationSchema, SITE_URL } from "@/lib/seo";


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
  metadataBase: new URL(SITE_URL),
  title: "J&J Associates | Advocates & Legal Consultants in Pune",
  description: "Pune-based legal counsel led by Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju). Explore the firm's practice areas, advocates, offices and legal insights.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema) }} />

        <SearchModal />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />

      </body>
    </html>
  );
}
