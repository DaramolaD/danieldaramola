import projectSytemap from "@/public/project/gtextlandhomescreen.png";
import projectSytemapOverview from "@/public/project/gtextlandoverview.png";
import projectSytemaplayout from "@/public/project/gtextlandlayout.png";
import projectSytemapDesign from "@/public/project/gtextlanddesign.png";
import projectSytemapEditPlot from "@/public/project/editestatPlot.png";
import projectSytemapMapLayout from "@/public/project/gtextlandmaplayout.png";
import projectStationMag from "@/public/project/stationmag.png";
import projectStationMagOverview from "@/public/project/stationMagOverview.png";
import projectStationMagAllStation from "@/public/project/allStations.png";
import projectStationMag2 from "@/public/project/stationMag2.png";
import projectStationMag3 from "@/public/project/stationMag3.png";
import projectEstateOS from "@/public/project/project-fintech.jpg";
import projectGTextFarm from "@/public/project/gtextFarm.png";

import { StaticImageData } from "next/image";

export type Project = {
  slug: string;

  // Card data
  tag: string;
  name: string;
  tagline: string;
  problem: string;
  image: StaticImageData;
  year: string;
  timeline: string;
  client: string;
  status: string;

  // Case study data
  role: string;
  stack: string[];
  impact: string[];

  overview: string[];
  challenge: string[];

  approach: {
    title: string;
    body: string;
  }[];

  features: string[];

  outcomes: {
    metric: string;
    label: string;
  }[];

  learnings: string[];

  // Project detail compatibility
  title: string;
  summary: string;
  kind: string;
  team: string;
  solution: string;

  responsibilities: string[];

  techStack: string[];

  highlights: {
    title: string;
    body: string;
  }[];

  phases: {
    title: string;
    description: string;
  }[];

  imageAlt: string;

  n: string;

  liveUrl?: string;
  repoUrl?: string;

  gallery?: {
    image: StaticImageData;
    alt: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "sytemap",

    tag: "PropTech SaaS",

    name: "Sytemap",

    title: "Sytemap Real Estate Operations Platform",

    tagline:
      "Multi-role real estate operations platform for estate discovery, plot sales, payments, documents and internal workflows.",

    summary:
      "An API-integrated real estate management platform connecting property discovery, client purchasing, estate administration, agent commissions and operational dashboards.",

    problem:
      "Real estate companies often manage property listings, client payments, documentation, plot allocation and agent activities through disconnected tools, making daily operations difficult to track.",

    role: "Product (Frontend) Engineer",

    team: "GText Land / GText Projects",

    client: "GText Land / GText Projects",

    kind: "Real Estate SaaS",

    year: "2026",

    timeline: "July 2025 - July 2026",

    status: "Production-oriented MVP",

    image: projectSytemap,

    imageAlt: "Sytemap real estate operations dashboard",

    gallery: [
      {
        image: projectSytemapMapLayout,
        alt: "Sytemap interactive estate map showing property locations and plot layout information",
      },
      {
        image: projectSytemapDesign,
        alt: "Sytemap estate design and property planning interface",
      },
      {
        image: projectSytemapOverview,
        alt: "Sytemap real estate operations overview dashboard",
      },
      {
        image: projectSytemaplayout,
        alt: "Sytemap estate layout showing available plots and development structure",
      },
      {
        image: projectSytemapEditPlot,
        alt: "Sytemap plot editing interface for updating estate plot details and availability",
      },
    ],

    stack: [
      "Next.js 15",

      "React 19",

      "TypeScript",

      "Tailwind CSS",

      "TanStack Query",

      "Zustand",

      "Axios",

      "React Hook Form",

      "Zod",

      "PostgreSQL",

      "Leaflet",

      "REST API",
    ],

    techStack: [
      "Next.js 15",

      "React 19",

      "TypeScript",

      "TanStack Query",

      "Zustand",

      "Axios",

      "React Hook Form",

      "Zod",

      "Leaflet",

      "REST API",
    ],

    impact: [
      "Centralized estate operations across 5+ user roles",

      "Built plot-level  discovery, purchase and payment workflow",

      "Unified client, agent and admin processes",
    ],

    overview: [
      "Sytemap is a real estate operations portal designed to centralize estate discovery, plot management, client purchasing, payments, legal documents and internal administration.",

      "The platform supports different operational roles including clients, administrators, agents, accountants and legal teams through dedicated workflows and dashboards.",

      "My contribution focused on frontend architecture, API integration, authentication flows, dashboard development, reusable components and interactive property experiences.",
    ],

    challenge: [
      "Property teams were managing estate information, customer interactions, payments and documentation across multiple disconnected systems.",

      "The platform required different experiences for different users while maintaining consistent data flow and secure access control.",

      "Real estate transactions required more than property listings; users needed plot selection, invoices, payment tracking and document workflows.",
    ],

    solution:
      "Built a scalable real estate operations interface with role-based dashboards, typed API communication, property exploration tools, plot workflows, payment experiences and administrative management systems.",

    approach: [
      {
        title: "Role-based product architecture",

        body: "Created separate operational experiences for clients, agents, administrators, accountants and legal users instead of forcing every user into one dashboard.",
      },

      {
        title: "Typed API integration",

        body: "Implemented reusable API clients, React Query workflows and structured data models to keep frontend communication predictable and scalable.",
      },

      {
        title: "Interactive property experience",

        body: "Implemented estate maps, plot exploration, property details and purchasing flows to make real estate transactions easier to understand.",
      },

      {
        title: "Reusable dashboard system",

        body: "Built shared tables, cards, filters, modals and navigation patterns used across different operational areas.",
      },
    ],

    features: [
      "Public estate discovery",

      "Estate detail pages",

      "Plot management",

      "Client dashboard",

      "Agent referral and commission workflows",

      "Accountant finance dashboard",

      "Legal document workflow",

      "Interactive estate maps",

      "Invoice and payment confirmation",

      "Role-based access management",
    ],

    responsibilities: [
      "Frontend architecture",

      "API integration",

      "Dashboard development",

      "Authentication workflows",

      "Property management interfaces",

      "State management",

      "Reusable component development",

      "UX implementation",
    ],

    highlights: [
      {
        title: "Multi-role dashboard architecture",

        body: "Built separate experiences for clients, agents, admins, accountants and legal teams while maintaining shared UI patterns.",
      },

      {
        title: "Property transaction workflow",

        body: "Implemented estate discovery, plot selection, cart flows, invoices, payments and document management.",
      },

      {
        title: "Interactive mapping",

        body: "Integrated map-based estate exploration using location data, boundaries and plot visualization.",
      },
    ],

    phases: [
      {
        title: "Discovery",

        description:
          "Analysed real estate workflows and translated business operations into product flows.",
      },

      {
        title: "Platform development",

        description:
          "Built dashboards, authentication, API integration and property management modules.",
      },

      {
        title: "Optimization",

        description:
          "Improved reusable components, state handling and user workflows for scalability.",
      },
    ],

    outcomes: [
      {
        metric: "5+",
        label: "Operational user roles supported",
      },

      {
        metric: "Multi",
        label: "Estate management capability",
      },

      {
        metric: "End-to-end",
        label: "Property workflow coverage",
      },
    ],

    learnings: [
      "Complex business applications become easier to maintain when architecture follows user roles and workflows.",

      "Real estate software requires both spatial thinking through maps and transactional thinking through payments and documents.",

      "Reusable frontend systems reduce complexity when products contain many dashboards.",
    ],

    n: "01",
  },
  {
    slug: "stationmag",

    tag: "Fuel Operations SaaS",

    name: "StationMag",

    title: "StationMag Fuel Operations Management Platform",

    tagline:
      "Operations management platform helping fuel station operators manage stations, pumps, transactions, pricing and analytics from one dashboard.",

    summary:
      "A fuel station management platform designed to centralize operational visibility across stations, pumps, transactions, pricing workflows, reporting and user access control.",

    problem:
      "Fuel operators often manage station activity across disconnected systems, making it difficult to monitor revenue, fuel dispensing, transaction accuracy, pump activity and operational performance.",

    role: "Frontend Engineer",

    team: "Internal Product",

    client: "Internal Product",

    kind: "Fuel Operations SaaS",

    year: "2026",

    timeline: "March 2026 - May 2026",

    status: "MVP / Active Development",

    image: projectStationMag,

    imageAlt: "StationMag fuel operations dashboard",

    gallery: [
      {
        image: projectStationMagAllStation,
        alt: "StationMag centralized management, all station, monitoring, analytics and role-based operations interface",
      },
      {
        image: projectStationMagOverview,
        alt: "StationMag fuel operations overview dashboard presented inside the product website",
      },
      {
        image: projectStationMag2,
        alt: "StationMag centralized management, monitoring, analytics and role-based operations interface",
      },
      {
        image: projectStationMag3,
        alt: "StationMag fuel operations dashboard presented inside the product website",
      },
    ],

    stack: [
      "Next.js 16",

      "React 19",

      "TypeScript",

      "Tailwind CSS",

      "TanStack React Query",

      "Axios",

      "Recharts",

      "Framer Motion",

      "Lucide React",

      "REST API",
    ],

    techStack: [
      "Next.js 16",

      "React 19",

      "TypeScript",

      "TanStack Query",

      "Axios",

      "Tailwind CSS",

      "Recharts",

      "REST API",

      "External API Integration",
    ],

    impact: [
      "Built operational modules for stations, pumps, pricing, transaction, reports etc",

      "Created role-based workflows for different users",

      "Developed reporting and analytics experiences with export-ready reporting cut manual report time",
    ],

    overview: [
      "StationMag is a web-based fuel station operations platform built to help operators manage stations, pumps, transactions, pricing, reports and team access from a single interface.",

      "The platform provides operational dashboards for monitoring revenue, fuel dispensing activity, payment status, station performance and administrative workflows.",

      "My contribution focused on frontend architecture, authenticated dashboard development, API integration, reporting workflows, role-aware navigation and reusable operational components.",
    ],

    challenge: [
      "Fuel station operators needed better visibility into daily activities across multiple stations, pumps and transaction records.",

      "Operational teams required different levels of access depending on their responsibilities, creating the need for structured permission management.",

      "Generating reports manually created delays and reduced visibility into important business decisions.",

      "Fuel pricing changes required approval workflows, tracking and synchronization across operational systems.",
    ],

    solution:
      "Built a modular operations dashboard that connects fuel station workflows including station management, pump monitoring, transactions, pricing, reporting and user permissions through a structured frontend architecture.",

    approach: [
      {
        title: "Dashboard-first architecture",

        body: "Designed the application around operational workflows with dedicated dashboards, tables, filters, analytics cards and reporting views.",
      },

      {
        title: "Typed API communication",

        body: "Created reusable API services and React Query workflows for reliable communication with the external backend.",
      },

      {
        title: "Role-based operations",

        body: "Implemented permission-aware navigation and protected workflows for administrators, station managers and operational users.",
      },

      {
        title: "Data-driven reporting",

        body: "Built filtering and export experiences that allow operators to analyse transactions by station, pump, payment method, fuel type and status.",
      },
    ],

    features: [
      "Station management",

      "Pump management",

      "Transaction monitoring",

      "Fuel pricing workflows",

      "Price approval system",

      "Operational analytics dashboard",

      "User and role management",

      "Permission controls",

      "Reports and exports",

      "Audit activity tracking",
    ],

    responsibilities: [
      "Frontend architecture",

      "Admin dashboard development",

      "API integration",

      "React Query data workflows",

      "Authentication implementation",

      "Role-based UI access",

      "Reporting interfaces",

      "Reusable component development",
    ],

    highlights: [
      {
        title: "Operational analytics dashboard",

        body: "Created dashboards displaying revenue, fuel activity, transaction trends, payment breakdowns and station performance.",
      },

      {
        title: "Reporting and export workflows",

        body: "Implemented transaction filtering and export workflows supporting operational reporting needs.",
      },

      {
        title: "Access control system",

        body: "Built role-aware navigation and permission-based interfaces for different operational users.",
      },

      {
        title: "Reusable admin components",

        body: "Developed shared tables, filters, cards, dialogs and UI patterns for scalable dashboard expansion.",
      },
    ],

    phases: [
      {
        title: "Architecture setup",

        description:
          "Established the application structure, API layer, authentication flow and dashboard foundation.",
      },

      {
        title: "Operations modules",

        description:
          "Implemented station management, pump workflows, transactions, pricing and reporting features.",
      },

      {
        title: "Optimization",

        description:
          "Improved reusable components, data fetching patterns and user workflow consistency.",
      },
    ],

    outcomes: [
      {
        metric: "10+",
        label: "Operational modules implemented",
      },

      {
        metric: "Multi",
        label: "Station management capability",
      },

      {
        metric: "Role-based",
        label: "Access control workflow",
      },

      {
        metric: "Export-ready",
        label: "Reporting system",
      },
    ],

    learnings: [
      "Operational software depends on clear domain modelling because every workflow represents a real business process.",

      "Dashboards are most effective when they reduce decision-making time rather than simply display more data.",

      "Permission systems should be designed alongside product architecture, not added later.",
    ],

    n: "02",
  },

  {
    slug: "gtextfarm",

    tag: "AgriTech Prototype",

    name: "GTextFarm Cooperative",

    title: "GTextFarm Cooperative Poultry Operations Platform",

    tagline:
      "Interactive poultry operations platform concept for farm monitoring, analytics and stakeholder transparency.",

    summary:
      "A product prototype demonstrating how poultry operators and investors could monitor farm performance, operational activities and reporting through a unified digital experience.",

    problem:
      "Poultry operations often depend on fragmented reporting, manual updates and disconnected information sources, making it difficult for operators and stakeholders to understand real-time farm performance.",

    role: "Full Stack Software Engineer",

    team: "Internal Product",

    client: "Internal Product",

    kind: "AgriTech Product Prototype",

    year: "2026",

    timeline: "June 2026",

    status: "Interactive Prototype",

    image: projectGTextFarm,

    imageAlt: "GTextFarm poultry monitoring platform interface",

    stack: [
      "React 19",

      "TypeScript",

      "TanStack Start",

      "TanStack Router",

      "TanStack Query",

      "Vite",

      "Nitro",

      "Tailwind CSS",

      "Framer Motion",

      "Lucide React",

      "Zod",
    ],

    techStack: [
      "React 19",

      "TypeScript",

      "TanStack Start",

      "TanStack Router",

      "TanStack Query",

      "Tailwind CSS",

      "Framer Motion",

      "Vite",

      "Nitro",
    ],

    impact: [
      "Interactive poultry monitoring experience",

      "Investor transparency product concept",

      "Responsive agricultural dashboard design",

      "Animated operational storytelling interface",
    ],

    overview: [
      "GTextFarm Cooperative is an interactive product experience designed to communicate how poultry operators and stakeholders could monitor farm activities, flock performance and operational insights through one platform.",

      "The prototype presents concepts including barn monitoring, environmental indicators, camera visibility, flock analytics, operational timelines and investor reporting.",

      "My contribution focused on frontend architecture, responsive UI development, dashboard simulations, motion design, component systems and SSR application structure.",
    ],

    challenge: [
      "Agricultural technology products can be difficult to explain because they combine physical operations, sensors, analytics and stakeholder reporting.",

      "Farm operators require practical operational visibility while investors need confidence and transparency without requesting manual updates.",

      "The challenge was transforming a complex farm-management concept into an understandable digital product experience.",
    ],

    solution:
      "Created an interactive product prototype that communicates a future poultry management ecosystem through dashboards, analytics visualization, camera monitoring concepts and responsive experiences.",

    approach: [
      {
        title: "Product storytelling",

        body: "Structured the interface as a guided journey explaining the problem, platform capabilities, monitoring experience and stakeholder value.",
      },

      {
        title: "Dashboard simulation",

        body: "Created interactive dashboard previews showing flock metrics, environmental indicators, performance trends and operational activity.",
      },

      {
        title: "Motion-driven experience",

        body: "Used animation and interaction patterns to communicate changing operational states while maintaining usability.",
      },

      {
        title: "Responsive product design",

        body: "Designed desktop and mobile experiences showing how farm operators could access information from different devices.",
      },
    ],

    features: [
      "Farm monitoring dashboard",

      "Barn performance visualization",

      "Camera monitoring concept",

      "Flock analytics interface",

      "Mobile operations preview",

      "Operational activity timeline",

      "Investor transparency experience",

      "Interactive FAQ system",
    ],

    responsibilities: [
      "Frontend architecture",

      "Responsive interface development",

      "Component design",

      "Animation implementation",

      "Dashboard prototype development",

      "SEO metadata setup",

      "SSR error handling",
    ],

    highlights: [
      {
        title: "Interactive monitoring experience",

        body: "Built animated operational dashboards showing how farm conditions and performance indicators could be presented.",
      },

      {
        title: "Visual product communication",

        body: "Translated a complex agricultural technology concept into an accessible digital experience for users and stakeholders.",
      },

      {
        title: "Motion and interaction system",

        body: "Implemented reusable reveal animations, transitions, counters and interactive UI behaviors.",
      },

      {
        title: "Application resilience",

        body: "Added application-level error states, route handling and accessibility considerations.",
      },
    ],

    phases: [
      {
        title: "Product concept",

        description:
          "Translated the poultry operations idea into user journeys and interface sections.",
      },

      {
        title: "Experience development",

        description:
          "Built responsive sections, dashboards, animations and interactive components.",
      },

      {
        title: "Presentation optimization",

        description:
          "Improved performance, accessibility and product storytelling quality.",
      },
    ],

    outcomes: [
      {
        metric: "1",
        label: "Interactive product prototype",
      },

      {
        metric: "Multi",
        label: "Operational scenarios demonstrated",
      },

      {
        metric: "Responsive",
        label: "Desktop and mobile experiences",
      },
    ],

    learnings: [
      "Prototype interfaces must clearly distinguish simulated experiences from production systems.",

      "Motion design is most valuable when it explains change, relationships or operational state.",

      "Complex technical products become easier to understand when user experience leads the explanation.",
    ],

    n: "03",
  },
  {
    slug: "estateos",

    tag: "Security SaaS",

    name: "EstateOS",

    title: "EstateOS Security & Operations Platform",

    tagline:
      "Multi-tenant estate security platform connecting residents, guards, managers and administrators through smart visitor access and operational workflows.",

    summary:
      "A security and estate management platform that digitizes visitor access, incident reporting, resident operations, emergency response and estate administration.",

    problem:
      "Residential estates often depend on manual visitor registers, phone calls and disconnected communication channels, making access control, incident tracking and operational visibility difficult.",

    role: "Full Stack Software Engineer",

    team: "Internal Product",

    client: "Internal Product",

    kind: "Estate Security SaaS",

    year: "2026",

    timeline: "April 2026 - June 2026",

    status: "MVP / In Development",

    image: projectEstateOS,

    imageAlt: "EstateOS security management dashboard",

    stack: [
      "Next.js 16",

      "React 19",

      "TypeScript",

      "Tailwind CSS",

      "Express.js",

      "Node.js",

      "MongoDB",

      "Mongoose",

      "JWT Authentication",

      "QR Code",

      "Recharts",
    ],

    techStack: [
      "Next.js 16",

      "React 19",

      "TypeScript",

      "Express 5",

      "MongoDB",

      "Mongoose",

      "JWT",

      "bcrypt",

      "QR Code",

      "jsQR",

      "Recharts",

      "REST API",
    ],

    impact: [
      "Multi-tenant estate management architecture",

      "Replaced manual registers with QR visitor verification",

      "Security event tracking system",

      "Role-specific operational dashboards",
    ],

    overview: [
      "EstateOS is a smart estate operations platform designed to improve security management by connecting residents, security guards, estate managers and platform administrators through a unified system.",

      "The platform replaces manual visitor registers with digital visitor passes, QR verification, security events, incident tracking, notifications and operational dashboards.",

      "My contribution covered both frontend and backend implementation including authentication, database modelling, API development, dashboard interfaces, QR workflows, authorization logic and deployment preparation.",
    ],

    challenge: [
      "Traditional estate security systems rely heavily on paper records and manual confirmation, making visitor verification slow and unreliable.",

      "Different users required different experiences: residents needed self-service tools, guards needed fast access validation, managers needed operational control, and platform administrators needed tenant oversight.",

      "The platform needed strict separation between multiple estates while maintaining centralized management capabilities.",

      "Security actions required proper traceability through events, logs and operational history.",
    ],

    solution:
      "Developed a full-stack estate management platform with tenant-aware architecture, QR visitor access, role-based dashboards, incident management, emergency workflows and audit tracking.",

    approach: [
      {
        title: "Multi-tenant architecture",

        body: "Designed the system around estate-level data separation, allowing multiple estates to operate independently within one platform.",
      },

      {
        title: "Server-controlled security decisions",

        body: "Implemented visitor validation on the backend instead of relying only on the QR scanning interface, ensuring access rules remained consistent.",
      },

      {
        title: "Role-based experiences",

        body: "Created dedicated workflows for residents, security guards, estate managers and platform administrators.",
      },

      {
        title: "Operational visibility",

        body: "Built dashboards and reporting views for incidents, visitors, payments, notifications and security activities.",
      },
    ],

    features: [
      "Resident dashboard",

      "Security guard scanning interface",

      "QR visitor pass generation",

      "Visitor entry and exit tracking",

      "Estate manager dashboard",

      "Incident management",

      "Emergency alerts",

      "Payment tracking",

      "KYC verification workflows",

      "Blacklist management",

      "Audit logging",

      "Multi-estate administration",
    ],

    responsibilities: [
      "Frontend development",

      "Backend API development",

      "Database modelling",

      "Authentication system",

      "Authorization middleware",

      "QR access workflow",

      "Dashboard implementation",

      "Security event tracking",

      "Deployment configuration",
    ],

    highlights: [
      {
        title: "QR visitor access workflow",

        body: "Built a complete visitor access process where residents generate passes, guards scan QR codes and the backend validates access conditions before approval.",
      },

      {
        title: "Multi-tenant security design",

        body: "Implemented estate-level data boundaries to prevent information leakage between different residential communities.",
      },

      {
        title: "Role and permission system",

        body: "Created different operational experiences for residents, guards, managers and platform administrators.",
      },

      {
        title: "Audit and event tracking",

        body: "Implemented security events and activity records to improve operational accountability and traceability.",
      },
    ],

    phases: [
      {
        title: "System architecture",

        description:
          "Designed the full-stack structure, authentication model, database entities and API foundation.",
      },

      {
        title: "Core security workflows",

        description:
          "Implemented visitor passes, QR scanning, access validation, incidents and emergency workflows.",
      },

      {
        title: "Operational dashboards",

        description:
          "Built role-specific interfaces for residents, guards, managers and administrators.",
      },
    ],

    outcomes: [
      {
        metric: "4",
        label: "Primary user groups supported",
      },

      {
        metric: "Multi",
        label: "Estate tenant architecture",
      },

      {
        metric: "QR",
        label: "Digital visitor verification workflow",
      },

      {
        metric: "Full-stack",
        label: "Frontend and backend implementation",
      },
    ],

    learnings: [
      "Security applications require business rules to live beyond the user interface; access decisions must be validated server-side.",

      "Multi-tenant systems need strong data boundaries from the beginning of architecture design.",

      "Operational products become more valuable when every important action is traceable and auditable.",
    ],

    n: "04",
  },
];
