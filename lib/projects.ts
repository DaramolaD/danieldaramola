import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "tidex",
    title: "Tidex",
    n: "01",
    kind: "Fintech",
    year: "2025",
    blurb:
      "Cash-flow dashboard and onboarding for a fintech startup serving small businesses.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80",
    imageAlt: "Laptop showing a financial analytics dashboard interface",
    featured: true,
    role: "Lead full-stack engineer",
    timeline: "10 weeks",
    team: "Founder, 1 designer, 2 engineers",
    status: "In production",
    summary:
      "End-to-end product build for a fintech MVP: onboarding, bank connections, cash-flow views, and an admin layer founders could run without engineering support.",
    problem:
      "Small business owners were exporting spreadsheets from three tools to understand runway. The startup needed a credible first release that could handle real accounts, daily usage, and fast iteration after investor demos.",
    solution:
      "Shipped a Next.js web app with a normalized ledger model, role-based access, and dashboard views tuned for operators—not accountants. Onboarding was reduced to four steps with clear recovery when bank linking failed.",
    outcomes: [
      { label: "Onboarding completion", value: "68% → 89%" },
      { label: "Time to first insight", value: "< 4 min" },
      { label: "Weekly active teams", value: "120+" },
      { label: "P0 incidents (90d)", value: "0" },
    ],
    responsibilities: [
      "Owned system design, API contracts, and frontend architecture",
      "Built auth, billing hooks, and bank-ingest pipeline with idempotent jobs",
      "Partnered on design system tokens and accessible form patterns",
      "Set up CI, preview deploys, and error monitoring before launch",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "tRPC",
      "Tailwind CSS",
      "Vercel",
      "Plaid",
      "Stripe",
    ],
    highlights: [
      {
        title: "Ledger-first data model",
        body: "Mapped messy bank transactions into a small set of event types so reporting stayed fast and audits stayed traceable.",
      },
      {
        title: "Resilient bank linking",
        body: "Retries, user-visible states, and support tooling for failed connections—reducing drop-off without hiding errors.",
      },
      {
        title: "Operator dashboards",
        body: "Server-rendered overview pages with chart data cached per workspace; kept TTFB low on mobile networks.",
      },
    ],
    phases: [
      {
        title: "Discovery & scope",
        description:
          "Mapped jobs-to-be-done with founders, defined MVP cut line, and wrote a technical brief with risks (compliance, ingest SLAs).",
      },
      {
        title: "Foundation",
        description:
          "Auth, org model, design tokens, and CI. Established API patterns and preview environments the whole team could use.",
      },
      {
        title: "Core product",
        description:
          "Onboarding, transactions pipeline, dashboards, and exports. Instrumented funnels before opening beta.",
      },
      {
        title: "Launch & iteration",
        description:
          "Hardened observability, runbooks, and weekly release rhythm with feature flags for risky areas.",
      },
    ],
    liveUrl: "https://tidex.example",
  },
  {
    slug: "skytrack",
    title: "SkyTrack",
    n: "02",
    kind: "Logistics",
    year: "2024",
    blurb:
      "Real-time shipment tracking and ops console for a logistics platform.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&q=80",
    imageAlt: "Desktop monitor displaying data visualizations and charts",
    role: "Full-stack engineer",
    timeline: "12 weeks",
    team: "Product lead, 3 engineers, QA contractor",
    status: "Shipped",
    summary:
      "Tracking experience and internal ops console for a logistics platform—live shipment state, exception handling, and tools dispatch teams used every day.",
    problem:
      "Customers called support for status updates because the public tracker lagged behind warehouse scans. Ops relied on a spreadsheet to prioritize exceptions.",
    solution:
      "Introduced event-sourced shipment timelines, a real-time ops board, and a customer tracker that reflected the same source of truth within seconds.",
    outcomes: [
      { label: "Support tickets (tracking)", value: "−41%" },
      { label: "Scan-to-UI latency", value: "< 8s p95" },
      { label: "Ops tasks / shift", value: "+22% throughput" },
      { label: "Uptime (launch quarter)", value: "99.9%" },
    ],
    responsibilities: [
      "Designed WebSocket fan-out and fallback polling strategy",
      "Built ops console views, filters, and bulk actions",
      "Integrated label providers and webhook normalizers",
      "Documented runbooks and on-call playbooks for ingest failures",
    ],
    techStack: [
      "React",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Docker",
      "Datadog",
    ],
    highlights: [
      {
        title: "Single timeline model",
        body: "Every scan, delay, and handoff appended as events—UI and APIs read one stream instead of reconciling tables.",
      },
      {
        title: "Ops-first UX",
        body: "Keyboard-friendly queues, bulk reassignment, and saved views per hub cut average handle time.",
      },
      {
        title: "Graceful degradation",
        body: "When live channels dropped, clients fell back to polling with clear “delayed” states—no silent stale data.",
      },
    ],
    phases: [
      {
        title: "Audit & alignment",
        description:
          "Shadowed dispatchers, catalogued failure modes, and aligned metrics with product and support leads.",
      },
      {
        title: "Platform slice",
        description:
          "Event schema, ingest workers, and read APIs. Load-tested fan-out paths before UI work.",
      },
      {
        title: "Dual surfaces",
        description:
          "Shipped ops console and public tracker in parallel, sharing components where it made sense.",
      },
      {
        title: "Stabilize",
        description:
          "Tuned alerts, back-pressure on workers, and training sessions for hub managers.",
      },
    ],
  },
  {
    slug: "lumina",
    title: "Lumina",
    n: "03",
    kind: "Health",
    year: "2024",
    blurb:
      "Patient portal and clinician tools with an accessible, scalable design system.",
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1280&q=80",
    imageAlt: "Laptop on a desk in warm natural light",
    role: "Full-stack engineer (design systems)",
    timeline: "14 weeks",
    team: "Clinical advisor, 2 designers, 4 engineers",
    status: "In production",
    summary:
      "Healthcare SaaS spanning a patient portal and clinician workspace—WCAG-conscious UI, HIPAA-aware patterns, and a token-based system both squads could ship from.",
    problem:
      "Two legacy apps diverged in UX and accessibility. Clinicians retyped patient context; patients abandoned flows on mobile.",
    solution:
      "Unified routes under one app shell, shared form and table primitives, and session handling that respected role boundaries and timeout policies.",
    outcomes: [
      { label: "Mobile task completion", value: "+34%" },
      { label: "Accessibility issues (audit)", value: "47 → 6" },
      { label: "Design–dev handoff time", value: "−50%" },
      { label: "Clinician daily active use", value: "92%" },
    ],
    responsibilities: [
      "Co-led design system in code (tokens, components, docs)",
      "Implemented patient booking and results flows",
      "Built clinician queues with role-scoped data access",
      "Pair-reviewed security-sensitive endpoints and audit logs",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Storybook",
      "Node.js",
      "PostgreSQL",
      "Auth0",
    ],
    highlights: [
      {
        title: "Accessible by default",
        body: "Focus order, live regions, and contrast-checked tokens baked into primitives—not patched per screen.",
      },
      {
        title: "Role-aware shell",
        body: "One deployment with route guards and feature flags per persona; reduced duplicate code paths.",
      },
      {
        title: "Documented system",
        body: "Storybook with usage notes and do/don’t examples—designers and engineers shipped consistently.",
      },
    ],
    phases: [
      {
        title: "Research",
        description:
          "Interviews with nurses and patients; consolidated journey maps and non-negotiable compliance constraints.",
      },
      {
        title: "System sprint",
        description:
          "Tokens, typography, forms, tables, and empty states. Published contribution guidelines.",
      },
      {
        title: "Feature delivery",
        description:
          "Portal and clinician tools in vertical slices with shared QA checklists for a11y and PHI handling.",
      },
      {
        title: "Rollout",
        description:
          "Phased migration per clinic, training decks, and hypercare week with product + support.",
      },
    ],
  },
  {
    slug: "spiro",
    title: "Spiro",
    n: "04",
    kind: "Productivity",
    year: "2023",
    blurb:
      "Mobile-first note app with sync, built end-to-end for a productivity SaaS.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1280&q=80",
    imageAlt: "Smartphone and notebook on a leather desk surface",
    role: "Solo full-stack engineer",
    timeline: "8 weeks",
    team: "Founder + contract designer",
    status: "Shipped",
    summary:
      "Greenfield notes product—offline-friendly mobile client, sync API, and marketing site—from prototype to App Store and production API.",
    problem:
      "The team needed a differentiated MVP in a crowded notes market: fast capture, reliable sync, and zero data loss when connectivity dropped.",
    solution:
      "React Native client with local-first storage, conflict-aware sync, and a slim Node API. Web landing and waitlist integrated with the same auth layer.",
    outcomes: [
      { label: "Crash-free sessions", value: "99.6%" },
      { label: "Sync success rate", value: "99.2%" },
      { label: "Cold start (p95)", value: "1.1s" },
      { label: "Beta to paid conversion", value: "12%" },
    ],
    responsibilities: [
      "Product architecture, mobile app, API, and infra",
      "Designed sync protocol and migration strategy",
      "Implemented paywall, analytics, and release pipelines",
      "Wrote privacy policy flows and account deletion paths",
    ],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "SQLite",
      "PostgreSQL",
      "Redis",
      "RevenueCat",
    ],
    highlights: [
      {
        title: "Local-first notes",
        body: "Edits persisted instantly offline; background sync merged changes with explicit conflict UI when needed.",
      },
      {
        title: "Thin, testable API",
        body: "Versioned REST with contract tests; mobile client generated types from OpenAPI.",
      },
      {
        title: "Release discipline",
        body: "EAS builds, staged rollouts, and feature flags for risky editor changes.",
      },
    ],
    phases: [
      {
        title: "Prototype",
        description:
          "Validated capture flow and editor feel with a throwaway Expo build and five user tests.",
      },
      {
        title: "Sync core",
        description:
          "Locked storage format and sync semantics before polish—avoided rework later.",
      },
      {
        title: "Beta",
        description:
          "TestFlight cohort, crash reporting, and billing. Iterated on onboarding from funnel data.",
      },
      {
        title: "Launch",
        description:
          "App Store submission, marketing site, and post-launch monitoring playbook.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
