import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { insights, formatInsightDate, getInsightImage } from "@/data/insights";

export const metadata: Metadata = {
  title: "Legal Insights | Jaju & Jaju Associates Pune",
  description: "Plain-language articles on family law, criminal law, property, and consumer matters, written by advocates at Jaju & Jaju Associates, Pune.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.replyPill}>Insights</div>
          <h1 className={styles.heroTitle}>Plain answers to <span className="text-highlight">hard questions</span></h1>
          <p className={styles.heroSub}>
            Written from the firm's files and reviewed by Adv. Gaurav Jaju — with the specifics most legal pages leave out: courts, sections, documents and realistic timelines.
          </p>
          
          <div className={styles.filterPills}>
            {['Criminal', 'Divorce', 'Choosing a Lawyer', 'Employment', 'Property', 'Family', 'Civil', 'Recovery', 'Consumer', 'Documentation', 'Corporate'].map(cat => (
              <span key={cat} className={styles.filterPill}>{cat}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {insights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className={styles.card}>
                <div className={styles.articleImage}><Image src={getInsightImage(insight.category)} alt={`${insight.category} illustration`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.categoryDot}>•</span>
                    <span className={styles.category}>{insight.category}</span>
                    <span className={styles.categoryDot}>•</span>
                    <span className={styles.readTime}>{insight.readTime}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{insight.title}</h2>
                  <p className={styles.excerpt}>{insight.excerpt}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.date}>{formatInsightDate(insight.date)}</span>
                  <span className={styles.readMore}>Read article →</span>
                </div>
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
