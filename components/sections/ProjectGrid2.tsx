import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { projects } from "@/lib/projectsReal";
import Image from "next/image";

export function ProjectGrid2() {
  return (
    <section id="work" className="border-t border-border bg-canvas-subtle/30">
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="02">Selected Case Studies</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-ink max-w-3xl">
                Featured engineering projects &amp;{" "}
                <span className="italic text-accent">production platforms.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-relaxed text-ink-muted">
              Deep dives into architecture, complex domain workflows, API integrations, and outcomes delivered across real-world systems.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={60}>
              <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Link
                    href={`/work/${p.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-border/90 bg-white shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-subtle">
                      <Image
                        src={p.image}
                        alt={`${p.name} product screenshot`}
                        loading="lazy"
                        width={1600}
                        height={1000}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  className={`lg:col-span-5 ${i % 2 ? "lg:order-1 lg:pr-4" : "lg:pl-4"}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                      {p.tag}
                    </span>
                    <span className="text-ink-muted/50">·</span>
                    <span className="font-mono text-xs text-ink-muted">
                      {p.year}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-3xl font-normal leading-tight text-ink md:text-4xl">
                    <Link
                      href={`/work/${p.slug}`}
                      className="transition-colors hover:text-accent"
                    >
                      {p.name}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {p.tagline}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 5).map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border/80 bg-canvas px-2.5 py-1 font-mono text-[0.6875rem] text-ink-soft"
                      >
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 5 ? (
                      <span className="rounded-md border border-border/80 bg-canvas px-2 py-1 font-mono text-[0.6875rem] text-ink-muted">
                        +{p.stack.length - 5}
                      </span>
                    ) : null}
                  </div>

                  <dl className="mt-6 space-y-3 border-t border-border pt-5 text-xs leading-relaxed">
                    <div className="flex gap-3">
                      <dt className="w-20 shrink-0 font-mono uppercase tracking-wider text-ink-muted">
                        Role
                      </dt>
                      <dd className="font-medium text-ink">{p.role}</dd>
                    </div>

                    <div className="flex gap-3">
                      <dt className="w-20 shrink-0 font-mono uppercase tracking-wider text-ink-muted">
                        Impact
                      </dt>
                      <dd className="space-y-1 text-ink-soft">
                        {p.impact.slice(0, 2).map((imp) => (
                          <div key={imp} className="flex items-start gap-1.5">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span>{imp}</span>
                          </div>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-7">
                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center gap-2 font-mono text-xs font-medium text-ink transition-colors hover:text-accent"
                    >
                      Read full case study
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
