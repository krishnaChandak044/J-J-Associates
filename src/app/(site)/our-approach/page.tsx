import type { Metadata } from "next";
import styles from "./page.module.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Our Approach | Jaju & Jaju Associates",
  description: "How Jaju & Jaju Associates approaches every client matter — diagnosis before prescription, honest assessment, and thorough preparation.",
};

export default function OurApproachPage() {
  const { approach } = siteConfig;

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>The Way We Work</span>
          <h1 className={styles.heroTitle}>Our Approach</h1>
          <p className={styles.heroSub}>
            Most law firms tell you what you want to hear. We start by telling you what you need to know.
          </p>
        </div>
      </section>

      {/* Philosophy Pull Quote */}
      <section className={styles.quoteSection}>
        <div className={styles.container}>
          <blockquote className={styles.pullQuote}>
            <p>&ldquo;{siteConfig.philosophy}&rdquo;</p>
            <cite>— Gaurav Jaju, Founding Advocate</cite>
          </blockquote>
        </div>
      </section>

      {/* Principles */}
      <section className={styles.principlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Four Principles</span>
            <h2 className={styles.sectionTitle}>How Every Matter Is Handled</h2>
          </div>
          <div className={styles.principlesGrid}>
            {approach?.principles.map((p) => (
              <div key={p.number} className={styles.principleCard}>
                <span className={styles.principleNum}>{p.number}</span>
                <h3 className={styles.principleTitle}>{p.title}</h3>
                <p className={styles.principleDesc}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Avoid */}
      <section className={styles.avoidSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Don&apos;t Do</span>
            <h2 className={styles.sectionTitle}>Commitments We Make to Every Client</h2>
          </div>
          <div className={styles.avoidGrid}>
            {approach?.whatWeAvoid.map((item) => (
              <div key={item.title} className={styles.avoidCard}>
                <div className={styles.avoidLine} aria-hidden="true" />
                <h3 className={styles.avoidTitle}>{item.title}</h3>
                <p className={styles.avoidDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Talk to us about your matter</h2>
          <p className={styles.ctaSub}>
            A first consultation gives us enough to understand your situation and give you an honest picture of your options.
          </p>
          <div className={styles.ctaButtons}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.btnPrimary}>
              Call {siteConfig.phone}
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.btnOutline}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
