// Jaju & Jaju Associates — Single Source of Truth
// ─────────────────────────────────────────────────
// Update PLACEHOLDER values with real client data before going live.

export const siteConfig = {
  // ── Firm Identity ──────────────────────────────────────────────────────────
  firmName: "Jaju & Jaju Associates",
  name: "Jaju & Jaju Associates",
  fullName: "Jaju & Jaju Associates — Advocates & Legal Consultants",
  tagline: "Justice. Diligence. Results.",
  subTagline:
    "Gaurav Jaju & Ankita Kabra (Jaju) lead a dedicated legal practice for Family, Criminal, Civil and Property matters — before every major court in Pune.",
  slogan: "Legal help that's precise, honest & on your side.",
  philosophy:
    "A client does not need a lawyer who promises. They need one who prepares — and tells them the truth about their case before the other side does.",

  // ── Contact Details ─────────────────────────────────────────────────────────
  phone: "+91 98765 43210",         // PLACEHOLDER
  phoneRaw: "+919876543210",         // PLACEHOLDER — for tel: links
  whatsapp: "https://wa.me/919876543210", // PLACEHOLDER
  email: "info@jajuassociates.in",   // PLACEHOLDER
  emailAlt: "gauravjaju@jajuassociates.in", // PLACEHOLDER

  // ── Address ─────────────────────────────────────────────────────────────────
  addresses: [
    {
      name: "Office 1 (Kasba Peth)",
      line1: "Office no. 12, Ground floor, B wing",
      line2: "Alok Nagri Society, Near pawle chowk, Kasba peth",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411011",
      country: "India",
      countryCode: "IN",
      full: "Office no. 12, Ground floor, B wing, Alok Nagri Society, Near pawle chowk, Kasba peth, Pune - 411011",
      street: "Kasba Peth",
      pin: "411011",
      mapUrl: "https://maps.google.com/?q=Alok+Nagri+Society,+Near+pawle+chowk,+Kasba+peth,+Pune+411011",
      mapEmbed: "https://maps.google.com/maps?q=Alok+Nagri+Society,+Near+pawle+chowk,+Kasba+peth,+Pune+411011&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      name: "Office 2 (Shukrawar Peth)",
      line1: "Office no. 19/A, 4th floor, Ankita chambers",
      line2: "351 Shukrawar Peth, opp Gadikhana, Shivaji road",
      city: "Pune",
      state: "Maharashtra",
      postalCode: "411002",
      country: "India",
      countryCode: "IN",
      full: "Office no. 19/A, 4th floor, Ankita chambers, 351 Shukrawar Peth, opp Gadikhana, Shivaji road, Pune 411002",
      street: "Shukrawar Peth",
      pin: "411002",
      mapUrl: "https://maps.google.com/?q=Ankita+chambers,+351+Shukrawar+Peth,+opp+Gadikhana,+Shivaji+road,+Pune+411002",
      mapEmbed: "https://maps.google.com/maps?q=Ankita+chambers,+351+Shukrawar+Peth,+opp+Gadikhana,+Shivaji+road,+Pune+411002&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ],

  // ── Business Hours ──────────────────────────────────────────────────────────
  hours: {
    days: "Monday – Saturday",
    time: "10:00 AM – 7:00 PM",
    note: "Replies within 24 hours",
  },
  officeHours: "Monday – Saturday, 10:00 AM – 7:00 PM",

  // ── Site / SEO ──────────────────────────────────────────────────────────────
  url: "https://www.jajuassociates.in", // PLACEHOLDER
  locale: "en_IN",
  foundingYear: "2010",                 // PLACEHOLDER
  established: "2010",

  // ── Social Links ─────────────────────────────────────────────────────────────
  social: {
    google: "",    // PLACEHOLDER
    facebook: "",  // PLACEHOLDER
    linkedin: "",  // PLACEHOLDER
    instagram: "", // PLACEHOLDER
    justdial: "",  // PLACEHOLDER
  },
  socialLinks: {
    linkedin: undefined,
    whatsapp: "https://wa.me/919876543210", // PLACEHOLDER
    googleMaps: undefined,
  },

  // ── Bar Council ─────────────────────────────────────────────────────────────
  barCouncil: "Bar Council of Maharashtra & Goa",

  // ── Courts ──────────────────────────────────────────────────────────────────
  courts: [
    "Ahilyanagar",
    "Akola",
    "Alibag",
    "Amravati",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Chhatrapati Sambhajinagar",
    "Dharashiv",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Ichalkaranji",
    "Jalgaon",
    "Jalna",
    "Kalyan-Dombivli",
    "Kolhapur",
    "Latur",
    "Malegaon",
    "Mira-Bhayandar",
    "Mumbai",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Navi Mumbai",
    "Palghar",
    "Panvel",
    "Parbhani",
    "Pimpri-Chinchwad",
    "Pune",
    "Ratnagiri",
    "Sangli-Miraj",
    "Satara",
    "Sawantwadi",
    "Shirdi",
    "Solapur",
    "Thane",
    "Ulhasnagar",
    "Vasai-Virar",
    "Wardha",
    "Washim",
    "Yavatmal",
  ],

  shortCourts: [
    "Pune",
    "Mumbai",
    "Nashik",
    "All over Maharashtra",
  ],

  // ── Stats ────────────────────────────────────────────────────────────────────
  stats: [
    { label: "Years of Practice", value: "15+", raw: 15, suffix: "+", numericValue: 15 },
    { label: "Matters Handled",   value: "800+", raw: 800, suffix: "+", numericValue: 800 },
    { label: "Advocates",          value: "2",    raw: 2, suffix: "", numericValue: 2 },
    { label: "Courts Served",      value: "6",    raw: 6, suffix: "", numericValue: 6 },
  ],

  // ── Navigation Links ─────────────────────────────────────────────────────────
  navLinks: [
    { label: "Home",           href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "The Firm",       href: "/about" },
    { label: "Our Team",       href: "/team" },
    { label: "Insights",       href: "/insights" },
    { label: "Contact",        href: "/contact" },
  ],

  // ── Advocates ────────────────────────────────────────────────────────────────
  advocates: [
    {
      name: "Gaurav Jaju",
      slug: "gaurav-jaju",
      image: "/founder/IMG_2913.PNG",
      role: "Advocate and Founder",
      enrolledYear: "2010",
      enrollmentNo: "[ENROLLMENT NO]",   // PLACEHOLDER
      barCouncil: "Bar Council of Maharashtra & Goa",
      lawSchool: "[Law School Name]",    // PLACEHOLDER
      specialisations: ["Family Law", "Criminal Defense", "Domestic Violence"],
      languages: ["English", "Hindi", "Marathi", "Marwari"],
      courts: ["Pune", "Nashik", "Mumbai", "All over Maharashtra"],
      quote:
        "A client does not need a lawyer who promises. They need one who prepares — and tells them the truth about their case before the other side does.",
      bio: "Gaurav Jaju has spent over a decade in the courts of Pune, handling family disputes, criminal matters, and civil litigation with precision and candour. His approach is diagnostic first — clients hear the weaknesses of their case before anyone discusses strategy.",
    },
    {
      name: "Ankita Kabra (Jaju)",
      slug: "ankita-jaju",
      image: "/founder/IMG_2913.PNG",
      role: "Advocate & Legal Consultant",
      enrolledYear: "2012",
      enrollmentNo: "[ENROLLMENT NO]",   // PLACEHOLDER
      barCouncil: "Bar Council of Maharashtra & Goa",
      lawSchool: "[Law School Name]",    // PLACEHOLDER
      specialisations: ["Property Disputes", "Civil Litigation", "Corporate Law"],
      languages: ["English", "Hindi", "Marathi", "Marwari"],
      courts: ["Pune", "Nashik", "Mumbai", "All over Maharashtra"],
      quote:
        "Good legal work is 80 percent preparation and 20 percent argument. Most disputes are decided long before anyone walks into a courtroom.",
      bio: "Ankita Kabra (Jaju) brings careful attention to property disputes, consumer matters, and documentation work. She is known for thorough preparation and giving clients an honest picture of what to expect at every stage.",
    },
  ],

  // ── Practice Areas (summary for nav/footer — full data in practiceAreas.ts) ─
  practiceAreaSlugs: [
    "family-law",
    "criminal-law",
    "civil-law",
    "property-law",
    "consumer-cheque",
    "documentation",
  ],

  // ── On the Record (case outcomes) ─────────────────────────────────────────
  outcomes: [
    {
      court: "Family Court · Pune",
      situation: "Married couple with settled terms sought mutual divorce; both parties sought waiver of the standard cooling-off period.",
      action: "Applied for waiver under Section 13B(2) citing settled finances and no minor children.",
      result: "Decree Granted",
      category: "Family Law",
    },
    {
      court: "Sessions Court · Pune",
      situation: "Family implicated in a 498A FIR following a matrimonial dispute; arrest was imminent.",
      action: "Filed anticipatory bail at first listing with specific factual grounds rebutting the FIR allegations.",
      result: "Bail Granted",
      category: "Criminal Defence",
    },
    {
      court: "District Court · Pune",
      situation: "Client held a dishonoured cheque worth ₹18 lakh from a former business associate.",
      action: "Issued legal notice under Section 138 NI Act within time; complaint filed and matter taken to trial.",
      result: "Fully Recovered",
      category: "Consumer & Cheque Bounce",
    },
    {
      court: "Family Court · Pune",
      situation: "Mother sought sole custody of two minor children following contested divorce proceedings.",
      action: "Filed custody petition with supporting welfare evidence focused on children's schooling and stability.",
      result: "Custody Granted",
      category: "Family Law",
    },
    {
      court: "Consumer Commission · Pune",
      situation: "Buyer sought compensation after builder delayed possession by over 3 years.",
      action: "Filed complaint under MahaRERA and Consumer Protection Act; pursued compensation and interest.",
      result: "Compensation Awarded",
      category: "Consumer & Cheque Bounce",
    },
    {
      court: "District Court · Pune",
      situation: "Property partition dispute among siblings over ancestral agricultural land; years of informal dispute.",
      action: "Filed partition suit with revenue records, title documents and consent statements.",
      result: "Decree Passed",
      category: "Property Law",
    },
    {
      court: "Bombay High Court",
      situation: "Client convicted by sessions court sought appeal on grounds of improper appreciation of evidence.",
      action: "Filed criminal appeal; prepared detailed grounds on evidentiary gaps and procedural errors.",
      result: "Appeal Admitted",
      category: "Criminal Defence",
    },
    {
      court: "Civil Court · Pune",
      situation: "Seller of a flat sought specific performance after buyer refused to complete the purchase.",
      action: "Filed specific performance suit with agreement to sell, payment receipts and correspondence.",
      result: "Decree for Specific Performance",
      category: "Civil Litigation",
    },
  ],

  // ── Our Approach ─────────────────────────────────────────────────────────
  approach: {
    principles: [
      {
        number: "01",
        title: "Diagnosis before prescription.",
        description:
          "The first meeting at Jaju & Jaju Associates is not a sales conversation. It is a focused examination of your facts, your documents, and the other side's likely position. You leave the first meeting knowing what your matter involves — regardless of whether you engage us or not.",
      },
      {
        number: "02",
        title: "The weaknesses of your case — before the strengths.",
        description:
          "We believe an advocate's first honest duty to a client is to tell them what the other side's lawyer will argue. If we identify weaknesses in your case — and there are always weaknesses — you hear them from us first. An advocate who only tells you what you want to hear is not doing their job.",
      },
      {
        number: "03",
        title: "Preparation is the work.",
        description:
          "A court hearing is only as good as the preparation behind it. We spend more time at our desks than in courts — reviewing documents, drafting arguments, preparing witnesses, and anticipating the other side's moves. Hearing day is the result of that work, not the work itself.",
      },
      {
        number: "04",
        title: "You will always know what is happening.",
        description:
          "You receive a post-hearing summary within 24 hours of every court date — what was argued, what the court said, what the next date is, and what it means. You will never have to chase us for information about your own matter.",
      },
    ],
    whatWeAvoid: [
      {
        title: "We do not promise outcomes.",
        description: "No advocate can guarantee what a court will decide. We tell you what is likely, what is possible, and what is unlikely — in plain language, without the optimism that benefits the lawyer more than the client.",
      },
      {
        title: "We do not take matters we cannot handle.",
        description: "Jaju & Jaju Associates is a focused firm. If a matter is outside our practice areas or requires a specialisation we do not have, we say so — and where possible, refer you to someone who does.",
      },
      {
        title: "We do not bill for calls that don't happen.",
        description: "Updates are part of the service, not extras. Post-hearing summaries and responses to client queries are included in how we work — not billed separately as 'consultation time'.",
      },
      {
        title: "We do not keep matters alive longer than they need to be.",
        description: "Settlement is always on the table when the terms are fair. Litigation that can be resolved should be resolved — courts are for cases that genuinely cannot be settled.",
      },
    ],
  },

  // ── Insight Categories ─────────────────────────────────────────────────────
  insightCategories: ["Family Law", "Criminal Law", "Property Law", "Consumer Law", "Civil Litigation", "General"],

  // ── Areas Served ─────────────────────────────────────────────────────────
  areasServed: {
    central: ["Kasba Peth", "Shivajinagar", "Deccan", "Sadashiv Peth", "Narayan Peth"],
    east:    ["Hadapsar", "Wanawadi", "Kharadi", "Wagholi", "Manjri"],
    west:    ["Baner", "Balewadi", "Aundh", "Kothrud", "Warje"],
    north:   ["Pimple Saudagar", "Wakad", "Hinjewadi", "Chinchwad", "Akurdi"],
    south:   ["Katraj", "Dhayari", "Ambegaon", "Undri", "Pisoli"],
  },

  // ── SEO Keywords ────────────────────────────────────────────────────────────
  keywords: [
    "lawyer in Pune",
    "advocate in Pune",
    "best lawyer Pune",
    "law firm Pune",
    "legal advice Pune",
    "divorce lawyer Pune",
    "criminal lawyer Pune",
    "property lawyer Pune",
    "family court advocate Pune",
    "Jaju & Jaju Associates",
    "Gaurav Jaju advocate",
    "Ankita Kabra advocate",
    "vakil Pune",
    "legal consultation Pune",
    "anticipatory bail Pune",
    "consumer forum Pune",
    "cheque bounce lawyer Pune",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
