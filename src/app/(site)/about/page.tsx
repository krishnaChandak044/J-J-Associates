import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import { TeamGrid } from "@/components/about/TeamGrid/TeamGrid";

export const metadata = generatePageMetadata({
  title: "About The Firm | Jaju & Jaju Associates Pune",
  description: "Learn about the legacy of Jaju & Jaju Associates, a premier law firm in Pune with over two decades of excellence in legal advocacy.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="hero-bg-circle" />
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>The Firm's <span className="text-highlight">Legacy</span></h1>
          <p className={styles.tagline}>
            For over two decades, Jaju & Jaju Associates has stood as a bastion of legal excellence in Pune, 
            championing the rights of our clients through unwavering ethical standards and relentless advocacy.
          </p>
        </div>
      </section>

      {/* ── History & Philosophy ── */}
      <section className={styles.historySection}>
        <div className={styles.historyContainer}>
          <h2 className={styles.historyTitle}>Our Philosophy</h2>
          <p className={styles.historyParagraph}>
            <span className={styles.dropcap}>F</span>ounded on the core principles of integrity and strategic excellence, 
            Jaju & Jaju Associates began its journey in the district courts of Pune. What started as a boutique practice 
            has systematically grown into a formidable full-service law firm, trusted by high-net-worth individuals, 
            multinational corporations, and families navigating complex legal challenges.
          </p>
          <p className={styles.historyParagraph}>
            We do not believe in a one-size-fits-all approach to law. Every case is a unique puzzle that requires 
            meticulous research, innovative thinking, and an aggressive posture in the courtroom when negotiations fail. 
            Our partners bring a wealth of diverse experience across Corporate Law, Civil Litigation, Property Disputes, 
            and Family Law, ensuring that no matter the complexity of the matter, you are backed by specialized expertise.
          </p>
          <p className={styles.historyParagraph}>
            Beyond the courtroom, we are dedicated to providing our clients with transparent counsel. We demystify the 
            legal process, ensuring that you are empowered to make informed decisions at every step of your legal journey. 
            At Jaju & Jaju, you are not just retaining a lawyer; you are securing a dedicated legal partner.
          </p>

          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>20+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>1.5k</span>
              <span className={styles.statLabel}>Cases Resolved</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>4</span>
              <span className={styles.statLabel}>Core Practice Areas</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Client Commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <TeamGrid />
    </>
  );
}
