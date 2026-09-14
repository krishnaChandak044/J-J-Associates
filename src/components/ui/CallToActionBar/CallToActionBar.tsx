import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./CallToActionBar.module.css";

export function CallToActionBar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Not sure which applies? <span className={styles.highlight}>Just call.</span>
            </h2>
            <p className={styles.description}>
              Describe the situation in plain words — routing it to the right practice is our job, not yours.
            </p>
          </div>
          
          <div className={styles.actions}>
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className={styles.callButton}>
              <Phone size={18} />
              <span>Call the Firm</span>
            </a>
            
            <Link href="/contact" className={styles.bookButton}>
              <Calendar size={18} />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
