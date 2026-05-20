import { ContactModalTrigger } from "@/components/ui/ContactModalTrigger";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants";

export function ServicesCta() {
  return (
    <div className="mt-16 border-t border-border pt-12 md:mt-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
        Next step
      </p>
      <h2 className="mt-4 max-w-xl font-serif text-2xl tracking-tight text-ink md:text-3xl">
        Need help shipping one of these?
      </h2>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
        {siteConfig.availability}. Tell me what you&apos;re building and which
        services fit your stage.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <ContactModalTrigger subject="Services inquiry">
          Discuss your project
        </ContactModalTrigger>
        <Button href="/work" variant="secondary">
          View case studies
        </Button>
      </div>
    </div>
  );
}
