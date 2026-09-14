import { Star } from "lucide-react";
import styles from "./TestimonialsPreview.module.css";

const TESTIMONIALS = [
  { _id: "1", text: "Jaju & Jaju Associates handled my highly complex property dispute with incredible professionalism. They explained every legal nuance and secured a victory much faster than I anticipated.", clientType: "Corporate Client", stars: 5, source: "Google Reviews" },
  { _id: "2", text: "Going through a divorce is emotionally draining, but the team here was deeply empathetic while remaining fiercely protective of my rights in court. I cannot thank them enough.", clientType: "Family Law Client", stars: 5, source: "Direct Feedback" },
  { _id: "3", text: "Their strategic acumen in our shareholder litigation saved our company from a hostile takeover. Truly Pune's finest legal minds.", clientType: "Managing Director", stars: 5, source: "LinkedIn Recommendation" },
  { _id: "4", text: "Transparent billing, clear communication, and an aggressive stance when needed. They don't just practice law; they master it.", clientType: "Real Estate Developer", stars: 5, source: "Google Reviews" },
  { _id: "5", text: "I was falsely accused in a cheque bounce case. Adv. Jaju got the case quashed in record time. I finally have my peace of mind back. Highly recommended for criminal defense.", clientType: "Business Owner", stars: 5, source: "Google Reviews" },
  { _id: "6", text: "We rely on Jaju & Jaju for all our commercial contracts and compliance. Having them on retainer has completely de-risked our operations. A truly professional outfit.", clientType: "Tech Startup Founder", stars: 5, source: "Direct Feedback" },
  { _id: "7", text: "Their attention to detail during the title verification of our new factory land saved us from what would have been a disastrous multi-crore mistake.", clientType: "Manufacturing CEO", stars: 5, source: "LinkedIn Recommendation" },
];

// Duplicate for seamless loop
const ROW1 = [...TESTIMONIALS, ...TESTIMONIALS];
const ROW2 = [...TESTIMONIALS.slice(3), ...TESTIMONIALS.slice(3)];

function Card({ text, clientType, stars, source }: { text: string; clientType: string; stars: number; source: string }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {[...Array(stars)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <p className={styles.quote}>{text}</p>
      <div className={styles.footer}>
        <span className={styles.clientInfo}>{clientType}</span>
        <span className={styles.source}>{source}</span>
      </div>
    </div>
  );
}

export function TestimonialsPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Client Testimonials</span>
        <h2 className={styles.title}>What Our Clients Say</h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className={styles.track}>
        <div className={`${styles.marqueeRow} ${styles.scrollLeft}`}>
          {ROW1.map((t, i) => <Card key={`r1-${i}`} {...t} />)}
        </div>
      </div>

      {/* Row 2 — scrolls right (offset) */}
      <div className={styles.track}>
        <div className={`${styles.marqueeRow} ${styles.scrollRight}`}>
          {ROW2.map((t, i) => <Card key={`r2-${i}`} {...t} />)}
        </div>
      </div>
    </section>
  );
}
