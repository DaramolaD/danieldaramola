**Product Understanding**

Sytemap is a real estate operations portal for Gtext Land/Gtext Projects. The repository is a Next.js 15, React 19, TypeScript frontend that connects to a remote REST API at `https://api.stephenakintayotv.com/api/v1`.

The product supports public estate discovery, client purchasing flows, admin estate/plot management, agent referrals and commissions, accountant finance workflows, legal document workflows, and role-based dashboards. There is no local database schema in the repo; domain models are represented through TypeScript API contracts and form schemas.

**Assumptions**

- The backend and database are external to this repository.
- “Client” is listed as Gtext Land / Gtext Projects because this is stated in the PRD.
- Timeline is estimated from Git history: first visible commit on July 25, 2025, with active commits through July 9, 2026.
- Some super-admin and legal dashboard areas contain demo or placeholder data, so they are described carefully as partially implemented or UI-ready where appropriate.
- No business metrics are invented.

# Case Study

## Sytemap Real Estate Operations Platform

A multi-role real estate portal that helps property companies manage estate discovery, plot allocation, client payments, legal documents, agent commissions, and back-office operations from one unified workspace.

---

## Project Summary Card

**Role:**  
Frontend / Product Engineer, API Integration Engineer

**Client:**  
Gtext Land / Gtext Projects

**Timeline:**  
Active repository history from July 2025 to July 2026

**Status:**  
Production-oriented MVP / API-integrated portal

**Stack:**  
Next.js 15  
React 19  
TypeScript  
Tailwind CSS 4  
TanStack Query  
Zustand  
Axios  
React Hook Form  
Zod  
Radix UI / shadcn-style components  
Leaflet / React Leaflet  
Google Maps tiles / Google Maps API support  
Recharts  
React Hot Toast / Sonner  
REST API backend

---

# 01 Overview

Sytemap was built to centralize the operational workflow of a real estate business. Public users can explore estates, view property details, inspect virtual tours, and add plots to a cart. Registered clients can manage invoices, payments, purchased properties, documents, and profile information from their dashboard.

Internal teams use separate dashboards based on their function. Admins manage estates, plots, customers, documents, commission settings, withdrawals, allocations, and tasks. Agents track listings, referral links, commission history, and withdrawal requests. Accountants review users, agent balances, invoices, and withdrawal activity. Legal users can send and track documents for paid users.

The implementation is organized around role-based route groups, domain-specific API clients, React Query hooks, and reusable dashboard components. My contribution, based on the repository, included building and integrating the frontend architecture, authentication flows, estate management UI, plot/cart workflows, dashboard modules, role-based access patterns, API state management, and reusable product components.

Main user types:

- Public visitors and prospects
- Clients
- Admins
- Super admins
- Agents
- Accountants
- Legal users

Main product areas:

- Public website and estate exploration
- Client dashboard
- Admin and super-admin operations
- Agent referral and commission dashboard
- Accountant dashboard
- Legal document workflow
- Interactive estate maps
- Cart, invoice, and payment confirmation flow

---

# 02 The Challenge

01

**Fragmented real estate operations**

Property discovery, client follow-up, payment tracking, documents, and agent commissions are typically handled across disconnected tools. The platform brings these workflows into one operational portal.

02

**Complex role-based access**

Admins, agents, clients, accountants, legal staff, and super admins all need different interfaces and permissions. The codebase solves this with role-specific dashboard routes, guarded layouts, middleware checks, and account-type redirects.

03

**Plot-level buying and allocation**

Real estate transactions are not just property-level. Users need to inspect estates, choose individual plots, select full or installment payment options, and generate invoices. Admins also need manual allocation tools for operational exceptions.

04

**Document-heavy sales process**

Land sales require legal and transactional documents. The platform includes document upload, download, sending signed documents, legal document dispatch, and admin document management flows.

05

**Agent commission visibility**

Agents need referral links, commission history, balances, and withdrawal requests. Admins and accountants need tools to review commissions and process withdrawals.

---

# 03 Approach

## Step 1

**Role-Based Application Architecture**

The app was structured with Next.js App Router route groups for public pages, authentication pages, and protected dashboard areas. Each role has its own layout, sidebar, dashboard, and route tree.

This mattered because the product serves very different users without forcing one generic dashboard to handle every workflow.

## Step 2

**Centralized API Integration Layer**

The frontend uses a shared Axios client with request and response interceptors. It attaches bearer tokens from persisted auth state, handles FormData uploads correctly, and centralizes 401 behavior while preserving guest cart and invoice flows.

API routes are organized by domain and role, including auth, client, admin, agent, legal, accountant, estate, and cart modules.

## Step 3

**Estate and Plot Management Model**

Estate creation uses structured Zod schemas and multipart upload flows for estate details, map background images, preview images, media galleries, 3D assets, and virtual tour URLs.

Plot-related APIs support plot details, generated plots, plot status, estate plot lists, individual plot detail pages, plot purchasing, and admin allocation.

## Step 4

**Interactive Property Discovery**

The product includes public and authenticated estate exploration flows. Leaflet and React Leaflet are used for estate maps, GeoJSON boundaries, estate centroids, plot overlays, Google tile layers, OpenStreetMap layers, tooltips, popups, and full-screen map views.

This gives users and operators a spatial view of estates instead of relying only on tables and cards.

## Step 5

**Commerce and Payment Workflow**

The cart system supports guest temporary IDs, authenticated carts, plot-level cart items, full payment, installment amounts, agent referral codes, invoice creation, bank information display, and payment proof confirmation.

The code also includes performance work around Zustand selectors, memoized cart rows, scoped React Query invalidation, and gated cart synchronization.

