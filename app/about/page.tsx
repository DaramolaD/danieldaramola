import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "About",
  description:
    "Daniel Daramola — software engineer shipping full products from zero across healthcare SaaS, logistics, and fintech.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="pt-8">
      <AboutSection />
      <CtaBand
        eyebrow="Collaborate"
        title={
          <>
            Open to the right{" "}
            <span className="italic text-accent">builds and partnerships.</span>
          </>
        }
        description="If you need an engineer who ships end-to-end and stays after launch, send a short note about your product and timeline."
        primaryLabel="Get in touch"
        primaryHref={`mailto:${siteConfig.email}?subject=Collaboration`}
        secondaryLabel="View my work"
        secondaryHref="/work"
      />
    </main>
  );
}
