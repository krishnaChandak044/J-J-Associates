import Link from "next/link";
import { locations } from "@/data/locations";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = generatePageMetadata({
  title: "Areas We Serve in Pune | J&J Associates",
  description: "J&J Associates meets clients at its Kasba Peth and Shukrawar Peth offices and advises people across Pune by phone or video. View areas, office details and practice areas.",
  path: "/areas-we-serve",
});

export default function AreasWeServePage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.eyebrow}>Pune & nearby areas</p>
          <h1>Areas We Serve</h1>
          <p className={styles.intro}>
            Our offices are in Kasba Peth and Shukrawar Peth. Clients from across Pune can
            arrange a consultation at either office, by phone, or by video. The area list
            below describes where clients may reach us from; it does not indicate a separate office in each area.
          </p>
        </div>
      </header>

      <div className={styles.main}>
        <div className={styles.container}>
          <section aria-labelledby="office-heading" className={styles.section}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Visit us</p>
              <h2 id="office-heading">Our Pune offices</h2>
            </div>
            <div className={styles.officeGrid}>
              {siteConfig.addresses.map((address) => (
                <article className={styles.officeCard} key={address.name}>
                  <h3>{address.name}</h3>
                  <p>{address.full}</p>
                  <a href={address.mapUrl} target="_blank" rel="noopener noreferrer">
                    View directions <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="areas-heading" className={styles.section}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Service area</p>
              <h2 id="areas-heading">Neighborhoods across Pune</h2>
              <p>Contact us to choose an office or arrange a remote consultation.</p>
            </div>
            <ul className={styles.areaGrid}>
              {locations.map((location) => (
                <li id={location.slug} key={location.slug} className={styles.areaItem}>
                  <Link href={`/locations/${location.slug}`} className={styles.areaLink}>
                    <span>{location.name}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="practice-heading" className={styles.section}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Legal information</p>
              <h2 id="practice-heading">Explore our practice areas</h2>
              <p>Each guide explains the process, documents and considerations for that type of matter.</p>
            </div>
            <div className={styles.practiceLinks}>
              {practiceAreas.map((area) => (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`}>{area.name} <span aria-hidden="true">→</span></Link>
              ))}
            </div>
            <Link href="/contact" className={styles.contactLink}>Contact the firm</Link>
          </section>
        </div>
      </div>
    </>
  );
}
