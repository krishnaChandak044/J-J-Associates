import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Case Results — On the Record | Jaju & Jaju Associates",
  description: "A factual record of how matters have resolved at Jaju & Jaju Associates — real outcomes across family law, criminal defence, property, and civil matters.",
};

// All unique categories
const ALL_CATEGORIES = ["All", "Family Law", "Criminal Defence", "Property Law", "Civil Litigation", "Consumer & Cheque Bounce"];

export default function CaseResultsPage() {
  const outcomes = siteConfig.outcomes ?? [];

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>On the Record</span>
          <h1 className={styles.heroTitle}>How Matters Have Resolved</h1>
          <p className={styles.heroSub}>
            These are real outcomes — anonymised and described without identifying the client.
            They are not promises. Every matter turns on its own facts.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className={styles.disclaimer}>
        <div className={styles.container}>
          <p>
            <strong>Note:</strong> Case descriptions have been anonymised. Outcomes reflect
            what the court ordered or what was achieved — they are not a guarantee of similar
            results in your matter. The Bar Council of India prohibits law firms from advertising
            results as a solicitation of clients.
          </p>
        </div>
      </div>

      {/* Outcomes Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {outcomes.map((outcome, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{outcome.category}</span>
                  <span className={styles.court}>{outcome.court}</span>
                </div>

                <div className={styles.situation}>
                  <span className={styles.situationLabel}>The Situation</span>
                  <p className={styles.situationText}>&ldquo;{outcome.situation}&rdquo;</p>
                </div>

                <div className={styles.action}>
                  <span className={styles.actionLabel}>What We Did</span>
                  <p className={styles.actionText}>{outcome.action}</p>
                </div>

                <div className={styles.result}>
                  <span className={styles.resultLabel}>Result</span>
                  <span className={styles.resultValue}>{outcome.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Your matter is different — and so is our approach to it</h2>
          <p className={styles.ctaSub}>
            A first consultation gives you an honest assessment of what you&apos;re dealing with,
            and what realistically lies ahead.
          </p>
          <div className={styles.ctaButtons}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.btnPrimary}>
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className={styles.btnOutline}>
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
