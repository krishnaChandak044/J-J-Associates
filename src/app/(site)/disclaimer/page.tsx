import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Disclaimer | Jaju & Jaju Associates" };

export default function DisclaimerPage() {
  return (
    <section style={{ padding: "calc(var(--header-height) + 3rem) var(--gutter) 5rem", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "2rem" }}>Disclaimer</h1>
      <div style={{ display: "grid", gap: "1.5rem", lineHeight: 1.8 }}>
        <p>The information on this website does not constitute legal advice and does not create an attorney-client relationship. Please consult an advocate before acting on any information. Enrolled with the Bar Council of Maharashtra &amp; Goa. Regulated by the Bar Council of India.</p>
        <p>The Bar Council of India does not permit advertisement or solicitation by advocates. This website provides information about Jaju &amp; Jaju Associates for visitors seeking it of their own accord.</p>
        <p>No material on this website should be construed as legal advice. Jaju &amp; Jaju Associates shall not be liable for consequences of actions taken in reliance on the material provided here.</p>
        <p>The contents of this website are the intellectual property of Jaju &amp; Jaju Associates.</p>
        <Link href="/contact" style={{ color: "var(--color-primary)", fontWeight: 700 }}>Contact the firm →</Link>
      </div>
    </section>
  );
}
