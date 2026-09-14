"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, CalendarCheck, Scale, ShieldCheck, Clock } from "lucide-react";
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
              <Star size={12} fill="currentColor" />
            </span>
            <span className={styles.pillText}>
              <strong>5.0</strong> on Google · <strong>150+</strong> reviews
            </span>
          </div>

          <h1 className={styles.title}>
            Strategic legal counsel, <span style={{ color: '#B89C72', fontStyle: 'italic', whiteSpace: 'nowrap' }}>uncompromising results.</span>
          </h1>

          <p className={styles.subtitle}>
            Adv. Gaurav Jaju, Adv. Ankita Jaju and a dedicated team for Family, Corporate, Civil and Criminal matters — before every major court in Pune.
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
              <span><strong>Confidential</strong> first assessment</span>
            </div>
            <div className={styles.quickStat}>
              <Clock size={20} className={styles.quickIcon} />
              <span>Replies within <strong>2 hours</strong></span>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            <Image
              src="/founder/IMG_2913.PNG"
              alt="Adv. Gaurav Jaju and Adv. Ankita Jaju"
              fill
              priority
              className={styles.heroImage}
            />
          </div>

          <div className={styles.trustBadgeBottom}>
            <div className={styles.trustBadgeIcon}>
              <Scale size={20} />
            </div>
            <div className={styles.trustBadgeText}>
              <strong>15+ Years</strong>
              <span>of practice in Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
