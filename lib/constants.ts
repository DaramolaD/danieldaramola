export const siteConfig = {
  name: "Daniel Daramola",
  tagline: "Software engineering & product development",
  description:
    "Software engineer shipping full products from zero — healthcare SaaS, logistics platforms, fintech dashboards. Code that works. Products that stick.",
  heroStatus: "Product-focused engineering",
  heroHeadline: {
    line1: "I build software",
    line2: "people actually use.",
  },
  heroBio:
    "Full-stack engineer building web and mobile products with MERN and React Native, focused on shipping reliable features, clean interfaces, and maintainable systems.",
  portraitCaption: "Daniel, studio — winter 2025",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://danieldaramola.com",
  email: "hello@danieldaramola.co",
  availability: "Available for new projects",
  social: {
    linkedin: "https://www.linkedin.com/in/daramoladaniel/",
    x: "https://x.com/dantripled",
    github: "https://github.com/DaramolaD",
  },
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
