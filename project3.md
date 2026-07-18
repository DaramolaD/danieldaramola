## Repository analysis summary

EstateOS is a security-first, multi-tenant estate operations MVP. It coordinates four user groups:

- Residents create visitor passes, report incidents, submit payment requests, receive notifications, and raise emergencies.
- Security guards scan QR codes, record entry and exit events, issue manual denials, and acknowledge emergencies.
- Estate managers manage residents, visitors, incidents, payments, gates, blacklists, KYC reviews, reports, notifications, and audit logs.
- Platform administrators approve, suspend, reactivate, reject, or remove estate tenants.

The system is split into two applications:

- A Next.js 16 and React 19 frontend using the App Router, TypeScript, Tailwind CSS, Recharts, Motion, QR generation, and browser camera scanning.
- An Express 5 and MongoDB backend using TypeScript, Mongoose, JWT authentication, bcrypt, CSRF protection, rate limiting, Helmet, CORS, audit logging, and optional Resend/Formspree integrations.

The strongest implemented workflow is visitor access control:

1. A resident or manager creates a single, service-window, or permanent guest pass.
2. The frontend generates a QR code from the pass identifier.
3. A guard scans it with a browser-based camera scanner.
4. The backend checks tenant scope, blacklist status, pass state, scheduled date, service hours, prior usage, and current presence.
5. The system grants or denies access, updates presence, consumes single-use passes, records a security event, and creates a resident arrival notification.

The repository also contains a local demo-data layer backed by `localStorage`. API mode switches the dashboards to the Express backend. Socket.IO is initialized, but its real-time event model is currently only a blueprint; it should not be presented as a shipped real-time feature.

## Assumptions and evidence boundaries

- **Client:** No external client is identified, so the case study uses “Internal Product.”
- **Role:** “Full Stack Software Engineer” is the best fit because the repository contains substantial frontend, backend, database, security, and deployment work. Git history alone cannot prove individual authorship of every file.
- **Timeline:** Both repositories show active commits from April 7 to June 5, 2026—approximately two months of observable development.
- **Status:** “MVP / In Development” is more accurate than “Production.” A Render deployment blueprint exists, but the repository does not prove live production usage.
- **Metrics:** There are no validated adoption, revenue, property, resident, or efficiency metrics.
- **Payments:** The product tracks payment requests and statuses; it does not contain a payment gateway or financial ledger.
- **Notifications:** In-app database notifications exist. Resend supports verification email, while Socket.IO event delivery is not implemented.
- **Attachments:** Incident attachment references are stored as strings/URLs. There is no implemented file-storage service.
- **Roadmap exclusions:** Offline scanning, OCR, ANPR, CCTV, IoT, WhatsApp, SMS, MFA, predictive analytics, maintenance management, and automated billing appear in the PRD but are not implemented.
- **Verification:** The backend TypeScript build and all three existing validation tests pass. The frontend production build currently fails on a JSX parsing error in the resident portal, alongside unavailable Google Fonts in the restricted build environment. This supports classifying the repository as an in-development MVP.

---

# Case Study

## Estate Security & Operations Platform

A multi-tenant estate management platform that helps residents, security teams, estate managers, and platform operators coordinate visitor access, incidents, payments, and daily security operations from role-specific workspaces.

---

## Project Summary Card

**Role:**  
Full Stack Software Engineer

**Client:**  
Internal Product

**Timeline:**  
April–June 2026, based on repository history

**Status:**  
MVP / In Development

**Stack:**

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Express 5
- Node.js 20+
- MongoDB
- Mongoose
- JWT
- bcrypt
- Recharts
- Motion
- QRCode
- jsQR
- Socket.IO foundation
- Resend email API
- Formspree
- Render deployment blueprint

---

# 01 Overview

EstateOS was built to replace disconnected estate workflows with one tenant-aware operational system.

Residents can create and revoke guest passes, download QR codes, report incidents, review payment records, receive visitor notifications, and trigger emergency alerts. Security staff use a camera-enabled scanner to validate passes, record entry and exit activity, deny access manually, and respond to emergencies. Estate managers operate a broader workspace for residents, visitor traffic, KYC, payments, incidents, gates, blacklists, reports, notifications, and audit records. A separate platform console controls estate onboarding and lifecycle status.

