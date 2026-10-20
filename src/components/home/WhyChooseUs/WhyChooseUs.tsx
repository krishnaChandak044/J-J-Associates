"use client";


import styles from "./WhyChooseUs.module.css";

const steps = [
  {
    title: "Consultation",
    desc: "We understand your concerns, review relevant documents, and assess your legal position.",
  },
  {
    title: "Strategy & Preparation",
    desc: "We develop a legal strategy, identify the appropriate course of action, and clarify fees and timelines.",
  },
  {
    title: "Legal Representation",
    desc: "We handle documentation, negotiations, court proceedings, and regular case updates.",
  },
  {
    title: "Resolution",
    desc: "Guiding you through judgments, settlements, and final legal formalities.",
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
              <span className={styles.dot}></span>How We Work
            </span>
            <h2 className={styles.title}>
              From first call to <span className={styles.accentI}>resolution</span>
            </h2>
            <p className={styles.sub}>
              From First Consultation to Resolution and beyond.
            </p>
          </div>
        </div>

        <div className={styles.flow}>
          {steps.map((step, i) => (
            <div key={i} className={styles.flowc}>
              <div className={styles.iconCircle}>
                {String(i + 1).padStart(2, "0")}
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
