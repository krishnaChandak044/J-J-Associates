"use client";

import { motion } from "framer-motion";
import styles from "./WhyChooseUs.module.css";

const steps = [
  {
    title: "Consult",
    desc: "A confidential discussion — facts, documents, and an honest read of where you stand.",
  },
  {
    title: "Plan",
    desc: "Forum, filings, realistic timelines — and a fee structure agreed before work begins.",
  },
  {
    title: "Represent",
    desc: "Drafting, appearances and negotiation, with an update after every hearing.",
  },
  {
    title: "Resolve",
    desc: "Judgment, settlement or decree — with paperwork completed so it's truly closed.",
  },
];

export function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.secHead}>
          <span className={styles.secIndex}>02</span>
          <div className={styles.txt}>
            <span className={styles.secEyebrow}>
              <span className={styles.dot}></span>How It Works
            </span>
            <h2 className={styles.title}>
              From first call to <span className={styles.accentI}>resolution</span>
            </h2>
            <p className={styles.sub}>
              No mystery, no silence between hearing dates.
            </p>
          </div>
        </div>

        <div className={styles.flow}>
          {steps.map((step, i) => (
            <div key={i} className={styles.flowc}>
              <div className={styles.iconCircle}>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={styles.checkIcon}
                >
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.0, ease: "easeInOut", delay: 0.2 + (i * 1.0) }}
                    d="M20 6L9 17l-5-5"
                  />
                </svg>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
