import styles from "./Stats.module.css";

const stats = [
  { value: "Pune", label: "Local legal counsel" },
  { value: "2", label: "Co-founders" },
  { value: "2", label: "Pune offices" },
  { value: "10", label: "Practice areas" },
];

export function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div className={styles.statc} key={stat.label}>
              <span className={styles.n}>{stat.value}</span>
              <span className={styles.l}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
