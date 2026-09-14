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
  image?: string;
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
  value?: number;
  suffix?: string;
  label: string;
  // new shape from j&j
  raw?: number;
  numericValue?: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  firmName: string;
  name?: string;
  tagline: string;
  subTagline?: string;
  slogan?: string;
  philosophy?: string;
  addresses: {
    street?: string;
    line1?: string;
    line2?: string;
    city: string;
    state: string;
    pin?: string;
    postalCode?: string;
    full: string;
    countryCode?: string;
    mapUrl?: string;
    mapEmbed?: string;
    name?: string;
  }[];
  phone: string;
  phoneRaw?: string;
  email: string;
  emailAlt?: string;
  whatsapp: string;
  officeHours: string;
  hours?: {
    days: string;
    time: string;
    note: string;
  };
  established: string;
  foundingYear?: string;
  barCouncil?: string;
  courts?: readonly string[];
  shortCourts?: readonly string[];
  stats: Stat[];
  navLinks: NavLink[];
  socialLinks: {
    linkedin?: string;
    whatsapp?: string;
    googleMaps?: string;
  };
  social?: {
    google: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    justdial: string;
  };
  advocates?: readonly {
    name: string;
    slug: string;
    image?: string;
    role: string;
    enrolledYear: string;
    enrollmentNo: string;
    barCouncil: string;
    lawSchool: string;
    specialisations: readonly string[];
    languages: readonly string[];
    quote: string;
    bio: string;
    courts?: string[];
  }[];
  outcomes?: readonly {
    court: string;
    situation: string;
    action: string;
    result: string;
    category: string;
  }[];
  approach?: {
    principles: readonly {
      number: string;
      title: string;
      description: string;
    }[];
    whatWeAvoid: readonly {
      title: string;
      description: string;
    }[];
  };
  keywords?: readonly string[];
  insightCategories?: readonly string[];
  areasServed?: {
    central: readonly string[];
    east: readonly string[];
    west: readonly string[];
    north: readonly string[];
    south: readonly string[];
  };
  practiceAreaSlugs?: readonly string[];
}
