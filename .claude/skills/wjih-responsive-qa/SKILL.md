---
name: wjih-responsive-qa
description: Review WJIH responsive behavior and visual quality before merging UI work. Use after page, layout, navigation, component, i18n, CTA, image, or visual changes to check desktop, mobile, RTL/LTR, and build readiness.
---

# WJIH Responsive QA

Use this skill before merging UI work to verify responsive behavior and visual quality.

## Required Checks

* Check desktop and mobile.
* Check navbar desktop and mobile behavior.
* Check navbar scroll behavior:
  * At top: border visible.
  * On scroll: border disappears and background becomes softer/subtle.
* Check Arabic RTL.
* Check English LTR.
* Check language switch.
* Check images and logos loading.
* Check spacing consistency.
* Check CTAs.

## Commands

Run when possible:

```bash
npm run lint
npm run build
git diff --check
```

If lint or build fails because of unrelated existing issues, document those issues clearly.

## Verification Checklist

* No horizontal overflow.
* Mobile menu works.
* Text does not overlap.
* Cards stack correctly.
* Buttons remain tappable.
* Build passes or issues are documented.
