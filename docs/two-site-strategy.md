# Two-Website Connection Strategy

## ignathedev.com → ignacioamatweb.com

---

## 1. Positioning Audit

### ignathedev.com — Personal Portfolio / CV

| Dimension | Current State |
|---|---|
| **Identity** | Ignacio Amat, Senior Full-Stack Developer |
| **Voice** | Personal, first-person, experience-forward |
| **Proof** | Enterprise logos (PlayStation, TikTok, Glovo, Bizum, LaCaixa) |
| **CTAs** | "Hablemos", CV download, contact form |
| **Content** | Work history, tech stack, education, certifications, projects |
| **Implicit promise** | "I am a qualified, battle-tested developer you can trust with complex work" |
| **Missing** | No business owner / SMB entry point |

### ignacioamatweb.com — Freelance Services

| Dimension | Current State |
|---|---|
| **Identity** | Professional web development service (mentions "Ignacio Amat" but is service-focused) |
| **Voice** | Service-oriented, outcome-driven, client-facing |
| **Proof** | Testimonials, pricing tiers, 50+ pages of SEO content |
| **CTAs** | "Solicitar Presupuesto Gratuito", contact form |
| **Content** | Service types, pricing, process, FAQ, city/industry landing pages |
| **Implicit promise** | "You will get a professional website that generates clients, at a fair price" |
| **Missing** | No inbound channel from ignathedev.com |

**Critical asymmetry to preserve:** ignathedev.com showcases *who Ignacio is* professionally. ignacioamatweb.com showcases *what clients get*. These serve different mental models and must never be conflated from the freelance direction.

---

## 2. Visitor Taxonomy

### Visitor Type A — Recruiter

- **Entry point:** ignathedev.com (LinkedIn referral, GitHub, job boards)
- **Mental model:** "Can this person work on my team?"
- **Decision signal:** Employment history, tech stack depth, enterprise logos
- **Desired action:** CV download or contact for role discussion
- **Risk if misrouted:** Confusion — they're evaluating a hire, not buying a service
- **Rule:** Never send to ignacioamatweb.com. Keep on ignathedev.com.

### Visitor Type B — Company Hiring a Developer (Contract/Permanent)

- **Entry point:** ignathedev.com (referral, portfolio showcase, LinkedIn)
- **Mental model:** "We need technical expertise added to our team"
- **Decision signal:** Tech stack match, availability, communication style
- **Desired action:** Contact via ignathedev.com contact form
- **Rule:** Never send to ignacioamatweb.com. They are not buying a product.

### Visitor Type C — Startup Needing a Website

- **Entry points:** ignathedev.com (via portfolio), ignacioamatweb.com (via SEO: `/pagina-web-startups-barcelona`)
- **Mental model:** "I need someone to build my digital presence"
- **Decision signal:** Project quality, speed to market, pricing clarity, process
- **Desired action:** Contact via ignacioamatweb.com
- **Rule:** If they arrive at ignathedev.com → route to ignacioamatweb.com via project CTAs. If they arrive at ignacioamatweb.com → convert there.

### Visitor Type D — Small Business / Local Business Needing a Website

- **Entry points:** Primarily ignacioamatweb.com (via SEO city/industry pages), rarely ignathedev.com
- **Mental model:** "I need a professional website for my shop / clinic / restaurant"
- **Decision signal:** Pricing, local presence signals, testimonials from similar businesses
- **Desired action:** Contact via ignacioamatweb.com
- **Rule:** If they land on ignathedev.com, they are likely confused and need a soft redirect. Route via hero or footer.

---

## 3. The One-Way Bridge: Portfolio → Freelance

The connection is strictly unidirectional. This is not a branding strategy — it is a **lead routing system**.

```
ignathedev.com
    │
    │  Visitor recognises quality work
    │  Visitor thinks: "I want this for my business"
    │
    ▼
ignacioamatweb.com
    │
    │  Visitor evaluates services
    │  Visitor contacts and becomes a client
    │
    ▼
  Lead
```

The freelance site **never** references the portfolio. There are no "See my personal profile" links, no CV, no employment history. The freelance site stands entirely on its own credibility (testimonials, pricing transparency, process, case studies).

---

## 4. CTA Placement System on ignathedev.com

### Placement Priority Map

| Location | Priority | Visitor Type Reached | Trigger Moment |
|---|---|---|---|
| Projects / Case Studies | **#1 — Highest** | C, D | Emotional peak: "I love this work" |
| Hero (secondary CTA) | **#2** | C, D | First impression: quick identification |
| FAQ | **#3** | C, D | Informational: they asked about services |
| Footer | **#4 — Softest** | C, D | End of page: catch exits |
| Contact Form (field logic) | **#5 — Intelligent** | C, D | Active intent declared |

