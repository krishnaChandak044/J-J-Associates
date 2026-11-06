import Link from "next/link";
import { Building2, Factory, Landmark, MapPin, Sunrise } from "lucide-react";
import { locations } from "@/data/locations";
import styles from "./AreasServedPreview.module.css";

const districts = [
  {
    title: "Central & Old Pune",
    subtitle: "Near District & Family Courts",
    icon: Landmark,
    areas: ["Shivajinagar", "Camp", "Erandwane", "Karve Nagar", "Sinhagad Road"],
  },
  {
    title: "West Pune",
    subtitle: "Residential neighborhoods",
    icon: Sunrise,
    areas: ["Kothrud", "Baner", "Aundh", "Warje", "Bavdhan"],
  },
  {
    title: "East Pune",
    subtitle: "Residential & business hubs",
    icon: Building2,
    areas: ["Hadapsar", "Kharadi", "Magarpatta", "Koregaon Park"],
  },
  {
    title: "PCMC & North-West",
    subtitle: "Pune–PCMC region",
    icon: Factory,
    areas: ["Wakad", "Hinjewadi", "Pimple Saudagar", "Nigdi", "PCMC"],
  },
];

const locationByName = new Map(locations.map((location) => [location.name, location]));

export function AreasServedPreview() {
  return (
    <section className={styles.section} aria-labelledby="areas-served-title">
      <div className={styles.container}>
        <header className={styles.heading}>
          <div className={styles.headingCopy}>
            <span className={styles.eyebrow}><span className={styles.dot} /> Areas served</span>
            <h2 className={styles.title} id="areas-served-title">
              Pune-wide legal support. <em>Wherever you are.</em>
            </h2>
            <p className={styles.intro}>
              Clients reach us from across the city for in-person, phone, and video consultations.
            </p>
          </div>
        </header>

        <div className={styles.panel}>
          <div className={styles.districtGrid}>
            {districts.map(({ title, subtitle, icon: Icon, areas }, index) => (
              <article className={`${styles.district} ${styles[`district${index + 1}`]}`} key={title}>
                <div className={styles.districtHeading}>
                  <span className={styles.icon}><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                  </div>
                </div>
                <ul className={styles.areaList}>
                  {areas.map((name) => {
                    const location = locationByName.get(name);
                    if (!location) return null;
                    return (
                      <li key={location.slug}>
                        <Link href={`/locations/${location.slug}`} className={styles.areaLink}>
                          {location.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>

          <div className={styles.panelFooter}>
            <p>Our offices are in Kasba Peth and Shukrawar Peth. Consultations can also happen remotely.</p>
            <Link href="/locations" className={styles.allAreas}>
              <MapPin size={19} strokeWidth={1.9} aria-hidden="true" />
              Explore all areas
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
