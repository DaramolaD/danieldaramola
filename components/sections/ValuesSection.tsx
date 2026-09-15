"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { SectionLabel } from "./SectionLabel";

export function ValuesSection() {
  const pillars = [
    {
      num: "01",
      title: "End-to-End Type Safety & Data Contracts",
      subtitle: "Schema-first engineering",
      body: "From database tables to client forms, every payload is strictly typed and validated using TypeScript and Zod. This eliminates silent runtime bugs and makes API evolution predictable, especially when the same schema powers five different user roles.",
      highlights: ["Python (FastAPI)", "Next.js & TypeScript", "PostgreSQL / Alembic", "MongoDB / Mongoose"],
    },
    {
      num: "02",
      title: "Domain Modelling for Real-World Operations",
      subtitle: "Built for physical workflows",
      body: "Whether handling fuel station dispensing logs, tourism booking flows, or delivery fleet dispatch, I model the software directly against the physical operation, including the edge cases that only appear in the real world.",
      highlights: ["Multi-Tenant SaaS", "RBAC Permissions", "Flutterwave Payments", "Audit Workflows"],
    },
    {
      num: "03",
      title: "High-Density, Responsive Interfaces",
      subtitle: "Performance meets clarity",
      body: "Dashboards with 13 operational modules need to load instantly and stay readable for an operator checking figures on a phone. I build fast, accessible component systems that make complex data actionable instead of just visible.",
      highlights: ["TanStack Query & State", "Leaflet & Mapbox", "Radix UI & Tailwind", "Responsive Dashboards"],
    },
    {
      num: "04",
      title: "Maintainable & Team-Ready Codebases",
      subtitle: "Engineering discipline",
      body: "Code should be clear, modular, and easy for any engineer to inherit. I write the README I wish I had: clean module boundaries, documented architecture decisions, and a CI/CD pipeline on every project so the system runs smoothly without me.",
      highlights: ["Modular Services", "Vercel & Render CI/CD", "Offline-First Sync", "Clean Documentation"],
    },
  ];

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="border-t border-border bg-canvas-subtle/40"
    >
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <SectionLabel index="04">Engineering Philosophy</SectionLabel>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                id="philosophy-heading"
                className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-ink max-w-2xl"
              >
                Principles for building{" "}
                <span className="italic text-accent">resilient software.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.15}>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              How I approach architecture, code quality, and delivery to ensure systems remain dependable as they scale, and readable when the next engineer inherits them.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={0.1 + i * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-border/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md md:p-8">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {pillar.num}
                    </span>
                    <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-ink-muted">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl font-normal leading-snug text-ink group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {pillar.body}
                  </p>
                </div>

                <div className="mt-6 border-t border-border/70 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded border border-border/80 bg-canvas-subtle px-2 py-0.5 font-mono text-[0.6875rem] text-ink-soft"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
