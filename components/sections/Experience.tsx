import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  const experience = [
    {
      role: "Founder & Software Engineer",
      company: "TransOpsync",
      period: "2025 — Present",
      body: "Building logistics technology from zero: product, engineering and go-to-market with early pilot fleets.",
    },
    {
      role: "Software Engineer",
      company: "GText Holdings",
      period: "2024 — 2025",
      body: "Property management, booking and internal ops platforms across a multi-city real-estate portfolio.",
    },
    {
      role: "Frontend Engineer",
      company: "Hex Company",
      period: "2023 — 2024",
      body: "Design-system-led frontend work on client SaaS products, from marketing surfaces to app dashboards.",
    },
  ];

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <SectionLabel index="04">Experience</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 font-display text-4xl md:text-5xl leading-[1.05]">
              A short, honest résumé.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Three teams, three very different products. Every role taught me
              something about the distance between "it compiles" and "people
              rely on it".
            </p>
          </Reveal>
        </div>
        <ol className="grid gap-8 md:col-span-8 relative border-l border-border pl-8">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={80 + i * 80}>
              <li className="relative pb-12 last:pb-0">
                <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-terracotta ring-4 ring-background" />
                <div className="font-meta text-ink-soft">{e.period}</div>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-display text-2xl">{e.role}</h3>
                  <span className="text-ink-soft">— {e.company}</span>
                </div>
                <p className="mt-3 max-w-xl text-ink-soft leading-relaxed">
                  {e.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
