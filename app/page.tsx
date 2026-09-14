import { AboutSection2 } from "@/components/sections/AboutSection2";
import { Hero } from "@/components/sections/Hero";
import { MarqueeBar } from "@/components/sections/MarqueeBar";
import { ValuesSection } from "@/components/sections/ValuesSection";
import { faqJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/faq";
import { ProjectGrid2 } from "@/components/sections/ProjectGrid2";
import { Experience } from "@/components/sections/Experience";

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
