"use client";

import { motion } from "motion/react";

/**
 * RuleLine — a horizontal line that draws itself in on scroll.
 */
export function RuleLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={`h-px origin-left bg-border ${className ?? ""}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    />
  );
}
