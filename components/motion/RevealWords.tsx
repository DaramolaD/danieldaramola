"use client";

import { motion, type Variants } from "motion/react";

/**
 * RevealWords — splits children string into words and reveals them with a
 * subtle staggered upward slide. Restrained, editorial-feeling motion.
 */
export function RevealWords({
  children,
  className,
  as = "span",
  delay = 0,
  stagger = 0.045,
  once = true,
}: {
  children: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const words = children.split(/(\s+)/);

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const MotionTag = motion[as] as typeof motion.span;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <span key={i}>{w}</span>
        ) : (
          <span key={i} className="inline-block align-bottom leading-[1.12]">
            <motion.span variants={word} className="inline-block">
              {w}
            </motion.span>
          </span>
        ),
      )}
    </MotionTag>
  );
}
