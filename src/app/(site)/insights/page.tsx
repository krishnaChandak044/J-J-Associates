import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { insights, formatInsightDate } from "@/data/insights";

export const metadata: Metadata = {
  title: "Legal Insights | Jaju & Jaju Associates Pune",
  description: "Plain-language articles on family law, criminal law, property, and consumer matters — written by advocates at Jaju & Jaju Associates, Pune.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Insights &amp; Updates</span>
          <h1 className={styles.heroTitle}>Legal Knowledge Hub</h1>
          <p className={styles.heroSub}>
            Plain-language articles on the areas of law we practise — written for clients, not lawyers.
            The goal is clarity: understanding your situation before you step into a lawyer&apos;s office.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className={styles.card}>
                <div className={styles.cardMeta}>
                  <span className={styles.category}>{insight.category}</span>
                  <span className={styles.readTime}>{insight.readTime}</span>
                </div>
                <h2 className={styles.cardTitle}>{insight.title}</h2>
                <p className={styles.excerpt}>{insight.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{formatInsightDate(insight.date)}</span>
                  <span className={styles.readMore}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <p className={styles.ctaText}>
            Have a question about a legal matter?{" "}
            <Link href="/contact" className={styles.ctaLink}>
              Talk to one of our advocates →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
