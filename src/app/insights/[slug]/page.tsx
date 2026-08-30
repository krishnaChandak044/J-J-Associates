import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { INSIGHT_BY_SLUG_QUERY, INSIGHT_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
  let slugs: string[] = [];
  try {
    slugs = await client.fetch<string[]>(INSIGHT_SLUGS_QUERY);
  } catch (error) {
    console.warn("Failed to fetch insight slugs for static generation.");
  }
  
  if (!slugs || slugs.length === 0) {
    slugs = [
      "hindu-succession-act-amendments",
      "commercial-arbitration-real-estate",
      "corporate-governance-white-collar",
      "mediation-divorce-proceedings"
    ];
  }

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate SEO Metadata
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  let insight: any = null;
  
  try {
    insight = await client.fetch(INSIGHT_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  } catch (error) {}

  if (!insight) {
    // Check fallback
    if (resolvedParams.slug === "hindu-succession-act-amendments") {
      return generatePageMetadata({
        title: "Understanding the New Amendments to the Hindu Succession Act",
        description: "Recent Supreme Court judgments have clarified daughters' rights to ancestral property...",
        path: `/insights/${resolvedParams.slug}`,
      });
    }
    return { title: "Not Found" };
  }

  return generatePageMetadata({
    title: `${insight.title} | Insights | Jaju & Jaju Associates`,
    description: insight.excerpt || `Read our latest insight on ${insight.title}`,
    path: `/insights/${insight.slug?.current}`,
  });
}

export default async function InsightPage({ params }: Props) {
  const resolvedParams = await params;
  
  let insight: any = null;
  try {
    insight = await client.fetch(INSIGHT_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  } catch (error) {
    console.warn("Failed to fetch insight. Falling back to mock data.");
  }

  // Fallback mock data
  if (!insight) {
    if (resolvedParams.slug === "hindu-succession-act-amendments") {
      insight = {
        _id: "1",
        title: "Understanding the New Amendments to the Hindu Succession Act",
        category: "Family Law",
        publishedAt: "2024-03-15T00:00:00.000Z",
        readTime: 5,
        author: {
          name: "Adv. Ankita Jaju",
          photo: null // we will use fallback
        },
        fallbackAuthorImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
        fallbackImg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop",
        content: [
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The Hindu Succession (Amendment) Act, 2005, fundamentally altered the landscape of property rights for women in India. However, its retrospective application remained a subject of intense judicial debate until recent landmark Supreme Court rulings."
              }
            ]
          },
          {
            _type: "block",
            style: "h2",
            children: [{ _type: "span", text: "The Core Ambiguity" }]
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "For years, the primary question was whether the father needed to be alive on the date the 2005 amendment came into force (September 9, 2005) for the daughter to claim equal coparcenary rights."
              }
            ]
          },
          {
            _type: "block",
            style: "blockquote",
            children: [
              {
                _type: "span",
                text: "A coparcener is a person who shares equally in the inheritance of an undivided property."
              }
            ]
          },
          {
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: "The Supreme Court has now conclusively settled that a daughter’s right is absolute and flows from her birth, regardless of whether the father was alive on the amendment date."
              }
            ]
          }
        ]
      };
    } else {
      notFound();
    }
  }

  const imageUrl = insight?.coverImage 
    ? urlFor(insight.coverImage).width(1200).height(675).url()
    : insight?.fallbackImg;

  const authorImageUrl = insight?.author?.photo
    ? urlFor(insight.author.photo).width(100).height(100).url()
    : insight?.fallbackAuthorImg;

  return (
    <article className={styles.section}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          {insight?.category && (
            <span className={styles.category}>{insight.category}</span>
          )}
          
          <h1 className={styles.title}>{insight?.title}</h1>
          
          <div className={styles.meta}>
            {insight?.author && (
              <div className={styles.metaItem}>
                {authorImageUrl && (
                  <img src={authorImageUrl} alt={insight.author.name} className={styles.authorPhoto} />
                )}
                <span>{insight.author.name}</span>
              </div>
            )}
            
            <div className={styles.metaItem}>
              <Calendar size={16} />
              {insight?.publishedAt ? format(new Date(insight.publishedAt), 'MMMM dd, yyyy') : 'Recent'}
            </div>
            
            {insight?.readTime && (
              <div className={styles.metaItem}>
                <Clock size={16} />
                {insight.readTime} min read
              </div>
            )}
          </div>
        </header>

        {imageUrl && (
          <div className={styles.heroImageWrapper}>
            <img src={imageUrl} alt={insight?.title} className={styles.heroImage} />
          </div>
        )}

        <div className={styles.content}>
          {insight?.content ? (
            <PortableText value={insight.content} />
          ) : (
            <p>Content is currently unavailable.</p>
          )}
        </div>

        <footer className={styles.footer}>
          <Link href="/insights" className={styles.backLink}>
            <ChevronLeft size={16} /> Back to all insights
          </Link>
        </footer>

      </div>
    </article>
  );
}
