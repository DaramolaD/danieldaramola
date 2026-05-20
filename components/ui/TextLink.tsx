import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  showArrow?: boolean;
};

export function TextLink({
  href,
  className = "",
  showArrow = true,
  children,
  ...props
}: TextLinkProps) {
  const classes = `group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      )}
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
