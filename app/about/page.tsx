import { AboutSection } from "@/components/sections/AboutSection";
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
      <section className="mx-auto max-w-[1400px] px-6 pb-32 md:px-10 md:pb-44">
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Want to work together? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="border-b border-foreground text-foreground transition-colors hover:text-primary"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </main>
  );
}
