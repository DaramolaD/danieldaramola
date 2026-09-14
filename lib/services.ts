export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  techStack: string[];
}

export const services: ServiceItem[] = [
  {
    id: "full-stack-saas",
    number: "01",
    title: "Full-Stack SaaS & MVP Development",
    subtitle: "From schema to live production",
    description:
      "End-to-end architecture and execution for new SaaS products. I take ideas from initial product requirements to production-ready platforms with reliable database schemas, secure APIs, and responsive frontends.",
    bestFor: "Startups and founders launching a new product from zero to one.",
    deliverables: [
      "Relational schema design and database migrations",
      "Type-safe REST API endpoints and data contracts",
      "Polished, responsive web client with modern UX",
      "Authentication, session management, and RBAC",
      "Production deployment and environment configuration",
    ],
    techStack: ["Next.js", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "frontend-engineering",
    number: "02",
    title: "Modern Frontend & Web Applications",
    subtitle: "High-performance React & Next.js interfaces",
    description:
      "Engineered for speed, accessibility, and visual polish. I build reactive web applications with clean component hierarchies, robust state management, and fluid micro-interactions that feel premium on every device.",
    bestFor: "Teams needing an elevated user experience, high conversion, or a frontend rebuild.",
    deliverables: [
      "Modular, reusable TypeScript component systems",
      "Complex state machines and data flow architectures",
      "Mobile-first responsive layouts and smooth micro-animations",
      "Core Web Vitals and Lighthouse performance optimization",
      "SEO-ready server-rendered and static page generation",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Radix UI"],
  },
  {
    id: "backend-apis",
    number: "03",
    title: "Backend Architecture & API Systems",
    subtitle: "FastAPI and Node.js backend infrastructure",
    description:
      "Scalable backend services engineered with Python (FastAPI) and Node.js. Focused on clear API contracts, high throughput, secure payment handling, and database integrity.",
    bestFor: "Products requiring reliable APIs, multi-role security, or third-party integrations.",
    deliverables: [
      "RESTful API design with interactive OpenAPI / Swagger documentation",
      "Secure authentication flows (JWT, OAuth, role-based access)",
      "Payment gateway integration (Paystack, Stripe, webhooks)",
      "Background job queues and asynchronous task processing",
      "PostgreSQL and MongoDB database optimization and indexing",
    ],
    techStack: ["Python (FastAPI)", "Node.js", "Express", "PostgreSQL", "MongoDB", "Alembic"],
  },
  {
    id: "dashboards-portals",
    number: "04",
    title: "Operations Dashboards & Portals",
    subtitle: "Data-dense tools for daily workflows",
    description:
      "Specialized internal tools, administrative panels, and multi-tenant portals designed to solve operational bottlenecks. Built for clarity, fast data filtering, and heavy everyday usage by operations and management teams.",
    bestFor: "Logistics, PropTech, HR, and SaaS businesses managing complex workflows.",
    deliverables: [
      "Multi-role permissions (admin, manager, dispatcher, client)",
      "Data-dense tables with live sorting, filtering, and export",
      "Real-time status tracking and dispatch dashboards",
      "Audit logs, activity feeds, and metric visualization widgets",
      "Responsive layout optimized for both desktop monitors and tablets",
    ],
    techStack: ["Next.js", "TypeScript", "TanStack Table", "PostgreSQL", "Supabase", "Tailwind CSS"],
  },
];

export interface EngagementModel {
  title: string;
  period: string;
  description: string;
  features: string[];
}

export const engagementModels: EngagementModel[] = [
  {
    title: "Full-Time or Embedded Role",
    period: "Long-term / Ongoing",
    description:
      "Direct integration into your engineering team. Owning critical full-stack features from conception to production with daily communication and sprint velocity.",
    features: [
      "Full-stack feature ownership (Frontend + Backend)",
      "Active participation in technical design and code reviews",
      "Direct alignment with product managers and designers",
      "Async-friendly workflow with clear documentation",
    ],
  },
  {
    title: "Fixed-Scope MVP Build",
    period: "4 - 8 Weeks",
    description:
      "A structured build sprint taking your product from wireframes and requirements to a live production deployment ready for real users and investors.",
    features: [
      "End-to-end technical scoping and architecture",
      "Weekly milestone releases and staging previews",
      "Integrated auth, database, payments, and core UX",
      "Production deployment and comprehensive documentation",
    ],
  },
  {
    title: "Engineering Contract & Feature Sprint",
    period: "Flexible / Milestone-based",
    description:
      "Targeted execution to ship high-priority features, rebuild slow dashboards, integrate payment systems, or refactor legacy bottlenecks.",
    features: [
      "Focused scope on specific high-impact deliverables",
      "Rapid turnaround with minimal management overhead",
      "Clean TypeScript code and automated migrations",
      "Handoff walkthrough and technical documentation",
    ],
  },
];

export const workingProcess = [
  {
    step: "01",
    title: "Scoping & Architecture",
    description:
      "We map out user flows, database entities, and API contracts before writing code, ensuring the architecture directly supports business goals without rework.",
  },
  {
    step: "02",
    title: "Iterative Build Sprints",
    description:
      "Development happens in focused increments with frequent previews on staging environments, keeping you informed on real progress every week.",
  },
  {
    step: "03",
    title: "Hardening & Polish",
    description:
      "Rigorous testing across screen sizes, API error handling, edge-case validation, and performance optimization to ensure high reliability.",
  },
  {
    step: "04",
    title: "Production Launch & Support",
    description:
      "Zero-downtime deployment, environment variable audits, post-launch smoke tests, and handover documentation so your team can maintain and scale effortlessly.",
  },
];

