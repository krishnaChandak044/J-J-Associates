"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { siteConfig } from "@/data/siteConfig";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const isScrolled = useScrollPosition(80);
  const pathname = usePathname();
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mega menu on any click outside or route change
  // Handled inherently by Next.js navigation clearing hover state

  let headerClass = styles.header;
  if (isScrolled || mobileMenuOpen) {
    headerClass += ` ${styles.headerScrolled}`;
  }

  return (
    <>
      <header className={headerClass}>
        <div className={styles.container}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
            <div className={styles.logoTitle}>
              Jaju <span className={styles.logoAmpersand}>&</span> Jaju
            </div>
            <div className={styles.logoSubtitle}>Associates · Advocates</div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {siteConfig.navLinks.map((link) => {
              if (link.label === "Practice Areas") {
                return (
                  <div 
                    key={link.href}
                    className={styles.navLinkWrapper}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                  >
                    <div className={`${styles.navLink} ${pathname.includes('/practice-areas') ? styles.navLinkActive : ''}`}>
                      {link.label} <ChevronDown size={14} />
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            <Link href="/contact" className={styles.ctaButton}>
              Book a Consultation
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mega Menu Portal / Wrapper */}
        <div onMouseLeave={() => setMegaMenuOpen(false)}>
          <AnimatePresence>
            {megaMenuOpen && <MegaMenu onClose={() => setMegaMenuOpen(false)} />}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Nav */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
