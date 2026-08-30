"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Scale, User, FileText, ArrowRight } from "lucide-react";
import styles from "./SearchModal.module.css";

// Static mock search database for instantaneous frontend search
const searchDatabase = [
  { id: 1, title: "Corporate Law", type: "Practice Area", url: "/practice-areas/corporate-law", icon: Scale },
  { id: 2, title: "Family Law", type: "Practice Area", url: "/practice-areas/family-law", icon: Scale },
  { id: 3, title: "Real Estate & Property", type: "Practice Area", url: "/practice-areas/real-estate", icon: Scale },
  { id: 4, title: "Criminal Defense", type: "Practice Area", url: "/practice-areas/criminal-defense", icon: Scale },
  { id: 5, title: "Adv. Gaurav Jaju", type: "Team Member", url: "/team/gaurav-jaju", icon: User },
  { id: 6, title: "Adv. Ankita Jaju", type: "Team Member", url: "/team/ankita-jaju", icon: User },
  { id: 7, title: "Adv. Vikram Deshmukh", type: "Team Member", url: "/team/vikram-deshmukh", icon: User },
  { id: 8, title: "Understanding the New Amendments to the Hindu Succession Act", type: "Insight", url: "/insights/hindu-succession-act-amendments", icon: FileText },
  { id: 9, title: "Corporate Governance: Preventing White-Collar Crime", type: "Insight", url: "/insights/corporate-governance-white-collar", icon: FileText },
  { id: 10, title: "About The Firm", type: "Page", url: "/about", icon: FileText },
  { id: 11, title: "Contact Us", type: "Page", url: "/contact", icon: FileText },
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
