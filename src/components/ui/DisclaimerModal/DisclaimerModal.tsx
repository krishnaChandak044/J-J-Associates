"use client";

import { useState, useEffect } from "react";
import { Scale } from "lucide-react";
import styles from "./DisclaimerModal.module.css";

export function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const accepted = localStorage.getItem("bci_disclaimer_accepted");
    if (!accepted) {
      setIsOpen(true);
      // Lock body scroll
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("bci_disclaimer_accepted", "true");
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <Scale size={24} />
          </div>
          <h2 id="disclaimer-title" className={styles.title}>Disclaimer</h2>
        </div>
        
        <div className={styles.content}>
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. 
            By accessing this website (www.jajuandjaju.com), you acknowledge and confirm that you are seeking information 
            relating to Jaju &amp; Jaju Associates of your own accord and that there has been no form of solicitation, 
            advertisement or inducement by Jaju &amp; Jaju Associates or its members.
          </p>
          
          <ul className={styles.list}>
            <li>
              The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement.
            </li>
            <li>
              No material/information provided on this website should be construed as legal advice.
            </li>
            <li>
              Jaju &amp; Jaju Associates shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
            </li>
            <li>
              The contents of this website are the intellectual property of Jaju &amp; Jaju Associates.
            </li>
          </ul>
        </div>
        
        <div className={styles.footer}>
          <label className={styles.checkboxLabel}>
            <input 
              type="checkbox" 
              className={styles.checkbox} 
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
            />
            <span className={styles.checkboxText}>I accept the above terms.</span>
          </label>
          
          <button 
            className={styles.button} 
            onClick={handleAccept}
            disabled={!hasAgreed}
          >
            Proceed to Website
          </button>
        </div>
      </div>
    </div>
  );
}
