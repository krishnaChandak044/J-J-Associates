import { generatePageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero/Hero";
import { PracticeAreasPreview } from "@/components/home/PracticeAreasPreview/PracticeAreasPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs/WhyChooseUs";

export const metadata = generatePageMetadata({
  title: "Jaju & Jaju Associates | Advocates & Legal Consultants Pune",
  description: "Justice, Handled With Precision. Pune's premier law firm specializing in Divorce, Civil Litigation, Property, and Corporate Law.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreasPreview />
      <WhyChooseUs />
      
      {/* 
        Phase 6 will add:
        <CaseResultsPreview />
        <TestimonialsPreview />
        <InsightsPreview />
      */}
    </>
  );
}
