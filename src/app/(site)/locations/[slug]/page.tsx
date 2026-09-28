import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/data/locations";
import { siteConfig } from "@/data/siteConfig";
import { Clock, Users, Scale, Navigation } from "lucide-react";
import styles from "./page.module.css";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = getLocationBySlug(resolvedParams.slug);
  if (!loc) return { title: "Location Not Found" };

  return {
    title: `Lawyers in ${loc.name}, Pune | ${siteConfig.firmName}`,
    description: `Leading advocates and legal consultants serving clients in ${loc.name}, Pune. ${loc.description}`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const loc = getLocationBySlug(resolvedParams.slug);

  if (!loc) {
    notFound();
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          {/* Breadcrumbs */}
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>›</span>
            <span>Locations</span>
            <span className={styles.separator}>›</span>
            <span className={styles.active}>{loc.name}</span>
          </div>

          <div className={styles.replyPill}>Serving {loc.name} &amp; nearby</div>
          
          <h1 className={styles.heroTitle}>
            Lawyers in <span className="text-highlight">{loc.name}</span>, Pune
          </h1>
          
          <p className={styles.heroSub}>
            From {loc.name}, both our chamber and the courts are minutes away. Residents
            here come to us most often for land records, partition and documentation —
            matters where knowing the local record rooms and court boards genuinely matters.
          </p>

          <div className={styles.actions}>
            <a href={`tel:${siteConfig.phoneRaw}`} className={styles.callBtn}>
              <span className={styles.callIcon}>📞</span> Call Now
            </a>
            <a href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(loc.name + ', Pune')}&destination=${encodeURIComponent(siteConfig.addresses[0].full)}`} target="_blank" rel="noopener noreferrer" className={styles.dirBtn}>
              <Navigation size={18} /> Get Directions
            </a>
          </div>

          {/* Info Cards */}
          <div className={styles.cardsGrid}>
            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <Clock size={20} className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>{loc.travelTime}</h3>
              <p className={styles.cardText}>From {loc.name} to our office</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <Users size={20} className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>Family Court, Shivajinagar</h3>
              <p className={styles.cardText}>Where matrimonial matters are heard</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.cardIconWrap}>
                <Scale size={20} className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>District Court, Pune</h3>
              <p className={styles.cardText}>Civil, property &amp; criminal matters</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.quoteBlock}>
            <p>{loc.description}</p>
          </div>

          <div className={styles.mapContainer}>
            <iframe 
              src={`https://maps.google.com/maps?saddr=${encodeURIComponent(loc.name + ', Pune, Maharashtra')}&daddr=${encodeURIComponent('Alok Nagari Society, 1305, Agarwal Rd, Lunanagar, Kasba Peth, Pune, Maharashtra 411011')}&output=embed`}
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
