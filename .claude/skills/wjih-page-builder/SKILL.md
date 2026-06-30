---
name: wjih-page-builder
description: Build or edit WJIH website pages using reusable components, approved routes, clean content structure, and WhatsApp-only MVP CTA behavior. Use when creating or changing Home, Workspaces, Incubator, Soft Landing, page sections, or page-level layouts.
---

# WJIH Page Builder

Use this skill to build WJIH pages with reusable components and the approved project structure.

## Current Pages

The current MVP scope includes:

* Home
* Workspaces
* Wadi Jeddah Incubator
* Soft Landing Program

## Shared Components

Use shared components when possible:

* `PageLayout`
* `Navbar`
* `Footer`
* `Button`
* `Container`
* `Card`
* `SectionHeader`
* `CTASection`

## Content Rules

* Do not hardcode long page content randomly inside JSX.
* Use `content` or `locales` structure when possible.
* Keep Arabic and English content organized so it can later be replaced by API or CMS data.
* Keep reusable sections prop-driven where practical.
* Keep components small, readable, and focused.

## MVP Behavior

* CTA buttons currently go to WhatsApp.
* Do not build a booking system now.
* Do not build an admin dashboard now.
* Do not add backend, auth, database, CMS, or booking logic.
* Do not change unrelated pages.

## Verification Checklist

* Page renders.
* Route works.
* Navbar/Footer present.
* Arabic/English text source is clean.
* WhatsApp CTA works.
* No unrelated files changed.
