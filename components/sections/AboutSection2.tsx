"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { TextLink } from "@/components/ui/TextLink";
import { SectionLabel } from "./SectionLabel";

export function AboutSection2() {
  const principles = [
    {
      step: "01",
      title: "Domain-Driven Discovery",
      body: "I start with the people closest to the problem, not the brief. Real operational constraints like a driver with no signal or a manager checking figures on a phone shape every technical decision before a line of code is written.",
    },
    {
      step: "02",
      title: "Typed & Predictable Architecture",
      body: "Strict TypeScript contracts from database to client form. Every payload validated with Zod, every API route typed end-to-end. Systems stay maintainable when the team grows or the feature scope changes.",
    },
    {
      step: "03",
      title: "Performant & Intuitive UX",
      body: "Dashboards with 13 operational modules need to load instantly and stay readable for an operator under pressure. I build fast, accessible interfaces that make complex data actionable instead of just visible.",
    },
    {
      step: "04",
      title: "Production Discipline",
      body: "Clean git workflows, meaningful error boundaries, observability with Sentry, and CI/CD pipelines on every project. Code I hand off should run without me, and the next engineer should be able to jump in without a 3-hour onboarding call.",
    },
  ];

  return (
    <section
      id="about"
      className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28"
    >
      <FadeUp>
        <SectionLabel index="01">About &amp; Approach</SectionLabel>
      </FadeUp>

      <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <FadeUp delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-ink">
              Bridging technical execution with{" "}
              <span className="italic text-accent">real operational understanding.</span>
            </h2>
          </FadeUp>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
            <FadeUp delay={0.15}>
              <p>
                I&apos;ve spent the last few years building operational software for businesses where something physical is happening: a delivery being dispatched, a property being sold, a fuel transaction being logged, or a tourist booking a guide. These aren&apos;t greenfield apps with clean data. They&apos;re messy domains with five user types, drivers on 3G, payments that cannot fail, and managers who need answers in real time.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p>
                The pattern I&apos;ve learned: the hard part is almost never the code. It&apos;s understanding the workflow before writing a line of it. I do that by staying close to the people using the system, not just the people commissioning it. The result is software that actually gets used, not just shipped.
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
