import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { TEAM_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import styles from "./TeamGrid.module.css";
import type { TeamMember } from "@/sanity/types";

export async function TeamGrid() {
  let team: TeamMember[] = [];
  try {
    team = await client.fetch<TeamMember[]>(TEAM_QUERY, {}, {
      next: { revalidate: 3600, tags: ["teamMember"] }
    });
  } catch (error) {
    console.warn("Sanity fetch failed for Team. Falling back to mock data.");
  }

  // Fallback data if CMS is empty or unconfigured
  const displayTeam = team.length > 0 ? team : [
    {
      _id: "1",
      name: "Adv. Rajesh Jaju",
      slug: { current: "rajesh-jaju" },
      designation: "Founder & Managing Partner",
      quote: "Justice is not merely a verdict; it is the restoration of order and fairness in society.",
      fallbackImg: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "2",
      name: "Adv. Smita Jaju",
      slug: { current: "smita-jaju" },
      designation: "Senior Partner - Family Law",
      quote: "Navigating family disputes requires both a sharp legal mind and a deeply empathetic heart.",
      fallbackImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
    },
    {
      _id: "3",
      name: "Adv. Vikram Deshmukh",
      slug: { current: "vikram-deshmukh" },
      designation: "Partner - Corporate Litigation",
      quote: "In the corporate arena, a well-structured defense is often the most potent offense.",
      fallbackImg: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our People</span>
          <h2 className={styles.title}>Meet The Advocates</h2>
        </div>

        <div className={styles.grid}>
          {displayTeam.map((member: any) => {
            const imageUrl = member.photo 
              ? urlFor(member.photo).width(800).height(1066).url() // 3:4 aspect ratio
              : member.fallbackImg;

            return (
              <Link key={member._id} href={`/team/${member.slug?.current}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  {imageUrl && (
                    <img 
                      src={imageUrl} 
                      alt={member.name} 
                      className={styles.image}
                    />
                  )}
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <div className={styles.designation}>{member.designation}</div>
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
