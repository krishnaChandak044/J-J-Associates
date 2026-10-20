import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import styles from "./page.module.css";
import { insights, getInsightBySlug, getRelatedInsights, formatInsightDate, getInsightImage } from "@/data/insights";
import { generatePageMetadata, jsonLd, SITE_URL } from "@/lib/seo";

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
  return generatePageMetadata({
    title: `${insight.title} | J&J Associates`,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    type: "article",
  });
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const related = insight.relatedSlugs ? getRelatedInsights(insight.relatedSlugs) : [];
  const articleUrl = `${SITE_URL}/insights/${insight.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    inLanguage: "en-IN",
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: "J&J Associates", "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }} />
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
          <div className={styles.articleImage}><Image src={getInsightImage(insight.slug)} alt={`Image for ${insight.title}`} fill sizes="(max-width: 800px) 100vw, 800px" /></div>
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
                <p className={styles.authorName}>J&amp;J Associates</p>
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
              Speak to one of our advocates, we respond to every enquiry within 24 hours.
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
                  <div className={styles.relatedImage}><Image src={getInsightImage(r.slug)} alt={`Image for ${r.title}`} fill sizes="(max-width: 640px) 100vw, 400px" /></div>
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
