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
          <div className={styles.headerContent}>
            <span className={styles.label}>The Founders</span>
            <h2 className={styles.title}>Meet the Founders</h2>
          </div>
        </div>

        <div className={styles.grid}>
          {advocates.map((adv, i) => (
            <motion.div
              key={adv.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            >
              <div className={styles.profileHeader}>
                <div className={styles.imageWrap}>
                  <Image src={adv.image} alt={`${adv.name}, ${adv.role}`} fill className={styles.image} sizes="72px" />
                </div>
                <div className={styles.headerDetails}>
                  <span className={styles.role}>{adv.role}</span>
                  <h3 className={styles.name}>{adv.name}</h3>
                </div>
              </div>

              {"quote" in adv && <blockquote className={styles.quote}>&ldquo;{adv.quote}&rdquo;</blockquote>}

              {"specialisations" in adv && adv.specialisations.length > 0 && (
                <div className={styles.specs}>
                  {adv.specialisations.map(s => (
                    <span key={s} className={styles.spec}>{s}</span>
                  ))}
                </div>
              )}
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
