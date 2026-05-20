import { AboutSection } from "@/components/sections/AboutSection";
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

export default function Home() {
  const faqLd = faqJsonLd(faqItems);

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Hero />
      <MarqueeBar />
      {/* <LogoCloud /> */}
      <AboutSection />
      <ProjectGrid />
      <CtaBand
        id="mid-cta"
        eyebrow="Next step"
        title={
          <>
            Have a product to ship{" "}
            <span className="italic text-accent">or improve?</span>
          </>
        }
        description="I work with founders and teams on full-stack builds, platform work, and the iteration after launch."
        primaryLabel="Discuss your project"
        secondaryLabel="See how I work"
        secondaryHref="/#approach"
      />
      <ValuesSection />
      <ApproachSection />
      <FaqSection />
    </main>
  );
}
