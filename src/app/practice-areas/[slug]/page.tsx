import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import { WhyChooseUs } from "@/components/home/WhyChooseUs/WhyChooseUs";

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for SSG
export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Generate SEO Metadata
export function generateMetadata({ params }: Props) {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  
  if (!area) {
    return { title: "Not Found" };
  }

  return generatePageMetadata({
    title: `${area.name} Lawyers in Pune | Jaju & Jaju Associates`,
    description: area.tagline,
    path: `/practice-areas/${area.slug}`,
  });
}

export default function PracticeAreaPage({ params }: Props) {
  const area = practiceAreas.find((a) => a.slug === params.slug);

  if (!area) {
    notFound();
  }

  const IconComponent = (LucideIcons as any)[area.icon] || LucideIcons.Scale;

  return (
    <>
      {/* ── Header ── */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <div className={styles.iconWrapper}>
            <IconComponent size={32} strokeWidth={1.5} />
          </div>
          <h1 className={styles.title}>{area.name}</h1>
          <p className={styles.tagline}>{area.tagline}</p>
        </div>
      </section>

      {/* ── Main Content & Sidebar ── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          
          <div className={styles.content}>
            <div className={styles.description}>
              {/* Note: If description had paragraphs, we would split by \n and map, but here it's a string */}
              <p>{area.description}</p>
            </div>

            {area.subServices && area.subServices.length > 0 && (
              <>
                <h2 className={styles.subServicesTitle}>Our Expertise Includes</h2>
                <div className={styles.subServicesGrid}>
                  {area.subServices.map((service, index) => (
                    <div key={index} className={styles.subServiceCard}>
                      <CheckCircle2 size={20} className={styles.subServiceIcon} />
                      <span className={styles.subServiceName}>{service}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.ctaBox}>
              <MessageSquare size={40} className={styles.ctaIcon} strokeWidth={1.5} />
              <h3 className={styles.ctaTitle}>Need Legal Counsel?</h3>
              <p className={styles.ctaDesc}>
                Schedule a consultation with our specialized {area.name.toLowerCase()} team to discuss your legal options.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Schedule Consultation <ArrowRight size={18} />
              </Link>
              
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className={styles.phoneLink}>
                Or call us: {siteConfig.phone}
              </a>
            </div>
          </aside>

        </div>
      </section>

      {/* Reusing WhyChooseUs for Trust building on inner pages */}
      <WhyChooseUs />
    </>
  );
}
