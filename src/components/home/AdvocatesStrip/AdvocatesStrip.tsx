"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./AdvocatesStrip.module.css";
import { siteConfig } from "@/data/siteConfig";

export function AdvocatesStrip() {
  const advocates = siteConfig.advocates ?? [];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Advocates</span>
          <h2 className={styles.title}>Who You&apos;ll Be Working With</h2>
        </div>

        <div className={styles.grid}>
          {advocates.map((adv, i) => (
            <motion.div
              key={adv.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.12 }}
            >
              {adv.image ? (
                <div className={styles.imageWrap}>
                  <Image src={adv.image} alt={adv.name} fill className={styles.image} />
                </div>
              ) : (
                <div className={styles.monogram}>
                  {adv.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
              )}
              <div className={styles.cardContent}>
                <span className={styles.role}>{adv.role}</span>
                <h3 className={styles.name}>{adv.name}</h3>
                <blockquote className={styles.quote}>&ldquo;{adv.quote}&rdquo;</blockquote>
                <div className={styles.specs}>
                  {adv.specialisations.map(s => (
                    <span key={s} className={styles.spec}>{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/team" className={styles.viewLink}>
            Read full profiles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
