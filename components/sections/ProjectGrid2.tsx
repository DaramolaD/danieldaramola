import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { projects } from "@/lib/projectsReal";
import Image from "next/image";

export function ProjectGrid2() {
  return (
    <section id="work" className="border-t border-border bg-cream-deep/40">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="02">Selected work</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-8 font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
                Products I've built and helped bring{" "}
                <span className="italic text-terracotta">to life.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-sm text-ink-soft">
              Four case studies across logistics, real estate, fintech and
              healthcare — each with a real user, a real deadline and a real
              budget.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-24">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={80}>
              <article className="grid gap-10 md:grid-cols-12 md:gap-14 items-center">
                <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border/70">
                    <Image
                      src={p.image}
                      alt={`${p.name} product screenshot`}
                      loading="lazy"
                      width={1600}
                      height={1100}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div
                  className={`md:col-span-5 ${i % 2 ? "md:order-1 md:pr-6" : "md:pl-6"}`}
                >
                  <div className="font-meta text-terracotta">{p.tag}</div>
                  <h3 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-lg text-ink-soft leading-relaxed">
                    {p.tagline}
                  </p>

                  <dl className="mt-8 grid gap-4 text-sm">
                    <div className="flex gap-4">
                      <dt className="w-24 shrink-0 font-meta text-ink-soft">
                        Problem
                      </dt>
                      <dd className="text-foreground/90">{p.problem}</dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-24 shrink-0 font-meta text-ink-soft">
                        Role
                      </dt>
                      <dd className="text-foreground/90">{p.role}</dd>
                    </div>
                    {/* <div className="flex gap-4">
                      <dt className="w-24 shrink-0 font-meta text-ink-soft">
                        Stack
                      </dt>
                      <dd className="flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-ink-soft"
                          >
                            {s}
                          </span>
                        ))}
                      </dd>
                    </div> */}
                    <div className="flex gap-4">
                      <dt className="w-24 shrink-0 font-meta text-ink-soft">
                        Impact
                      </dt>
                      <dd className="space-y-1">
                        {p.impact.map((imp) => (
                          <div
                            key={imp}
                            className="flex items-start gap-2 text-foreground/90"
                          >
                            <span className="mt-2 h-1 w-1 rounded-full bg-terracotta" />
                            {imp}
                          </div>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <Link
                    href={`/work/${p.slug}`}
                    className="mt-8 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-sm font-medium transition hover:border-terracotta hover:text-terracotta"
                  >
                    Read the case study
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
