"use client";

import Link from "next/link";
import { Scale, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { siteConfig } from "@/data/siteConfig";
import { WaveDivider } from "@/components/ui/WaveDivider/WaveDivider";

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image & Overlay */}
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1505664177275-b1664cb87c26?q=80&w=2000&auto=format&fit=crop" 
          alt="Law Library" 
          className={styles.bgImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <Scale size={16} className={styles.badgeIcon} />
            Over 20 Years of Legal Excellence
          </div>
          
          <h1 className={styles.title}>
            Justice, Handled With <span className={styles.highlight}>Precision.</span>
          </h1>
          
          <p className={styles.description}>
            Pune's premier law firm dedicated to protecting your rights. 
            We provide strategic, principled, and relentless representation in 
            Divorce, Civil Litigation, Property, and Corporate Law.
          </p>
          
          <div className={styles.ctas}>
            <Link href="/contact" className={styles.primaryCta}>
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link href="#practice-areas" className={styles.secondaryCta}>
              Explore Practice Areas <ArrowDown size={18} />
            </Link>
          </div>
        </motion.div>
      </div>

      <WaveDivider position="bottom" fillColor="var(--color-bg)" />
    </section>
  );
}
