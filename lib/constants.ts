export const siteConfig = {
  name: "Daniel Daramola",
  tagline: "Software Engineer | React, TypeScript, Python (FastAPI), MERN & SaaS Products",
  description:
    "Software engineer with 3+ years building SaaS products end-to-end: React/Next.js frontends backed by Node.js, Express, and Python (FastAPI) services, PostgreSQL, and MongoDB.",
  heroStatus: "Full-Stack Software Engineer",
  heroHeadline: {
    line1: "Engineering products",
    line2: "that power real operations.",
  },
  heroBio:
    "Full-stack engineer with 3+ years building end-to-end SaaS platforms, React/Next.js frontends, and Node.js / Python (FastAPI) backends. Experienced owning features from database schema design through production deployment.",
  portraitCaption: "Daniel Daramola",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://danieldaramola.vercel.app",
  email: "dandaramola.d@gmail.com",
  availability: "Available for full-time roles & engineering contracts",
  social: {
    linkedin: "https://www.linkedin.com/in/daramoladaniel/",
    x: "https://x.com/dantripled",
    github: "https://github.com/DaramolaD",
  },
} as const;

export const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const footerLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
