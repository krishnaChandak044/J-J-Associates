import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CaseResultsPreview.module.css";
import { siteConfig } from "@/data/siteConfig";

export function CaseResultsPreview() {
  // Show first 3 outcomes from real data
  const displayResults = siteConfig.outcomes.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <span className={styles.subtitle}>On the Record</span>
            <h2 className={styles.title}>How Matters Have Resolved</h2>
            <p className={styles.description}>
              Real outcomes across our practice areas. Not promises — a factual record of how we have handled matters in Pune&apos;s courts.
            </p>
          </div>
          <Link href="/case-results" className={styles.viewAll}>
            View All Outcomes <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {displayResults.map((result, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.category}>{result.category}</span>
                <span className={styles.court}>{result.court}</span>
              </div>
              <p className={styles.situation}>&ldquo;{result.situation}&rdquo;</p>
              <div className={styles.divider} />
              <div className={styles.outcomeRow}>
                <span className={styles.outcomeLabel}>Outcome</span>
                <span className={styles.outcomeValue}>{result.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
