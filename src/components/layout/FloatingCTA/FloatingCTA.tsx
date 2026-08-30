"use client";

import { MessageCircle } from "lucide-react";
import styles from "./FloatingCTA.module.css";
import { siteConfig } from "@/data/siteConfig";

export function FloatingCTA() {
  if (!siteConfig.socialLinks.whatsapp) {
    return null;
  }

  return (
    <a
      href={siteConfig.socialLinks.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingCTA}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
