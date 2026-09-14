"use client";

import { motion } from "framer-motion";
import styles from "./ProcessFlow.module.css";
import type { PracticeArea } from "@/types";

interface Props {
  process: PracticeArea["process"];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const, // easeOut
    },
  },
};

export function ProcessFlow({ process }: Props) {
  if (!process || process.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>The Process</h2>
      <motion.div
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {process.map((step, i) => (
          <motion.div key={i} className={styles.step} variants={itemVariants}>
            <div className={styles.stepMarker}>
              <span className={styles.stepNum}>{step.step}</span>
              {i !== process.length - 1 && <div className={styles.connector} />}
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.description}</p>
              {step.duration && (
                <span className={styles.stepDuration}>{step.duration}</span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
