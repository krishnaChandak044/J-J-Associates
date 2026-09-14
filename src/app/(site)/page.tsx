import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero/Hero";
import { PracticeAreasPreview } from "@/components/home/PracticeAreasPreview/PracticeAreasPreview";
import { Stats } from "@/components/home/Stats/Stats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs/WhyChooseUs";
import { CaseResultsPreview } from "@/components/home/CaseResultsPreview/CaseResultsPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview/TestimonialsPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview/InsightsPreview";
import { CourtsStrip } from "@/components/home/CourtsStrip/CourtsStrip";
import { AdvocatesStrip } from "@/components/home/AdvocatesStrip/AdvocatesStrip";

export const metadata: Metadata = {
  title: "Jaju & Jaju Associates | Advocates & Legal Consultants Pune",
  description: "Justice, Handled With Precision. Gaurav Jaju & Ankita Kabra (Jaju) — dedicated advocates in Pune for Family, Criminal, Civil & Property matters.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <PracticeAreasPreview />
      <WhyChooseUs />
      <CaseResultsPreview />
      <AdvocatesStrip />
      <CourtsStrip />
      <TestimonialsPreview />
      <InsightsPreview />
    </div>
  );
}
