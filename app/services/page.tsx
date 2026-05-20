import { Section } from "@/components/layout/Section";
import { ServicesCta } from "@/components/sections/ServicesCta";
import { services } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Full-stack engineering, product strategy, UX/UI, and design systems for startups shipping from zero to production.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="pt-8">
      <Section
        title="Services built for shipping"
        intro="From zero to production — pragmatic, collaborative, and focused on what happens after you launch."
      >
        <ul className="grid gap-8 md:grid-cols-2">
          {services.map((service, i) => (
            <li
              key={service.title}
              className="border-t border-border pt-8 first:border-t-0 first:pt-0 md:[&:nth-child(2)]:border-t-0 md:[&:nth-child(2)]:pt-0"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-serif text-3xl text-ink">{service.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
        <ServicesCta />
      </Section>
    </main>
  );
}