The product has four primary user types:

- **Resident:** Manages personal access, incidents, payment requests, notifications, and emergencies.
- **Security guard:** Processes gate activity and emergency responses.
- **Estate manager:** Runs tenant-level operations and reviews resident or guard KYC.
- **Platform administrator:** Governs estates across the SaaS platform.

The main product areas are:

- Authentication and account verification
- Estate onboarding and platform approval
- Resident and KYC administration
- QR-based visitor access
- Gate and presence monitoring
- Incident management
- Payment-status tracking
- Emergency coordination
- Reporting and auditability

The implementation reflects full-stack ownership across the Next.js interface, REST API, MongoDB domain model, authorization middleware, operational dashboards, QR workflow, validation logic, email verification, audit logging, and deployment configuration.

---

# 02 The Challenge

## 01

### Fragmented visitor access

Paper registers, phone calls, and chat messages provide no dependable way to determine whether a visitor was invited, whether a pass remains valid, or whether the visitor is already inside the estate.

## 02

### Role-specific work without role-specific controls

Residents, guards, managers, and platform operators require different information and permissions. A shared dashboard without strict boundaries would expose resident or estate data and make sensitive operations difficult to govern.

## 03

### Limited operational traceability

Gate decisions, resident onboarding, incident changes, KYC reviews, and tenant approvals need a durable history. Without structured events and audit records, teams cannot reliably reconstruct who performed an action or when it occurred.

## 04

### Disconnected security response

Visitor events, blacklists, incidents, and emergencies are closely related but are often handled in separate systems. That separation slows decisions at the gate and limits management visibility.

## 05

### Multi-estate product complexity

A SaaS product serving several estates must prevent records from crossing tenant boundaries while still giving platform operators a consolidated management layer.

---

# 03 Approach

## Step 1

### Establish a tenant-aware domain model

The backend was structured as a TypeScript Express application backed by MongoDB and Mongoose. Estate identifiers are carried across residents, passes, gates, security events, presence records, incidents, payments, notifications, blacklists, and audit logs.

Compound indexes enforce estate-level uniqueness for resident codes, guest-pass codes, gate keys, blacklist identifiers, and presence records. This makes each estate a clear operational boundary while allowing the platform console to manage tenants centrally.

This mattered because visitor codes and unit identifiers can be reused by different estates without creating cross-tenant conflicts.

## Step 2

### Build authentication around account and estate state

Authentication uses hashed passwords and signed JWTs delivered through an HTTP-only cookie or, for cross-origin deployment, a bearer token stored for the browser session.

Authorization is enforced through composable middleware that checks:

- Authentication
- User role
- Required password reset
- Estate activation status
- Resident or guard KYC approval
- Manager KYC approval

Email verification challenges use hashed six-digit codes, expiration times, attempt limits, and short-lived verification tokens. Platform approval, estate status, KYC status, and password-reset state all influence where a user is routed after login.

This moved business authorization out of individual screens and into reusable API boundaries.

## Step 3

### Model visitor access as a server-side decision

Residents and managers can create single-use, scheduled service, or permanent passes. The frontend renders downloadable QR codes, while the guard interface reads them through the device camera using `jsQR`.

The backend remains responsible for the access decision. It evaluates:

- Estate and gate scope
- Unknown identifiers
- Active blacklist entries and expiration
- Revoked or pending passes
- Previously consumed single-use passes
- Scheduled calendar date
- Service start and end time
- Existing inside/outside presence

Approved scans update presence and create security events. Single-use passes are marked as used after entry, and the host receives an in-app arrival notification. Denials are recorded instead of disappearing as transient UI errors.

## Step 4

### Create focused operational workspaces

Each role received a dedicated application area rather than one overloaded interface.

The manager dashboard summarizes resident count, expected visitors, open incidents, and outstanding payment values. Supporting screens provide resident records, visitor details, incident timelines, payment administration, gate operations, KYC review, notifications, blacklist controls, and audit exports.

The resident workspace prioritizes frequent self-service actions. The guard workspace concentrates on scanning, event history, presence, and emergencies. The platform workspace separates SaaS governance from estate-level operations.

