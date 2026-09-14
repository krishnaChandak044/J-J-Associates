import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./TeamGrid.module.css";

export function TeamGrid() {
  const advocates = siteConfig.advocates ?? [];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our People</span>
          <h2 className={styles.title}>Meet The Advocates</h2>
        </div>

        <div className={styles.grid}>
          {advocates.map((member) => {
            const monogram = member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);

            return (
              <Link key={member.slug} href={`/team/${member.slug}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  {/* Monogram placeholder instead of Image */}
                  <div className={styles.monogramPlaceholder}>
                    {monogram}
                  </div>
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <div className={styles.designation}>{member.role}</div>
                  {member.quote && (
                    <p className={styles.quote}>"{member.quote}"</p>
                  )}
                  <span className={styles.link}>
                    View Full Profile <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
