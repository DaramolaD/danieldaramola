import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";
import type { ReactNode } from "react";

type CtaBandProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showAvailability?: boolean;
  className?: string;
};

export function CtaBand({
  id,
  eyebrow = "Work together",
  title,
  description,
  primaryLabel = "Start a conversation",
  primaryHref = `mailto:${siteConfig.email}`,
  secondaryLabel = "View selected work",
  secondaryHref = "/work",
  showAvailability = true,
  className = "",
}: CtaBandProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={`border-y border-border bg-surface/50 py-16 md:py-20 ${className}`}
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={id ? `${id}-heading` : undefined}
            className="mt-4 font-serif text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-tight text-ink"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            {description}
          </p>
          {showAvailability ? (
            <p className="mt-4 text-sm font-medium text-accent">
              {siteConfig.availability}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
          <a
            href={primaryHref}
            className="mt-8 inline-block text-sm text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
