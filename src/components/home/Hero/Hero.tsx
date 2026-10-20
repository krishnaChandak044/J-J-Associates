"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarCheck, Scale, ShieldCheck, Clock } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="hero-bg-circle" />
      <div className={styles.container}>
        {/* Left Content Area */}
        <div className={styles.textContent}>
          <div className={styles.pill}>
            <span className={styles.pillStars}>
              <Scale size={14} aria-hidden="true" />
            </span>
            <span className={styles.pillText}>
              Advocates &amp; legal consultants in Pune
            </span>
          </div>

          <h1 className={styles.title}>
            Strategic legal counsel, <span className={styles.highlightText}>uncompromising results.</span>
          </h1>

          <p className={styles.subtitle}>
            Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju) lead a dedicated legal team handling Family, Corporate, Civil and Criminal matters across Pune.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary">
              <CalendarCheck size={18} />
              Book a Consultation
            </Link>
            <Link href="#practice" className="btn btn-soft">
              <Scale size={18} />
              Explore Practice Areas
            </Link>
          </div>

          <div className={styles.quickStats}>
            <div className={styles.quickStat}>
              <ShieldCheck size={20} className={styles.quickIcon} />
              <span><strong>Confidential</strong></span>
            </div>
            <div className={styles.quickStat}>
              <Clock size={20} className={styles.quickIcon} />
              <span>Replies within <strong>1 hour</strong></span>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/legal-hero.png"
              alt="Brass scales of justice beside law books in warm natural light"
              fill
              sizes="(max-width: 991px) 100vw, 50vw"
              priority
              className={styles.heroImage}
            />
          </div>

          <div className={styles.trustBadgeBottom}>
            <div className={styles.trustBadgeIcon}>
              <Scale size={20} />
            </div>
            <div className={styles.trustBadgeText}>
              <strong>Pune Based</strong>
              <span>Legal counsel across Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
