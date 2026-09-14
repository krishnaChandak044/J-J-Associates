import { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm/ContactForm";
import { MapTabs } from "@/components/contact/MapTabs/MapTabs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Jaju & Jaju Associates Pune",
  description: "Get in touch with Jaju & Jaju Associates. Schedule a consultation with our expert legal team at our Pune office.",
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Jaju & Jaju Associates',
  url: siteConfig.url,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  address: siteConfig.addresses?.map(addr => ({
    '@type': 'PostalAddress',
    streetAddress: addr.street,
    addressLocality: addr.city,
    addressRegion: addr.state,
    postalCode: addr.pin,
    addressCountry: 'IN',
  })),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '19:00',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book a consultation with Jaju & Jaju Associates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call us, WhatsApp us, or use the contact form on this page. We respond within 24 hours and can arrange a consultation on the same day or the next working day in most cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer online or video consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer in-person consultations at our Pune office and video call or phone consultations for clients outside Pune or those who prefer remote meetings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the first consultation free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first consultation involves a nominal fee — which covers the time spent reviewing your matter honestly and giving you a clear picture of your legal position.',
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="hero-bg-circle" />
        <div className={styles.heroInner}>
          <span className={styles.label}>Get in Touch</span>
          <h1 className={styles.heading}>Contact <span className="text-highlight">Us.</span></h1>
          <p className={styles.sub}>
            Call, WhatsApp, or use the form below. We respond to every enquiry within 24 hours — usually the same day.
          </p>
        </div>
      </section>

      {/* ── Main contact grid ── */}
      <section className={styles.mainSection}>
        <div className={styles.mainGrid}>
          
          {/* ── Left: form ── */}
          <div className={styles.formCol}>
            <span className={styles.colLabel}>Send a Message</span>
            <h2 className={styles.colTitle}>Describe your matter</h2>
            <p className={styles.colSub}>
              Tell us what your matter involves in plain language. We will read it before we call, so the conversation is useful from the start.
            </p>
            <ContactForm />
          </div>

          {/* ── Right: direct contact + info ── */}
          <div className={styles.infoCol}>
            {/* Direct call */}
            <div className={styles.infoBlock}>
              <span className={styles.infoBlockLabel}>Call or WhatsApp</span>
              <a href={`tel:${siteConfig.phoneRaw}`} className={styles.phoneNum}>
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                Open WhatsApp →
              </a>
            </div>

            {/* Email */}
            <div className={styles.infoBlock}>
              <span className={styles.infoBlockLabel}>Email</span>
              <a href={`mailto:${siteConfig.email}`} className={styles.emailLink}>
                {siteConfig.email}
              </a>
            </div>

            {/* Hours */}
            <div className={styles.infoBlock}>
              <span className={styles.infoBlockLabel}>Office Hours</span>
              <p className={styles.infoText}>
                {siteConfig.hours.days}
                <br />
                {siteConfig.hours.time}
              </p>
              <p className={styles.infoNote}>{siteConfig.hours.note}</p>
            </div>

            {/* Address */}
            <div className={styles.infoBlock}>
              <span className={styles.infoBlockLabel}>Office Addresses</span>
              {siteConfig.addresses?.map((address, index) => (
                <div key={index} style={index > 0 ? { marginTop: '1.5rem' } : {}}>
                  {address.name && <strong style={{display: 'block', marginBottom: '0.25rem', fontFamily: 'var(--font-ui)', color: 'var(--color-primary-dark)'}}>{address.name}</strong>}
                  <address className={styles.address}>
                    {address.line1}
                    <br />
                    {address.line2}
                    <br />
                    {address.city}, {address.state} — {address.pin}
                  </address>
                  <a
                    href={address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    View on Google Maps →
                  </a>
                </div>
              ))}
            </div>

            {/* Consultation options */}
            <div className={styles.consultBox}>
              <span className={styles.consultLabel}>Consultation Modes</span>
              <ul className={styles.consultList}>
                {['In-person (Pune office)', 'Phone call', 'Video call (Google Meet / Zoom)'].map((mode) => (
                  <li key={mode} className={styles.consultItem}>
                    <span className={styles.consultDot} aria-hidden="true" />
                    {mode}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className={styles.faqInner}>
          <div className={styles.faqHeader}>
            <span className={styles.faqLabel}>Before You Call</span>
            <h2 className={styles.faqTitle}>Common Questions</h2>
          </div>

          <div className={styles.faqList}>
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.name}</h3>
                <p className={styles.faqAnswer}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map embeds ── */}
      {siteConfig.addresses && <MapTabs addresses={siteConfig.addresses as any} />}
    </>
  );
}
