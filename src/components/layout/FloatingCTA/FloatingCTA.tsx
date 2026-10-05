import Link from "next/link";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import styles from "./FloatingCTA.module.css";
import { siteConfig } from "@/data/siteConfig";

export function FloatingCTA() {
  return <>
    <Link href="/contact#enquiry" className={styles.floatingCTA} aria-label="Enquire about your legal matter"><MessageCircle size={24} /></Link>
    <nav className={styles.contactDock} aria-label="Quick contact">
      <a href={`tel:${siteConfig.phoneRaw}`}><Phone size={18} /><span>Call</span></a>
      <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /><span>WhatsApp</span></a>
      <Link href="/contact#enquiry" className={styles.book}><Calendar size={18} /><span>Book</span></Link>
    </nav>
  </>;
}
