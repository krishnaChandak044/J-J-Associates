import { Star } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import styles from "./TestimonialsPreview.module.css";
import type { Testimonial } from "@/sanity/types";

export async function TestimonialsPreview() {
  let testimonials: Testimonial[] = [];
  try {
    testimonials = await client.fetch<Testimonial[]>(TESTIMONIALS_QUERY, {}, {
      next: { revalidate: 3600, tags: ["testimonial"] }
    });
  } catch (error) {
    console.warn("Sanity fetch failed. Falling back to mock data.");
  }

  // Fallback data if CMS is empty or unconfigured
  const displayTestimonials = testimonials.length > 0 ? testimonials.slice(0, 6) : [
    {
      _id: "1",
      text: "Jaju & Jaju Associates handled my highly complex property dispute with incredible professionalism. They explained every legal nuance and secured a victory much faster than I anticipated.",
      clientType: "Corporate Client",
      stars: 5,
      source: "Google Reviews"
    },
    {
      _id: "2",
      text: "Going through a divorce is emotionally draining, but the team here was deeply empathetic while remaining fiercely protective of my rights in court. I cannot thank them enough.",
      clientType: "Family Law Client",
      stars: 5,
      source: "Direct Feedback"
    },
    {
      _id: "3",
      text: "Their strategic acumen in our shareholder litigation saved our company from a hostile takeover. Truly Pune's finest legal minds.",
      clientType: "Managing Director",
      stars: 5,
      source: "LinkedIn Recommendation"
    },
    {
      _id: "4",
      text: "Transparent billing, clear communication, and an aggressive stance when needed. They don't just practice law; they master it.",
      clientType: "Real Estate Developer",
      stars: 5,
      source: "Google Reviews"
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Client Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <div className={styles.masonry}>
          {displayTestimonials.map((testimonial: any) => (
            <div key={testimonial._id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(testimonial.stars || 5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quote}>{testimonial.text}</p>
              <div className={styles.footer}>
                <div className={styles.clientInfo}>{testimonial.clientType}</div>
                <div className={styles.source}>{testimonial.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
