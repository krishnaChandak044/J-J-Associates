import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Navigation, Clock, Users, Scale, ExternalLink, ArrowRight } from "lucide-react";
import { getLocationBySlug, locations, normalizeLocationSlug } from "@/data/locations";
import { siteConfig } from "@/data/siteConfig";
import { generatePageMetadata } from "@/lib/seo";
import { Accordion } from "@/components/ui/Accordion/Accordion";
import styles from "./page.module.css";

export function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const loc of locations) {
    params.push({ slug: loc.slug });
    params.push({ slug: `lawyers-in-${loc.slug}-pune` });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return generatePageMetadata({
    title: `Lawyers in ${location.name}, Pune | J&J Associates`,
    description: `${location.name} legal counsel: Adv. Gaurav Jaju & Adv. Ankita Kabra (Jaju). Family, criminal, property, and civil matters. Travel time ${location.travelTime} to our Kasba Peth office. Video and in-person consultations.`,
    path: `/locations/${location.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const office = siteConfig.addresses[0]; // Kasba Peth main litigation office
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    location.name + ", Pune"
  )}&destination=${encodeURIComponent(office.full)}`;

  const mapEmbedUrl = `https://maps.google.com/maps?saddr=${encodeURIComponent(
    location.name + ", Pune"
  )}&daddr=${encodeURIComponent(office.full)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const otherLocations = locations.filter((l) => l.slug !== location.slug);

  return (
    <article className={styles.page}>
      {/* ── Breadcrumb & Hero ── */}
      <header className={styles.hero}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.separator} aria-hidden="true">›</span>
            <Link href="/locations">Locations</Link>
            <span className={styles.separator} aria-hidden="true">›</span>
            <span className={styles.active} aria-current="page">{location.name}</span>
          </nav>

          {/* Location Badge */}
          <div className={styles.servingPill}>
            Serving {location.name} &amp; nearby
          </div>

          {/* Hero Title with organic rounded highlight */}
          <h1 className={styles.heroTitle}>
            Lawyers in <span className={styles.titleHighlight}>{location.name}</span> , Pune
          </h1>

          {/* Hero Subtitle */}
          <p className={styles.heroSub}>{location.heroSubtitle}</p>

          {/* Action CTAs */}
          <div className={styles.actions}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.callBtn}>
              <Phone size={17} aria-hidden="true" />
              <span>Call Now</span>
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dirBtn}
            >
              <Navigation size={17} aria-hidden="true" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* 3 Quick-Info Cards */}
          <div className={styles.cardsGrid}>
            <div className={styles.quickCard}>
              <div className={styles.cardIconWrap}>
                <Clock size={20} className={styles.cardIcon} aria-hidden="true" />
              </div>
              <div className={styles.cardHighlight}>{location.travelTime}</div>
              <div className={styles.cardSub}>
                From {location.name} to our office, {location.officeDestination}
              </div>
            </div>

            <div className={styles.quickCard}>
              <div className={styles.cardIconWrap}>
                <Users size={20} className={styles.cardIcon} aria-hidden="true" />
              </div>
              <div className={styles.cardHighlight}>Family Court, Shivajinagar</div>
              <div className={styles.cardSub}>Where matrimonial matters are heard</div>
            </div>

            <div className={styles.quickCard}>
              <div className={styles.cardIconWrap}>
                <Scale size={20} className={styles.cardIcon} aria-hidden="true" />
              </div>
              <div className={styles.cardHighlight}>District Court, Pune</div>
              <div className={styles.cardSub}>Civil, property &amp; criminal matters</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Context & Route Map Section ── */}
      <section className={styles.contextSection} aria-label={`Legal representation in ${location.name}`}>
        <div className={styles.container}>
          {/* Editorial quote block */}
          <div className={styles.contextBlock}>
            <p className={styles.contextText}>{location.contextParagraph}</p>
          </div>

          {/* Route Map */}
          <div className={styles.mapContainer}>
            <iframe
              title={`Directions from ${location.name} to J&J Associates, Kasba Peth, Pune`}
              src={mapEmbedUrl}
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen
            />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openMapBtn}
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Common Questions / FAQ Section ── */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <span className={styles.stepNumber} aria-hidden="true">02</span>
            <div>
              <div className={styles.faqPill}>
                <span className={styles.pillDot} aria-hidden="true">●</span>
                <span>COMMON QUESTIONS</span>
              </div>
              <h2 id="faq-heading" className={styles.faqTitle}>
                From <span className={styles.titleHighlight}>{location.name}</span> clients
              </h2>
            </div>
          </div>

          <div className={styles.faqWrapper}>
            <Accordion items={location.faqs} defaultOpenIndex={0} />
          </div>
        </div>
      </section>

      {/* ── Consultation Callout ── */}
      <section className={styles.consultSection}>
        <div className={styles.container}>
          <div className={styles.consultCard}>
            <div className={styles.consultContent}>
              <span className={styles.consultBadge}>Direct Partner Consultation</span>
              <h3 className={styles.consultTitle}>
                Facing a legal issue in {location.name}?
              </h3>
              <p className={styles.consultText}>
                Schedule an initial video consultation or visit us at our Kasba Peth or Shukrawar Peth offices. Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju) provide clear, diagnostic evaluation of your matter.
              </p>
              <div className={styles.consultActions}>
                <Link href="/contact" className={styles.consultPrimaryBtn}>
                  Book a Consultation <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.consultSecondaryBtn}>
                  WhatsApp Query
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Neighborhoods Directory ── */}
      <nav className={styles.otherLocationsSection} aria-label="Other Pune areas served">
        <div className={styles.container}>
          <h3 className={styles.otherTitle}>Other Neighborhoods We Serve in Pune</h3>
          <div className={styles.otherGrid}>
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className={styles.otherPill}
              >
                <span>{other.name}</span>
                <span className={styles.otherTime}>{other.travelTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </article>
  );
}
