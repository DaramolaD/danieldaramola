import { SectionLabel } from "@/components/sections/SectionLabel";
import { Reveal } from "@/components/sections/Reveal";
import { services, engagementModels, workingProcess } from "@/lib/services";
import { siteConfig } from "@/lib/constants";
import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Full-stack engineering, FastAPI backends, Next.js frontends, SaaS product development, and operations dashboards by Daniel Daramola.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="pt-12 md:pt-16">
      {/* Hero Header */}
      <section className="mx-auto max-w-[1360px] px-6 pb-16 md:px-10 md:pb-24">
        <div className="max-w-4xl">
          <Reveal>
            <SectionLabel index="01">Services &amp; Capabilities</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.08] tracking-tight text-ink">
              Engineering services designed to take products from{" "}
              <span className="italic text-accent">concept to production.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              Pragmatic, end-to-end full-stack development across logistics, PropTech, tourism, and fintech SaaS. Built with modern TypeScript, Python (FastAPI), React, and relational database systems.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {siteConfig.availability}
              </span>
              <a
                href={`mailto:${siteConfig.email}?subject=Project%20Inquiry`}
                className="text-sm font-semibold text-accent hover:underline underline-offset-4"
              >
                Let&apos;s talk: {siteConfig.email} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Core Offerings
              </span>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                How I can help your team ship
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                Whether starting from zero or augmenting an existing team, here are the primary ways we can collaborate.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {services.map((service, idx) => (
              <Reveal key={service.id} delay={60 * (idx + 1)}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-canvas p-8 sm:p-10 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-5">
                      <span className="font-mono text-sm font-bold text-accent">
                        {service.number}
                      </span>
                      <span className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] font-medium text-ink-muted">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl text-ink sm:text-[1.75rem]">
                      {service.title}
                    </h3>

                    <p className="mt-3.5 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {service.description}
                    </p>

                    {/* Best for pill */}
                    <div className="mt-5 rounded-lg border border-border/80 bg-surface/50 p-3 text-xs leading-relaxed text-ink-muted">
                      <strong className="font-semibold text-ink">Best for: </strong>
                      {service.bestFor}
                    </div>

                    {/* Key Deliverables */}
                    <div className="mt-6">
                      <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink-muted">
                        Key Deliverables
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent text-[10px] font-bold">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-8 border-t border-border/60 pt-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ink-muted/80">
                      Tech &amp; Tools:
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="border-t border-border bg-canvas">
        <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Engagement Models
              </span>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                Flexible ways to work together
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                Whether you need a full-time engineer, a dedicated MVP sprint, or targeted feature delivery.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <Reveal key={model.title} delay={80 * (i + 1)}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface/40 p-7 transition-colors hover:border-ink/20">
                  <div>
                    <span className="inline-block rounded bg-accent/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-accent">
                      {model.period}
                    </span>
                    <h3 className="mt-4 font-serif text-xl text-ink">
                      {model.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-ink-muted">
                      {model.description}
                    </p>

                    <ul className="mt-6 space-y-2 border-t border-border/80 pt-5">
                      {model.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-xs text-ink-muted">
                          <span className="text-accent">·</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(model.title + " Inquiry")}`}
                      className="inline-flex items-center text-xs font-semibold text-accent hover:underline underline-offset-4"
                    >
                      Inquire about this model →
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Process */}
      <section className="border-t border-border bg-surface/20">
        <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                The Process
              </span>
              <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                How we ship from start to finish
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                A transparent, pragmatic approach with regular previews, zero surprises, and clear communication.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workingProcess.map((item, idx) => (
              <Reveal key={item.step} delay={60 * (idx + 1)}>
                <div className="rounded-xl border border-border bg-canvas p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-2xl font-bold text-accent">
                      {item.step}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="border-t border-border bg-canvas py-20 md:py-28">
        <div className="mx-auto max-w-[1360px] px-6 text-center md:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                Ready to build?
              </span>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-tight text-ink">
                Have a project or role in mind?{" "}
                <span className="italic text-accent">Let&apos;s build something solid.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                {siteConfig.availability}. Send a note with your product vision, timeline, or engineering specs.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <Button href={`mailto:${siteConfig.email}?subject=Project%20Collaboration`}>
                  Start a conversation
                </Button>
                <Link
                  href="/work"
                  className="rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-surface/80"
                >
                  Explore case studies
                </Link>
              </div>

              <p className="mt-6 text-xs text-ink-muted">
                Direct email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-ink hover:text-accent underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
