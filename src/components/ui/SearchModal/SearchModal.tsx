"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Scale, User, FileText, ArrowRight } from "lucide-react";
import { practiceAreas } from "@/data/practiceAreas";
import { insights } from "@/data/insights";
import { locations } from "@/data/locations";
import { siteConfig } from "@/data/siteConfig";
import styles from "./SearchModal.module.css";

// Build search results from the site's route data so suggestions always point
// to pages that actually exist.
const searchDatabase = [
  ...practiceAreas.map((area) => ({
    id: `practice-${area.slug}`,
    title: `${area.name} Law in Pune`,
    type: "Practice Area",
    url: `/practice-areas/${area.slug}`,
    icon: Scale,
  })),
  ...siteConfig.advocates.map((advocate) => ({
    id: `team-${advocate.slug}`,
    title: `Adv. ${advocate.name}`,
    type: "Advocate",
    url: `/team/${advocate.slug}`,
    icon: User,
  })),
  ...insights.map((insight) => ({
    id: `insight-${insight.slug}`,
    title: insight.title,
    type: "Legal Insight",
    url: `/insights/${insight.slug}`,
    icon: FileText,
  })),
  ...locations.map((location) => ({
    id: `location-${location.slug}`,
    title: `Lawyers in ${location.name}, Pune`,
    type: "Location",
    url: `/locations/${location.slug}`,
    icon: Scale,
  })),
  { id: "page-about", title: "About the Firm", type: "Page", url: "/about", icon: FileText },
  { id: "page-contact", title: "Contact J&J Associates", type: "Page", url: "/contact", icon: FileText },
];

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setQuery(""); // Clear search when closed
    }
  }, [isOpen]);

  const results = query.trim() === "" 
    ? [] 
    : searchDatabase.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  const handleResultClick = (url: string) => {
    setIsOpen(false);
    router.push(url);
  };

  return (
    <>
      {/* Trigger Button (Invisible, just attached to a UI element elsewhere, or we export a trigger hook. 
          For now, we just rely on Cmd+K, but let's expose it globally or render it at the root layout.) */}
      
      {/* Search Trigger Button (Floating or injected via Header) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 md:hidden"
        aria-label="Open Search"
        style={{ display: "none" }} // Hidden by default, we'll hook it to the Header
      >
        <Search />
      </button>

      {/* Modal Overlay */}
      <div 
        className={`${styles.overlay} ${isOpen ? styles.isOpen : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={styles.modal}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
        >
          <div className={styles.header}>
            <Search size={20} className={styles.searchIcon} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search practice areas, attorneys, insights..."
              className={styles.input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ESC
            </button>
          </div>

          {query && (
            <div className={styles.results}>
              {results.length > 0 ? (
                results.map((result) => {
                  const Icon = result.icon;
                  return (
                    <button
                      key={result.id}
                      className={styles.resultItem}
                      onClick={() => handleResultClick(result.url)}
                      style={{ width: "100%", textAlign: "left", border: "none", background: "none", cursor: "pointer" }}
                    >
                      <Icon size={18} className={styles.resultIcon} />
                      <div className={styles.resultText}>
                        <span className={styles.resultTitle}>{result.title}</span>
                        <span className={styles.resultSubtitle}>{result.type}</span>
                      </div>
                      <ArrowRight size={16} className={styles.resultIcon} style={{ marginLeft: "auto", opacity: 0.5 }} />
                    </button>
                  );
                })
              ) : (
                <div className={styles.noResults}>
                  No results found for "{query}". Try a different term.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
