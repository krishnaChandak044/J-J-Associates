// SEO utility — generates consistent Next.js Metadata per page
import type { Metadata } from "next";

const BASE_URL = "https://jajuassociates.com"; // Update when domain is confirmed

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og-default.jpg",
  keywords = [],
  type = "website",
}: GenerateMetadataParams): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      "advocate pune",
      "lawyer pune",
      "legal services pune",
      "jaju associates",
      ...keywords,
    ],
    authors: [{ name: "Jaju & Jaju Associates" }],
    openGraph: {
      title,
      description,
      url,
      type,
      images: [{ url: `${BASE_URL}${ogImage}`, width: 1200, height: 630, alt: title }],
      siteName: "Jaju & Jaju Associates",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${ogImage}`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1 },
    },
  };
}

// Organization JSON-LD schema — used on every page
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Jaju & Jaju Associates",
  alternateName: "Jaju and Jaju Associates",
  url: BASE_URL,
  telephone: "+91-XXXXX-XXXXX", // Update when confirmed
  email: "info@jajuassociates.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TBD",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "TBD",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 10:00-18:00",
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "State", name: "Maharashtra" },
  ],
  serviceType: [
    "Divorce Law",
    "Family Law",
    "Criminal Defense",
    "Civil Litigation",
    "Property Law",
    "Corporate Law",
    "Consumer Protection",
    "Cheque Bounce",
    "Legal Documentation",
    "Legal Consultation",
  ],
};
