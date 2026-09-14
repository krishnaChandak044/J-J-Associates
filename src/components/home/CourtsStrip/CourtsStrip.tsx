"use client";

import { useRef } from "react";
import styles from "./CourtsStrip.module.css";
import { siteConfig } from "@/data/siteConfig";

const courts = siteConfig.courts ?? [];
// Double for seamless marquee (-50% = exactly one copy width)
const marqueeItems = [...courts, ...courts];

export function CourtsStrip() {
  return (
    <section className={styles.section} aria-label="Courts we appear in">
      <div className={styles.labelRow}>
        <span className={styles.label}>Courts We Appear In</span>
        <span className={styles.rule} aria-hidden="true" />
      </div>

      <div className={styles.track} aria-hidden="true">
        <div className={`${styles.marqueeRow} ${styles.left}`}>
          {marqueeItems.map((court, i) => (
            <span key={i} className={styles.item}>
              {court}
              <span className={styles.sep} aria-hidden="true">·</span>
            </span>
          ))}
        </div>
        <div className={`${styles.marqueeRow} ${styles.right}`}>
          {[...marqueeItems].reverse().map((court, i) => (
            <span key={i} className={styles.item}>
              {court}
              <span className={styles.sep} aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Accessible list */}
      <ul className={styles.srOnly}>
        {courts.map((court) => (
          <li key={court}>{court}</li>
        ))}
      </ul>
    </section>
  );
}
