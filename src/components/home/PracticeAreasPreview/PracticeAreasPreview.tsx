"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import styles from "./PracticeAreasPreview.module.css";
import { practiceAreas } from "@/data/practiceAreas";

export function PracticeAreasPreview() {
  // We'll show the first 6 practice areas on the homepage grid
  const previewAreas = practiceAreas.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="practice-areas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Expertise</span>
          <h2 className={styles.title}>Comprehensive Legal Solutions</h2>
          <p className={styles.description}>
            From complex corporate litigation to sensitive family matters, our deeply 
            specialized teams bring decades of focused experience to your corner.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {previewAreas.map((area) => {
            const IconComponent = (LucideIcons as any)[area.icon] || LucideIcons.Scale;
            
            return (
              <motion.div key={area.slug} variants={itemVariants}>
                <Link href={`/practice-areas/${area.slug}`} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.cardTitle}>{area.name}</h3>
                  <p className={styles.cardDescription}>{area.tagline}</p>
                  <span className={styles.cardLink}>
                    Learn More <ArrowRight size={16} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
