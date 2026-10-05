import { ContactForm } from "@/components/contact/ContactForm/ContactForm";
import { Phone, CircleHelp, UserCheck, Award, Briefcase, ArrowRight, CheckCircle2, AlertCircle, Clock, IndianRupee } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import { ProcessFlow } from "@/components/ui/ProcessFlow/ProcessFlow";
import { PracticeAreaNav } from "@/components/practice-areas/PracticeAreaNav/PracticeAreaNav";
import { Accordion } from "@/components/ui/Accordion/Accordion";
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

const practiceBadges: Record<string, string> = {
  "divorce": "Hindu Marriage Act · Family Court",
  "family-law": "Family Courts · Succession Act",
  "criminal-defense": "BNS · CrPC · Bombay High Court",
  "civil-litigation": "CPC · Commercial Courts · Pune",
  "property": "Transfer of Property · MahaRERA",
  "corporate": "Companies Act · NCLT Pune",
  "consumer-matters": "Consumer Protection Act 2019",
  "cheque-bounce": "Section 138 · NI Act",
  "documentation": "Registration & Stamp Act · Pune",
};

function getPracticeHeadline(slug: string, name: string) {
  const map: Record<string, string> = {
    "cheque-bounce": "Cheque Bounce Lawyer",
    "divorce": "Divorce Lawyer",
    "family-law": "Family Law Advocates",
    "criminal-defense": "Criminal Defense Lawyers",
    "civil-litigation": "Civil Litigation Lawyers",
    "property": "Property Lawyers",
    "corporate": "Corporate Lawyers",
    "consumer-matters": "Consumer Court Lawyers",
    "documentation": "Legal Documentation Experts",
  };
  return map[slug] || `${name} Lawyers`;
}

function getTrustCards(area: any) {
  const pills = area.heroTrustPills || [];
  
  // Card 1: Advocate
  let p1Title = "Adv. Jaju";
  let p1Sub = "Leads this practice";
  if (pills[0]) {
    const parts = pills[0].split(",");
    p1Title = parts[0]?.trim() || "Adv. Jaju";
    p1Sub = parts[1]?.trim() || "Leads this practice";
  }

  // Card 2: Experience / Courts
  let p2Title = "25+ Years";
  let p2Sub = "In Pune's courts";
  if (pills[1]) {
    if (pills[1].toLowerCase().includes("in")) {
      const parts = pills[1].split(/\bin\b/i);
      p2Title = parts[0]?.trim() || "25+ Years";
      p2Sub = `In ${parts[1]?.trim() || "Pune's courts"}`;
    } else if (pills[1].includes(",")) {
      const parts = pills[1].split(",");
      p2Title = parts[0]?.trim() || "25+ Years";
      p2Sub = parts[1]?.trim() || "Pune Courts";
    } else {
      p2Title = pills[1];
      p2Sub = "Pune District Courts";
    }
  }

  // Card 3: Key areas / matters
  let p3Title = "Notice · Trial · Settlement";
  let p3Sub = "Matters handled";
  if (pills[2]) {
    p3Title = pills[2].replace(/handled/i, "").trim();
    p3Sub = "Matters handled";
  }

  return [
    { icon: UserCheck, title: p1Title, subtitle: p1Sub },
    { icon: Award, title: p2Title, subtitle: p2Sub },
    { icon: Briefcase, title: p3Title, subtitle: p3Sub },
  ];
}

export default async function PracticeAreaPage({ params }: Props) {
  const resolvedParams = await params;
  const area = practiceAreas.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  const IconComponent = (LucideIcons as any)[area.icon] || LucideIcons.Scale;
  const badgeText = practiceBadges[area.slug] || "Senior Advocates · Pune Courts";
  const headline = getPracticeHeadline(area.slug, area.name);
  const trustCards = getTrustCards(area);

  return (
    <>
      {/* ── Header ── */}
      <section className={styles.hero}>
        {/* Soft organic ambient shapes inspired by reference layout */}
        <div className={styles.heroBlobRight} aria-hidden="true" />
        <div className={styles.heroBlobLeft} aria-hidden="true" />
        <div className={styles.patternDecor} aria-hidden="true" />

        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Left Column: Heading, description, actions, trust cards */}
            <div className={styles.heroContent}>
              <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                <Link href="/" className={styles.breadcrumbLink}>Home</Link>
                <span className={styles.breadcrumbSep}>›</span>
                <Link href="/practice-areas" className={styles.breadcrumbLink}>Practice Areas</Link>
                <span className={styles.breadcrumbSep}>›</span>
                <span className={styles.breadcrumbCurrent}>{headline}</span>
              </nav>

              <div className={styles.categoryBadge}>
                <span className={styles.badgeStar}>★</span>
                <span>{badgeText}</span>
              </div>

              <h1 className={styles.title}>
                {headline} <span className={styles.titleHighlight}>in Pune</span>
              </h1>
              <p className={styles.tagline}>{area.overview.tldr || area.tagline}</p>

              <div className={styles.heroActions}>
                <a 
                  href={`tel:${siteConfig.phoneRaw || siteConfig.phone.replace(/\s+/g, '')}`} 
                  className={styles.callNow}
                >
                  <Phone size={18} />
                  <span>Call Now — Confidential</span>
                </a>
                <a href="#faqs" className={styles.faqLink}>
                  <CircleHelp size={18} />
                  <span>Read the FAQs</span>
                </a>
              </div>

              <div className={styles.trustPills}>
                {trustCards.map((card, i) => {
                  const CardIcon = card.icon;
                  return (
                    <div key={i} className={styles.pillCard}>
                      <div className={styles.pillIconBox}>
                        <CardIcon size={18} strokeWidth={2} />
                      </div>
                      <div className={styles.pillTextBox}>
                        <span className={styles.pillTitle}>{card.title}</span>
                        <span className={styles.pillSub}>{card.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Embedded Call Back Card */}
            <div id="enquiry" className={styles.heroEnquiryCol}>
              <div className={styles.enquiryCard}>
                <div className={styles.enquiryCardHeader}>
                  <h2 id="enquiry-title" className={styles.enquiryCardTitle}>Request a Call Back</h2>
                  <p className={styles.enquiryCardSub}>
                    We respond within 24 to 48 hours.
                  </p>
                </div>
                <ContactForm compact defaultPracticeArea={area.slug} />
                <div className={styles.enquiryCardFooter}>
                  <span>🔒 100% Confidential · Strict Legal Privilege</span>
                </div>
              </div>
            </div>
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
                    <a href="#process" className={styles.howLink}>How it works <ArrowRight size={18} /></a>
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
              
              <Accordion items={area.faqs} defaultOpenIndex={0} />
            </section>
          )}
          
        </div>
      </div>

      <CallToActionBar />


    </>
  );
}
