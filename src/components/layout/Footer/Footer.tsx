import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../../public/logo/j&j_logo.png";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Footer.module.css";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const firmLinks = [
    { label: "About the Firm", href: "/about" },
    { label: "Our Advocates", href: "/team" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "On the Record", href: "/case-results" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image 
                src={logoImg} 
                alt="Jaju & Jaju Associates Logo" 
                width={200}
                height={60}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.philosophy}>
              &ldquo;{siteConfig.philosophy}&rdquo;
            </p>
            <div className={styles.barCouncil}>
              Enrolled: {siteConfig.barCouncil}
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h4 className={styles.colTitle}>Practice Areas</h4>
            <div className={styles.linkList}>
              {practiceAreas.map((area) => (
                <Link key={area.slug} href={`/practice-areas/${area.slug}`} className={styles.link}>
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: The Firm */}
          <div>
            <h4 className={styles.colTitle}>The Firm</h4>
            <div className={styles.linkList}>
              {firmLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Courts */}
            {siteConfig.shortCourts && (
              <div className={styles.courtsBlock}>
                <h5 className={styles.courtsTitle}>Courts We Appear In</h5>
                <ul className={styles.courtsList}>
                  {siteConfig.shortCourts.map((court) => (
                    <li key={court} className={styles.courtItem}>{court}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>

            {siteConfig.addresses?.map((address, index) => (
              <div key={index} className={styles.contactItem} style={index > 0 ? { marginTop: '1rem' } : {}}>
                <MapPin size={18} className={styles.contactIcon} />
                <div className={styles.contactText}>
                  {address.line1}<br />
                  {address.line2}<br />
                  {address.city}, {address.state} - {address.pin}
                </div>
              </div>
            ))}

            <div className={styles.contactItem}>
              <Phone size={18} className={styles.contactIcon} />
              <div className={styles.contactText}>
                <a href={`tel:${siteConfig.phoneRaw}`} className={styles.contactLink}>
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail size={18} className={styles.contactIcon} />
              <div className={styles.contactText}>
                <a href={`mailto:${siteConfig.email}`} className={styles.contactLink}>
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Clock size={18} className={styles.contactIcon} />
              <div className={styles.contactText}>
                {siteConfig.hours?.days}<br />
                {siteConfig.hours?.time}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              WhatsApp Us →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} {siteConfig.firmName}. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/disclaimer" className={styles.legalLink}>Disclaimer</Link>
          </div>
        </div>

        {/* BCI Disclaimer */}
        <div className={styles.disclaimer}>
          The information on this website does not constitute legal advice and does not create an attorney-client relationship.
          Please consult an advocate before acting on any information. Enrolled with the {siteConfig.barCouncil}. Regulated by the Bar Council of India.
        </div>
      </div>
    </footer>
  );
}
