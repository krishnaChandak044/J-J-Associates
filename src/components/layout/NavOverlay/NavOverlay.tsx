"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import styles from "./NavOverlay.module.css";
import { X } from "lucide-react";

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { number: "01", label: "Home", href: "/", sub: false },
  { number: "02", label: "The Firm", href: "/about", sub: false },
  { number: "", label: "Our Advocates", href: "/team", sub: true },
  { number: "", label: "Our Approach", href: "/our-approach", sub: true },
  { number: "03", label: "Practice Areas", href: "/practice-areas", sub: false },
  { number: "04", label: "On the Record", href: "/case-results", sub: false },
  { number: "05", label: "Insights", href: "/insights", sub: false },
  { number: "06", label: "Contact", href: "/contact", sub: false },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.45, 0, 0.55, 1] as [number, number, number, number], delay: 0.1 },
  },
};

const curtainVariants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.35, ease: [0.45, 0, 0.55, 1] as [number, number, number, number] },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.2 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: [0.45, 0, 0.55, 1] as [number, number, number, number] },
  },
};

const panelVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.35 },
  },
  exit: {
    opacity: 0,
    x: 10,
    transition: { duration: 0.2 },
  },
};

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 350);
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <X size={32} />
          </button>

          <motion.div className={styles.curtain} variants={curtainVariants} />

          <div className={styles.content}>
            <div className={styles.inner}>
              {/* Left: Nav links */}
              <motion.nav className={styles.nav} variants={listVariants}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href + link.label}
                    className={`${styles.navItem} ${link.sub ? styles.navItemSub : ""}`}
                    variants={itemVariants}
                  >
                    {!link.sub && (
                      <span className={styles.navNumber} aria-hidden="true">
                        {link.number}
                      </span>
                    )}
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${link.sub ? styles.navLinkSub : ""}`}
                      onClick={onClose}
                      ref={i === 0 ? firstLinkRef : undefined}
                    >
                      <span className={styles.navLinkInner}>
                        {link.label}
                        <span className={styles.navLinkArrow} aria-hidden="true">→</span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Right: Contact panel */}
              <motion.aside className={styles.panel} variants={panelVariants}>
                <div className={styles.panelSection}>
                  <span className={styles.panelLabel}>Get in Touch</span>
                  <a href={`tel:${siteConfig.phoneRaw}`} className={styles.panelLink}>
                    {siteConfig.phone}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className={styles.panelLink}>
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.panelLink}
                  >
                    WhatsApp Us →
                  </a>
                </div>

                <div className={styles.panelSection}>
                  <span className={styles.panelLabel}>Office Hours</span>
                  <p className={styles.panelText}>{siteConfig.hours?.days}</p>
                  <p className={styles.panelText}>{siteConfig.hours?.time}</p>
                  <p className={styles.panelTextMuted}>{siteConfig.hours?.note}</p>
                </div>

                <div className={styles.panelSection}>
                  <span className={styles.panelLabel}>Courts We Appear In</span>
                  <ul className={styles.courtList}>
                    {siteConfig.shortCourts?.map((court) => (
                      <li key={court} className={styles.courtItem}>
                        {court}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.aside>
            </div>

            {/* Bottom bar */}
            <motion.div className={styles.bottomBar} variants={panelVariants}>
              <p className={styles.bottomCopy}>
                © {new Date().getFullYear()} Jaju &amp; Jaju Associates · {siteConfig.barCouncil}
              </p>
              <div className={styles.bottomActions}>
                <Link href="/contact" className={styles.ctaBtn} onClick={onClose}>
                  Book a Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
