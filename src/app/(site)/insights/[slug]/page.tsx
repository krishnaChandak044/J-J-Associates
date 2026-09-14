import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import styles from "./page.module.css";
import { insights, getInsightBySlug, getRelatedInsights, formatInsightDate } from "@/data/insights";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return { title: "Not Found" };
  return {
    title: `${insight.title} | Jaju & Jaju Associates`,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const related = insight.relatedSlugs ? getRelatedInsights(insight.relatedSlugs) : [];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <Link href="/insights" className={styles.backLink}>
            <ChevronLeft size={16} /> Back to Insights
          </Link>
          <div className={styles.metaRow}>
            <span className={styles.category}>{insight.category}</span>
            <span className={styles.readTime}>{insight.readTime}</span>
          </div>
          <h1 className={styles.title}>{insight.title}</h1>
          <p className={styles.date}>{formatInsightDate(insight.date)}</p>
        </div>
      </header>

      {/* Article body */}
      <article className={styles.article}>
        <div className={styles.container}>
          <p className={styles.lead}>{insight.excerpt}</p>
          <div className={styles.body}>
            {insight.body.map((para, i) => (
              <p key={i} className={styles.paragraph}>{para}</p>
            ))}
          </div>

          {/* Author / firm attribution */}
          <div className={styles.attribution}>
            <div className={styles.attributionInner}>
              <div className={styles.authorMonogram}>GJ</div>
              <div>
                <p className={styles.authorName}>Jaju &amp; Jaju Associates</p>
                <p className={styles.authorRole}>Advocates &amp; Legal Consultants · Pune</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className={styles.disclaimer}>
            This article is for general information only and does not constitute legal advice.
            The law may have changed since this was written. If you have a specific legal question,
            please consult an advocate before acting on anything written here.
          </div>

          {/* CTA */}
          <div className={styles.ctaBlock}>
            <h2 className={styles.ctaTitle}>Have a question about this area of law?</h2>
            <p className={styles.ctaSub}>
              Speak to one of our advocates — we respond to every enquiry within 24 hours.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.btnPrimary}>Book a Consultation</Link>
              <Link href="/insights" className={styles.btnOutline}>More Insights</Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.container}>
            <h2 className={styles.relatedTitle}>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.slug} href={`/insights/${r.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <h3 className={styles.relatedCardTitle}>{r.title}</h3>
                  <p className={styles.relatedExcerpt}>{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
