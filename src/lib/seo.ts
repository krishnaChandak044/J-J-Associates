// SEO utility, generates consistent Next.js Metadata per page
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const SITE_URL = siteConfig.url;

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
  ogImage = "/logo/j&j_logo.png",
  keywords = [],
  type = "website",
}: GenerateMetadataParams): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(ogImage, SITE_URL).toString();

  return {
    title,
    description,
    ...(keywords.length ? { keywords } : {}),
    authors: [{ name: "J&J Associates" }],
    openGraph: {
      title,
      description,
      url,
      type,
      images: [{ url: imageUrl, alt: siteConfig.firmName }],
      siteName: "J&J Associates",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
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

// Organization JSON-LD schema, used on every page
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE_URL}/#organization`,
  name: siteConfig.firmName,
  alternateName: "J & J Legal Associates",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/j&j_logo.png`,
  telephone: siteConfig.phoneNumbers.map((phone) => phone.raw),
  email: siteConfig.email,
  address: siteConfig.addresses.map((address) => ({
    "@type": "PostalAddress",
    streetAddress: `${address.line1}, ${address.line2}`,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.postalCode,
    addressCountry: address.countryCode,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "State", name: "Maharashtra" },
  ],
};

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
