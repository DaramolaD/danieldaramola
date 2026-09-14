"use client";

import { siteConfig } from "@/lib/constants";
import { ExternalArrow } from "../ui/ExternalArrow";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <footer
      id="contact"
      className="border-t border-border bg-[#181716] text-[#fdfbf7]"
    >
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-10 md:py-28">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-canvas/60">
            <span className="font-semibold text-accent">05</span>
            <span className="h-px w-8 bg-canvas/20" />
            <span>Get in Touch</span>
          </div>

          <h2 className="mt-8 font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.08] tracking-tight text-canvas max-w-3xl">
            Have a project or problem{" "}
            <span className="italic text-accent">worth solving?</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-canvas/70">
            Whether you&apos;re looking to architect a new platform from zero, expand an existing product, or bring in full-stack horsepower for an upcoming roadmap sprint, let&apos;s talk.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-wider text-canvas transition-colors hover:bg-accent-hover"
            >
              Email {siteConfig.email}
              <span aria-hidden>→</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-canvas/25 bg-canvas/5 px-5 py-3 text-xs font-medium text-canvas/90 transition-colors hover:border-canvas hover:bg-canvas/10"
            >
              {copied ? "✓ Copied to clipboard" : "Copy email"}
            </button>
          </div>
        </div>

        <div className="mt-16 border-t border-canvas/15 pt-10 md:mt-20">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-canvas/50">
                Direct Contact
              </div>
              <div className="mt-2 text-sm text-canvas/80">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-canvas/50">
                Location &amp; Availability
              </div>
              <div className="mt-2 text-sm text-canvas/80">
                Remote First (UTC+1)
                <span className="block text-xs text-canvas/50">
                  Available for global teams &amp; remote contracts
                </span>
              </div>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-canvas/50">
                Elsewhere
              </div>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-canvas/80">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                >
                  GitHub
                  <ExternalArrow className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                >
                  LinkedIn
                  <ExternalArrow className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href={siteConfig.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                >
                  X
                  <ExternalArrow className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-canvas/10 pt-8 text-xs text-canvas/40 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Daniel Daramola. Built with Next.js, React 19 &amp; TypeScript.
            </p>
            <a
              href="#top"
              className="font-mono text-xs text-canvas/60 transition-colors hover:text-canvas"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
