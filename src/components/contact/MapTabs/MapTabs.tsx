"use client";

import { useState } from "react";
import styles from "./MapTabs.module.css";

interface MapTabsProps {
  addresses: {
    name?: string;
    mapEmbed?: string;
  }[];
}

export function MapTabs({ addresses }: MapTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!addresses || addresses.length === 0) return null;

  return (
    <section className={styles.container} aria-label="Office location maps">
      <div className={styles.tabsWrapper}>
        <div className={styles.tabs} role="tablist">
          {addresses.map((address, index) => (
            <button
              key={index}
              className={`${styles.tab} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-selected={activeIndex === index}
              role="tab"
            >
              {address.name || `Office ${index + 1}`}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.mapWrapper}>
        {/* We key by index so React forces a full re-render of the iframe, preventing caching issues */}
        <iframe
          key={activeIndex}
          src={addresses[activeIndex].mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Jaju & Jaju Associates ${addresses[activeIndex].name || 'office'} location on Google Maps`}
        />
      </div>
    </section>
  );
}
