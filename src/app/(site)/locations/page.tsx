import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./locations.module.css";

export const metadata = generatePageMetadata({
  title: "Areas We Serve in Pune | J&J Associates",
  description: "Explore legal representation by J&J Associates across all Pune neighborhoods. Adv. Gaurav Jaju & Adv. Ankita Kabra (Jaju) represent clients before District Courts, Family Courts, and civil forums across Pune and Maharashtra.",
  path: "/locations",
});

export default function LocationsHubPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.separator} aria-hidden="true">›</span>
            <span className={styles.active} aria-current="page">Locations</span>
          </nav>

          <div className={styles.pill}>Pune &amp; Surrounding Areas</div>
          <h1 className={styles.title}>
            Lawyers Serving <span className={styles.titleHighlight}>Pune</span> Neighborhoods
          </h1>
          <p className={styles.sub}>
            With central litigation offices at Kasba Peth and Shukrawar Peth, Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju) represent clients from every major residential and commercial hub across Pune. Select your area below for travel times, court jurisdictions, and localized legal insights.
          </p>
        </div>
      </header>

      {/* ── Offices Strip ── */}
      <section className={styles.officesSection} aria-label="Our Pune Offices">
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Our Central Pune Offices</h2>
          <div className={styles.officeGrid}>
            {siteConfig.addresses.map((addr) => (
              <div key={addr.name} className={styles.officeCard}>
                <div className={styles.officeHeader}>
                  <MapPin size={20} className={styles.officePin} aria-hidden="true" />
                  <h3 className={styles.officeName}>{addr.name}</h3>
                </div>
                <p className={styles.officeAddress}>{addr.full}</p>
                <a
                  href={addr.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.officeDirections}
                >
                  Directions in Google Maps <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations Grid ── */}
      <section className={styles.gridSection} aria-label="Neighborhoods Directory">
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>All Neighborhoods</h2>
          <p className={styles.sectionSub}>
            Click on any locality for detailed travel directions, court jurisdiction, and tailored legal FAQs:
          </p>

          <div className={styles.locationsGrid}>
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className={styles.locationCard}
              >
                <div className={styles.locCardTop}>
                  <h3 className={styles.locName}>{loc.name}</h3>
                  <span className={styles.locTravel}>
                    <Clock size={14} aria-hidden="true" />
                    <span>{loc.travelTime}</span>
                  </span>
                </div>
                <p className={styles.locDesc}>{loc.heroSubtitle}</p>
                <div className={styles.locLink}>
                  <span>View local legal guide</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
