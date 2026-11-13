---
title: PerformanceX
subtitle: AI workforce-intelligence platform
summary: An AI workforce-intelligence platform that turns workplace communication and activity data into evidence-backed employee and manager reports.
role: Managed technical delivery
roleTitle: AI Engineering & Automation Lead / Technical Project Manager
contributionTitle: Technical delivery lead
context: Professional
org: Product developed within DAP
dates: Jul 2025 to present
group: AI and automation
order: 1
featured: true
tags: [AI agents, Google Cloud Run, Supabase, n8n]
diagramKind: pipeline
environment: [n8n, Google Cloud Run, Supabase, Vercel, Claude]
scope:
  - value: "10"
    label: ingestion sources migrated
    note: Migration scope
  - value: "15"
    label: report flows moved off n8n
    note: Migration scope
problem: Companies hold performance signals across chat, email, meetings and work-tracking tools, but few turn them into consistent, explainable reviews. PerformanceX reads those sources and produces weekly employee and manager reports that connect findings to source evidence.
contribution: I led priorities, sprint planning, review gates and release coordination, working with the engineers and AI specialists responsible for implementation. My day-to-day scope covered roadmap planning, sprint execution, quality assurance and release reviews across AI engineering, integrations, reporting and portal development.
team: Product owner, engineers and AI specialists.
diagram:
  title: How the platform fits together
  nodes:
    - title: Work sources
      text: Chat, email, meetings and work tracking
    - title: Ingestion
      text: Google Cloud Run services
    - title: Scoring and evidence
      text: Findings linked to source evidence
    - title: Reports and portals
      text: Employee and manager views
  caption: "Overview of the platform's data flow."
decisions:
  - tag: Release gate
    text: Held a self-healing agent in shadow evaluation for an extra week before it could act on its own.
  - tag: Release gate
    text: Withheld a model and prompt change from production until it was ready.
  - tag: Review
    text: Required a named reviewer's sign-off before tickets were closed.
  - tag: Evidence
    text: Kept source evidence in the employee's original language.
  - tag: Scope
    text: Deferred billing out of the partner MVP to protect the delivery date.
  - tag: Quality
    text: Reviewed generated reports against the Figma designs, with Cowork as well as by eye.
evidence:
  label: performancex.ai
  url: https://performancex.ai/
  note: The public product site.
---
