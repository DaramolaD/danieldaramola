"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useContactModal } from "@/components/contact/ContactModalContext";
import { siteConfig } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

const fieldClass =
  "mt-2 w-full rounded-sm border border-border bg-white px-3.5 py-3 text-sm text-ink shadow-[inset_0_1px_2px_rgba(26,26,26,0.04)] outline-none transition-[border-color,box-shadow] placeholder:text-ink-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/15";

export function ContactModal() {
  const { isOpen, subject, close } = useContactModal();
  const reducedMotion = useReducedMotion();
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState(subject);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) setMessageSubject(subject);
  }, [isOpen, subject]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("input, textarea")?.focus();
    }, 120);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [isOpen, close]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const body = [
        name && `Name: ${name}`,
        email && `Email: ${email}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n");

      const params = new URLSearchParams({
        subject: messageSubject || "Project inquiry",
        body,
      });
      window.location.href = `mailto:${siteConfig.email}?${params.toString()}`;
      close();
    },
    [name, email, message, messageSubject, close],
  );

  const transition = reducedMotion
    ? { duration: 0.01 }
    : { duration: 0.4, ease };

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            className="absolute inset-0 bg-ink/35 backdrop-blur-[4px]"
            aria-label="Close contact form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            onClick={close}
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            className="relative z-10 flex max-h-[min(92dvh,100dvh)] w-full max-w-lg flex-col overflow-hidden rounded-t-xl border border-border bg-canvas shadow-[0_28px_80px_-24px_rgba(26,26,26,0.35)] sm:max-h-[min(88dvh,40rem)] sm:rounded-xl"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            transition={transition}
          >
            {/* Sticky header */}
            <div className="shrink-0 border-b border-border bg-canvas px-5 py-5 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Get in touch
                  </p>
                  <h2
                    id={titleId}
                    className="mt-2 font-serif text-[clamp(1.5rem,4vw,1.875rem)] leading-tight tracking-tight text-ink"
                  >
                    Start a conversation
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted">
                    {siteConfig.availability}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition-colors hover:border-ink/20 hover:bg-surface"
                  aria-label="Close"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M1 1L13 13M13 1L1 13"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <form
              onSubmit={handleSubmit}
              className="flex min-h-0 flex-1 flex-col"
            >
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 sm:py-6">
                <p
                  id={descId}
                  className="text-sm leading-relaxed text-ink-muted"
                >
                  Share what you&apos;re building, your timeline, and where you
                  need help. Submitting opens your email app with everything
                  pre-filled.
                </p>

                <div className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                        Name
                      </span>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                        Email <span className="text-accent">*</span>
                      </span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={fieldClass}
                        placeholder="you@company.com"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Subject
                    </span>
                    <input
                      type="text"
                      name="subject"
                      value={messageSubject}
                      onChange={(e) => setMessageSubject(e.target.value)}
                      className={fieldClass}
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">
                      Message <span className="text-accent">*</span>
                    </span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${fieldClass} min-h-[7.5rem] resize-y`}
                      placeholder="What are you building? What stage are you at? Where do you need an engineer?"
                    />
                  </label>
                </div>
              </div>

              {/* Sticky footer */}
              <div className="shrink-0 border-t border-border bg-canvas px-5 py-4 sm:px-6 sm:py-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-ink bg-ink px-6 text-sm font-medium tracking-wide text-canvas transition-colors hover:bg-ink/90 sm:w-auto"
                  >
                    Send via email
                  </button>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-center text-sm text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline sm:text-left"
                    onClick={close}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
