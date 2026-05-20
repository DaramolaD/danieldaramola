import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label?: string;
  title?: ReactNode;
  titleId?: string;
  children: ReactNode;
  className?: string;
  intro?: ReactNode;
};

export function Section({
  id,
  label,
  title,
  titleId,
  children,
  className = "",
  intro,
}: SectionProps) {
  const headingId = titleId ?? (id ? `${id}-heading` : undefined);

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-[var(--section-y)] ${className}`}
    >
      <div className="container-site">
        {(label || title || intro) && (
          <header className="mb-12 md:mb-16">
            {label && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {label}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-5xl md:leading-[1.1]"
              >
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                {intro}
              </div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
