"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Stats.module.css";

const STATS = [
  { num: 15, suffix: "+", label: "Years of practice" },
  { num: 1000, suffix: "+", label: "Matters handled" },
  { num: 12, suffix: "", label: "Advocates on team" },
  { num: 5, suffix: "+", label: "High courts appeared" },
];

function useCountUp(target: number, duration = 1800, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [triggered, target, duration]);

  return count;
}

function StatItem({ num, suffix, label, triggered }: { num: number; suffix: string; label: string; triggered: boolean }) {
  const count = useCountUp(num, 1600, triggered);
  return (
    <div className={styles.statc}>
      <span className={styles.n}>
        {count}{suffix}
      </span>
      <span className={styles.l}>{label}</span>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
