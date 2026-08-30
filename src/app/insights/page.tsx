import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";
import { client } from "@/sanity/lib/client";
import { INSIGHTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import type { Insight } from "@/sanity/types";

export const metadata = generatePageMetadata({
  title: "Insights & Legal Updates | Jaju & Jaju Associates Pune",
  description: "Read the latest legal insights, case analyses, and regulatory updates from the experts at Jaju & Jaju Associates.",
  path: "/insights",
});

export default async function InsightsPage() {
  let insights: Insight[] = [];
  try {
    insights = await client.fetch<Insight[]>(INSIGHTS_QUERY, {}, {
      next: { revalidate: 3600, tags: ["insight"] }
    });
  } catch (error) {
    console.warn("Sanity fetch failed. Falling back to mock data.");
  }

  // Fallback data if CMS is empty or unconfigured
  const displayInsights = insights.length > 0 ? insights : [
    {
      _id: "1",
      title: "Understanding the New Amendments to the Hindu Succession Act",
      slug: { current: "hindu-succession-act-amendments" },
      category: "Family Law",
      excerpt: "Recent Supreme Court judgments have clarified daughters' rights to ancestral property, resolving long-standing ambiguities in the 2005 amendment.",
      publishedAt: "2024-03-15T00:00:00.000Z",
      readTime: 5,
      fallbackImg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "2",
      title: "Navigating Commercial Arbitration in Real Estate Disputes",
      slug: { current: "commercial-arbitration-real-estate" },
      category: "Property Law",
      excerpt: "Why more builders and buyers in Pune are turning to arbitration rather than civil litigation to resolve RERA-related disputes quickly and privately.",
      publishedAt: "2024-02-28T00:00:00.000Z",
      readTime: 8,
      fallbackImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "3",
      title: "Corporate Governance: Preventing White-Collar Crime",
      slug: { current: "corporate-governance-white-collar" },
      category: "Corporate Law",
      excerpt: "How establishing robust internal compliance policies can shield directors and management from vicarious liability in corporate fraud investigations.",
      publishedAt: "2024-01-10T00:00:00.000Z",
      readTime: 6,
      fallbackImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "4",
      title: "The Rise of Mediation in Divorce Proceedings",
      slug: { current: "mediation-divorce-proceedings" },
      category: "Family Law",
      excerpt: "Courts are increasingly mandating mediation before proceeding with contested divorces. Here is what you need to prepare for a successful mediation.",
      publishedAt: "2023-11-05T00:00:00.000Z",
      readTime: 4,
      fallbackImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Legal Insights</h1>
          <p className={styles.tagline}>
            Analysis, commentary, and updates on the evolving landscape of Indian Law 
            by the advocates of Jaju & Jaju Associates.
          </p>
        </div>
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {displayInsights.map((insight: any) => {
              const imageUrl = insight.coverImage 
                ? urlFor(insight.coverImage).width(800).height(450).url() 
                : insight.fallbackImg;

              return (
                <Link key={insight._id} href={`/insights/${insight.slug?.current}`} className={styles.card}>
                  <div className={styles.imageWrapper}>
                    {imageUrl && (
                      <img 
                        src={imageUrl} 
                        alt={insight.title} 
                        className={styles.image}
                      />
                    )}
                    {insight.category && (
                      <div className={styles.category}>{insight.category}</div>
                    )}
                  </div>
                  
                  <div className={styles.meta}>
                    <div className={styles.date}>
                      <Calendar size={14} />
                      {insight.publishedAt ? format(new Date(insight.publishedAt), 'MMM dd, yyyy') : 'Recent'}
                    </div>
                    {insight.readTime && (
                      <div className={styles.readTime}>
                        <Clock size={14} />
                        {insight.readTime} min read
                      </div>
                    )}
                  </div>

                  <h3 className={styles.cardTitle}>{insight.title}</h3>
                  <p className={styles.excerpt}>{insight.excerpt}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
