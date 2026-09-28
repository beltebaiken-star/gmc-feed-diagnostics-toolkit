# Google Merchant Center Feed Diagnostics

> Upwork portfolio demo / sanitized technical case study.

## Client problem

A diagnostic toolkit and workflow for identifying feed errors, inconsistent attributes, disapprovals, and policy-risk patterns before resubmission.

## What this repository demonstrates

- Feed field validation
- Price/availability consistency checks
- GTIN/MPN/brand diagnostics
- Landing-page consistency checklist
- Issue-to-fix remediation workflow

## Tech stack

Google Merchant Center, product feeds, Shopify, policy diagnostics

## Architecture

This repository is intentionally structured as a public portfolio implementation rather than a copy of private client code. Production credentials, customer data, private URLs and proprietary business logic are excluded.

```text
Input / Store / Platform Event
        ↓
Validation & Normalization
        ↓
Business / Tracking / Integration Logic
        ↓
External API or Storefront
        ↓
QA, Logs, Reconciliation
```

## What an Upwork client can verify here

- Clear separation between configuration, business logic and external API calls
- Error handling and production-readiness thinking
- Practical ecommerce use cases rather than toy examples
- Documentation that explains both implementation and validation
- Security-conscious handling of credentials and customer data

## Suggested demo contents

- `src/` — sanitized implementation examples
- `examples/` — sample payloads using synthetic data
- `tests/` — validation / QA examples
- `docs/architecture.md` — architecture and flow
- `docs/qa-checklist.md` — production verification steps
- `screenshots/` — portfolio diagrams and UI/results images

## Source portfolio reference

Internal source project: **17 - Google Merchant Center Feed Diagnostics and Policy Fixes**

Only reusable patterns and sanitized demo material should be published publicly.

## Hiring fit

Good match for Upwork projects involving **Google Merchant Center Feed Diagnostics**, Shopify troubleshooting, ecommerce integrations, tracking reliability, API automation, or production-readiness reviews.