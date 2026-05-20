"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { Parallax } from "@/components/motion/Parallax";
import { RevealWords } from "@/components/motion/RevealWords";
import { siteConfig } from "@/lib/constants";
import heroImg from "@/public/heroImg.png";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:px-10 md:pt-32 md:pb-32"
    >
      <div className="grid items-center gap-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <FadeUp>
            <p className="mb-10 text-xs uppercase tracking-[0.22em] text-ink-muted">
              {siteConfig.heroStatus}
            </p>
          </FadeUp>

          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.75rem,7vw,5.75rem)] leading-[1.02] tracking-tight text-ink"
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
            <p className="mt-10 max-w-xl text-base leading-relaxed text-ink-muted">
              {siteConfig.heroBio}
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                Selected work
                <span
                  aria-hidden
                  className="inline-block transition-transform group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                Book a call
              </Link>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2} className="md:col-span-5">
          <figure className="relative isolate">
            <Parallax amount={36} className="overflow-hidden rounded-sm border border-black/8 bg-[#ebe4dc] shadow-[0_8px_30px_-12px_rgba(26,26,26,0.12)]">
              <Image
                src={heroImg}
                alt="Portrait of Daniel Daramola"
                width={1024}
                height={1280}
                priority
                sizes="(max-width: 768px) 100vw, 42vw"
                className="aspect-4/5 w-full object-cover object-top grayscale-15"
              />
            </Parallax>
          </figure>
        </FadeUp>
      </div>
    </section>
  );
}
