import { FadeUp } from "@/components/motion/FadeUp";
import { TextLink } from "@/components/ui/TextLink";
import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <FadeUp>
            <SectionLabel index="01">About & Background</SectionLabel>
          </FadeUp>
        </div>
        <div className="lg:col-span-8">
          <h1 className="font-serif text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight text-ink">
            Building software with deep attention to{" "}
            <span className="italic text-accent">reliability and architecture.</span>
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted">
            <FadeUp delay={0.1}>
              <p>
                I&apos;m Daniel Daramola, a full-stack software engineer building operational SaaS, multi-tenant platforms, and real-time systems. I take on complex domain workflows across PropTech, fuel retail operations, logistics dispatch, and interactive SaaS tools.
              </p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p>
                My focus centers on complete product architecture: modeling resilient database schemas, building typed API contracts, crafting intuitive dashboard experiences, and ensuring production stability post-launch.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="pt-2">
                <TextLink href="/#contact">Start a conversation</TextLink>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
