import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import styles from "./PracticeAreasPreview.module.css";
import { practiceAreas } from "@/data/practiceAreas";

export function PracticeAreasPreview() {
  const previewAreas = practiceAreas.slice(0, 8); // Showing 8 to match the grid style better

  return (
    <section id="practice" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.secHead}>
          <span className={styles.secIndex}>01</span>
          <div className={styles.txt}>
            <span className={styles.secEyebrow}>
              <span className={styles.dot}></span> Practice Areas
            </span>
            <h2 className={styles.title}>
              What do you need <span className={styles.accentI}>help</span> with?
            </h2>
            <p className={styles.sub}>
              Focused practice areas, one measured approach — pick yours to see process, documents and timelines.
            </p>
          </div>
          <Link href="/practice-areas" className={styles.link}>
            See all <ArrowRight size={15} strokeWidth={2.4} />
          </Link>
        </div>

        <div className={styles.pgrid}>
          {previewAreas.map((area) => {
            const IconComponent = (LucideIcons as any)[area.icon] || LucideIcons.Scale;
            
            return (
              <Link href={`/practice-areas/${area.slug}`} key={area.slug} className={styles.pcardx}>
                <span className={styles.ico}>
                  <IconComponent size={20} strokeWidth={2.28} />
                </span>
                <h3>{area.name}</h3>
                <p>{area.tagline}</p>
                <span className={styles.go}>
                  <ArrowRight size={15} strokeWidth={2.4} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
