import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm/ContactForm";
import { WaveDivider } from "@/components/ui/WaveDivider/WaveDivider";
import styles from "./page.module.css";

export const metadata = generatePageMetadata({
  title: "Contact Us | Jaju & Jaju Associates Pune",
  description: "Get in touch with Jaju & Jaju Associates. Schedule a consultation with our expert legal team at our Pune office.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Contact The Firm</h1>
          <p className={styles.tagline}>
            Strategic legal counsel begins with a confidential conversation. 
            Reach out to our offices in Pune to schedule a consultation with our partners.
          </p>
        </div>
        <WaveDivider position="bottom" fillColor="var(--color-bg)" />
      </section>

      <section className={styles.mainSection}>
        <div className={styles.container}>
          
          {/* ── Left: Contact Info & Map ── */}
          <div className={styles.infoPanel}>
            
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Headquarters</h3>
                <p className={styles.cardText}>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pin}
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Phone</h3>
                <p className={styles.cardText}>
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className={styles.cardLink}>
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Email</h3>
                <p className={styles.cardText}>
                  <a href={`mailto:${siteConfig.email}`} className={styles.cardLink}>
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Clock size={24} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Business Hours</h3>
                <p className={styles.cardText}>
                  Monday – Friday: 10:00 AM – 7:00 PM<br />
                  Saturday: 10:00 AM – 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Creative Advanced Touch: Stylized Map Graphic */}
            <div className={styles.mapWrapper}>
              {/* Unsplash image resembling a satellite/drone view of a city */}
              <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop" 
                alt="Pune Office Location Map" 
                className={styles.mapImage} 
              />
              <div className={styles.mapOverlay}>
                <div className={styles.pulseDot}></div>
                Shivajinagar, Pune
              </div>
            </div>

          </div>

          {/* ── Right: Interactive Form ── */}
          <div className={styles.formPanel}>
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  );
}
