import { generatePageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero/Hero";
import { PracticeAreasPreview } from "@/components/home/PracticeAreasPreview/PracticeAreasPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs/WhyChooseUs";
import { CaseResultsPreview } from "@/components/home/CaseResultsPreview/CaseResultsPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview/TestimonialsPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview/InsightsPreview";
import { FadeIn } from "@/components/ui/FadeIn/FadeIn";

export const metadata = generatePageMetadata({
  title: "Jaju & Jaju Associates | Advocates & Legal Consultants Pune",
  description: "Justice, Handled With Precision. Pune's premier law firm specializing in Divorce, Civil Litigation, Property, and Corporate Law.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FadeIn delay={100}>
        <PracticeAreasPreview />
      </FadeIn>
      <FadeIn delay={200}>
        <WhyChooseUs />
      </FadeIn>
      <FadeIn delay={300}>
        <CaseResultsPreview />
      </FadeIn>
      <FadeIn delay={100}>
        <TestimonialsPreview />
      </FadeIn>
      <FadeIn delay={200}>
        <InsightsPreview />
      </FadeIn>
    </div>
  );
}
