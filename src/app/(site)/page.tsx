import { generatePageMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero/Hero";
import { PracticeAreasPreview } from "@/components/home/PracticeAreasPreview/PracticeAreasPreview";
import { Stats } from "@/components/home/Stats/Stats";
import { WhyChooseUs } from "@/components/home/WhyChooseUs/WhyChooseUs";
import { CaseResultsPreview } from "@/components/home/CaseResultsPreview/CaseResultsPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview/TestimonialsPreview";
import { InsightsPreview } from "@/components/home/InsightsPreview/InsightsPreview";
import { CourtsStrip } from "@/components/home/CourtsStrip/CourtsStrip";
import { AdvocatesStrip } from "@/components/home/AdvocatesStrip/AdvocatesStrip";

import { CallToActionBar } from "@/components/ui/CallToActionBar/CallToActionBar";

export const metadata = generatePageMetadata({
  title: "Advocates & Legal Consultants in Pune | J&J Associates",
  description: "J&J Associates is a Pune law firm led by Adv. Gaurav Jaju and Adv. Ankita Kabra (Jaju). Learn about family, corporate, civil, criminal and property matters.",
  path: "/",
});

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
      <CallToActionBar />
    </div>
  );
}