---

### Placement #1 — Projects / Case Studies (Highest Priority)

This is the moment of highest intent. A visitor who has just seen a project they admire is already emotionally qualified.

**Implementation:**

Each project card or case study detail page should include a secondary contextual block at the bottom:

```
┌─────────────────────────────────────────────────────────┐
│  ╔════════════════════════════════════════════════╗     │
│  ║  Want results like this for your business?    ║     │
│  ║  I build websites for companies and startups  ║     │
│  ║  that need to generate clients online.        ║     │
│  ║                                               ║     │
│  ║  [ See web development services → ]           ║     │
│  ╚════════════════════════════════════════════════╝     │
└─────────────────────────────────────────────────────────┘
```

**CTA copy options (choose per project type):**

- For SaaS / App projects:
  *"Need a web application or platform built for your business? → See client services"*

- For corporate / marketing sites:
  *"Want a website like this to generate leads for your company? → See pricing and services"*

- For e-commerce:
  *"Thinking of selling online? I build e-commerce stores for businesses. → Start a project"*

**Link destination:** `https://www.ignacioamatweb.com/?ref=portfolio-projects`
(UTM tagging covered in Section 7)

---

### Placement #2 — Hero Section (Secondary Message)

The hero currently says: *"Disponible para proyectos y contratacion"*

This is correctly ambiguous. But business owners reading it may be unsure if this applies to them.

**Implementation — Add a secondary eyebrow or sub-message:**

Below the hero CTAs ("Hablemos" / secondary action), add a quiet but visible differentiator:

```
Looking for a developer to build your company website?
→ See web development services for businesses
```

In Spanish:

```
¿Buscas que alguien te construya la web de tu negocio?
→ Ver servicios de desarrollo web para empresas
```

**Styling:** Small text, muted color — enough to be seen by the right person, invisible to recruiters who are not looking for it.

**Link:** `https://www.ignacioamatweb.com/?ref=portfolio-hero`

---

### Placement #3 — FAQ Section

The portfolio FAQ answers hiring questions. Add one question that naturally creates the fork:

**New FAQ entry:**

> **Q: Do you also build websites for businesses and startups?**
> A: Yes — alongside development work, I run a dedicated web development service for businesses. If you need a website built (landing page, corporate site, e-commerce, or web app), you can see services, pricing, and examples at ignacioamatweb.com.

In Spanish:

> **P: ¿Tambien desarrollas webs para empresas y startups?**
> R: Si. Ademas del trabajo como desarrollador, llevo un servicio de desarrollo web para empresas y autonomos. Si necesitas que te construya una web (landing page, web corporativa, tienda online o aplicacion web), puedes ver servicios, precios y ejemplos en ignacioamatweb.com.

**Placement:** Position this as the last FAQ item, so it does not interrupt the recruiter / hiring FAQ flow.

---

### Placement #4 — Footer

The footer is a passive catch-all for visitors who reached the end without converting.

**Implementation — Add a quiet "services" column or separator line:**

```
┌──────────────────────────────────────────────────────────┐
│  ignathedev.com                                          │
│  © 2026 Ignacio Amat                                     │
│                                                          │
│  Links: LinkedIn · GitHub · Email                        │
│  ──────────────────────────────────────────────────────  │
│  Need a website built for your business?                 │
│  → ignacioamatweb.com                                    │
└──────────────────────────────────────────────────────────┘
```

In Spanish:

```
¿Necesitas una web para tu empresa?
→ ignacioamatweb.com
```

**Styling:** Clearly separated from copyright / legal links. Small, clean, no button — just a text link. It must not compete with the main footer experience for recruiters.

---

### Placement #5 — Contact Form (Intelligent Routing)

When a visitor fills out the contact form on ignathedev.com and selects a reason like "I need a website built" or "Web project", show an inline prompt:

```
┌───────────────────────────────────────────────────────┐
│  i  Looking for website development services?         │
│     You may find it faster to submit your project at  │
│     ignacioamatweb.com — dedicated to client projects │
│     with pricing, examples, and a focused process.    │
│                                                       │
│  [ Continue here ]   [ Go to services site → ]        │
└───────────────────────────────────────────────────────┘
```

This is non-blocking — the visitor can still submit from ignathedev.com. But it gives the correct mental model: there is a dedicated service experience waiting for them.

---

## 5. CTA Copy System

### Principles

- Never say "my other website" — this breaks the brand illusion
- Always frame the freelance site as a **dedicated service**, not a side project
- Lead with the **visitor's need**, not a promotion
- Keep it short — these are contextual prompts, not pitches

