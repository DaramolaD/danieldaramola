import { Section } from "@/components/layout/Section";
import { services } from "@/lib/services";
import { TextLink } from "@/components/ui/TextLink";

export function ServicesGrid() {
  return (
    <Section
      id="services"
      label="02 / Services"
      title="What I help teams ship"
      intro="Strategy through launch — focused on outcomes, not deliverable theater."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className="rounded-2xl border border-border bg-surface/50 p-8 transition-colors hover:border-ink/20"
          >
            <h3 className="font-serif text-2xl text-ink">{service.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-10">
        <TextLink href="/services">View all services</TextLink>
      </p>
    </Section>
  );
}
