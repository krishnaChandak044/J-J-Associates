import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Our Advocates | Jaju & Jaju Associates",
  description: "Gaurav Jaju and Ankita Kabra (Jaju) — advocates and legal consultants in Pune specialising in family, criminal, civil, and property matters.",
};

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
            J&amp;J Associates is led by two advocates — Gaurav Jaju and Ankita Kabra (Jaju) —
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
                {adv.image ? (
                  <div className={styles.imageWrap}>
                    <Image src={adv.image} alt={adv.name} fill className={styles.image} />
                  </div>
                ) : (
                  <div className={styles.monogram}>
                    {adv.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                )}
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
