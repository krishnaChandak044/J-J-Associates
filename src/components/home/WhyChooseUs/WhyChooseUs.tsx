"use client";

import { ShieldCheck, Scale, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: <Award size={32} />,
    title: "20+ Years Experience",
    desc: "A proven track record of handling high-stakes litigation across District Courts, High Courts, and the Supreme Court."
  },
  {
    icon: <Scale size={32} />,
    title: "Principled Advocacy",
    desc: "We prioritize ethics, transparency, and the strict adherence to the law to secure the best outcomes for our clients."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Uncompromising Quality",
    desc: "Every case is thoroughly researched, strategically planned, and rigorously argued with precision."
  },
  {
    icon: <Users size={32} />,
    title: "Client-First Approach",
    desc: "We understand that legal battles are stressful. We ensure constant communication and empathetic counsel."
  }
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={styles.subtitle}>The Firm's Philosophy</span>
            <h2 className={styles.title}>Why Pune Trusts Jaju & Jaju Associates</h2>
            <p className={styles.description}>
              Legal matters require more than just knowledge of the law; they require 
              strategy, resilience, and an unwavering commitment to justice. Since our 
              inception, we have built a reputation on winning complex cases through 
              meticulous preparation and aggressive advocacy.
            </p>
            <Link href="/about" className="cta-link" style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.5rem", 
              color: "var(--color-surface)", 
              fontFamily: "var(--font-ui)", 
              fontWeight: 600,
              borderBottom: "1px solid var(--color-accent)",
              paddingBottom: "4px"
            }}>
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div 
            className={styles.statsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {pillars.map((pillar, index) => (
              <motion.div key={index} className={styles.statItem} variants={itemVariants}>
                <div className={styles.statIcon}>{pillar.icon}</div>
                <h3 className={styles.statTitle}>{pillar.title}</h3>
                <p className={styles.statDesc}>{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
