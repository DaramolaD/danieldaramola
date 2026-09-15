export const siteConfig = {
  name: "Daniel Daramola",
  tagline: "Full-Stack Engineer · Next.js · Node.js · FastAPI · SaaS Systems",
  description:
    "Full-stack engineer building operational SaaS, multi-tenant platforms, and real-time systems. Next.js, Node.js, Python (FastAPI), PostgreSQL, MongoDB.",
  heroStatus: "Full-Stack Software Engineer",
  heroHeadline: {
    line1: "Engineering products",
    line2: "that power real operations.",
  },
  heroBio:
    "I build full-stack systems that run real operations like logistics dispatch, estate management, fuel station platforms, and tourism marketplaces. Next.js, Node.js, and Python on the backend. Most of it owned end-to-end: schema design, API contracts, and the UI that operators actually use. I work best when the problem is still messy.",
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
