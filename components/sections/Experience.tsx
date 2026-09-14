import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Experience() {
  const experience = [
    {
      role: "Founder & Product Engineer",
      company: "TransOpSync",
      period: "2026 - Present",
      location: "Remote / Product Lead",
      body: "Architecting a multi-tenant logistics SaaS platform for SMB delivery fleets. Designed dispatcher consoles, driver workflows, and live tracking experiences with offline-first sync and custom address parsing.",
      stack: ["Next.js", "Node.js", "Supabase", "PostgreSQL/PostGIS", "Socket.io", "Mapbox"],
    },
    {
      role: "Frontend Engineer",
      company: "TechBrokers (StationMag)",
      period: "Mar 2026 - Present",
      location: "Remote / Contract",
      body: "Built the fuel station operations platform for Sunbeth Energies across 4 user roles. Engineered a typed data layer for 13+ modules (pricing, transactions, inventory, audits) with export-ready reporting.",
      stack: ["Next.js", "React 19", "TypeScript", "TanStack Query", "Axios", "Recharts", "Tailwind CSS"],
    },
    {
      role: "Full-Stack Developer",
      company: "ISEYAA & Ministry of Culture",
      period: "2026",
      location: "Remote / Contract",
      body: "Engineered tourism & commerce marketplace end-to-end (guides, ticketing, marketplace). Implemented multi-role business profiles, Flutterwave payments, httpOnly JWT session auth, and Alembic DB migrations.",
      stack: ["Next.js", "TypeScript", "Python (FastAPI)", "PostgreSQL", "Flutterwave", "Render"],
    },
    {
      role: "Product Engineer",
      company: "GText Holdings (GText Projects)",
      period: "Dec 2024 - June 2026",
      location: "Full-Time",
      body: "Built real estate SaaS ecosystem: GTextLand portal with Leaflet/GeoJSON plot maps and installment checkouts, GTextPay wallet workflows, and GTextFarm investor reporting dashboards.",
      stack: ["Next.js", "TypeScript", "TanStack Query", "Leaflet", "React Hook Form", "Zod", "MongoDB"],
    },
    {
      role: "Frontend Developer",
      company: "Hex Company & Dormot",
      period: "2023 - 2024",
      location: "Remote",
      body: "Developed WorkIt HR modules (onboarding, recruitment, payroll) and Dormot property management dashboards for managers, landlords, and tenants.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
  ];

  return (
    <section id="experience" className="border-t border-border bg-canvas">
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel index="03">Experience &amp; Track Record</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.12] tracking-tight text-ink">
                Engineering roles across{" "}
                <span className="italic text-accent">startups &amp; platforms.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                Each role focused on solving high-friction operational bottlenecks, building tools that teams and customers rely on daily.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-border pl-6 sm:pl-8 space-y-12">
              {experience.map((e, i) => (
                <Reveal key={e.company} delay={60 + i * 60}>
                  <li className="relative">
                    <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-canvas bg-accent" />

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                        {e.period}
                      </span>
                      <span className="text-ink-muted/50">·</span>
                      <span className="font-mono text-xs text-ink-muted">
                        {e.location}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-serif text-2xl font-normal text-ink">
                        {e.role}
                      </h3>
                      <span className="text-sm font-medium text-ink-muted">
                        @ {e.company}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {e.body}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-border/80 bg-canvas-subtle px-2 py-0.5 font-mono text-[0.6875rem] text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
