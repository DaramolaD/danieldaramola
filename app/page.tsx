import { AboutSection } from "@/components/sections/AboutSection";
import { AboutSection2 } from "@/components/sections/AboutSection2";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { MarqueeBar } from "@/components/sections/MarqueeBar";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { faqJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/faq";
import { ProjectGrid2 } from "@/components/sections/ProjectGrid2";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const faqLd = faqJsonLd(faqItems);

  return (
    <main id="main-content" className="overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Hero />
      <MarqueeBar />
      <AboutSection2 />
      <ProjectGrid2 />
      <Experience />
      <ValuesSection />
    </main>
  );
}
