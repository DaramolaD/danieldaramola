"use client";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealWords } from "@/components/motion/RevealWords";
import { TextLink } from "@/components/ui/TextLink";
import { ReactNode, useEffect, useRef, useState } from "react";
import { SectionHeading } from "./SectionHeading";

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "-40px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={shown ? "animate-rise" : "opacity-0"}
    >
      {children}
    </div>
  );
}

export function AboutSection2() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44"
    >
      <p className="text-xs mb-10 uppercase tracking-[0.22em] text-ink-muted">
        02 — About
      </p>
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-8">
          <h2 className="font-display text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-tight text-foreground">
            <RevealWords className="pr-2">
              An engineer who thinks like a
            </RevealWords>
            <RevealWords className="italic text-primary" delay={0.15}>
              product person,
            </RevealWords>
            <RevealWords className="px-2">a product person who</RevealWords>
            <RevealWords className="italic text-primary" delay={0.15}>
              can actually ship the code.
            </RevealWords>
          </h2>
          <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <FadeUp delay={0.2}>
              <p>
                I've spent the last four years building for startups and small
                teams, from marketing sites, various real estate saas apps, fuel
                retain managing app, to logistics saas platforms. I care about
                the seam where product, design and engineering meet. <br />
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p>
                My default is to understand the business first, sketch the
                smallest thing that proves it, and then build something reliable
                enough either solo or work end-to-end with founders and teams
                architecture through shipping, and the iteration that follows
                launch. One engineer across the whole arc.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="pt-2">
                <TextLink href="/#contact">Start a conversation</TextLink>
              </p>
            </FadeUp>
          </div>
        </div>
        <div className="md:col-span-4">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              How I work
            </p>
          </FadeUp>
          <aside className="md:col-span-5 md:pl-8 md:border-l md:border-border">
            <ol className="mt-6 space-y-6">
              {[
                [
                  "Understand the problem",
                  "Talk to users, map the workflow, question the brief.",
                ],
                [
                  "Design the experience",
                  "Sketch flows in Figma before touching a component.",
                ],
                [
                  "Build reliable systems",
                  "Typed, tested, observable. Boring where it should be.",
                ],
                [
                  "Ship, measure, iterate",
                  "Small releases. Real feedback. Honest changelog.",
                ],
              ].map(([title, body], i) => (
                <Reveal key={title} delay={160 + i * 60}>
                  <li className="flex gap-4">
                    <span className="mt-1 font-meta text-terracotta">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="font-medium">{title}</div>
                      <p className="mt-1 text-sm text-ink-soft leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
