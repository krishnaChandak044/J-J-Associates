import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { CASE_RESULTS_QUERY } from "@/sanity/lib/queries";
import styles from "./CaseResultsPreview.module.css";
import type { CaseResult } from "@/sanity/types";

export async function CaseResultsPreview() {
  const results = await client.fetch<CaseResult[]>(CASE_RESULTS_QUERY, {}, {
    next: { revalidate: 3600, tags: ["caseResult"] }
  });

  // Fallback data if CMS is empty
  const displayResults = results.length > 0 ? results.slice(0, 3) : [
    {
      _id: "1",
      practiceArea: "Corporate Law",
      matterType: "Shareholder Dispute",
      year: "2023",
      situation: "A highly contentious multi-crore shareholder dispute involving misappropriation of funds in a leading manufacturing company.",
      outcome: "Successfully negotiated a buyout settlement favorable to the minority shareholders within 6 months.",
    },
    {
      _id: "2",
      practiceArea: "Family Law",
      matterType: "High Net-Worth Divorce",
      year: "2023",
      situation: "Complex divorce proceedings involving cross-border assets, child custody disputes, and multiple business valuations.",
      outcome: "Secured sole custody and a highly favorable alimony and asset division order from the Family Court.",
    },
    {
      _id: "3",
      practiceArea: "Property Law",
      matterType: "Title Dispute & Eviction",
      year: "2022",
      situation: "Ancestral property illegally occupied by tenants claiming adverse possession for over two decades.",
      outcome: "Obtained an expedited eviction decree from the District Court, restoring full possession to the rightful owners.",
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleBlock}>
            <span className={styles.subtitle}>Track Record</span>
            <h2 className={styles.title}>Notable Case Results</h2>
          </div>
          <Link href="/case-results" className={styles.link}>
            View All Results <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {displayResults.map((result: any) => (
            <div key={result._id} className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.matterType}>{result.matterType}</span>
                <span>{result.year}</span>
              </div>
              <p className={styles.situation}>"{result.situation}"</p>
              <div>
                <div className={styles.outcomeLabel}>Outcome</div>
                <div className={styles.outcome}>{result.outcome}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
