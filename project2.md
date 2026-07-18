**Repository Understanding**

StationMag is a Next.js web application for fuel station operations management. The repo contains the public marketing site, authentication screens, and a large admin dashboard client that connects to an external REST API through typed Axios clients. The dashboard supports station, pump, transaction, reporting, fuel pricing, access control, user management, audit trail, customer, inventory, loyalty, tanks, refunds, and analytics workflows, though some modules are currently present in code but hidden from navigation.

Key domain entities inferred from API contracts: organizations, stations, pumps, nozzles, tanks, fuel products, transactions, payments, refunds, customers, QR codes, users, roles, permissions, audit logs, POS devices, inventory categories/items, stock movements, alerts, and fuel price approvals.

Assumptions:
- This repo is the frontend/web client; backend database schema and server implementation are not included.
- Timeline is based on git history: March 16, 2026 to May 21, 2026.
- Status appears to be an MVP or active product build, not verifiably production from this repo alone.
- Payment provider references such as Moniepoint and OPay exist in types, but provider integration logic lives outside this frontend.

# Case Study

## StationMag Fuel Operations Management Platform

A web-based operations platform that helps fuel station operators manage stations, pumps, pricing, transactions, reports, staff access, and operational analytics from one dashboard.

## Project Summary Card

Role: Full Stack-leaning Frontend Engineer / Product Engineer  
Client: Internal Product  
Timeline: March 16, 2026 - May 21, 2026, based on repository history  
Status: MVP / active development  
Stack: Next.js 16, React 19, TypeScript, Tailwind CSS 4, TanStack React Query, Axios, Radix UI, Recharts, Framer Motion, Lucide React, date-fns, PapaParse, SheetJS, QR code tooling, external REST API

# 01 Overview

StationMag was built to centralize fuel station operations across multiple locations. Public users can learn about the product through a marketing site, while authenticated operators use the admin dashboard to monitor revenue, transaction health, stations, pumps, fuel pricing, reports, users, roles, and audit activity.

The main user types represented in the codebase are platform admins, station admins/owners, station managers, and station attendants. The core product areas are the dashboard overview, station and pump management, transaction reporting, fuel pricing, access control, user management, settings, reports, and operational analytics.

My contribution, based on the implementation, would be framed as owning the frontend product architecture: authenticated dashboard shell, typed API layer, React Query data workflows, reusable dashboard components, reporting/export flows, role-aware navigation, and operational views for fuel station management.

# 02 The Challenge

01  
Fragmented station visibility  
Fuel operators need to track revenue, fuel dispensed, payment status, pump activity, and station status across multiple locations without switching between disconnected tools.

02  
Operational reconciliation  
Transactions include entered amount, paid amount, dispensed amount, device response, payment status, over-dispense state, refunds, and reconciliation flags. The product addresses the need to compare money movement with physical fuel dispensing.

03  
Controlled access for distributed teams  
Station operations involve admins, managers, and attendants with different responsibilities. The codebase implements authenticated access, role-aware routing, permission modules, and user management workflows.

04  
Fuel price coordination  
Fuel pricing changes must be tracked, approved, synced to pumps, and audited across stations. The frontend includes price updates, pending approvals, sync history, pump sync status, and price history views.

05  
Reporting without manual spreadsheets  
The reports module lets operators filter transaction data by station, pump, date, payment method, fuel type, payment status, and over-dispense state, then export reports as CSV, Excel, or PDF through the backend API.

# 03 Approach

## Step 1  
Product Architecture Around a Typed API Client

The app uses Next.js App Router with route groups for public and dashboard areas. Business operations are handled through an external REST API, accessed with a shared Axios client using `NEXT_PUBLIC_API_URL`, credentialed requests, and centralized API error normalization. This kept UI workflows consistent while allowing the backend to own persistence, payments, and device operations.

## Step 2  
Authenticated Dashboard Shell

The dashboard is wrapped in an auth provider that fetches the current user only when needed, redirects unauthenticated users to a no-access flow, and prevents protected screens from rendering before access is checked. The dashboard shell adds responsive navigation, breadcrumbs, user menu, logout, mobile sidebar behavior, and organization branding.

## Step 3  
Role-Aware Operations Workspace

Navigation is filtered by role, and protected admin paths are checked again inside the dashboard shell. A permission model maps modules such as Dashboard, Transactions, Station Management, User Management, and Settings to actions like view, create, edit, delete, and approve. This supports more granular access control than a simple admin/non-admin split.

## Step 4  
Operational Analytics Dashboard

