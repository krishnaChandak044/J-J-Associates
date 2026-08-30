// ─── Practice Area Types ───────────────────────────────────────────────────

export interface SubService {
  name: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration?: string;
}

export interface DocumentGroup {
  category: string;
  items: string[];
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  note: string;
  length: "short" | "medium" | "long";
}

export interface Mistake {
  title: string;
  harm: string;
  prevention: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FeeStructure {
  description: string;
  note: string;
}

export interface PracticeAreaOverview {
  tldr: string;
  paragraphs: string[];
  subServices: SubService[];
}

export interface PracticeArea {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  heroTrustPills: string[];
  overview: PracticeAreaOverview;
  process: ProcessStep[];
  documents: DocumentGroup[];
  timeline: TimelinePhase[];
  commonMistakes: Mistake[];
  fees: FeeStructure;
  faqs: FAQ[];
}

// ─── Common Types ──────────────────────────────────────────────────────────

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  firmName: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    pin: string;
    full: string;
  };
  phone: string;
  email: string;
  whatsapp: string;
  officeHours: string;
  established: string;
  stats: Stat[];
  navLinks: NavLink[];
  socialLinks: {
    linkedin?: string;
    whatsapp?: string;
    googleMaps?: string;
  };
}
