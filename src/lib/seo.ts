// SEO utility, generates consistent Next.js Metadata per page
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";

export const SITE_URL = siteConfig.url;

interface GenerateMetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
  type?: "website" | "article";
  authors?: Metadata["authors"];
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/logo/j&j_logo.png",
  keywords = [],
  type = "website",
  authors = [{ name: siteConfig.firmName, url: SITE_URL }],
}: GenerateMetadataParams): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(ogImage, SITE_URL).toString();

  return {
    title,
    description,
    ...(keywords.length ? { keywords } : {}),
    authors,
    creator: siteConfig.firmName,
    publisher: siteConfig.firmName,
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
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

// Describe the firm as an organization site-wide. Physical offices are
// represented separately on the contact page so each address stays precise.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: siteConfig.firmName,
  alternateName: "J & J Associates",
  description:
    "Pune-based advocates and legal consultants providing counsel on family, criminal, civil, property, consumer, and commercial matters.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/j&j_logo.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneNumbers[0].raw,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneNumbers[0].raw,
    email: siteConfig.email,
    contactType: "client enquiries",
    areaServed: { "@type": "City", name: "Pune" },
    availableLanguage: ["English", "Hindi", "Marathi"],
  },
  knowsAbout: practiceAreas.map((area) => area.name),
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "State", name: "Maharashtra" },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: siteConfig.firmName,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const officeSchemas = siteConfig.addresses.map((address, index) => ({
  "@type": "LegalService",
  "@id": `${SITE_URL}/#office-${index + 1}`,
  name: `${siteConfig.firmName} — ${address.name}`,
  url: `${SITE_URL}/contact`,
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  telephone: siteConfig.phoneNumbers[0].raw,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${address.line1}, ${address.line2}`,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.postalCode,
    addressCountry: address.countryCode,
  },
  ...(index === 0
    ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: 18.5224455,
          longitude: 73.8575446,
        },
      }
    : {}),
  hasMap: address.mapUrl,
  areaServed: { "@type": "City", name: "Pune" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
}));

export function personSchema(person: {
  name: string;
  slug: string;
  role: string;
  image?: string;
  specialisations?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/team/${person.slug}#person`,
    name: person.name,
    url: `${SITE_URL}/team/${person.slug}`,
    jobTitle: person.role,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    ...(person.image ? { image: new URL(person.image, SITE_URL).toString() } : {}),
    ...(person.specialisations?.length
      ? { knowsAbout: person.specialisations }
      : {}),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
