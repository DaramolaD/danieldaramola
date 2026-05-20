"use client";

import Image, { type StaticImageData } from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import chessKnight from "@/public/chessknight.jpeg";
import controlModule from "@/public/controlmodule.jpeg";
import mechanicalWatch from "@/public/mechanicalWatch.jpeg";

type ValueSlide = {
  eyebrow: string;
  headline: string;
  subtext: string;
  image: StaticImageData;
  imageAlt: string;
};

const slides: ValueSlide[] = [
  {
    eyebrow: "What I optimize for",
    headline: "I value products that age well.",
    subtext:
      "Clear systems, thoughtful structure, and maintainable experiences usually outperform trends over time.",
    image: mechanicalWatch,
    imageAlt:
      "Close-up of a mechanical watch craftsmanship that lasts",
  },
  {
    eyebrow: "How I think about product",
    headline:
      "I care about how products work, not just how they look.",
    subtext:
      "Great experiences come from understanding users, systems, and business goals together.",
    image: chessKnight,
    imageAlt:
      "Chess knight on a board strategy, systems, and how pieces fit together",
  },
  {
    eyebrow: "What I build for",
    headline: "I build products with real usage in mind.",
    subtext:
      "I think beyond launch screens into workflows, edge cases, team operations, and everyday usability.",
    image: controlModule,
    imageAlt:
      "Control module and interface products built for real-world use",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

const contentCardClassName =
  "max-w-lg rounded-md border border-border bg-white p-6 shadow-[0_12px_40px_-14px_rgba(26,26,26,0.14)] md:max-w-md md:p-7 lg:max-w-xl";

function ValueCopy({
  slide,
  className,
  onGlass = false,
}: {
  slide: ValueSlide;
  className?: string;
  onGlass?: boolean;
}) {
  return (
    <div className={className}>
      <p
        className={`text-xs font-medium uppercase tracking-[0.22em] ${
          onGlass ? "text-accent" : "text-ink-muted"
        }`}
      >
        {slide.eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif leading-[1.12] tracking-tight md:mt-4 ${
          onGlass
            ? "text-[clamp(1.4rem,2.9vw,2.35rem)] text-ink"
            : "text-[clamp(1.35rem,2.8vw,2.25rem)] text-ink"
        }`}
      >
        {slide.headline}
      </h2>
      <p
        className={`mt-4 max-w-md leading-relaxed ${
          onGlass
            ? "text-[0.9375rem] text-[#3a3a3a] md:text-base"
            : "text-sm text-ink-muted md:text-[0.9375rem]"
        }`}
      >
        {slide.subtext}
      </p>
    </div>
  );
}

function ValuePanel({
  slide,
  style,
  className,
}: {
  slide: ValueSlide;
  style?: MotionStyle;
  className?: string;
}) {
  return (
    <motion.div
      style={style}
      className={`grid items-center gap-12 md:grid-cols-12 md:gap-16 ${className ?? ""}`}
    >
      <div className="md:col-span-5 lg:col-span-5">
        <p className="text-xs uppercase tracking-[0.22em] text-ink-muted">
          {slide.eyebrow}
        </p>
        <h2 className="mt-6 font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] tracking-tight text-ink">
          {slide.headline}
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-ink-muted">
          {slide.subtext}
        </p>
      </div>

      <div className="md:col-span-7 lg:col-span-7">
        <div className="overflow-hidden rounded-sm border border-black/8 bg-[#ebe4dc] shadow-[0_8px_30px_-12px_rgba(26,26,26,0.12)]">
          <div className="relative aspect-4/5 w-full sm:aspect-16/10 md:aspect-4/5">
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ValuePanelFullscreen({
  slide,
  style,
  className,
  priority = false,
}: {
  slide: ValueSlide;
  style?: MotionStyle;
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.div
      style={style}
      className={`absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          priority={priority}
        />
      </div>

      <div className="relative z-10 flex h-full items-end pb-18 md:items-center md:pb-13">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <ValueCopy
            onGlass
            slide={slide}
            className={contentCardClassName}
          />
        </div>
      </div>
    </motion.div>
  );
}

function useValueSlideMotion(
  scrollYProgress: MotionValue<number>,
  index: number,
  total: number,
) {
  const segment = 1 / total;
  const enterStart = Math.max(0, index * segment - 0.02);
  const enterEnd = index * segment + 0.1;
  const exitStart = (index + 1) * segment - 0.1;
  const exitEnd = (index + 1) * segment;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, exitStart, exitEnd]
      : isLast
        ? [enterStart, enterEnd, 1]
        : [enterStart, enterEnd, exitStart, exitEnd],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );

  const y = useTransform(
    scrollYProgress,
    isFirst
      ? [0, exitStart, exitEnd]
      : isLast
        ? [enterStart, enterEnd, 1]
        : [enterStart, enterEnd, exitStart, exitEnd],
    isFirst ? [0, 0, -24] : isLast ? [28, 0, 0] : [28, 0, 0, -24],
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst
      ? [0, exitStart, exitEnd]
      : isLast
        ? [enterStart, enterEnd, 1]
        : [enterStart, enterEnd, exitStart, exitEnd],
    isFirst ? [1, 1, 0.97] : isLast ? [0.97, 1, 1] : [0.97, 1, 1, 0.97],
  );

  const blur = useTransform(
    scrollYProgress,
    isLast ? [0, 1] : [exitStart, exitEnd],
    isLast ? [0, 0] : [0, 6],
  );

  const filter = useTransform(blur, (v) => (v > 0 ? `blur(${v}px)` : "none"));
  const pointerEvents = useTransform(opacity, (o) =>
    o > 0.5 ? "auto" : "none",
  );

  return { opacity, y, scale, filter, pointerEvents };
}

function StaticValues({ children }: { children: ReactNode }) {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-44"
    >
      <div className="space-y-32 md:space-y-44">{children}</div>
    </section>
  );
}

