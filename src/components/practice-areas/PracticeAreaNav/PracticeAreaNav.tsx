"use client";

import { useEffect, useState } from "react";
import styles from "./PracticeAreaNav.module.css";

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "The Process" },
  { id: "documents", label: "Documents" },
  { id: "timelines", label: "Timelines" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "fees", label: "Fees" },
  { id: "faqs", label: "FAQs" },
];

export function PracticeAreaNav() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first entry that is intersecting
        let active = "";
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            active = entry.target.id;
          }
        });
        
        if (active) {
          setActiveSection(active);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Trigger when element is near top of viewport
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the header offset (e.g. 80px + 60px for this sticky nav)
      const y = element.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navInner}>
        <ul className={styles.navList}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`${styles.navButton} ${activeSection === id ? styles.active : ""}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
