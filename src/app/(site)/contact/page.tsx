import { generatePageMetadata, jsonLd, officeSchemas } from "@/lib/seo";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/contact/ContactForm/ContactForm";
import { MapTabs } from "@/components/contact/MapTabs/MapTabs";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import styles from "./page.module.css";

export const metadata = generatePageMetadata({
  title: "Contact J&J Associates | Pune Offices & Consultations",
  description: "Contact J&J Associates in Kasba Peth or Shukrawar Peth, Pune. Find the office addresses, phone numbers, hours and consultation enquiry form.",
  path: "/contact",
});

const contactFaqs = [
    {
      name: 'How do I book a consultation with J&J Associates?',
      acceptedAnswer: {
        text: 'Call us, WhatsApp us, or use the contact form on this page. We respond within 24 hours and can arrange a consultation on the same day or the next working day in most cases.',
      },
    },
    {
      name: 'Do you offer online or video consultations?',
      acceptedAnswer: {
        text: 'Yes. We offer in-person consultations at our Pune office and video call or phone consultations for clients outside Pune or those who prefer remote meetings.',
      },
    },
    {
      name: 'Is the first consultation free?',
      acceptedAnswer: {
        text: 'The first consultation involves a nominal fee, which covers the time spent reviewing your matter honestly and giving you a clear picture of your legal position.',
      },
    },
];

export default function ContactPage() {
  const officeDays = siteConfig.hours.days.replace(", ", "–");
  const officeTime = siteConfig.hours.time.replace(", ", "–");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({ "@context": "https://schema.org", "@graph": officeSchemas }),
        }}
      />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="hero-bg-circle" />
        <div className={styles.heroInner}>
          <div className={styles.replyPill}>
            <span className={styles.star}>★</span> Replies within 24-48 hours • Mon-Sat
          </div>
          <h1 className={styles.heading}>
            Let's discuss your <br/>
            matter <span className="text-highlight">in confidence.</span>
          </h1>
          <p className={styles.sub}>
            Call, WhatsApp, or send the form — every enquiry reaches an advocate, not a call centre, and stays privileged.
          </p>
        </div>
      </section>

      {/* ── Main contact grid ── */}
      <section className={styles.mainSection}>
        <div className={styles.mainGrid}>
          
          {/* ── Left: form ── */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <span className={styles.cardEyebrow}>Start a conversation</span>
              <h2 className={styles.colTitle}>Book a Consultation</h2>
              <p className={styles.colSub}>
                Share a few details and our team will get back to you with a clear next step.
              </p>
              <div id="enquiry" style={{ scrollMarginTop: "100px" }}><ContactForm /></div>
            </div>
            
            <div className={styles.faqInner}>
              <div className={styles.faqHeader}>
                <span className={styles.faqLabel}>Before You Call</span>
                <h2 className={styles.faqTitle}>Common Questions</h2>
              </div>
              <Accordion 
                items={contactFaqs.map(item => ({
                  question: item.name,
                  answer: item.acceptedAnswer.text
                }))}
                defaultOpenIndex={0}
              />
            </div>
          </div>

          {/* ── Right: direct contact + info ── */}
          <div className={styles.infoCol}>
            <div className={styles.infoHeader}>
              <span className={styles.cardEyebrow}>Get in touch</span>
              <h3 className={styles.infoColHeading}>Reach us directly</h3>
              <p className={styles.infoIntro}>Choose the easiest way to speak with our Pune team.</p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoIcon}><Phone size={20} aria-hidden="true" /></span>
              <div className={styles.infoContent}>
                <span className={styles.infoBlockLabel}>Call the office</span>
                {siteConfig.phoneNumbers.map((phone) => (
                  <a key={phone.raw} href={`tel:${phone.raw}`} className={styles.phoneNum}>
                    +91 {phone.display.slice(0, 5)} {phone.display.slice(5)}
                  </a>
                ))}
                <p className={styles.infoNote}>{officeDays} · {officeTime}</p>
              </div>
              <a href={`tel:${siteConfig.phoneRaw}`} className={styles.actionLink}>Call <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoIcon}><MessageCircle size={20} aria-hidden="true" /></span>
              <div className={styles.infoContent}>
                <span className={styles.infoBlockLabel}>WhatsApp</span>
                <p className={styles.infoText}>For documents and quick enquiries</p>
              </div>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.actionLink}>Chat <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoIcon}><Mail size={20} aria-hidden="true" /></span>
              <div className={styles.infoContent}>
                <span className={styles.infoBlockLabel}>Email</span>
                <a href={`mailto:${siteConfig.email}`} className={styles.emailLink}>{siteConfig.email}</a>
                <p className={styles.infoNote}>For detailed enquiries and attachments</p>
              </div>
              <a href={`mailto:${siteConfig.email}`} className={styles.actionLink}>Email <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoIcon}><Clock3 size={20} aria-hidden="true" /></span>
              <div className={styles.infoContent}>
                <span className={styles.infoBlockLabel}>Office hours</span>
                <p className={styles.infoText}>{officeDays}<br />{officeTime}</p>
                <p className={styles.infoNote}>{siteConfig.hours.note}</p>
              </div>
            </div>

            <div className={`${styles.infoBlock} ${styles.officeBlock}`}>
              <span className={styles.infoIcon}><MapPin size={20} aria-hidden="true" /></span>
              <div className={styles.infoContent}>
                <span className={styles.infoBlockLabel}>Visit our offices</span>
                {siteConfig.addresses?.map((address) => (
                  <div className={styles.officeAddress} key={address.name}>
                    {address.name && <strong>{address.name.replace(/^Office \d+ \(/, "").replace(/\)$/, "")}</strong>}
                    <address className={styles.address}>{address.line1}, {address.line2}, {address.city} {address.pin}</address>
                    <a href={address.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Directions <ArrowUpRight size={15} aria-hidden="true" /></a>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.consultBox}>
              <span className={styles.consultLabel}>Consultations available</span>
              <p>In person · Phone · Video</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── Map embeds ── */}
      {siteConfig.addresses && <MapTabs addresses={siteConfig.addresses} />}
    </>
  );
}
