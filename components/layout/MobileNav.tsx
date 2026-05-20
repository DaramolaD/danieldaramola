"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
        <MenuIcon open={open} />
      </button>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-ink/25 backdrop-blur-[2px] lg:hidden"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 z-50 flex max-h-[calc(100dvh-4rem)] flex-col overflow-y-auto border-t border-border bg-canvas p-6 shadow-lg lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm px-2 py-3 font-serif text-2xl text-ink transition-colors hover:bg-surface hover:text-accent"
                  onClick={close}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 border-t border-border pt-6">
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
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-4" aria-hidden>
      <span
        className={`absolute left-0 block h-0.5 w-4 bg-current transition-all duration-200 ${
          open ? "top-2 rotate-45" : "top-0.5"
        }`}
      />
      <span
        className={`absolute left-0 top-2 block h-0.5 w-4 bg-current transition-all duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 block h-0.5 w-4 bg-current transition-all duration-200 ${
          open ? "top-2 -rotate-45" : "top-3.5"
        }`}
      />
    </span>
  );
}
