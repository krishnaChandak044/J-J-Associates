import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Footer.module.css";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";
import { WaveDivider } from "@/components/ui/WaveDivider/WaveDivider";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <WaveDivider position="top" fillColor="var(--color-surface)" flip={false} />
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoTitle}>
                Jaju <span className={styles.logoAmpersand}>&</span> Jaju
              </div>
              <div className={styles.logoSubtitle}>Associates · Advocates</div>
            </Link>
            <p className={styles.description}>
              {siteConfig.tagline} Providing strategic, principled, and relentless legal representation across Pune's courts for over two decades.
            </p>
            <div className={styles.socials}>
              {siteConfig.socialLinks.linkedin && (
                <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              )}
              {/* Add more social icons here if needed */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={styles.colTitle}>The Firm</h4>
            <div className={styles.linkList}>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/team" className={styles.link}>Our Lawyers</Link>
              <Link href="/case-results" className={styles.link}>Track Record</Link>
              <Link href="/insights" className={styles.link}>Insights & Updates</Link>
              <Link href="/careers" className={styles.link}>Careers</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className={styles.colTitle}>Practice Areas</h4>
            <div className={styles.practiceGrid}>
              {practiceAreas.map((area) => (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`} className={styles.link}>
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            
            <div className={styles.contactItem}>
              <MapPin size={20} className={styles.contactIcon} />
              <div className={styles.contactText}>
                {siteConfig.address.full}
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <Phone size={20} className={styles.contactIcon} />
              <div className={styles.contactText}>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className={styles.contactLink}>
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <Mail size={20} className={styles.contactIcon} />
              <div className={styles.contactText}>
                <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
                  {siteConfig.email}
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <Clock size={20} className={styles.contactIcon} />
              <div className={styles.contactText}>
                {siteConfig.officeHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} {siteConfig.firmName}. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/disclaimer" className={styles.legalLink}>Disclaimer</Link>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Use</Link>
          </div>
        </div>

        {/* BCI Disclaimer */}
        <div className={styles.disclaimer}>
          This website is not an advertisement or solicitation. The Bar Council of India Rules prohibit law firms from soliciting work or advertising. The information herein is for general informational purposes only, is provided upon the user's explicit request, and does not constitute legal advice or create a lawyer-client relationship.
        </div>
      </div>
    </footer>
  );
}
