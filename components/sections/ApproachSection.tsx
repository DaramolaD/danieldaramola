"use client";

import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { Parallax } from "@/components/motion/Parallax";
import { RevealWords } from "@/components/motion/RevealWords";
import { RuleLine } from "@/components/motion/RuleLine";
import { approachSteps } from "@/lib/approach";

const WORKSPACE_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1280&q=80";

export function ApproachSection() {
  return (
    <section id="approach" className="py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <FadeUp>
              <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
                02 — How I work
              </p>
            </FadeUp>
            <h2 className="mt-6 font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink">
              <RevealWords className="block">Slow questions,</RevealWords>
              <RevealWords className="block italic text-accent" delay={0.12}>
                fast hands.
              </RevealWords>
            </h2>
          </div>

          <div className="md:col-span-8">
            <FadeUp delay={0.1}>
              <div className="mb-16 overflow-hidden rounded-sm">
                <Parallax amount={40} className="relative aspect-16/10 w-full">
                  <Image
                    src={WORKSPACE_IMAGE}
                    alt="Workspace with monitor and desk"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </Parallax>
              </div>
            </FadeUp>

            <ol className="border-y border-border">
              {approachSteps.map((step, i) => (
                <li key={step.n}>
                  {i > 0 && <RuleLine />}
                  <FadeUp delay={i * 0.06}>
                    <div className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                      <span className="text-xs tracking-[0.2em] text-ink-muted sm:col-span-2">
                        {step.n}
                      </span>
                      <h3 className="font-serif text-2xl tracking-tight text-ink sm:col-span-3">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-ink-muted sm:col-span-7">
                        {step.body}
                      </p>
                    </div>
                  </FadeUp>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
