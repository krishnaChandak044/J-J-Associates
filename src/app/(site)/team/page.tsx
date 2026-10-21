import { generatePageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata = generatePageMetadata({
  title: "Our Advocates | Gaurav Jaju & Ankita Kabra (Jaju)",
  description: "Meet J&J Associates co-founders Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju), Advocates and Legal Consultants based in Pune.",
  path: "/team",
});

export default function TeamPage() {
  const advocates = siteConfig.advocates ?? [];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="hero-bg-circle" />
        <div className={styles.container}>
          <span className={styles.label}>The People</span>
          <h1 className={styles.heroTitle}>Our <span className="text-highlight">Advocates</span></h1>
          <p className={styles.heroSub}>
            J&amp;J Associates was co-founded by and is led by advocates Gaurav Jaju and Ankita Kabra (Jaju) —
            both enrolled with the Bar Council of Maharashtra &amp; Goa and practising in Pune.
          </p>
        </div>
      </section>

      {/* Advocates */}
      <section className={styles.section}>
        <div className={styles.container}>
          {advocates.map((adv, idx) => (
            <div key={adv.slug} className={`${styles.advocateRow} ${idx % 2 !== 0 ? styles.rowReversed : ''}`}>
              {/* Monogram Card */}
              <div className={styles.monogramWrap}>
                <div className={styles.imageWrap}>
                  <Image src={adv.image} alt={`${adv.name}, ${adv.role}`} fill className={styles.image} />
                </div>
                <p className={styles.monogramEnrolled}>
                  Enrolled {adv.enrolledYear}<br />
                  {adv.barCouncil}
                </p>
              </div>

              {/* Content */}
              <div className={styles.advocateContent}>
                <span className={styles.advocateRole}>{adv.role}</span>
                <h2 className={styles.advocateName}>{adv.name}</h2>
                <blockquote className={styles.advocateQuote}>&ldquo;{adv.quote}&rdquo;</blockquote>
                <p className={styles.advocateBio}>{adv.bio}</p>

                {/* Specialisations */}
                <div className={styles.specBlock}>
                  <span className={styles.specLabel}>Focus Areas</span>
                  <div className={styles.specList}>
                    {adv.specialisations.map(s => (
                      <span key={s} className={styles.specTag}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.langBlock}>
                  <span className={styles.specLabel}>Languages</span>
                  <p className={styles.langText}>{adv.languages.join(' · ')}</p>
                </div>

                {/* Courts */}
                {adv.courts && adv.courts.length > 0 && (
                  <div className={styles.langBlock}>
                    <span className={styles.specLabel}>Courts</span>
                    <p className={styles.langText}>{adv.courts.join(' · ')}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.teamSection} id="team-members" aria-labelledby="team-members-heading">
        <div className={styles.container}>
          <div className={styles.teamHeading}>
            <span className={styles.label}>Working alongside the founders</span>
            <h2 className={styles.teamTitle} id="team-members-heading">Our Team</h2>
          </div>
          <div className={styles.teamGrid}>
            {siteConfig.teamMembers.map((member, index) => (
              <article key={member.slug} className={styles.teamCard}>
                <span className={styles.teamLabel}>Team Member {String(index + 1).padStart(2, "0")}</span>
                <div className={styles.teamImage}>
                  <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                </div>
                <div className={styles.teamCardContent}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Speak directly with one of our advocates</h2>
          <p className={styles.ctaSub}>
            {siteConfig.hours?.days} · {siteConfig.hours?.time}<br />
            Replies within 24 hours · Same-day calls in most situations.
          </p>
          <div className={styles.ctaButtons}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.btnPrimary}>
              Call {siteConfig.phone}
            </a>
            <Link href="/contact" className={styles.btnOutline}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
