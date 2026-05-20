"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ContactNavLink } from "@/components/layout/ContactNavLink";
import { navLinks, siteConfig } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: { opacity: 0, y: -16 },
  open: { opacity: 1, y: 0 },
};

const listVariants = {
  closed: {},
  open: {
    transition: { staggerChildren: 0.14, delayChildren: 0.18 },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -16 },
  open: { opacity: 1, x: 0 },
};

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const close = useCallback(() => setOpen(false), []);

  const transition = reducedMotion
    ? { duration: 0.01 }
    : { duration: 0.4, ease };

  const itemTransition = reducedMotion
    ? { duration: 0.01 }
    : { duration: 0.55, ease };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      document.documentElement.setAttribute("data-mobile-menu-open", "");
    } else {
      document.documentElement.removeAttribute("data-mobile-menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.removeAttribute("data-mobile-menu-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-ink transition-colors hover:border-ink/20 hover:bg-surface"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <MenuIcon open={open} reducedMotion={reducedMotion} />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              key="mobile-nav-backdrop"
              className="fixed inset-x-0 top-16 bottom-0 z-40 bg-ink/20 lg:hidden"
              aria-label="Close menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              transition={transition}
              onClick={close}
            />
            <motion.div
              key="mobile-nav-panel"
              id="mobile-menu"
              className="fixed inset-x-0 top-16 bottom-0 z-50 flex h-[calc(100dvh-4rem)] min-h-[calc(100dvh-4rem)] flex-col border-t border-border bg-canvas shadow-lg lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial="closed"
              animate="open"
              exit="closed"
              variants={panelVariants}
              transition={transition}
            >
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 py-8">
                <motion.nav
                  className="flex flex-col gap-2"
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={itemVariants}
                      transition={itemTransition}
                    >
                      <ContactNavLink
                        href={link.href}
                        label={link.label}
                        className="block w-full rounded-sm px-2 py-3.5 text-left font-serif text-2xl text-ink transition-colors hover:bg-surface hover:text-accent"
                        onNavigate={close}
                      />
                    </motion.div>
                  ))}
                </motion.nav>
                <motion.div
                  className="mt-10 shrink-0 border-t border-border pt-8 pb-4"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...itemTransition,
                    delay: reducedMotion ? 0 : 0.5,
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                    Get in touch
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-2 block break-all text-base text-ink underline-offset-4 hover:text-accent hover:underline"
                    onClick={close}
                  >
                    {siteConfig.email}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function MenuIcon({
  open,
  reducedMotion,
}: {
  open: boolean;
  reducedMotion: boolean | null;
}) {
  const transition = reducedMotion
    ? { duration: 0.01 }
    : { duration: 0.35, ease };

  return (
    <span className="relative block size-4" aria-hidden>
      <motion.span
        className="absolute left-0 block h-0.5 w-4 origin-center bg-current"
        animate={{
          top: open ? 8 : 2,
          rotate: open ? 45 : 0,
        }}
        transition={transition}
      />
      <motion.span
        className="absolute left-0 top-2 block h-0.5 w-4 bg-current"
        animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
        transition={transition}
      />
      <motion.span
        className="absolute left-0 block h-0.5 w-4 origin-center bg-current"
        animate={{
          top: open ? 8 : 14,
          rotate: open ? -45 : 0,
        }}
        transition={transition}
      />
    </span>
  );
}
