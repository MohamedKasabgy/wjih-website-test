# WJIH Website — Team Tasks

## Project Deadline

- MVP target: 1 to 2 days
- Focus: polished frontend website
- No backend, dashboard, auth, database, or booking system now
- Current contact/booking action: WhatsApp only

---

## Current Scope

The website currently has 4 pages:

1. Home page
2. Workspaces page
3. Wadi Jeddah Incubator page
4. Soft Landing Program page

The website may later grow by 1 or 2 pages.

---

## Tech Direction

- Vite + React + TypeScript
- React Router
- Tailwind CSS
- Arabic / English language switch
- RTL for Arabic
- LTR for English
- Framer Motion only for light animations if needed

---

## Brand Colors

- Beige: `#D6BAAE`
- Main Red: `#7A1219`
- Dark Burgundy: `#3B0000`
- Orange: `#EE7203`
- Navy: `#1E2650`

Suggested page color usage:

- Home: Main Red `#7A1219`
- Workspaces: Navy `#1E2650`
- Wadi Jeddah Incubator: Orange `#EE7203`
- Soft Landing: Dark Burgundy `#3B0000`
- Beige: soft backgrounds, cards, separators, subtle sections

---

# Team Tasks

## Mohammed — Technical Lead / Foundation

### Priority 0 — Foundation

- [x] Review or initialize Vite + React + TypeScript project
- [x] Install/configure Tailwind CSS
- [x] Install/configure React Router
- [x] Install/configure Arabic/English language structure
- [x] Add RTL support for Arabic
- [x] Add LTR support for English
- [x] Create base route structure
- [x] Create shared Layout component
- [x] Create Navbar component
- [x] Create Footer component
- [x] Create Language Toggle component
- [x] Create WhatsApp CTA helper
- [x] Organize assets folders:
  - [x] logos
  - [x] images
  - [x] patterns
- [x] Create page shell files:
  - [x] HomePage
  - [x] WorkspacesPage
  - [x] IncubatorPage
  - [x] SoftLandingPage
- [x] Connect page theme colors to route/page config
- [ ] Prepare deployment setup

### Priority 1 — Integration

- [x] Make sure all pages render
- [x] Make sure Navbar appears on all pages
- [x] Make sure Footer appears on all pages
- [x] Make sure language switch works
- [x] Make sure WhatsApp links are easy to configure
- [x] Run `npm run lint`
- [x] Run `npm run build`
- [ ] Final merge/integration check

### Definition of Done

Mohammed is done when:

- [x] Routes exist for all 4 pages
- [x] Navbar and Footer appear on all pages
- [x] Arabic uses RTL
- [x] English uses LTR
- [x] Language switch works
- [x] WhatsApp CTA helper is ready
- [x] Assets folders are organized
- [x] Page color/theme config exists
- [x] Build passes or issues are documented clearly

---

## Ibrahim — Design Lead / Home Page

### Priority 0 — Visual System

- [ ] Define initial visual direction from Wadi Jeddah identity
- [ ] Create shared Button style
- [ ] Create shared Card style
- [ ] Create shared Section Header style
- [ ] Create shared CTA Section style
- [ ] Define spacing and visual rhythm
- [ ] Define how brand colors are used in UI
- [ ] Define image/pattern usage style

### Priority 1 — Home Page

- [ ] Build Home hero section
- [ ] Build Home overview sections
- [ ] Build Home entry cards linking to other pages
- [ ] Apply main red theme to Home page
- [ ] Add subtle brand patterns/images
- [ ] Polish desktop layout
- [ ] Polish mobile layout

### Priority 2 — Final Visual Review

- [ ] Review Workspaces visual consistency
- [ ] Review Incubator visual consistency
- [ ] Review Soft Landing visual consistency
- [ ] Make sure no random colors are used
- [ ] Make sure shared components look consistent

### Definition of Done

Ibrahim is done when:

- [ ] Home page is visually polished
- [ ] Shared Button, Card, Section Header, and CTA styles are ready
- [ ] Home page works on desktop and mobile
- [ ] Brand colors are used correctly
- [ ] Visual style can be reused by other pages
- [ ] Other pages have been reviewed for visual consistency

---

## Aljazi — Content Pages / Service Pages

### Priority 0 — Content Organization

- [ ] Organize Workspaces Arabic content into sections
- [ ] Organize Workspaces English content into sections
- [ ] Organize Incubator Arabic content into sections
- [ ] Organize Incubator English content into sections
- [ ] Make sure page content is not randomly hardcoded inside JSX

### Priority 1 — Workspaces Page

- [ ] Build Workspaces page sections
- [ ] Add Workspaces feature cards
- [ ] Add Workspaces facilities/services sections
- [ ] Add Workspaces WhatsApp CTA
- [ ] Apply navy theme
- [ ] Check desktop layout
- [ ] Check mobile layout

### Priority 1 — Incubator Page

- [ ] Build Incubator page sections
- [ ] Add Incubator benefits/features
- [ ] Add Incubator program steps if content exists
- [ ] Add Incubator WhatsApp CTA
- [ ] Apply orange theme
- [ ] Check desktop layout
- [ ] Check mobile layout

### Optional — Soft Landing Support

- [ ] Help Mohammed with Soft Landing content if needed
- [ ] Organize Soft Landing Arabic content
- [ ] Organize Soft Landing English content
- [ ] Add Soft Landing CTA

### Definition of Done

Aljazi is done when:

- [ ] Workspaces page is implemented
- [ ] Incubator page is implemented
- [ ] Arabic and English content are organized
- [ ] WhatsApp CTAs are added
- [ ] Assigned pages work on desktop
- [ ] Assigned pages work on mobile
- [ ] Shared components are used consistently

---

# Shared Final QA

Before delivery:

- [ ] All pages render
- [ ] Navbar works on desktop
- [ ] Navbar works on mobile
- [ ] Navbar scroll behavior works
- [ ] Arabic RTL works
- [ ] English LTR works
- [ ] Language switch works
- [ ] WhatsApp links work
- [ ] Images/logos load correctly
- [ ] Responsive design checked on mobile
- [ ] Responsive design checked on desktop
- [ ] No unrelated files changed
- [ ] `npm run lint` passes
- [ ] `npm run build` passes

---

# Git Workflow

Recommended branches:

- `main`
- `dev`
- `feature/foundation-mohammed`
- `feature/home-ibrahim`
- `feature/service-pages-aljazi`

Rules:

- Do not push MVP work directly to `main`
- Merge feature branches into `dev` first
- Before merging:
  - [ ] Run `git diff --check`
  - [ ] Run `npm run lint`
  - [ ] Run `npm run build`
- If lint/build fails because of known unrelated issues, document them clearly

---

# Vibe Coding Rules

When using Claude, Codex, or Gemini:

- Always limit the files the agent can edit
- Always mention the exact task owner
- Always ask for the smallest focused change
- Do not let the agent redesign unrelated sections
- Do not let the agent add backend/dashboard/auth now
- Do not let the agent invent new brand colors
- Do not let the agent remove Arabic/English support
- Do not let the agent hardcode long content randomly in JSX
- Always check desktop and mobile after UI changes
