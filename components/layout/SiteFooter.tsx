import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/constants";
import { TextLink } from "@/components/ui/TextLink";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="container-site py-[var(--section-y)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-ink md:text-5xl">
            Have something{" "}
            <span className="text-accent">worth building?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
            I&apos;m accepting new projects. Reach out and let&apos;s start a
            conversation about yours.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-10 inline-block font-serif text-2xl text-ink underline-offset-4 transition-colors hover:text-accent hover:underline md:text-4xl"
          >
            {siteConfig.email}
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-ink-muted">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <nav
              className="mt-4 flex flex-wrap gap-x-6 gap-y-2"
              aria-label="Footer navigation"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <TextLink
                href={siteConfig.social.linkedin}
                showArrow={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </TextLink>
            </li>
            <li>
              <TextLink
                href={siteConfig.social.twitter}
                showArrow={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </TextLink>
            </li>
            <li>
              <TextLink
                href={siteConfig.social.github}
                showArrow={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </TextLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site border-t border-border py-6">
        <a
          href="#top"
          className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
