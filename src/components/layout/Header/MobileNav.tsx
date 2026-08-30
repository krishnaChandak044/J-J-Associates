"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./Header.module.css";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  // Prevent scrolling on body when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.mobileNavWrapper}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className={styles.mobileNavInner}>
            <Link href="/" className={styles.mobileNavLink} onClick={onClose}>
              Home
            </Link>
            
            <div>
              <button 
                className={styles.mobileNavAccordionBtn}
                onClick={() => setPracticeAreasOpen(!practiceAreasOpen)}
              >
                Practice Areas
                {practiceAreasOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </button>
              
              <AnimatePresence>
                {practiceAreasOpen && (
                  <motion.div 
                    className={styles.mobileNavAccordionContent}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <Link href="/practice-areas" className={styles.mobileNavSubLink} onClick={onClose}>
                      Overview (All Areas)
                    </Link>
                    {practiceAreas.map((area) => (
                      <Link 
                        key={area.slug}
                        href={`/practice-areas/${area.slug}`} 
                        className={styles.mobileNavSubLink} 
                        onClick={onClose}
                      >
                        {area.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {siteConfig.navLinks.slice(2).map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={styles.mobileNavLink} 
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.mobileNavFooter}>
            <Link 
              href="/contact" 
              className={`${styles.ctaButton} ${styles.mobileNavCta}`}
              onClick={onClose}
            >
              Book a Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
