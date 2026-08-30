import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  firmName: "Jaju & Jaju Associates",
  tagline: "Justice, Handled With Precision.",
  address: {
    street: "TBD",          // ← Client to confirm
    city: "Pune",
    state: "Maharashtra",
    pin: "TBD",             // ← Client to confirm
    full: "TBD, Pune, Maharashtra — TBD",
  },
  phone: "+91 XXXXX XXXXX",  // ← Client to confirm
  email: "info@jajuassociates.com", // ← Client to confirm
  whatsapp: "+91 XXXXX XXXXX",      // ← Client to confirm
  officeHours: "Monday – Saturday, 10:00 AM – 6:00 PM",
  established: "2001",              // ← Client to confirm
  stats: [
    { value: 25,   suffix: "+", label: "Years of Practice"   },
    { value: 3200, suffix: "+", label: "Matters Resolved"     },
    { value: 94,   suffix: "%", label: "Client Satisfaction"  },
    { value: 10,   suffix: "",  label: "Practice Areas"       },
  ],
  navLinks: [
    { label: "Home",            href: "/"               },
    { label: "Practice Areas",  href: "/practice-areas" },
    { label: "The Firm",        href: "/about"          },
    { label: "Our Team",        href: "/team"           },
    { label: "Insights",        href: "/insights"       },
    { label: "Contact",         href: "/contact"        },
  ],
  socialLinks: {
    linkedin:   undefined, // ← Client to provide
    whatsapp:   "https://wa.me/91XXXXXXXXXX",
    googleMaps: undefined, // ← Client to provide
  },
};
