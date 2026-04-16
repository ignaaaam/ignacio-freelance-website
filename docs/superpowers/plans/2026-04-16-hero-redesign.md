# Hero Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current homepage hero card with a cleaner, content-led hero that keeps trust cues without splitting attention in Spanish and English.

**Architecture:** Keep the change local to the shared `Hero.astro` component and the localized `hero` content in `siteContent.ts`. Remove the right-side card markup, introduce a lighter integrated trust block, and restyle the section to support a single visual hierarchy across breakpoints.

**Tech Stack:** Astro, shared localized content, component-scoped CSS

---

### Task 1: Reshape localized hero content

**Files:**
- Modify: `src/data/siteContent.ts`
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Replace card-specific hero fields with trust-oriented fields**

```ts
hero: {
  eyebrow: '...',
  title: '...',
  subtitle: '...',
  primaryCta: '...',
  secondaryCta: '...',
  primaryHref: '...',
  secondaryHref: '...',
  fitLabel: '...',
  fitText: '...',
  proof: ['...', '...', '...'],
  contactLinksLabel: '...',
}
```

- [ ] **Step 2: Update the TypeScript shape to match**

Run: update the `HomeContent["hero"]` type in `src/data/siteContent.ts`

Expected: no `portraitLabel`, `portraitMeta`, or `availability` references remain in the shared hero content type

- [ ] **Step 3: Keep copy parity in both locales**

Run: verify both `es.hero` and `en.hero` expose the same keys

Expected: Spanish and English content compile without missing-property errors

### Task 2: Rebuild the hero markup

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Remove the lateral card structure**

```astro
<!-- remove -->
<aside class="hero__panel surface-card">
  ...
</aside>
```

- [ ] **Step 2: Add an integrated micro-trust block below the CTAs**

```astro
<div class="hero__meta">
  <div class="hero__fit">
    <span class="hero__meta-label">{content.fitLabel}</span>
    <p>{content.fitText}</p>
  </div>

  <div class="hero__proof">
    {content.proof.map((item) => (
      <span class="pill">{item}</span>
    ))}
  </div>

  <div class="hero__contact-links">
    <span class="hero__meta-label">{content.contactLinksLabel}</span>
    <div class="hero__links">
      <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={`mailto:${siteConfig.email}`}>Email</a>
    </div>
  </div>
</div>
```

- [ ] **Step 3: Keep CTA behavior intact**

Run: preserve `data-cta` attributes and existing href values

Expected: analytics hooks and in-page navigation continue working as before

### Task 3: Redesign the hero styling

**Files:**
- Modify: `src/components/Hero.astro`

- [ ] **Step 1: Collapse the desktop layout to one dominant content column**

```css
.hero__grid {
  grid-template-columns: minmax(0, 1fr);
}

.hero__content {
  max-width: 72rem;
}
```

- [ ] **Step 2: Replace panel styling with lighter integrated trust styling**

```css
.hero__meta {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.hero__fit,
.hero__contact-links {
  padding: 1rem 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  border-radius: 1.25rem;
}
```

- [ ] **Step 3: Rebalance spacing and typography for the new composition**

Run: refine headline width, subtitle width, button spacing, and mobile stacking

Expected: no empty visual hole on desktop and no dense boxed layout on mobile

### Task 4: Verify the redesign

**Files:**
- Modify: `src/components/Hero.astro`
- Modify: `src/data/siteContent.ts`

- [ ] **Step 1: Run type and Astro verification**

Run: `pnpm astro check`

Expected: PASS

- [ ] **Step 2: Check edited files for diagnostics**

Run: `ReadLints` for `src/components/Hero.astro` and `src/data/siteContent.ts`

Expected: no new lints introduced by the redesign

- [ ] **Step 3: Review both locales in the browser**

Run: inspect `/` and `/en/` in the local dev server

Expected: same structural design, clean hierarchy, and no card-style competition in either language
