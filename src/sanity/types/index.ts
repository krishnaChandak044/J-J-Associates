// ─── Sanity Content Types ─────────────────────────────────────────────────
// These represent the shape of documents fetched from Sanity CMS

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

// ─── Insight / Blog Post ──────────────────────────────────────────────────

export type InsightCategory =
  | "divorce"
  | "family"
  | "criminal"
  | "civil-litigation"
  | "property"
  | "corporate"
  | "consumer"
  | "cheque-bounce"
  | "documentation"
  | "general";

export interface InsightAuthor {
  name: string;
  photo: SanityImage;
  designation: string;
}

export interface InsightCard {
  _id: string;
  title: string;
  slug: SanitySlug;
  category: InsightCategory;
  excerpt: string;
  coverImage: SanityImage;
  author: InsightAuthor;
  publishedAt: string;
  readTime: number;
}

export interface InsightFull extends InsightCard {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]; // Sanity Portable Text blocks
  seoTitle?: string;
  seoDesc?: string;
}

// ─── Team Member ──────────────────────────────────────────────────────────

export interface TeamMemberCard {
  _id: string;
  name: string;
  slug: SanitySlug;
  designation: string;
  photo: SanityImage;
  yearsExp: number;
  specialties: string[];
  quote: string;
}

export interface TeamMemberFull extends TeamMemberCard {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bio: any[]; // Portable Text
  education: string[];
  barAdmissions: string[];
  notableMatters: string[];
  email: string;
  order: number;
}

// ─── Case Result ─────────────────────────────────────────────────────────

export type PracticeAreaSlug =
  | "divorce"
  | "family-law"
  | "criminal-defense"
  | "civil-litigation"
  | "property"
  | "corporate"
  | "consumer-matters"
  | "cheque-bounce"
  | "documentation"
  | "consultations";

export interface CaseResult {
  _id: string;
  practiceArea: PracticeAreaSlug;
  matterType: string;
  situation: string;
  outcome: string;
  duration: string;
  court: string;
  year: number;
}

// ─── Testimonial ──────────────────────────────────────────────────────────

export interface Testimonial {
  _id: string;
  text: string;
  clientType: string;
  stars: 1 | 2 | 3 | 4 | 5;
  source: "Google" | "Direct";
}
