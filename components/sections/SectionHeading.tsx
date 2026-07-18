"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { RevealWords } from "@/components/motion/RevealWords";

type SectionHeadingProps = {
  label?: string;
  line1: string;
  line2: string;
  as?: "h1" | "h2";
  labelDelay?: number;
  line2Delay?: number;
};

export function SectionHeading({
  label,
  line1,
  line2,
  as = "h2",
  labelDelay = 0,
  line2Delay = 0.15,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div className="mb-20 grid gap-8 md:grid-cols-12">
      <div className="md:col-span-4">
        <FadeUp delay={labelDelay}>
          <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
            {label}
          </p>
        </FadeUp>
      </div>
      <div className="md:col-span-8">
        <Heading className="font-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-tight text-ink">
          <RevealWords as="span" className="block">
            {line1}
          </RevealWords>
          <RevealWords
            as="span"
            className="block italic text-accent"
            delay={line2Delay}
          >
            {line2}
          </RevealWords>
        </Heading>
      </div>
    </div>
  );
}
