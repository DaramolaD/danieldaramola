import Link from "next/link";
import { ContactNavLink } from "@/components/layout/ContactNavLink";
import { MobileNav } from "@/components/layout/MobileNav";
import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger";
import { navLinks, siteConfig } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-[60] border-b border-border/80 bg-canvas/90 backdrop-blur-md supports-backdrop-filter:bg-canvas/75">
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
            <ContactNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              className="whitespace-nowrap text-sm text-ink-muted transition-colors hover:text-ink"
            />
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <ContactModalTrigger className="hidden min-h-10 px-5 text-xs lg:inline-flex">
            Let&apos;s talk
          </ContactModalTrigger>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
