import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-canvas/90 backdrop-blur-md supports-backdrop-filter:bg-canvas/75">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:px-10">
        <Link
          href="/"
          className="min-w-0 truncate font-serif text-base tracking-tight text-ink sm:text-lg lg:text-xl"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center justify-center gap-6 lg:flex xl:gap-8"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden truncate text-sm text-ink-muted transition-colors hover:text-ink lg:inline xl:max-w-[14rem]"
          >
            {siteConfig.email}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
