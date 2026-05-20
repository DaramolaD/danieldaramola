import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas hover:bg-ink/90 border border-ink",
  secondary:
    "bg-transparent text-ink border border-border hover:border-ink/40",
  ghost: "bg-transparent text-ink hover:text-accent border border-transparent",
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  href?: string;
};

export function Button({
  variant = "primary",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium tracking-wide transition-colors ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
