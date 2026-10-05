import Link from "next/link";
import { 
  Phone, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  MapPin, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import styles from "./CallToActionBar.module.css";

export function CallToActionBar() {
  const phoneClean = siteConfig.phoneRaw || siteConfig.phone.replace(/\s+/g, "");

  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Subtle Ambient Background Elements */}
          <div className={styles.glowDecor} aria-hidden="true" />
          <div className={styles.patternDecor} aria-hidden="true" />

          {/* Left Column: Primary Pitch & Actions */}
          <div className={styles.leftCol}>
            <div className={styles.trustBadge}>
              <ShieldCheck size={15} className={styles.badgeIcon} />
              <span>Privileged & Strictly Confidential</span>
            </div>

            <h2 id="cta-heading" className={styles.title}>
              Discuss your matter <span className={styles.highlight}>in confidence.</span>
            </h2>

            <p className={styles.description}>
              Speak directly with our senior advocates to evaluate your legal options, understand court processes, and protect your interests with total discretion and candour.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryBtn}>
                <Calendar size={18} />
                <span>Book Consultation</span>
                <ArrowRight size={16} className={styles.btnArrow} />
              </Link>

              <a 
                href={`tel:${phoneClean}`} 
                className={styles.secondaryBtn}
              >
                <Phone size={18} />
                <span>Call {siteConfig.phone}</span>
              </a>
            </div>

            <div className={styles.trustPoints}>
              <div className={styles.trustPoint}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Direct Senior Advocate Review</span>
              </div>
              <div className={styles.trustPoint}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>No Obligation Assessment</span>
              </div>
              <div className={styles.trustPoint}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>Pune & Maharashtra Courts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Quick-Connect / Consultation Info Card */}
          <div className={styles.rightCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <span className={styles.infoEyebrow}>Direct Consultation</span>
                <h3 className={styles.infoTitle}>What to Expect</h3>
              </div>

              <div className={styles.featureList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>1</div>
                  <div className={styles.featureText}>
                    <strong>Case Fact Review</strong>
                    <span>Comprehensive examination of your documents and timelines by Adv. Gaurav Jaju or Adv. Ankita Jaju.</span>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>2</div>
                  <div className={styles.featureText}>
                    <strong>Candid Legal Assessment</strong>
                    <span>Honest evaluation of your legal standing, risks, and realistic court expectations before filing.</span>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureBullet}>3</div>
                  <div className={styles.featureText}>
                    <strong>Strategic Next Steps</strong>
                    <span>A clear roadmap of remedies, dispute resolution paths, and procedural requirements.</span>
                  </div>
                </div>
              </div>

              <div className={styles.infoDivider} />

              <div className={styles.quickChannels}>
                <div className={styles.channelItem}>
                  <Clock size={15} className={styles.channelIcon} />
                  <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
                </div>
                <div className={styles.channelItem}>
                  <MapPin size={15} className={styles.channelIcon} />
                  <span>Chambers: Kasba Peth & Shukrawar Peth</span>
                </div>
              </div>

              <a 
                href={siteConfig.whatsapp || `https://wa.me/918149901255`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsappBtn}
              >
                <MessageSquare size={16} />
                <span>Instant WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
