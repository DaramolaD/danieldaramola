"use client";

import { siteConfig } from "@/lib/constants";
import { motion, useReducedMotion } from "motion/react";
import { ExternalArrow } from "../ui/ExternalArrow";

const signature = "Daniel Daramola";

function TypewriterSignature() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="flex items-center justify-center mt-20 border-t border-canvas/15 pt-10 md:mt-10 md:pt-14">
      <p className="sr-only">{signature}</p>
      <motion.p
        aria-hidden="true"
        className="flex items-baseline overflow-hidden whitespace-nowrap font-display text-[clamp(2.75rem,10vw,8rem)] leading-none tracking-[-0.04em] text-canvas"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={{
          hidden: {},
          visible: {
            transition: reducedMotion
              ? { staggerChildren: 0 }
              : { delayChildren: 0.2, staggerChildren: 0.075 },
          },
        }}
      >
        {Array.from(signature).map((character, index) => (
          <motion.span
            key={`${character}-${index}`}
            className="inline-block"
            variants={{
              hidden: { opacity: reducedMotion ? 1 : 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.01 }}
          >
            {character === " " ? "\u00a0" : character}
          </motion.span>
        ))}
        {!reducedMotion && (
          <motion.span
            className="ml-1 inline-block h-[0.75em] w-[0.06em] bg-accent"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        )}
      </motion.p>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-foreground text-canvas"
    >
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-10">
        <div>
          <div className="flex items-center gap-3 font-meta text-canvas/60">
            <span className="text-accent">08</span>
            <span className="h-px w-8 bg-canvas/30" />
            <span>Contact</span>
          </div>
        </div>
        <div>
          <h2 className="mt-8 font-display text-5xl md:text-8xl leading-[0.95] max-w-4xl">
            Have an idea, product, or problem{" "}
            <span className="italic text-accent">worth solving?</span>
          </h2>
        </div>
        <div>
          <p className="mt-8 max-w-xl text-lg text-canvas/70 leading-relaxed">
            I enjoy working with founders and teams building meaningful
            products. Tell me what you&apos;re building - even a rough paragraph
            is enough to start a conversation.
          </p>
        </div>

        <div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@danieldaramola.dev"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-medium text-canvas transition hover:bg-accent-hover"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border border-canvas/30 px-7 py-4 text-sm font-medium text-canvas transition hover:border-canvas"
            >
              View résumé (PDF)
            </a>
          </div>
        </div>

        <div>
          <dl className="mt-20 grid gap-10 border-t border-canvas/15 pt-10 md:grid-cols-3">
            <div>
              <dt className="font-meta text-canvas/50">Elsewhere</dt>
              <dd className="mt-2 flex gap-5 text-lg">
                <a
                  href={siteConfig.social.linkedin}
                  className="hover:text-accent"
                >
                  LinkedIn{" "}
                  <ExternalArrow className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href={siteConfig.social.x} className="hover:text-accent">
                  X / Twitter{" "}
                  <ExternalArrow className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <TypewriterSignature />
      </div>
    </section>
  );
}
