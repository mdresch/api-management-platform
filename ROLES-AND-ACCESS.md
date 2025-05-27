# API Management Platform RBAC Roles & Access

## Overview
This document describes the Role-Based Access Control (RBAC) roles defined in the system, the rationale for each role, and the specific system areas (screens/menu items) each role can access. This ensures clarity for all stakeholders and helps guide future access decisions.

---

## Persona-to-Process Responsibility Matrix

| Process                        | API Product Manager         | API Developer         | QA Engineer           | Security Officer      | API Consumer         | Enterprise Architect      |
|------------------------------- |----------------------------|----------------------|-----------------------|----------------------|----------------------|--------------------------|
| API Design & Modeling          | Define business goals       | ✅ Design & build     |                       |                      |                      | ✅ Define standards       |
| API Documentation              | ✅ Review & approve         | ✅ Write & update     |                       |                      | ✅ Consume           | ✅ Ensure consistency     |
| API Lifecycle Management       | ✅ Own lifecycle            | ✅ Implement          | ✅ Validate            | ✅ Monitor compliance |                      | ✅ Govern architecture    |
| Testing & Validation           |                            | ✅ Unit tests         | ✅ Integration & E2E   | ✅ Security testing   |                      |                          |
| Security & Access Control      | Define policies            | Implement auth       |                       | ✅ Enforce & audit    | ✅ Use keys           | ✅ Define architecture    |
| Monitoring & Analytics         | ✅ Track KPIs               | ✅ Monitor logs       | ✅ Analyze errors      | ✅ Watch for threats  |                      | ✅ System-wide insights   |
| Governance & Compliance        | ✅ Define policies          | Follow standards     | Validate coverage      | ✅ Enforce compliance |                      | ✅ Define frameworks      |
| Developer Onboarding & Support | ✅ Define experience        | ✅ Provide guides     |                       |                      | ✅ Onboard           |                          |
| Plugin & Extension Management  | Approve plugins            | ✅ Build plugins      |                       | ✅ Review security    |                      | ✅ Manage integrations    |
| Executive Reporting            | ✅ Consume reports          | Provide data         | Provide test data      | ✅ Provide compliance |                      | ✅ Strategic insights     |

✅ = Primary responsibility

---

## Roles & Access Matrix

| Role                   | Description & Context                                                                 | Menu/Screen Access                                                                                 |
|------------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **API Product Manager**| Oversees API lifecycle, aligns APIs with business goals, tracks adoption & ROI.      | Executive Dashboard, APIs, Governance, Monitoring, Architecture, Reports, Settings                 |
| **API Developer**      | Designs, builds, and maintains APIs; ensures performance, security, and compliance.  | Design Studio, APIs, Testing, Developer Portal, Monitoring, Settings                               |
| **QA Engineer**        | Validates API functionality and performance; ensures reliability and regression-free. | Testing, Monitoring, APIs, Reports                                                                 |
| **Security Officer**   | Ensures APIs meet security/compliance standards; monitors for vulnerabilities.        | Security, Governance, Monitoring, Reports, Settings                                                |
| **API Consumer**       | Discovers and integrates with APIs; uses documentation and support.                   | Developer Portal, Docs, APIs, Marketplace                                                          |
| **Enterprise Architect**| Ensures platform scalability/integration; defines standards and best practices.      | Architecture, Plugins, Monitoring Analytics, Settings, Executive Dashboard, Reports                |

---

## Rationale for Access

- **API Product Manager**: Needs broad visibility and control over API lifecycle, business alignment, and reporting. Access to governance and architecture ensures strategic oversight.
- **API Developer**: Focused on API creation and maintenance, with access to design, testing, and developer resources. Monitoring and settings access supports operational needs.
- **QA Engineer**: Limited to testing and monitoring to validate API quality, plus access to API catalog and reports for test coverage and results.
- **Security Officer**: Accesses security, governance, and monitoring to enforce compliance and respond to incidents. Settings access for security configurations.
- **API Consumer**: Only sees developer-facing resources (catalog, docs, marketplace) to discover and use APIs, without internal management access.
- **Enterprise Architect**: Needs a holistic view of system architecture, analytics, and platform configuration to ensure scalability and best practices.

---

## How Roles Are Created
Roles are defined in `/lib/rbac.ts` as TypeScript types and mapped to allowed routes/screens in the `rolePermissions` object. This mapping is enforced in the UI (sidebar, navigation) and can be centrally updated as the platform evolves.

---

## Updating Access
To change access for a role, update the `rolePermissions` object in `/lib/rbac.ts` and update this documentation to reflect the new access matrix and rationale.

---

_Last updated: May 27, 2025_
