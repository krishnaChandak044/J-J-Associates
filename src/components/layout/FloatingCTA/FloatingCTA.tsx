"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Calendar, X } from "lucide-react";
import styles from "./FloatingCTA.module.css";
import { siteConfig } from "@/data/siteConfig";
import { EnquiryAssistant } from "../EnquiryAssistant/EnquiryAssistant";

export function FloatingCTA() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <>
      <EnquiryAssistant 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />

      <button 
        type="button"
        onClick={() => setIsAssistantOpen((prev) => !prev)}
        className={`${styles.floatingCTA} ${isAssistantOpen ? styles.active : ""}`} 
        aria-label={isAssistantOpen ? "Close enquiry assistant" : "Enquire about your legal matter"}
        aria-expanded={isAssistantOpen}
        data-enquiry-trigger="true"
      >
        {isAssistantOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <nav className={styles.contactDock} aria-label="Quick contact">
        <a href={`tel:${siteConfig.phoneRaw}`}>
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <Link href="/contact#enquiry" className={styles.book}>
          <Calendar size={18} />
          <span>Book</span>
        </Link>
      </nav>
    </>
  );
}
