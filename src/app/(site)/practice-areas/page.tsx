import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import { CallToActionBar } from "@/components/ui/CallToActionBar/CallToActionBar";

export const metadata = generatePageMetadata({
  title: "Practice Areas | Jaju & Jaju Associates",
  description: "Jaju & Jaju Associates handles Family Law, Criminal Defense, Civil Litigation, Property Law, and Corporate Law in Pune. Explore our expertise.",
  path: "/practice-areas",
});

export default function PracticeAreasIndexPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="hero-bg-circle" />
        <div className={styles.heroInner}>
          <span className={styles.label}>Practice Areas</span>
          <h1 className={styles.heading}>
            What do you need <span className="text-highlight">help</span> with?
          </h1>
          <p className={styles.sub}>
            Five core areas of practice, one measured approach. Every page below covers
            the process, documents, and an honest read of what to expect.
          </p>
        </div>
      </section>

      <section className={styles.listSection} aria-label="All practice areas">
        <div className={styles.listInner}>
          <nav className={styles.areaList} aria-label="Practice areas navigation">
            {practiceAreas.map((area, i) => {
              const numStr = (i + 1).toString().padStart(2, '0');
              
              return (
                <Link
                  key={area.slug}
                  href={`/practice-areas/${area.slug}`}
                  className={styles.areaRow}
                >
                  <div className={styles.rowLeft}>
                    <span className={styles.rowNumber}>{numStr}</span>
                    <div className={styles.rowTitles}>
                      <h2 className={styles.areaTitle}>{area.name}</h2>
                      <p className={styles.areaOneLiner}>{area.tagline}</p>
                    </div>
                  </div>
                  
                  <div className={styles.rowRight}>
                    <ul className={styles.coversList}>
                      {area.overview.subServices.slice(0, 4).map((service) => (
                        <li key={service.name} className={styles.coverItem}>
                          {service.name}
                        </li>
                      ))}
                      {area.overview.subServices.length > 4 && (
                        <li className={styles.coverMore}>
                          +{area.overview.subServices.length - 4} more
                        </li>
                      )}
                    </ul>
                    <span className={styles.rowArrow} aria-hidden="true"><ArrowRight size={24} /></span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ── Honest note on timelines ── */}
      <section className={styles.noteSection} aria-label="A note on timelines">
        <div className={styles.noteInner}>
          <div className={styles.noteContent}>
            <span className={styles.noteLabel} role="presentation">A Note on Timelines</span>
            <p className={styles.noteText}>
              Every matter at Jaju & Jaju Associates is assessed honestly — including realistic
              timelines. Courts in Pune are busy. Matters take longer than clients
              initially expect, and there are delays that neither party nor lawyer can
              control. We tell you what a realistic timeline looks like for your type
              of matter at the first consultation — not after the fees are agreed.
            </p>
            <p className={styles.noteText}>
              If speed is a priority, we tell you whether the matter is amenable to
              interim relief, settlement, or mediation — and whether those routes are
              genuinely open in your case.
            </p>
            <Link href="/about" className={styles.noteLink}>
              Read about our approach
            </Link>
          </div>
        </div>
      </section>
      
      <CallToActionBar />
    </>
  );
}
