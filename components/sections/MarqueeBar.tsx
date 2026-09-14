"use client";

import { allMarqueeLabels } from "@/lib/marquee";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

export function MarqueeBar() {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  const items = [
    "Next.js & React 19",
    "Python (FastAPI)",
    "Node.js & Express",
    "TypeScript & MERN",
    "PostgreSQL & Supabase",
    "MongoDB & Mongoose",
    "TanStack Query & Zustand",
    "Flutterwave Payments",
    "Leaflet & Mapbox",
    "Multi-Tenant SaaS Architecture",
    "Role-Based Access Control",
  ];

  return (
    <section
      aria-label="Core Capabilities & Technologies"
      className="relative overflow-hidden border-y border-border bg-canvas-subtle/50 py-3.5 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <p className="sr-only">{allMarqueeLabels.join(", ")}</p>

      {/* Left and Right Edge Fade Gradients for an editorial seamless aesthetic */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent sm:w-28" />

      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex w-max items-center will-change-transform"
          animate={
            prefersReduced
              ? {}
              : {
                x: isPaused ? undefined : ["0%", "-50%"],
              }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
        >
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {items.map((label, idx) => (
              <div
                key={`track1-${label}-${idx}`}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink">
                  {label}
                </span>
                <StarSeparator />
              </div>
            ))}
          </div>

          {/* Track 2 (Duplicate for infinite seamless wrap) */}
          <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden>
            {items.map((label, idx) => (
              <div
                key={`track2-${label}-${idx}`}
                className="flex items-center gap-8 whitespace-nowrap"
              >
                <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-ink">
                  {label}
                </span>
                <StarSeparator />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


function StarSeparator() {
  return (
    <span className="inline-flex shrink-0 text-ink-muted/70" aria-hidden>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="currentColor"
        className="opacity-80"
      >
        <path d="M5 0 L6.2 3.8 10 5 6.2 6.2 5 10 3.8 6.2 0 5 3.8 3.8Z" />
      </svg>
    </span>
  );
}