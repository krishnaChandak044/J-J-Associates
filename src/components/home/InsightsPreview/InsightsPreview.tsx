import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./InsightsPreview.module.css";
import { insights, formatInsightDate } from "@/data/insights";

export function InsightsPreview() {
  // Show first 3 real articles
  const displayInsights = insights.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <span className={styles.subtitle}>Insights &amp; Updates</span>
            <h2 className={styles.title}>Legal Knowledge Hub</h2>
            <p className={styles.description}>
              Plain-language articles on the areas of law we practise — written for clients, not lawyers.
            </p>
          </div>
          <Link href="/insights" className={styles.viewAll}>
            Read All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {displayInsights.map((insight) => (
            <Link key={insight.slug} href={`/insights/${insight.slug}`} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.category}>{insight.category}</span>
                <span className={styles.readTime}>{insight.readTime}</span>
              </div>
              <h3 className={styles.cardTitle}>{insight.title}</h3>
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
  );
}
