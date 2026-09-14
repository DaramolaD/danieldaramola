"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/motion/Parallax";
import { siteConfig } from "@/lib/constants";
import heroImg from "@/public/heroImg.png";

export function Hero() {
  const stats = [
    { value: "3+ yrs", label: "Building SaaS products end-to-end" },
    { value: "Full-Stack", label: "React / Next.js · FastAPI · Node.js" },
    { value: "Databases", label: "PostgreSQL · MongoDB · Supabase" },
    { value: "Domains", label: "Logistics · PropTech · Tourism · Fintech" },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1360px] px-6 pt-12 pb-20 md:px-10 md:pt-16 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-canvas-subtle/70 px-3.5 py-1.5 text-xs text-ink-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                <span className="font-medium text-ink-soft">
                  {siteConfig.availability}
                </span>
              </div>
            </FadeUp>

            <h1
              id="hero-heading"
              className="font-serif text-[clamp(2.5rem,5.5vw,5.25rem)] leading-[1.08] tracking-tight text-ink"
            >
              <span className="block font-normal">
                {siteConfig.heroHeadline.line1}
              </span>
              <span className="block italic text-accent">
                {siteConfig.heroHeadline.line2}
              </span>
            </h1>

            <FadeUp delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted">
                {siteConfig.heroBio}
              </p>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/#work">
                  Explore selected work
                  <span aria-hidden>→</span>
                </Button>
                <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                  Get in touch
                </Button>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="lg:col-span-5">
            <figure className="relative isolate">
              <Parallax
                amount={28}
                className="overflow-hidden rounded-xl border border-border bg-canvas-subtle shadow-[0_12px_36px_-12px_rgba(24,23,22,0.12)]"
              >
                <Image
                  src={heroImg}
                  alt="Portrait of Daniel Daramola"
                  width={1024}
                  height={1280}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <figcaption className="absolute inset-x-3 bottom-3 flex flex-col gap-2 rounded-lg border border-border/80 bg-canvas/95 p-3.5 text-xs shadow-sm backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="block font-mono text-[0.6875rem] uppercase tracking-wider text-ink-muted">
                      Role & Focus
                    </span>
                    <span className="font-medium text-ink">
                      Software Engineer & Systems Builder
                    </span>
                  </div>
                  <div className="font-mono text-[0.6875rem] text-accent">
                    Remote · Worldwide (UTC+1)
                  </div>
                </figcaption>
              </Parallax>
            </figure>
          </FadeUp>
        </div>

        <FadeUp delay={0.35}>
          <div className="mt-16 border-t border-border pt-8 md:mt-20">
            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <dt className="font-serif text-2xl font-normal text-ink md:text-3xl">
                    {value}
                  </dt>
                  <dd className="mt-1.5 text-xs leading-normal text-ink-muted">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