The admin overview combines date range filters, station/state/pump scoping, revenue charts, fuel breakdowns, payment method breakdowns, performance metrics, transaction timing, station status, and sales trends. React Query powers cached, parameterized data fetching so each chart and table can respond to filter changes independently.

## Step 5  
Reporting and Export Workflow

Reports are generated through selected filters, then displayed in a paginated transaction table with search and drill-down to transaction detail. Exports call a backend report endpoint and download CSV, Excel, or PDF blobs, preserving the same filters used in the UI.

# 04 What Shipped

01  
Public marketing site for StationMag, including hero, feature, kiosk, FAQ, contact, pricing, privacy, terms, and how-it-works pages.

02  
Authentication flows for sign in, sign up, forgot password, reset password, no-access handling, and logout.

03  
Authenticated admin dashboard shell with responsive sidebar, breadcrumbs, organization branding, user menu, and route protection.

04  
Dashboard analytics for revenue, fuel dispensed, transaction counts, payment breakdown, fuel breakdown, station status, performance metrics, transaction timing, and sales trends.

05  
Station management workflows with station list, overview, detail, create, update, delete, and organization-scoped station fetching.

06  
Pump management workflows with overview, list, details, station-scoped pump fetching, pump creation, and pump status updates.

07  
Transaction workspace with organization/station transaction retrieval, filters, status mapping, pagination, and detail drill-down.

08  
Reports module with station, pump, date, payment method, fuel type, payment status, over-dispense filters, paginated results, and CSV/Excel/PDF export.

09  
Fuel pricing module with current prices, price updates, price requests, approvals/rejections, sync all, station sync, sync history, pump sync status, and price history.

10  
Access control and user management with users, roles, permissions, activate/deactivate, create/update/delete flows, role dashboards, and permission matrix UI.

11  
Additional implemented modules for customers, QR codes, loyalty points, inventory, tanks, refunds, POS devices, audit logs, live alerts, and settings, with some currently hidden from primary navigation.

# 05 Technical Highlights

Architecture decisions  
The app separates product surfaces into public and dashboard route groups, with reusable dashboard layout infrastructure. API concerns live in `lib/api`, data orchestration in `hooks`, and UI composition in `components`.

State and data management  
TanStack React Query is used for server state, parameterized query keys, caching, mutation invalidation, and loading/error states across dashboard modules.

Security considerations  
Authentication uses credentialed API requests and `auth/me` session checks. Protected routes redirect before rendering sensitive dashboard children. Role-aware navigation and path checks reduce accidental access to restricted admin areas.

Database/domain design  
No database schema is present, but the API contracts describe a multi-entity fuel operations domain: stations, pumps, nozzles, tanks, fuel products, transactions, payments, refunds, customers, QR codes, users, roles, permissions, inventory, stock movements, audit logs, and alerts.

Reusable components  
The codebase includes shared UI primitives, dashboard tables, filters, charts, modals, buttons, cards, dialogs, secure password fields, date range controls, and list/grid toggles.

Reporting implementation  
The reporting flow combines client-side filter state with backend-generated export files. It handles blob downloads, content-disposition filenames, and multiple export formats.

Performance considerations  
Dashboard data is split into focused API calls with one-minute stale times, scoped query keys, pagination, and filter-driven fetching instead of loading the entire operational dataset at once.

Testing and deployment  
The repo includes ESLint and Next.js build scripts, but no automated test suite or CI/CD configuration was found. The README is the default Next.js/Vercel deployment guide rather than product-specific deployment documentation.

# 06 Outcomes

- Created a single operational workspace for fuel station monitoring, pricing, transactions, reporting, and access control.
- Enabled station operators to inspect transaction health across payment, dispense, pump, station, and date dimensions.
- Reduced reliance on manual report preparation by supporting filtered report generation and backend file exports.
- Established a reusable frontend architecture for adding additional operational modules without rebuilding dashboard infrastructure.
- Improved administrative control through authenticated access, role-aware navigation, user management, permission modeling, and audit-oriented workflows.

# 07 Engineering Learnings

- Operational dashboards need clear domain modeling. Separating stations, pumps, fuel products, transactions, payments, and device response fields made reconciliation workflows easier to reason about.
- Access control is a product experience, not only a backend concern. Filtering navigation, guarding routes, and shaping permission modules makes complex admin tools safer and easier to use.
- Reports should reuse the same filters operators use every day. The reporting module is stronger because export parameters match the visible dashboard filters.
- In data-heavy products, reusable loading, empty, error, pagination, and chart patterns matter as much as the API calls themselves. They make a broad admin product feel coherent instead of stitched together.