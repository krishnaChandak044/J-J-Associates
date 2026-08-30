"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import styles from "./Header.module.css";
import { practiceAreas } from "@/data/practiceAreas";
import type { PracticeArea } from "@/types";

interface MegaMenuProps {
  onClose: () => void;
}

export function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <motion.div
      className={styles.megaMenuWrapper}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      onMouseLeave={onClose}
    >
      <div className={styles.megaMenu}>
        <div className={styles.megaMenuInner}>
          <div className={styles.megaMenuLabel}>Practice Areas</div>
          
          <div className={styles.megaMenuGrid}>
            {practiceAreas.map((area: PracticeArea) => {
              // Dynamically get the lucide icon component
              const IconComponent = (LucideIcons as any)[area.icon] || LucideIcons.Scale;
              
              return (
                <Link 
                  key={area.slug} 
                  href={`/practice-areas/${area.slug}`}
                  className={styles.megaMenuItem}
                  onClick={onClose}
                >
                  <IconComponent className={styles.megaMenuIcon} size={24} strokeWidth={1.5} />
                  <div className={styles.megaMenuText}>
                    <h4>{area.name}</h4>
                    <p>{area.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className={styles.megaMenuFooter}>
            <Link 
              href="/practice-areas" 
              className={styles.megaMenuAllLink}
              onClick={onClose}
            >
              View All Practice Areas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
