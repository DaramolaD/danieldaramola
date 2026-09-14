import { AboutSection } from "@/components/sections/AboutSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

export const metadata = createMetadata({
  title: "About",
  description:
    "Daniel Daramola | Software engineer with 3+ years experience building SaaS products across logistics, PropTech, and fintech.",
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
