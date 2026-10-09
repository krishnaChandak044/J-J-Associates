import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | Jaju & Jaju Associates" };

export default function PrivacyPolicyPage() {
  return (
    <section style={{ padding: "calc(var(--header-height) + 3rem) var(--gutter) 5rem", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Privacy Policy</h1>
      <div style={{ display: "grid", gap: "1.5rem", lineHeight: 1.8 }}>
        <p>At Jaju &amp; Jaju Associates, we are committed to protecting the privacy and confidentiality of our clients and website visitors.</p>
        
        <h2 style={{ fontSize: "1.25rem", marginTop: "1rem", marginBottom: "0.5rem" }}>Information Collection</h2>
        <p>We may collect personal information such as your name, contact details, and case-related information when you voluntarily submit it through our contact forms or reach out to us via email or phone.</p>
        
        <h2 style={{ fontSize: "1.25rem", marginTop: "1rem", marginBottom: "0.5rem" }}>Use of Information</h2>
        <p>The information we collect is strictly used for the purpose of evaluating your legal matter, providing legal consultation, and communicating with you regarding our services. We do not sell, rent, or lease your personal information to third parties.</p>
        
        <h2 style={{ fontSize: "1.25rem", marginTop: "1rem", marginBottom: "0.5rem" }}>Confidentiality (Attorney-Client Privilege)</h2>
        <p>Any information shared with our advocates during a consultation or in the course of legal representation is protected by attorney-client privilege as per the Advocates Act, 1961 and the Bar Council of India Rules. Such information will not be disclosed without your explicit consent, except as required by law.</p>

        <h2 style={{ fontSize: "1.25rem", marginTop: "1rem", marginBottom: "0.5rem" }}>Changes to this Policy</h2>
        <p>We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page.</p>

        <Link href="/contact" style={{ color: "var(--color-primary)", fontWeight: 700, marginTop: "1rem", display: "inline-block" }}>Contact the firm →</Link>
      </div>
    </section>
  );
}
