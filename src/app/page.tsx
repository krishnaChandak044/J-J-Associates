import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Jaju & Jaju Associates | Advocates & Legal Consultants Pune",
  description: "Justice, Handled With Precision. Pune's premier law firm specializing in Divorce, Civil Litigation, Property, and Corporate Law.",
  path: "/",
});

export default function Home() {
  return (
    <div style={{ padding: "var(--space-section)" }}>
      <h1>Jaju & Jaju Associates</h1>
      <p>Home Page Shell (Design System Loaded)</p>
    </div>
  );
}