function ScrollValues() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const slide0 = useValueSlideMotion(scrollYProgress, 0, slides.length);
  const slide1 = useValueSlideMotion(scrollYProgress, 1, slides.length);
  const slide2 = useValueSlideMotion(scrollYProgress, 2, slides.length);
  const slideMotions = [slide0, slide1, slide2];

  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="values"
      aria-labelledby="values-heading"
      className="relative isolate h-[300vh]"
    >
      <div className="sticky top-16 z-10 h-[calc(100dvh-4rem)] max-h-[calc(100dvh-4rem)] overflow-hidden bg-canvas">
        <div className="relative h-full w-full">
          {slides.map((slide, i) => (
            <ValuePanelFullscreen
              key={slide.headline}
              priority={i === 0}
              slide={slide}
              style={{
                opacity: slideMotions[i].opacity,
                y: slideMotions[i].y,
                scale: slideMotions[i].scale,
                filter: slideMotions[i].filter,
                pointerEvents: slideMotions[i].pointerEvents,
                zIndex: 10 + i,
              }}
              className="origin-center will-change-transform"
            />
          ))}
        </div>

        <div
          className="absolute inset-x-0 bottom-0 z-20 flex items-center gap-3 border-t border-border bg-white px-6 py-4 md:px-10"
          aria-hidden
        >
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-black/10">
            <motion.div
              className="h-full w-full origin-left rounded-full bg-accent"
              style={{ scaleX: progressScale }}
            />
          </div>
          <p className="shrink-0 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#3a3a3a]">
            Scroll
          </p>
        </div>
      </div>

      <h2 id="values-heading" className="sr-only">
        What I optimize for in product work
      </h2>
    </section>
  );
}

export function ValuesSection() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <StaticValues>
        {slides.map((slide, i) => (
          <div key={slide.headline}>
            {i === 0 ? (
              <h2
                id="values-heading"
                className="sr-only"
              >
                What I optimize for in product work
              </h2>
            ) : null}
            <ValuePanel slide={slide} />
          </div>
        ))}
      </StaticValues>
    );
  }

  return <ScrollValues />;
}
