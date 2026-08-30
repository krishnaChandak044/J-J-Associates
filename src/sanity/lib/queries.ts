// All GROQ queries in one place — easy to maintain and type-check

import { groq } from "next-sanity";

// ─── Insights / Blog ──────────────────────────────────────────────────────

export const INSIGHTS_QUERY = groq`
  *[_type == "insight"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    category,
    excerpt,
    coverImage,
    "author": author->{ name, photo, designation },
    publishedAt,
    readTime
  }
`;

export const INSIGHT_BY_SLUG_QUERY = groq`
  *[_type == "insight" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    excerpt,
    content,
    coverImage,
    "author": author->{ name, photo, designation },
    publishedAt,
    readTime,
    seoTitle,
    seoDesc
  }
`;

export const INSIGHT_SLUGS_QUERY = groq`
  *[_type == "insight"][].slug.current
`;

// ─── Team Members ─────────────────────────────────────────────────────────

export const TEAM_QUERY = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    designation,
    photo,
    yearsExp,
    specialties,
    quote
  }
`;

export const TEAM_MEMBER_BY_SLUG_QUERY = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    designation,
    photo,
    yearsExp,
    specialties,
    bio,
    education,
    barAdmissions,
    notableMatters,
    email,
    order
  }
`;

export const TEAM_SLUGS_QUERY = groq`
  *[_type == "teamMember"][].slug.current
`;

// ─── Case Results ─────────────────────────────────────────────────────────

export const CASE_RESULTS_QUERY = groq`
  *[_type == "caseResult"] | order(year desc) {
    _id,
    practiceArea,
    matterType,
    situation,
    outcome,
    duration,
    court,
    year
  }
`;

// ─── Testimonials ─────────────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    text,
    clientType,
    stars,
    source
  }
`;

// ─── Site Settings (singleton) ────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    phone,
    email,
    address,
    whatsapp,
    officeHours
  }
`;
