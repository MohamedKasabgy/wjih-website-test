---
name: wjih-brand-system
description: Enforce the WJIH website brand identity before visual or UI changes. Use when editing colors, spacing, page themes, shared UI styles, visual polish, or any component that could affect brand consistency.
---

# WJIH Brand System

Use this skill to keep the Wadi Jeddah Innovation Hub website visually consistent and prevent random colors, inconsistent spacing, or visual drift.

## Brand Colors

Use only the approved brand palette unless the project owner explicitly requests a new color:

* Beige: `#D6BAAE`
* Main Red: `#7A1219`
* Dark Burgundy: `#3B0000`
* Orange: `#EE7203`
* Navy: `#1E2650`

## Page Color Mapping

Match each page to its approved theme color:

* Home: `#7A1219`
* Workspaces: `#1E2650`
* Incubator: `#EE7203`
* Soft Landing: `#3B0000`

Use Beige `#D6BAAE` for soft backgrounds, cards, separators, and subtle sections.

## Rules

* Do not introduce new colors unless explicitly requested.
* Use CSS variables or design tokens where available.
* Reuse shared components and existing theme configuration where possible.
* Keep spacing consistent across sections, cards, CTAs, and page layouts.
* Preserve Arabic and English support when changing UI.
* Preserve RTL support for Arabic and LTR support for English.
* Do not redesign unrelated pages while making a focused visual change.

## Verification Checklist

* No random colors added.
* Page theme matches route.
* Components reuse brand tokens.
* Desktop and mobile still look consistent.
