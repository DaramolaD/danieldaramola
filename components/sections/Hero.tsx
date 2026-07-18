"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { Parallax } from "@/components/motion/Parallax";
import { RevealWords } from "@/components/motion/RevealWords";
import { siteConfig } from "@/lib/constants";
import heroImg from "@/public/heroImg.png";

export function Hero() {
  const stats = [
    ["5+ yrs", "Building software"],
    ["10+", "Products shipped"],
    ["Full-stack", "Frontend · API · DB"],
    ["SaaS", "Founder-side experience"],
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-24 md:px-10 md:pb-32">
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <FadeUp>
              <p className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-muted">
                <span className="h-px w-8 bg-border" aria-hidden />
                {siteConfig.heroStatus}
              </p>
            </FadeUp>

            <h1
              id="hero-heading"
              className="font-serif text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.96] tracking-tight text-ink"
            >
              <RevealWords as="span" className="block">
                {siteConfig.heroHeadline.line1}
              </RevealWords>
              <RevealWords
                as="span"
                className="block italic text-accent"
                delay={0.12}
              >
                {siteConfig.heroHeadline.line2}
              </RevealWords>
            </h1>

            <FadeUp delay={0.25}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
                {siteConfig.heroBio}
              </p>
            </FadeUp>

            <FadeUp delay={0.35}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/#work">
                  View my work
                  <span aria-hidden>→</span>
                </Button>
                <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                  Let&apos;s work together
                </Button>
              </div>
              {/* <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                {siteConfig.availability}. Or{" "}
                <TextLink href="/#contact" showArrow={false}>
                  jump to contact
                </TextLink>
                .
              </p> */}
            </FadeUp>
          </div>

          <FadeUp delay={0.2} className="md:col-span-5">
            <figure className="relative isolate">
              <Parallax
                amount={36}
                className="overflow-hidden rounded-sm border border-black/8 bg-[#ebe4dc] shadow-[0_8px_30px_-12px_rgba(26,26,26,0.12)]"
              >
                <Image
                  src={heroImg}
                  alt="Portrait of Daniel Daramola"
                  width={1024}
                  height={1280}
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="aspect-[4/5] w-full object-cover object-top grayscale-15"
                />
                <figcaption className="absolute inset-x-4 bottom-4 flex flex-col gap-3 rounded-sm bg-canvas/90 px-4 py-3 text-sm shadow-[0_16px_40px_-24px_rgba(26,26,26,0.45)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    <span className="block text-xs uppercase tracking-[0.18em] text-ink-muted">
                      Currently
                    </span>
                    <span className="font-medium text-ink">
                      Building TransOpsync
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-xs text-ink-muted">
                    <span className="relative flex h-2 w-2" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Open to select projects
                  </span>
                </figcaption>
              </Parallax>
            </figure>
          </FadeUp>
        </div>

        {/* <FadeUp delay={0.45}>
          <dl className="mt-20 grid grid-cols-2 gap-y-8 border-t border-border pt-10 md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="font-serif text-4xl leading-none text-ink">
                  {value}
                </dt>
                <dd className="mt-2 text-xs uppercase tracking-[0.18em] text-ink-muted">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </FadeUp> */}
      </div>
    </section>
  );
}
