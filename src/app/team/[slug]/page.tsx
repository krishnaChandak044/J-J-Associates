import { notFound } from "next/navigation";
import { Mail, Phone, GraduationCap, Award, Briefcase, ChevronRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { TEAM_MEMBER_BY_SLUG_QUERY, TEAM_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { generatePageMetadata } from "@/lib/seo";
import styles from "./page.module.css";
import type { TeamMember } from "@/sanity/types";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
  let slugs: string[] = [];
  try {
    slugs = await client.fetch<string[]>(TEAM_SLUGS_QUERY);
  } catch (error) {
    console.warn("Failed to fetch team slugs for static generation.");
  }
  
  // Provide fallback slugs for local development if CMS is empty
  if (!slugs || slugs.length === 0) {
    slugs = ["rajesh-jaju", "smita-jaju", "vikram-deshmukh"];
  }

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate SEO Metadata
export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  let member: TeamMember | null = null;
  
  try {
    member = await client.fetch<TeamMember>(TEAM_MEMBER_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  } catch (error) {
    // Ignore in dev
  }

  if (!member) {
    // Check fallback
    if (resolvedParams.slug === "rajesh-jaju") {
      return generatePageMetadata({
        title: "Adv. Rajesh Jaju - Managing Partner | Jaju & Jaju Associates",
        description: "Founder and Managing Partner at Jaju & Jaju Associates, Pune.",
        path: `/team/${resolvedParams.slug}`,
      });
    }
    return { title: "Not Found" };
  }

  return generatePageMetadata({
    title: `${member.name} - ${member.designation} | Jaju & Jaju Associates`,
    description: member.quote || member.bio?.substring(0, 150) || `Profile of ${member.name}`,
    path: `/team/${member.slug?.current}`,
  });
}

export default async function TeamMemberPage({ params }: Props) {
  const resolvedParams = await params;
  
  let member: TeamMember | null = null;
  try {
    member = await client.fetch<TeamMember>(TEAM_MEMBER_BY_SLUG_QUERY, { slug: resolvedParams.slug });
  } catch (error) {
    console.warn("Failed to fetch team member. Falling back to mock data.");
  }

  // Fallback mock data if CMS is empty
  if (!member) {
    if (resolvedParams.slug === "rajesh-jaju") {
      member = {
        _id: "1",
        name: "Adv. Rajesh Jaju",
        designation: "Founder & Managing Partner",
        yearsExp: 25,
        email: "rajesh@jajuassociates.com",
        specialties: ["Corporate Litigation", "Real Estate Disputes", "Arbitration"],
        bio: "Adv. Rajesh Jaju is the visionary founder of Jaju & Jaju Associates. With over two decades of rigorous litigation experience across the District Courts of Pune and the Bombay High Court, he has built a reputation for relentless advocacy and strategic brilliance.\n\nHe regularly advises multinational corporations, high-net-worth families, and leading real estate developers on highly complex, multi-crore disputes. His philosophy is simple: preparation is the ultimate weapon in the courtroom.",
        education: ["LL.B. - ILS Law College, Pune", "B.Com - Savitribai Phule Pune University"],
        barAdmissions: ["Bar Council of Maharashtra & Goa", "Supreme Court Bar Association"],
        notableMatters: [
          "Successfully defended a major real estate developer in a 50-crore RERA dispute.",
          "Lead counsel in a high-profile shareholder arbitration resulting in a favorable buyout."
        ],
        fallbackImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
      } as any;
    } else {
      notFound();
    }
  }

  const imageUrl = member?.photo 
    ? urlFor(member.photo).width(800).height(1066).url()
    : (member as any)?.fallbackImg || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* ── Sidebar (Photo & Contact) ── */}
        <aside className={styles.sidebar}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={member?.name} className={styles.image} />
          </div>

          <div className={styles.contactCard}>
            <h3 className={styles.contactTitle}>Contact {member?.name?.split(' ')[1] || 'Advocate'}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={18} className={styles.contactIcon} />
                +91 20 2553 1234
              </li>
              {member?.email && (
                <li className={styles.contactItem}>
                  <Mail size={18} className={styles.contactIcon} />
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </li>
              )}
            </ul>
          </div>
        </aside>

        {/* ── Main Content (Bio & Data) ── */}
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.name}>{member?.name}</h1>
            <div className={styles.designation}>{member?.designation}</div>
            
            {member?.specialties && member.specialties.length > 0 && (
              <div className={styles.badges}>
                {member.specialties.map((spec: string, i: number) => (
                  <span key={i} className={styles.badge}>{spec}</span>
                ))}
              </div>
            )}
          </div>

          <div className={styles.bioBlock}>
            <h2 className={styles.bioTitle}>Biography</h2>
            <div className={styles.bioText}>
              {member?.bio || "Biography details are currently being updated."}
            </div>
          </div>

          {member?.education && member.education.length > 0 && (
            <div className={styles.dataSection}>
              <h3 className={styles.dataTitle}>
                <GraduationCap className={styles.dataIcon} /> Education
              </h3>
              <ul className={styles.dataList}>
                {member.education.map((edu: string, i: number) => (
                  <li key={i} className={styles.dataItem}>{edu}</li>
                ))}
              </ul>
            </div>
          )}

          {member?.barAdmissions && member.barAdmissions.length > 0 && (
            <div className={styles.dataSection}>
              <h3 className={styles.dataTitle}>
                <Award className={styles.dataIcon} /> Bar Admissions
              </h3>
              <ul className={styles.dataList}>
                {member.barAdmissions.map((ad: string, i: number) => (
                  <li key={i} className={styles.dataItem}>{ad}</li>
                ))}
              </ul>
            </div>
          )}

          {member?.notableMatters && member.notableMatters.length > 0 && (
            <div className={styles.dataSection}>
              <h3 className={styles.dataTitle}>
                <Briefcase className={styles.dataIcon} /> Notable Matters
              </h3>
              <ul className={styles.dataList}>
                {member.notableMatters.map((matter: string, i: number) => (
                  <li key={i} className={styles.dataItem}>{matter}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
