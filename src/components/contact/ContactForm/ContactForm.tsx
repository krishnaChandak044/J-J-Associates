"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call for the dummy form
    setTimeout(() => {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Request a Consultation</h2>
      <p className={styles.description}>
        Fill out the form below and our administrative team will contact you within 24 hours to schedule a confidential consultation.
      </p>

      {status === "success" && (
        <div className={styles.successMessage}>
          <CheckCircle2 size={20} />
          Your request has been successfully submitted. We will be in touch shortly.
        </div>
      )}

      {status === "error" && (
        <div className={styles.errorMessage}>
          <AlertCircle size={20} />
          An error occurred while submitting the form. Please try again or call us directly.
        </div>
      )}

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>First Name *</label>
          <input type="text" id="firstName" name="firstName" required className={styles.input} placeholder="John" />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>Last Name *</label>
          <input type="text" id="lastName" name="lastName" required className={styles.input} placeholder="Doe" />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email Address *</label>
          <input type="email" id="email" name="email" required className={styles.input} placeholder="john@example.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className={styles.input} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label htmlFor="practiceArea" className={styles.label}>Area of Interest</label>
          <select id="practiceArea" name="practiceArea" className={styles.input}>
            <option value="">Select a practice area</option>
            <option value="corporate">Corporate Litigation</option>
            <option value="family">Family Law & Divorce</option>
            <option value="real-estate">Real Estate & Property</option>
            <option value="criminal">Criminal Defense</option>
            <option value="other">Other / General Consultation</option>
          </select>
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <div className={`${styles.field} ${styles.fieldFull}`}>
          <label htmlFor="message" className={styles.label}>Brief Description of Your Legal Issue *</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            className={styles.textarea} 
            placeholder="Please provide a brief overview of your situation. Do not include highly sensitive or confidential information in this form."
          ></textarea>
        </div>
      </div>

      <button type="submit" className={styles.submitBtn} disabled={status === "loading" || status === "success"}>
        {status === "loading" ? (
          <>
            <Loader2 className="animate-spin" size={18} /> Processing...
          </>
        ) : (
          <>
            <Send size={18} /> Submit Request
          </>
        )}
      </button>
    </form>
  );
}
