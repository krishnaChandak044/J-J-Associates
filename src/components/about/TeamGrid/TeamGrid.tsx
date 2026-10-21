import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./TeamGrid.module.css";

export function TeamGrid() {
  const advocates = siteConfig.advocates ?? [];
  const founders = advocates.filter((member) => member.role.toLowerCase().includes("founder"));
  const teamMembers = siteConfig.teamMembers;

  function renderMember(member: (typeof advocates)[number], label: string) {
    const monogram = member.name.split(" ").map((name) => name[0]).join("").slice(0, 2);

    return (
      <Link key={member.slug} href={`/team/${member.slug}`} className={styles.card}>
        <span className={styles.memberLabel}>{label}</span>
        <div className={styles.imageWrapper}>
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name}, ${member.role}`}
              fill
              className={`${styles.image} ${member.slug === "gaurav-jaju" ? styles.founderGaurav : member.slug === "ankita-jaju" ? styles.founderAnkita : ""}`}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          ) : (
            <div className={styles.monogramPlaceholder} aria-hidden="true">{monogram}</div>
          )}
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

  function renderTeamMember(member: (typeof teamMembers)[number], index: number) {
    return (
      <article key={member.slug} className={styles.card}>
        <span className={styles.memberLabel}>Team Member {String(index + 1).padStart(2, "0")}</span>
        <div className={styles.imageWrapper}>
          <Image src={member.image} alt={`${member.name}, ${member.role}`} fill className={styles.image} sizes="(max-width: 760px) 100vw, (max-width: 1023px) 50vw, 33vw" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{member.name}</h3>
          <div className={styles.designation}>{member.role}</div>
        </div>
      </article>
    );
  }

  return (
    <section className={styles.section} aria-label="The Firm">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our People</span>
          <h2 className={styles.title}>The Firm</h2>
        </div>

        {founders.length > 0 && (
          <section className={styles.group} aria-labelledby="founders-heading">
            <h3 className={styles.groupTitle} id="founders-heading">Founders</h3>
            <div className={styles.founderGrid}>
              {founders.map((member) => renderMember(member, "Co-Founder"))}
            </div>
          </section>
        )}

        {teamMembers.length > 0 && (
          <section className={styles.group} aria-labelledby="team-members-heading">
            <h3 className={styles.groupTitle} id="team-members-heading">Our Team</h3>
            <div className={styles.grid}>
              {teamMembers.map(renderTeamMember)}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