### Copy Bank (ES + EN)

**High-intent (projects section):**

```
ES: ¿Necesitas algo asi para tu empresa? → Ver servicios web
EN: Need this for your business? → See web development services
```

```
ES: ¿Quieres una web que genere clientes? → ignacioamatweb.com
EN: Want a website that generates leads? → ignacioamatweb.com
```

**Neutral / discovery (hero, footer):**

```
ES: ¿Buscas una web para tu negocio, no un desarrollador para tu equipo?
EN: Looking for a website built, not a developer to hire?
→ ignacioamatweb.com
```

**Contextual / FAQ:**

```
ES: Servicio dedicado para empresas que necesitan su web
EN: Dedicated service for businesses that need a website built
```

**Contact form trigger:**

```
ES: Si necesitas que te construya la web, hay un proceso dedicado para eso.
EN: If you need a website built, there's a dedicated process for that.
```

---

## 6. User Journey Maps

### Journey 1 — Recruiter (no redirect)

```
LinkedIn → ignathedev.com (hero)
  → Employment history (PlayStation, Glovo...)
  → Tech stack section
  → Education / Certifications
  → FAQ (hiring questions)
  → Contacts via form
  → [STAYS on ignathedev.com]
```

The CTA placements are invisible to this visitor because they are not scanning for "business website" language.

---

### Journey 2 — Tech Lead / Engineering Manager (no redirect)

```
GitHub → ignathedev.com (hero)
  → Projects (evaluates code quality signals)
  → Tech stack
  → Contact form: selects "Team augmentation" or "Contract role"
  → [STAYS on ignathedev.com]
```

---

### Journey 3 — Startup Founder (high-intent redirect)

```
ignathedev.com (via LinkedIn share or referral)
  → Hero: "5+ years building web apps"
  → Notices secondary line: "Building a website for your business?"
  → Clicks → ignacioamatweb.com (ref=portfolio-hero)
  → Sees service types, pricing
  → Startup page: /pagina-web-startups-barcelona
  → Contact form → LEAD
```

---

### Journey 4 — Startup Founder (project-driven redirect)

```
ignathedev.com (word of mouth)
  → Reviews projects
  → Sees SaaS project case study
  → Reads: "Need a web app built for your business?"
  → Clicks → ignacioamatweb.com/desarrollo-aplicacion-web-saas
  → Reviews service, pricing, FAQ
  → Contact form → LEAD
```

---

### Journey 5 — Small Business Owner (organic SEO, correct site)

```
Google: "desarrollador web barcelona"
  → ignacioamatweb.com/desarrollador-web-barcelona
  → Reviews services
  → Pricing section
  → Testimonials
  → FAQ
  → Contact form → LEAD
```

This visitor never sees ignathedev.com. No need.

---

### Journey 6 — Small Business Owner (lands on wrong site)

```
Referral from article or directory → ignathedev.com
  → Hero: sees developer CV
  → Confused ("this is a job resume")
  → Footer or FAQ rescue: "Need a website for your business?"
  → Clicks → ignacioamatweb.com
  → Correct context → LEAD
```

---

### Journey 7 — Agency / Reseller (either site)

```
Google search or LinkedIn → ignathedev.com
  → Sees enterprise credentials
  → Wants white-label developer
  → FAQ: no specific agency question
  → Contacts via ignathedev.com form ("collaboration / subcontract")
  → [STAYS on ignathedev.com]
```

Agencies evaluating a subcontractor are closer to "hiring a developer" than "buying a website." They stay on the portfolio.

---

## 7. Analytics and Tracking System

All links from ignathedev.com → ignacioamatweb.com must use UTM parameters to measure the funnel.

### UTM Schema

| Source | Medium | Campaign | Placement |
|---|---|---|---|
| `portfolio` | `referral` | `projects` | Project cards |
| `portfolio` | `referral` | `hero` | Hero secondary CTA |
| `portfolio` | `referral` | `faq` | FAQ answer |
| `portfolio` | `referral` | `footer` | Footer link |
| `portfolio` | `referral` | `contact-form` | Form routing prompt |

**Example full URL:**

```
https://www.ignacioamatweb.com/?utm_source=portfolio&utm_medium=referral&utm_campaign=projects
```

**What to track in GA4 on ignacioamatweb.com:**

- Sessions from `portfolio` source
- Conversion rate vs. organic traffic
- Contact form completions segmented by source
- Which placement generates highest-quality leads (by budget field in form)

---

## 8. Implementation Roadmap

### Phase 1 — Portfolio CTAs (ignathedev.com) — Week 1

**Priority: High. Zero changes to ignacioamatweb.com needed.**

