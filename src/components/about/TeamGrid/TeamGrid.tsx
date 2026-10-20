import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./TeamGrid.module.css";

export function TeamGrid() {
  const advocates = siteConfig.advocates ?? [];
  const founder = advocates.find((member) => member.role.toLowerCase().includes("founder"));
  const teamMembers = advocates.filter((member) => member !== founder);

  function renderMember(member: (typeof advocates)[number], label: string) {
    const monogram = member.name.split(" ").map((name) => name[0]).join("").slice(0, 2);

    return (
      <Link key={member.slug} href={`/team/${member.slug}`} className={styles.card}>
        <span className={styles.memberLabel}>{label}</span>
        <div className={styles.imageWrapper}>
          <div className={styles.monogramPlaceholder} aria-hidden="true">{monogram}</div>
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{member.name}</h3>
          <div className={styles.designation}>{member.role}</div>
          {member.quote && <p className={styles.quote}>“{member.quote}”</p>}
          <span className={styles.link}>View Full Profile <ArrowRight size={16} /></span>
        </div>
      </Link>
    );
  }

  return (
    <section className={styles.section} aria-label="The Firm">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our People</span>
          <h2 className={styles.title}>The Firm</h2>
        </div>

        {founder && (
          <section className={styles.group} aria-labelledby="founder-heading">
            <h3 className={styles.groupTitle} id="founder-heading">Founder</h3>
            <div className={styles.founderGrid}>{renderMember(founder, "Founder")}</div>
          </section>
        )}

        {teamMembers.length > 0 && (
          <section className={styles.group} aria-labelledby="team-members-heading">
            <h3 className={styles.groupTitle} id="team-members-heading">Team Members</h3>
            <div className={styles.grid}>
              {teamMembers.map((member, index) => renderMember(member, `Team Member ${String(index + 1).padStart(2, "0")}`))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
