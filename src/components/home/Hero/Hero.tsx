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
              <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </span>
            <span className={styles.pillText}>
              <strong>5.0</strong> on Google · <strong>150+</strong> reviews
            </span>
          </div>

          <h1 className={styles.title}>
            Strategic legal counsel, <span className={styles.highlightText}>uncompromising results.</span>
          </h1>

          <p className={styles.subtitle}>
            Adv. Gaurav Jaju, Adv. Ankita Jaju and a dedicated team for Family, Corporate, Civil and Criminal matters, before every major court in Pune.
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
