import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import styles from "./page.module.css";
import { TeamGrid } from "@/components/about/TeamGrid/TeamGrid";

export const metadata = generatePageMetadata({
  title: "About J & J Legal Associates | Pune",
  description: "J & J Legal Associates is a Pune-based law firm founded by Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju), serving individuals, families, businesses, startups, and organisations.",
  path: "/about",
});

export default function AboutPage() {
  const quoteEmphasis = "before the other side does.";
  const quoteEmphasisStart = siteConfig.philosophy.indexOf(quoteEmphasis);
  const publicLanguages = siteConfig.advocates[0].languages.filter((language) => language !== "Marwari");
  const practiceFocus = ["Property & Real Estate", "RERA", "Civil Litigation", "Criminal Law", "Family Law", "Corporate & Commercial"];

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="hero-bg-circle" />
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About the <span className="text-highlight">Firm</span></h1>
          <p className={styles.tagline}>
            J &amp; J Legal Associates is a Pune-based law firm founded by Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju), providing comprehensive legal services to individuals, families, businesses, startups, and organisations.
          </p>
        </div>
      </section>

      {/* ── About the Firm ── */}
      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          <h2 className={styles.historyTitle}>About J &amp; J Legal Associates</h2>
          <p className={styles.historyParagraph}>
            Our practice encompasses Property &amp; Real Estate Law, RERA, Civil Litigation, Criminal Law, Family Law, Legal Consultation, and Commercial &amp; Business Contracts. We also advise startups and businesses on NDAs, influencer agreements, service agreements, and other legal and contractual requirements.
          </p>
          <p className={styles.historyParagraph}>
            At J &amp; J Legal Associates, we focus on providing practical, strategic, and solution-oriented legal advice, with a strong emphasis on protecting our clients’ rights and interests.
          </p>
          <p className={styles.historyParagraph}>
            Our objective is to provide clear legal guidance, effective representation, and reliable legal documentation, enabling our clients to make informed decisions and navigate legal challenges with confidence.
          </p>
        </div>
      </section>

      <section className={styles.quoteSection} aria-label="A note from Adv. Gaurav Jaju, Co-Founder">
        <blockquote className={styles.quoteCard}>
          <p className={styles.quoteText}>
            “{siteConfig.philosophy.slice(0, quoteEmphasisStart)}
            <span>{quoteEmphasis}</span>
            {siteConfig.philosophy.slice(quoteEmphasisStart + quoteEmphasis.length)}”
          </p>
          <footer className={styles.quoteAttribution}>
            <span className={styles.quoteMonogram} aria-hidden="true">GJ</span>
            <span className={styles.quoteByline}>
              <strong>{siteConfig.advocates[0].name}</strong>
              <small>{siteConfig.advocates[0].role}</small>
            </span>
          </footer>
        </blockquote>
      </section>

      <section className={styles.firmInfoSection} aria-label="How we work and firm details">
        <div className={styles.firmInfoContainer}>
          <div className={styles.promiseGrid}>
            <article className={styles.promiseCard}>
              <h2>Preparation guided by facts</h2>
              <p>We review your documents, assess your legal position, and explain practical options before deciding the next step.</p>
            </article>
            <article className={styles.promiseCard}>
              <h2>Updates after every hearing</h2>
              <p>We share what happened, what it means for your matter, and what to expect next.</p>
            </article>
          </div>

          <dl className={styles.firmDetails}>
            <div className={styles.detailItem}>
              <dt>Bar Council Enrolment</dt>
              <dd>
                <span>Adv. Gaurav Jaju · {siteConfig.advocates[0].enrolledYear}</span>
                <span>Adv. Ankita Kabra (Jaju) · {siteConfig.advocates[1].enrolledYear}</span>
                <span className={styles.detailNote}>{siteConfig.barCouncil}</span>
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt>Practice Focus</dt>
              <dd className={styles.detailTags}>
                {practiceFocus.map((area) => <span className={styles.detailTag} key={area}>{area}</span>)}
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt>Courts &amp; Regions</dt>
              <dd className={styles.detailLines}>
                {siteConfig.advocates[0].courts.map((court) => <span key={court}>{court}</span>)}
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt>Languages</dt>
              <dd className={styles.detailTags}>
                {publicLanguages.map((language) => <span className={styles.detailTag} key={language}>{language}</span>)}
              </dd>
            </div>
            <div className={styles.detailItem}>
              <dt>Consultations</dt>
              <dd>In person at our Pune offices, by phone, or over video for clients abroad</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <TeamGrid />
    </>
  );
}
