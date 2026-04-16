# Hero Redesign Design

**Date:** 2026-04-16

**Goal:** Simplify the homepage hero in Spanish and English by removing the competing right-side card and replacing it with a lighter trust layer integrated into the main content column.

## Problem

The current hero creates two competing focal points:

- The headline on the left is the primary conversion message.
- The bright card on the right introduces a second dominant visual object.

This card repeats information that already exists elsewhere in the homepage:

- "What I build" overlaps with the headline, subtitle, services, and project sections.
- "Best next step" overlaps with the primary CTA and contact section.
- "Profiles" is useful, but not important enough to deserve a large above-the-fold panel.

The result is a hero that feels busier, less premium, and less confident than the rest of the design direction.

## Design Direction

Use a more editorial, Apple-inspired hero with one clear story:

- One dominant content column.
- Stronger whitespace and spacing rhythm.
- Primary and secondary CTAs close to the message.
- Trust signals integrated below the CTAs instead of isolated in a separate card.

The hero should feel more intentional, calmer, and more premium while preserving the practical reassurance a client needs before contacting.

## Content Strategy

Keep in the hero:

- Eyebrow
- Main headline
- Supporting subtitle
- Primary and secondary CTAs
- A compact "good fit" line
- A small set of proof items
- A subtle row of profile/contact links

Remove from the hero:

- The full right-side card
- The avatar/portrait badge block
- The duplicated "what I build" list
- The standalone "next step" box

## Layout

### Desktop

- Replace the current 2-column hero with a single, wider content-led layout.
- Keep the text block left-aligned within the container.
- Introduce a lightweight trust strip under the action buttons.
- Keep the profile/contact links visually secondary.

### Mobile

- Preserve the single-column structure.
- Stack CTAs vertically.
- Stack proof items and link rows naturally without creating dense card-like containers.

## Visual Rules

- Remove the white/light surfaces that interrupt the dark hero background.
- Keep the dark cinematic background, but simplify decorative layers.
- Use subtle separators, soft translucent surfaces, and restrained borders only where useful.
- Make the headline, subtitle, and CTA group the only clear hierarchy.

## Copy and Localization

Spanish and English should share the same structure, but not force identical line lengths.

The compact trust layer should reuse existing content where possible:

- Availability / ideal fit
- Budget / reply time / direct collaboration proof
- LinkedIn / GitHub / direct email links

## Files In Scope

- `src/components/Hero.astro`
- `src/data/siteContent.ts`

## Success Criteria

- The hero reads as one unified message instead of two competing blocks.
- The headline becomes the undisputed focal point.
- Trust signals remain present without feeling repetitive.
- The same design system works cleanly in both Spanish and English.
