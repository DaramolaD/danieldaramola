"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import { Parallax } from "@/components/motion/Parallax";
import { RevealWords } from "@/components/motion/RevealWords";
import { faqItems } from "@/lib/faq";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-[var(--section-y)]"
    >
      <div className="container-site">
        <header className="mb-14 md:mb-20">
          <FadeUp>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              04 / FAQ
            </p>
          </FadeUp>
          <h2
            id="faq-heading"
            className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.1]"
          >
            <RevealWords as="span" className="block">
              Some questions,
            </RevealWords>
            <RevealWords
              as="span"
              className="block italic text-accent"
              delay={0.12}
            >
              clear answers.
            </RevealWords>
          </h2>
        </header>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <FadeUp delay={0.15}>
            <Parallax
              amount={28}
              className="relative aspect-4/3 overflow-hidden lg:min-h-112 lg:aspect-auto"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
                alt="Home office desk with monitor, keyboard, and lamp"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Parallax>
          </FadeUp>

          <div className="flex flex-col border-t border-border">
            {faqItems.map((item, index) => (
              <FadeUp key={item.question} delay={0.1 + index * 0.06}>
                <details className="group border-b border-border py-8 md:py-9">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-medium leading-snug text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="grid grid-cols-[2.25rem_1fr] items-start gap-x-5 gap-y-0 md:grid-cols-[2.5rem_1fr] md:gap-x-6">
                      <span className="pt-0.5 text-sm tabular-nums text-ink-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="pr-2 text-[0.9375rem] md:text-base">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className="mt-0.5 shrink-0 text-lg leading-none text-ink-muted transition-transform duration-200 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-prose pl-11 text-sm leading-[1.7] text-ink-muted md:mt-6 md:pl-12 md:text-base md:leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.2} className="mt-16 border-t border-border pt-12 md:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Still deciding?
          </p>
          <p className="mt-4 max-w-lg font-serif text-2xl tracking-tight text-ink md:text-3xl">
            The fastest way to know if we&apos;re a fit is a short email.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={`mailto:${siteConfig.email}`}>
              Ask a question
            </Button>
            <Link
              href="/#contact"
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Contact details →
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
