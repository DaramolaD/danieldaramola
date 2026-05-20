import { FadeUp } from "@/components/motion/FadeUp";
import { RevealWords } from "@/components/motion/RevealWords";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44"
    >
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <FadeUp>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              01 — About
            </p>
          </FadeUp>
        </div>
        <div className="md:col-span-8">
          <h2 className="font-display text-[clamp(1.875rem,4vw,3rem)] leading-[1.1] tracking-tight text-foreground">
            <RevealWords className="block">
              Most launches fade before the product earns trust.
            </RevealWords>
            <RevealWords className="block italic text-primary" delay={0.15}>
              I stay for what comes after.
            </RevealWords>
          </h2>
          <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground">
            <FadeUp delay={0.2}>
              <p>
                I&apos;m a software engineer. I&apos;ve shipped full products from
                zero healthcare SaaS, logistics platforms, fintech dashboards. The
                work is usually quiet: a stable release, a flow that holds under
                load, a product that still makes sense six months in.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p>
                I work end-to-end with founders and teams architecture through
                shipping, and the iteration that follows launch. One engineer
                across the whole arc.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
