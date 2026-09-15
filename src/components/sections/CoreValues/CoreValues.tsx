"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Target, Users, CheckCircle2 } from "lucide-react";
import styles from "./CoreValues.module.css";

const values = [
  {
    icon: ShieldCheck,
    title: "Absolute Transparency",
    desc: "We diagnose your case honestly before strategy is discussed. No false promises, just realistic timelines and potential outcomes.",
  },
  {
    icon: Target,
    title: "Strategic Litigation",
    desc: "Every move is calculated. We prepare for trial from day one, which often leads to favourable settlements out of court.",
  },
  {
    icon: Users,
    title: "Direct Access",
    desc: "Your case is not passed down to junior clerks. You deal directly with the advocates handling your matter.",
  },
  {
    icon: CheckCircle2,
    title: "Resolution Focused",
    desc: "We don't drag matters. Our goal is to secure judgments, decrees, and settlements efficiently so you can move forward.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  },
};

export function CoreValues() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The J&J Approach</span>
          <h2 className={styles.title}>What sets us apart</h2>
          <p className={styles.sub}>
            A legal practice built on preparation, truth, and getting results.
          </p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div key={i} className={styles.card} variants={itemVariants}>
                <div className={styles.iconWrap}>
                  <Icon size={28} className={styles.icon} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{value.title}</h3>
                <p className={styles.cardDesc}>{value.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
