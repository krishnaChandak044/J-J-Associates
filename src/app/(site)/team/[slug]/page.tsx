import { notFound } from "next/navigation";
import { Mail, Phone, GraduationCap, Award, Briefcase } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const advocates: readonly any[] = siteConfig.advocates ?? [];
  return advocates.map((adv) => ({
    slug: adv.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const advocates: readonly any[] = siteConfig.advocates ?? [];
  const member = advocates.find(a => a.slug === resolvedParams.slug);

  if (!member) {
    return { title: "Not Found" };
  }

  return generatePageMetadata({
    title: `${member.name} - ${member.role} | Jaju & Jaju Associates`,
    description: member.quote || member.bio?.substring(0, 150) || `Profile of ${member.name}`,
    path: `/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const resolvedParams = await params;
  
  const advocates: readonly any[] = siteConfig.advocates ?? [];
  const member = advocates.find(a => a.slug === resolvedParams.slug);

  if (!member) {
    notFound();
  }

  // Generate fallback monogram if no image
  const monogram = member.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* ── Sidebar (Photo & Contact) ── */}
        <aside className={styles.sidebar}>
          <div className={styles.imageWrapper}>
            {/* If we had an image it would go here, fallback to monogram block */}
            <div className={styles.monogramPlaceholder}>
              {monogram}
            </div>
          </div>

          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>Contact {member.name.split(' ')[1] || 'Advocate'}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                {siteConfig.phone}
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} className={styles.contactIcon} />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </aside>

        {/* ── Main Content (Bio & Data) ── */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.name}>{member.name}</h1>
            <div className={styles.designation}>{member.role}</div>
            
            {member.specialisations && member.specialisations.length > 0 && (
              <div className={styles.badges}>
                {member.specialisations.map((spec: string, i: number) => (
                  <span key={i} className={styles.badge}>{spec}</span>
                ))}
              </div>
            )}
          </div>

          <div className={styles.bioBlock}>
            <h2 className={styles.bioTitle}>Biography</h2>
            <div className={styles.bioText}>
              <p className={styles.quote}>"{member.quote}"</p>
              {member.bio.split('\n\n').map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {member.lawSchool && (
            <div className={styles.dataSection}>
              <h3 className={styles.dataTitle}>
                <GraduationCap className={styles.dataIcon} /> Education
              </h3>
              <ul className={styles.dataList}>
                <li className={styles.dataItem}>{member.lawSchool}</li>
              </ul>
            </div>
          )}

          {member.barCouncil && (
            <div className={styles.dataSection}>
              <h3 className={styles.dataTitle}>
                <Award className={styles.dataIcon} /> Bar Admissions
              </h3>
              <ul className={styles.dataList}>
                <li className={styles.dataItem}>{member.barCouncil} ({member.enrolledYear})</li>
                <li className={styles.dataItem}>Enrollment No: {member.enrollmentNo}</li>
              </ul>
            </div>
          )}

          {member.languages && member.languages.length > 0 && (
            <div className={styles.dataSection}>
              <h3 className={styles.dataTitle}>
                <Briefcase className={styles.dataIcon} /> Languages Spoken
              </h3>
              <ul className={styles.dataList}>
                {member.languages.map((lang: string, i: number) => (
                  <li key={i} className={styles.dataItem}>{lang}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
