import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practiceAreas";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/siteConfig";

const staticPaths = [
  "/",
  "/about",
  "/team",
  "/our-approach",
  "/practice-areas",
  "/areas-we-serve",
  "/insights",
  "/contact",
  "/case-results",
  "/privacy-policy",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPaths.map((path) => ({ url: new URL(path, siteConfig.url).toString() })),
    ...practiceAreas.map((area) => ({
      url: new URL(`/practice-areas/${area.slug}`, siteConfig.url).toString(),
    })),
    ...siteConfig.advocates.map((advocate) => ({
      url: new URL(`/team/${advocate.slug}`, siteConfig.url).toString(),
    })),
    ...insights.map((article) => ({
      url: new URL(`/insights/${article.slug}`, siteConfig.url).toString(),
      lastModified: article.date,
    })),
  ];
}
