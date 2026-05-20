import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

type PageSeo = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "",
}: PageSeo = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: "Worldwide",
    serviceType: [
      "Software Engineering",
      "Full-Stack Development",
      "Web Development",
      "Product Development",
    ],
    sameAs: Object.values(siteConfig.social),
  };
}

export function projectJsonLd(project: {
  title: string;
  summary: string;
  slug: string;
  year: string;
  kind: string;
  image: string;
}) {
  const url = `${siteConfig.url}/work/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url,
    dateCreated: project.year,
    genre: project.kind,
    image: project.image,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