## Step 6

**Operational Dashboards**

Role-specific dashboards were built around the workflows each team needs:

- Admin: estate management, clients, roles, documents, commission settings, withdrawals, allocations, tasks
- Agent: listings, referral links, commissions, withdrawals, leads
- Client: estate exploration, invoices, payments, documents, profile, purchased properties
- Accountant: invoices, users, agents, balances, withdrawals, documents
- Legal: users, document sending, document history
- Super admin: cross-estate oversight and admin parity screens, with some demo-backed modules

---

# 04 What Shipped

01  
Authentication, registration, login, logout, email verification, OTP resend, forgot password, reset password, and account deletion flows

02  
Role-based dashboard routing for client, prospect, admin, super admin, agent, accountant, and legal users

03  
Protected layouts and route guards with account-type redirects

04  
Public website with home, about, contact, insights, resources, terms, privacy, and estate exploration pages

05  
Estate listing, estate detail, top-rated estates, nearby estates, and virtual tour support

06  
Admin estate creation with multi-step details, media uploads, Zod validation, amenities, pricing, status, and certificate-of-occupancy fields

07  
Estate editing, estate detail pages, plot detail pages, plot generation, and estate plot listing

08  
Interactive map views using GeoJSON, Leaflet, estate boundaries, plot overlays, and full-screen map pages

09  
Cart workflow for estate plots with guest temporary IDs and authenticated cart sync

10  
Full and installment payment selection per cart item

11  
Invoice creation with bank information returned from the backend

12  
Payment confirmation with optional payment proof upload

13  
Client invoices, payments, documents, properties, profile, and outstanding balance pages

14  
Document upload, download, signed-document submission, legal document sending, and admin/legal document listing

15  
Agent referral link and property link flows

16  
Agent commission history, commission balance, withdrawal requests, and withdrawal history

17  
Admin commission settings with percentage/flat commission configuration and toggling

18  
Admin withdrawal review with approve and reject actions

19  
Accountant dashboard for users, agents, invoices, withdrawals, balances, and document sending

20  
Reusable UI components, dashboard tables, filters, pagination, summary cards, modals, sheets, badges, and loading states

---

# 05 Technical Highlights

**Modular frontend architecture**

The codebase separates routes, API clients, hooks, stores, and components by domain and role. This keeps admin, client, agent, accountant, legal, and public workflows easier to reason about.

**Typed API contracts**

The frontend defines TypeScript interfaces for estates, plots, invoices, documents, users, commissions, withdrawals, cart items, and auth responses. This provides a practical contract layer even without local database models.

**React Query for server state**

API calls are wrapped in custom hooks with query keys, cache timing, invalidation, loading states, and mutation flows. This reduces duplicated fetch logic across dashboards.

**Zustand for client state**

Authentication and cart state use persisted Zustand stores. The cart store supports temporary guest IDs, persisted cart items, sheet state, payment options, and optimized selectors.

**Form validation**

Estate creation and media upload use Zod schemas for required fields, file validation, numeric constraints, ratings, statuses, amenities, image types, video types, and upload size limits.

**Authentication and authorization**

The app combines middleware checks, AuthGuard components, persistent auth state, token attachment, role redirects, and account-type based dashboard access.

**File upload handling**

The Axios interceptor removes JSON content-type headers for FormData so multipart uploads work correctly for estate media, documents, signed documents, legal documents, and payment proofs.

**Map-based estate exploration**

Leaflet renders estate boundaries and plot data from GeoJSON endpoints. Users can switch map layers, view estate popups, inspect locations, and navigate into estate detail pages.

**Cart performance optimization**

The cart was refactored with shallow Zustand selectors, memoized cart item rows, stable mutation handlers, scoped React Query invalidation, and gated cart synchronization to avoid unnecessary renders.

**Third-party and external integrations**

The codebase integrates or prepares for:

- Remote REST API backend
- Leaflet / OpenStreetMap
- Google map tile layers and Google Maps API support
- Zoho CRM sync response handling during payment confirmation
- Bank-transfer invoice workflow
- Google social login UI
- Recharts for dashboard visualization

---

# 06 Outcomes

No verified production metrics are available in the repository, so the outcomes are stated as implementation impact rather than fabricated numbers.

- Created a single portal for real estate discovery, purchase initiation, document handling, and internal operations.
- Replaced scattered role workflows with dedicated dashboards for clients, admins, agents, accountants, and legal teams.
- Enabled plot-level cart and invoice workflows with support for full payment, installment amounts, and agent referral attribution.
- Gave admins tools to manage estates, plots, documents, allocations, commission settings, and withdrawals.
- Improved client transparency by exposing invoices, payments, documents, property details, maps, and profile management in one place.
- Established a scalable frontend architecture for integrating additional backend endpoints and role-specific modules.

---

# 07 Engineering Learnings

**Role boundaries should shape the architecture early**

This product serves several teams with different permissions and mental models. Separating routes, layouts, hooks, and components by role made the system easier to extend without turning the dashboard into a conditional maze.

**Real estate workflows are spatial and transactional**

A usable property platform needs both map-based exploration and transaction state. The estate map, plot IDs, cart, invoices, and allocation flows all had to work together.

**Backend inconsistency needs a resilient frontend contract**

Several API responses use different shapes across domains. Normalization helpers, typed interfaces, and defensive response parsing helped keep UI components stable.

**Operational users value clarity over decoration**

The strongest parts of the dashboard are tables, filters, status badges, summary cards, detail modals, and clear next actions. For admin, accounting, and legal workflows, speed and legibility matter more than visual flourish.