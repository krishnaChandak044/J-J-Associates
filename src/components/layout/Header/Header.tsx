"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoImg from "../../../../public/logo/j&j_logo.png";
import { NavOverlay } from "../NavOverlay/NavOverlay";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig } from "@/data/siteConfig";
import styles from "./Header.module.css";

export function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const scrolled = useScrollPosition(80);
  const pathname = usePathname();

  // Close nav on route change
  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  // Close nav on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && navOpen) setNavOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [navOpen]);

  // Lock body scroll when nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  // Pages that have a dark hero section at the top
  const hasDarkHero = 
    pathname.startsWith('/insights') || 
    pathname.startsWith('/about') || 
    pathname.startsWith('/case-results') || 
    pathname.startsWith('/our-approach') ||
    (pathname.startsWith('/practice-areas/') && pathname !== '/practice-areas');

  // Header is "dark" when scrolled, when nav is open, or if the page has a dark hero (so white text is used)
  const isDark = scrolled || navOpen || hasDarkHero;

  return (
    <>
      <header
        className={`${styles.header} ${isDark ? styles.headerDark : ""} ${navOpen ? styles.headerNavOpen : ""} ${hasDarkHero && !scrolled && !navOpen ? styles.headerDarkTransparent : ""}`}
        role="banner"
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Jaju & Jaju Associates — Go to homepage">
            <Image 
              src={logoImg} 
              alt="Jaju & Jaju Associates Logo" 
              width={200}
              height={60}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {[
              { 
                href: "/practice-areas", 
                label: "Practice Areas",
                children: [
                  { label: "Family Law", href: "/practice-areas/family-law" },
                  { label: "Divorce", href: "/practice-areas/divorce" },
                  { label: "Criminal Defense", href: "/practice-areas/criminal-defense" },
                  { label: "Civil Litigation", href: "/practice-areas/civil-litigation" },
                  { label: "Property Law", href: "/practice-areas/property" },
                  { label: "Corporate Law", href: "/practice-areas/corporate" },
                  { label: "Consumer Matters", href: "/practice-areas/consumer-matters" },
                  { label: "Cheque Bounce", href: "/practice-areas/cheque-bounce" },
                  { label: "Documentation", href: "/practice-areas/documentation" },
                  { label: "Consultations", href: "/practice-areas/consultations" },
                ]
              },
              { 
                href: "/about", 
                label: "The Firm",
                children: [
                  { label: "About Us", href: "/about" },
                  { label: "Our Advocates", href: "/team" },
                  { label: "Our Approach", href: "/our-approach" },
                  { label: "Case Results", href: "/case-results" },
                ]
              },
              { href: "/insights", label: "Insights" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <div key={item.label} className={styles.navItemWrapper}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)) ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                  {item.children && <span className={styles.chevron}></span>}
                </Link>

                {item.children && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownInner} data-columns={item.children.length > 5 ? "2" : "1"}>
                      {item.children.map(child => (
                        <Link 
                          key={child.href} 
                          href={child.href}
                          className={`${styles.dropdownLink} ${pathname === child.href ? styles.dropdownLinkActive : ""}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className={styles.actions}>
            {/* Book CTA — desktop */}

            {/* Book CTA — desktop */}
            <Link href="/contact" className={styles.cta}>
              Book Consultation
            </Link>

            {/* Hamburger */}
            <button
              className={`${styles.hamburger} ${navOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={navOpen}
              aria-controls="nav-overlay"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen nav overlay */}
      <NavOverlay isOpen={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