## Step 5

### Add auditability, reporting, and deployment foundations

Operational actions are represented through security events and general audit logs. Audit views support filtering, pagination, and CSV export at both estate and platform levels.

The reporting interface derives charts from real resident, pass, payment, incident, and security-event data when API mode is active. Recharts provides visitor traffic, payment collection, incident, and resident-status visualizations.

The backend includes structured request logging, a health endpoint, environment-based CORS, proxy-aware secure-cookie handling, centralized error handling, and a Render deployment blueprint.

---

# 04 What Shipped

## 01

### Multi-estate registration and platform approval

Managers can register an estate. Platform administrators can review pending estates and approve, reject, suspend, reactivate, or delete tenants.

## 02

### Email and password authentication

The API supports login, logout, account verification, signup, password reset, session inspection, and optional legacy demo authentication outside production.

## 03

### Role- and state-based access control

Resident, guard, manager, and platform-administrator routes are protected by role, KYC, estate status, and password-reset requirements.

## 04

### Resident onboarding and management

Managers can create, update, list, and delete residents, assign unit and building information, create authentication accounts, and resend onboarding credentials.

## 05

### KYC review workflow

Residents and guards submit KYC information during signup. Managers can list pending submissions and approve or reject them. Manager KYC also gates administrative operations.

## 06

### QR guest-pass management

Residents and managers can create passes for individual visitors. The UI generates QR images for viewing and download, and passes can be revoked or administratively updated.

## 07

### Camera-based security scanning

The guard scanner uses the browser camera and `jsQR` to decode visitor or resident QR codes and submit them to the API.

## 08

### Gate access rules

The backend enforces blacklist checks, pass status, single-use restrictions, scheduled dates, service windows, known-subject validation, and inside/outside presence.

## 09

### Security event and presence records

Entry, exit, denial, and system events are stored with gate and subject context. Presence records retain last entry, exit, and gate information.

## 10

### Manual access denial

Guards and managers can record a denial reason even when access is not processed through a valid QR pass.

## 11

### Incident management

Residents and managers can create incidents with type, severity, description, status, and attachment references. Managers can update status and add timeline messages.

## 12

### Payment-status tracking

Residents can submit payment requests. Managers can create and update payment records with amounts, references, notes, and Paid, Pending, or Overdue states.

## 13

### Emergency alerts

Residents can raise emergency alerts. Security users can view and acknowledge them, with acknowledgement identity and time retained.

## 14

### In-app notifications

The system stores resident and manager notifications, including guest-arrival and operational messages. Manager notifications can be marked as read.

## 15

### Blacklist management

Managers can add identifiers, attach reasons and expiration dates, and activate or deactivate blacklist records used during gate validation.

## 16

### Operational dashboards and reports

Manager dashboards summarize live data, while reporting screens visualize visitor activity, payments, incidents, and resident status.

## 17

### Audit-log filtering and CSV export

Estate and platform audit interfaces support action, role, and date filters, pagination, and downloadable CSV exports.

## 18

### Public product and support interface

The frontend includes a marketing site, pricing presentation, testimonials, FAQ, privacy, terms, and support pages. Support submissions are routed through a Formspree-backed API service.

---

# 05 Technical Highlights

### Modular full-stack architecture

The frontend and backend are independent TypeScript applications connected through a centralized API client and route catalogue. This supports separate hosting and keeps UI concerns distinct from access-control decisions.

### Multi-tenant data design

Most operational records carry an indexed `estateId`. Compound indexes prevent collisions inside a tenant, and controllers scope management and security queries to the authenticated estate.

This is the main safeguard against accidental cross-estate record access.

### Layered authorization

Authorization is expressed as reusable middleware rather than repeated controller conditionals. Routes can compose authentication, password-reset, role, estate, and KYC requirements according to their sensitivity.

Platform administration remains separate from estate management, and resident endpoints are restricted to the authenticated resident reference.

### Security-conscious session handling

The backend uses bcrypt password hashing and signed JWTs. Cookie sessions use CSRF tokens for state-changing requests, while the separated Vercel/Render-style deployment path supports bearer authorization.

