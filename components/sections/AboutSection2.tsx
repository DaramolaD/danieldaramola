"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { TextLink } from "@/components/ui/TextLink";
import { SectionLabel } from "./SectionLabel";

export function AboutSection2() {
  const principles = [
    {
      step: "01",
      title: "Domain-Driven Discovery",
      body: "Understand real user workflows and business constraints first. Translate messy operational requirements into clear technical specifications.",
    },
    {
      step: "02",
      title: "Typed & Predictable Architecture",
      body: "Build with strict TypeScript contracts, modular APIs, and structured data stores so the application remains maintainable as features expand.",
    },
    {
      step: "03",
      title: "Performant & Intuitive UX",
      body: "Craft data-dense dashboards and client-facing interfaces that load fast, handle edge cases gracefully, and reduce user cognitive load.",
    },
    {
      step: "04",
      title: "Production Discipline",
      body: "Ship continuously with clean git workflows, meaningful error boundaries, observability, and straightforward deployment pipelines.",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28"
    >
      <FadeUp>
        <SectionLabel index="01">About & Approach</SectionLabel>
      </FadeUp>

      <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-ink">
              Bridging technical execution with{" "}
              <span className="italic text-accent">thoughtful systems architecture.</span>
            </h2>
          </FadeUp>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
            <FadeUp delay={0.15}>
              <p>
                Over the past three years, I’ve designed and built software for startups and operational businesses. My work spans multi-tenant PropTech ecosystems, fuel station operations platforms, logistics portals, and interactive product prototypes.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p>
                Rather than treating frontend and backend as isolated silos, I focus on the complete operational picture: designing robust database schemas, building typed API contracts, and crafting fluid, accessible user interfaces that make complex data actionable.
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="pt-3">
                <TextLink href="/#contact">
                  Discuss your project or roadmap
                </TextLink>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="lg:col-span-5">
          <FadeUp delay={0.15}>
            <div className="rounded-xl border border-border bg-canvas-subtle/50 p-6 md:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                Core Engineering Standards
              </h3>

              <ol className="mt-6 space-y-6">
                {principles.map(({ step, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">
                        {title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
