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
        <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '4px' }}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
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

      {/* Row 1, scrolls left */}
      <div className={styles.track}>
        <div className={`${styles.marqueeRow} ${styles.scrollLeft}`}>
          {ROW1.map((t, i) => <Card key={`r1-${i}`} {...t} />)}
        </div>
      </div>

      {/* Row 2, scrolls right (offset) */}
      <div className={styles.track}>
        <div className={`${styles.marqueeRow} ${styles.scrollRight}`}>
          {ROW2.map((t, i) => <Card key={`r2-${i}`} {...t} />)}
        </div>
      </div>
    </section>
  );
}