Helmet, rate limiting, controlled CORS origins, secure production cookies, request logging, and generic authentication failures provide additional protection. A production deployment still needs a strong `JWT_SECRET`; the development fallback must not be used.

### Centralized access-control logic

Gate validation lives in `scan.service.ts`, not in the scanner interface. That ensures camera scans, typed codes, and future clients share the same decision rules.

The service also records denied attempts and consumes single-entry passes, preserving system state even when the UI changes.

### Presence as explicit state

A dedicated presence model maintains whether a known subject is currently inside and records its most recent entry and exit gates. Automatic scans can therefore resolve the next action from current state.

### Indexed operational records

Frequently queried fields such as estate, role, status, code, event time, and audit time are indexed. Compound indexes support tenant-scoped lookup patterns.

These choices matter for guard-facing operations, where pass and gate lookups should not depend on scanning full collections.

### Reusable frontend foundations

The frontend includes shared shells for residents, managers, security personnel, and platform operators, alongside reusable buttons, inputs, cards, badges, modals, pagination, charts, notices, and QR displays.

A central API adapter maps MongoDB documents into stable frontend record types and supports both cookie and bearer-token sessions.

### Derived reporting

Dashboard values and report series are computed from API records rather than hardcoded metrics in API mode. This includes expected visitors, unresolved incidents, outstanding payments, visitor traffic, payment collection, and resident status.

### Deliberate demo fallback

Local stores provide seeded demo behavior when no API URL is configured. Production settings can require API mode and disable this bypass.

This is useful for product demonstrations, but it creates two execution paths that must remain aligned.

### Testing and current build health

The backend builds successfully and includes three passing Node tests for login and scan-body validation.

Automated coverage is currently narrow: there are no integration tests for the complete pass-to-scan flow, no database-backed authorization tests, and no frontend test suite. The frontend also has a current JSX parsing error in the resident portal that blocks a production build. Resolving that error and adding workflow-level tests are necessary before calling the system production-ready.

### Deployment considerations

The API includes a Render blueprint, health endpoint, Node 20 requirement, proxy configuration, and production logging. Frontend code accounts for cross-origin authentication.

MongoDB provisioning, production secrets, verified Resend sender configuration, allowed origins, frontend deployment settings, monitoring, backups, and build repair remain environment-level requirements.

---

# 06 Outcomes

The repository does not include verified usage or commercial metrics. The supported product outcomes are therefore capability-based:

- Created a shared operational workspace for resident, visitor, security, incident, and payment records.
- Enabled residents to generate guest access without relying on a manager or guard to create every invitation.
- Moved visitor decisions from informal confirmation to consistent server-side access rules.
- Gave security staff one workflow for scanning, entry and exit tracking, denials, presence, and emergencies.
- Established tenant boundaries for operating multiple estates from a common platform.
- Provided managers with consolidated operational reporting and searchable records.
- Made estate approvals, KYC reviews, gate decisions, and authentication activity auditable.
- Reduced dependence on manual gate logs by storing structured security events and presence history.
- Established an extensible foundation for future integrations without claiming that roadmap modules are already delivered.

---

# 07 Engineering Learnings

### Access control is a state machine, not a QR reader

Decoding a QR code is the smallest part of the workflow. A dependable gate decision also needs tenant context, pass state, time rules, blacklist checks, usage history, presence, and an auditable result. Centralizing those rules on the server made the scanner replaceable without weakening policy.

### Multi-tenancy must be visible in the data model

Tenant isolation becomes easier to reason about when the estate boundary is explicit in schemas, indexes, tokens, middleware, and queries. Adding tenant context only at the UI layer would leave the highest-risk boundary unenforced.

### Product state affects authorization

A valid password is not sufficient when an estate is pending, a user has incomplete KYC, or an onboarding password has not been replaced. Treating these conditions as middleware-level authorization states produced clearer and more consistent behavior.

### Demo flexibility introduces maintenance cost

Supporting both API-backed and `localStorage` modes makes the product easier to demonstrate, but duplicates data and mutation paths. As the backend matures, reducing that duplication will simplify testing and prevent demo behavior from drifting away from real application rules.