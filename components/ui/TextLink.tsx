import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ExternalArrow } from "@/components/ui/ExternalArrow";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  showArrow?: boolean;
  /** `external` = diagonal up-right arrow; `forward` = horizontal → */
  arrow?: "forward" | "external";
};

export function TextLink({
  href,
  className = "",
  showArrow = true,
  arrow = "forward",
  children,
  ...props
}: TextLinkProps) {
  const classes = `group inline-flex items-center gap-2.5 text-sm font-medium text-ink transition-colors hover:text-accent ${className}`;

  const content = (
    <>
      {children}
      {showArrow && arrow === "external" ? (
        <ExternalArrow className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
      {showArrow && arrow === "forward" ? (
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      ) : null}
    </>
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
