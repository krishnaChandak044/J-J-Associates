import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, AlertCircle, Clock, FileText, IndianRupee } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import { ProcessFlow } from "@/components/ui/ProcessFlow/ProcessFlow";
import { PracticeAreaNav } from "@/components/practice-areas/PracticeAreaNav/PracticeAreaNav";

import { CallToActionBar } from "@/components/ui/CallToActionBar/CallToActionBar";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for SSG
export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Generate SEO Metadata
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const area = practiceAreas.find((a) => a.slug === resolvedParams.slug);
  
  if (!area) {
    return { title: "Not Found" };
  }

  return generatePageMetadata({
    title: `${area.name} Lawyers in Pune | Jaju & Jaju Associates`,
    description: area.tagline,
    path: `/practice-areas/${area.slug}`,
  });
}

export default async function PracticeAreaPage({ params }: Props) {
  const resolvedParams = await params;
  const area = practiceAreas.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  const IconComponent = (LucideIcons as any)[area.icon] || LucideIcons.Scale;

  return (
    <>
      {/* ── Header ── */}
      <section className={styles.hero}>
        {/* area.image && (
          <div className={styles.heroImageBg}>
            <Image
              src={area.image}
              alt={area.name}
              fill
              className={styles.bgImage}
              priority
            />
            <div className={styles.bgOverlay} />
          </div>
        ) */}
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.iconWrapper}>
              <IconComponent size={32} strokeWidth={1.5} />
            </div>
            <h1 className={styles.title}>{area.name}</h1>
            <p className={styles.tagline}>{area.tagline}</p>
            
            {area.heroTrustPills && area.heroTrustPills.length > 0 && (
              <div className={styles.trustPills}>
                {area.heroTrustPills.map((pill, i) => (
                  <div key={i} className={styles.pill}>
                    <CheckCircle2 size={16} className={styles.pillIcon} />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Sticky Nav ── */}
      <PracticeAreaNav />

      {/* ── Main Content ── */}
      <div className={styles.pageContent}>
        <div className={styles.mainColumn}>
          
          {/* 1. Overview */}
          <section id="overview" className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>Who this page is for</h2>
            </div>
            
            <div className={styles.tldrBox}>
              <span className={styles.tldrBadge}>TL;DR</span>
              <p>{area.overview.tldr}</p>
            </div>

            <div className={styles.paragraphs}>
              {area.overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {area.overview.subServices && area.overview.subServices.length > 0 && (
              <div className={styles.subServicesGrid}>
                {area.overview.subServices.map((service, index) => (
                  <div key={index} className={styles.subServiceCard}>
                    <div className={styles.subServiceHeader}>
                      <div className={styles.subServiceIconWrap}>
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                      <h3 className={styles.subServiceName}>{service.name}</h3>
                    </div>
                    <p className={styles.subServiceDesc}>{service.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 2. The Process */}
          {area.process && area.process.length > 0 && (
            <section id="process" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>The process, step by step</h2>
              </div>
              <p className={styles.sectionIntro}>A {area.name.toLowerCase()} matter typically moves through these stages:</p>
              
              <div className={styles.processWrapper}>
                <ProcessFlow process={area.process} />
              </div>
            </section>
          )}

          {/* 3. Documents */}
          {area.documents && area.documents.length > 0 && (
            <section id="documents" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>03</span>
                <h2 className={styles.sectionTitle}>Documents required</h2>
              </div>
              
              <div className={styles.documentsCard}>
                <h3 className={styles.docCardTitle}>Bring to the first meeting</h3>
                <div className={styles.documentsGrid}>
                  {area.documents.map((docCategory, idx) => (
                    <div key={idx} className={styles.docCategoryGroup}>
                      <h4 className={styles.docCategoryName}>{docCategory.category}</h4>
                      <ul className={styles.docList}>
                        {docCategory.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.docItem}>
                            <CheckCircle2 size={18} className={styles.docIcon} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4. Timelines */}
          {area.timeline && area.timeline.length > 0 && (
            <section id="timelines" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>04</span>
                <h2 className={styles.sectionTitle}>Honest timelines</h2>
              </div>
              
              <div className={styles.timelinesList}>
                {area.timeline.map((item, idx) => (
                  <div key={idx} className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                      <h3 className={styles.timelinePhase}>{item.phase}</h3>
                      <div className={styles.timelineDurationBadge}>
                        <Clock size={14} />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    <p className={styles.timelineNote}>{item.note}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Common Mistakes */}
          {area.commonMistakes && area.commonMistakes.length > 0 && (
            <section id="mistakes" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>05</span>
                <h2 className={styles.sectionTitle}>Mistakes we see every month</h2>
              </div>
              
              <div className={styles.mistakesGrid}>
                {area.commonMistakes.map((mistake, idx) => (
                  <div key={idx} className={styles.mistakeCard}>
                    <div className={styles.mistakeIconWrap}>
                      <AlertCircle size={20} strokeWidth={2} />
                    </div>
                    <div className={styles.mistakeContent}>
                      <h3 className={styles.mistakeTitle}>{mistake.title}</h3>
                      <p className={styles.mistakeHarm}><strong>The Harm:</strong> {mistake.harm}</p>
                      <p className={styles.mistakePrev}><strong>How we prevent it:</strong> {mistake.prevention}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Fees */}
          {area.fees && (
            <section id="fees" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>06</span>
                <h2 className={styles.sectionTitle}>Fees, discussed upfront</h2>
              </div>
              
              <div className={styles.feesCard}>
                <p className={styles.feesDesc}>{area.fees.description}</p>
                <div className={styles.feesNoteBox}>
                  <IndianRupee size={24} className={styles.feesIcon} />
                  <p>{area.fees.note}</p>
                </div>
              </div>
            </section>
          )}

          {/* 7. FAQs */}
          {area.faqs && area.faqs.length > 0 && (
            <section id="faqs" className={styles.contentSection}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>07</span>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              </div>
              
              <div className={styles.faqsList}>
                {area.faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqCard}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
          
        </div>
      </div>

      <CallToActionBar />

      {/* ── Floating CTA ── */}
      <Link href="/contact" className={styles.floatingCta}>
        <MessageSquare size={20} />
        <span>Not sure where to start?</span>
      </Link>
    </>
  );
}
