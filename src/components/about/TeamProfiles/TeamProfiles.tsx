"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, FileText, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./TeamProfiles.module.css";

type TeamMember = (typeof siteConfig.teamMembers)[number];

export function TeamProfiles({ members = siteConfig.teamMembers }: { members?: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className={styles.grid}>
        {members.map((member) => (
          <article key={member.slug} className={styles.card}>
            <div className={styles.portrait}>
              <Image src={member.image} alt={member.name} fill sizes="144px" />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <button className={styles.profileButton} onClick={() => setSelected(member)}>
              <FileText size={18} aria-hidden="true" />
              View profile
            </button>
          </article>
        ))}
      </div>

      {selected && (
        <div className={styles.backdrop} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="team-profile-title">
            <button ref={closeButtonRef} type="button" className={styles.closeButton} onClick={() => setSelected(null)} aria-label="Close profile">
              <X size={24} />
            </button>
            <div className={styles.profileHeader}>
              <div className={styles.dialogPortrait}>
                <Image src={selected.image} alt="" fill sizes="128px" />
              </div>
              <div>
                <h2 id="team-profile-title" className={styles.dialogName}>{selected.name}</h2>
                <p className={styles.dialogRole}>{selected.role}</p>
                <p className={styles.practiceLine}>J&amp;J Associates · Pune</p>
              </div>
            </div>
            <p className={styles.intro}>Contact our team to discuss your matter and arrange a consultation with J&amp;J Associates.</p>
            <div className={styles.actionRow}>
              <Link href="/contact" className={styles.bookButton}>
                <CalendarDays size={20} aria-hidden="true" />
                Book a consultation
              </Link>
              <a href={`tel:${siteConfig.phoneRaw}`} className={styles.callButton}>
                <Phone size={20} aria-hidden="true" />
                Call the chamber
              </a>
            </div>
            <p className={styles.note}>Our team will help direct your enquiry to the right advocate.</p>
          </section>
        </div>
      )}
    </>
  );
}