- [ ] Add "Need this for your business?" block to each project card / case study
- [ ] Add secondary line to hero section pointing business owners away
- [ ] Add FAQ entry for "Do you build websites for businesses?"
- [ ] Add quiet footer text link
- [ ] Implement contact form field-triggered routing prompt
- [ ] All links use UTM schema defined above

**Acceptance criteria:** A business owner landing on ignathedev.com can identify within 10 seconds that there is a dedicated services site for them.

---

### Phase 2 — Freelance Site Landing Optimization (ignacioamatweb.com) — Week 2

**The portfolio referral creates a specific visitor: they have already seen the quality of the work. They arrive warm but need fast orientation.**

- [ ] Ensure the homepage hero loads fast and the value proposition is immediately clear (services, pricing, contact)
- [ ] Add a "How I work" anchor the portfolio CTAs can link directly to
- [ ] Verify the contact form asks the right qualifying questions (project type, budget, timeline)
- [ ] Confirm there is no back-link to ignathedev.com anywhere on ignacioamatweb.com
- [ ] Audit: does ignacioamatweb.com expose CV-like content? (employment history, tech stack chart, certifications) → Remove or reframe any that exist

**Acceptance criteria:** A visitor from the portfolio can orient themselves and start a project inquiry without friction.

---

### Phase 3 — Analytics Verification — Week 3

- [ ] Verify UTM parameters are being captured in GA4 on ignacioamatweb.com
- [ ] Set up a `portfolio_referral` segment in GA4
- [ ] Create a simple funnel: portfolio entry → service page → contact → form submit
- [ ] Baseline: measure organic contact rate on ignacioamatweb.com before and after Phase 1

---

### Phase 4 — Optional Enhancements — Month 2+

- [ ] **Project-specific landing pages on ignacioamatweb.com** — If a portfolio project is a restaurant site, link directly to `/pagina-web-restaurantes-barcelona`. More relevant landing = higher conversion.
- [ ] **"Built by Ignacio Amat" discrete badge on client sites** — Small footer attribution with link to ignacioamatweb.com. Passive referral channel.
- [ ] **Contact form on ignathedev.com: route by intent** — If visitor selects "Build my website" as their reason for contact, auto-suggest ignacioamatweb.com and optionally forward the form submission there.

---

## 9. What NOT to Do

These mistakes would undermine the strategy:

| Anti-pattern | Why it fails |
|---|---|
| Link from ignacioamatweb.com to ignathedev.com | Breaks the neutral professional service positioning; exposes CV to business clients who don't need it |
| Call ignacioamatweb.com "my other website" | Signals a side project rather than a dedicated service |
| Put the same testimonials and case studies on both sites | Dilutes both; they should have different social proof |
| Use the same hero copy / positioning on both | Recruiter sees "web services for businesses" — wrong; business owner sees employment history — wrong |
| Add aggressive CTAs on the portfolio | Undermines the professional CV positioning for recruiters |
| Expose portfolio enterprise client logos on the freelance site | Enterprise clients (PlayStation, Glovo) don't validate SMB capability — they intimidate SMB buyers |

---

## 10. Summary Diagram

```
VISITOR ARRIVES
      |
      |---- ignathedev.com --------------------------------------|
      |           |                                               |
      |    Who are you?                                           |
      |           |                                               |
      |    +--------------+                                       |
      |    |              |                                       |
      |  RECRUITER /    BUSINESS OWNER /                          |
      |  TECH LEAD       STARTUP FOUNDER                          |
      |    |              |                                       |
      |  [Stay]        [Route via]                                |
      |  CV, stack,    - Project CTAs                              |
      |  contact form  - Hero note                                |
      |    |           - FAQ answer                               |
      |    |           - Footer link                              |
      |    |              |                                       |
      |    |              v                                       |
      |    |     ignacioamatweb.com                               |
      |    |           |                                          |
      |    |      Services, pricing,                              |
      |    |      process, contact form                           |
      |    |           |                                          |
      |    |          LEAD                                        |
      |    |                                                      |
      |----+------------------------------------------------------+
      |
      |---- ignacioamatweb.com (direct / SEO) ------------------|
                    |                                              |
             Business owner,                                      |
             SMB, startup                                         |
                    |                                              |
               Services, pricing,                                 |
               city/industry pages                                |
                    |                                              |
                   LEAD                                           |
                                                                  |
                (No route back to ignathedev.com)                 |
                                                                  |
      -----------------------------------------------------------+
```

---

The asymmetry is the strategy. The portfolio earns trust and qualifies leads — the freelance site closes them. These are two separate jobs, done by two separate sites, connected by a one-way door.
