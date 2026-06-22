# ZYTRIXON TECH — MASTER BUILD PROMPT
**Stack: Laravel 11 + Inertia.js + React 18 + MySQL | Goal: Award-winning landing page + full CMS/Admin**

---

## 0. ONE-LINE BRIEF (paste this first if using an AI coding tool)

> Build "Zytrixon Tech" — a B&W + single-accent, GSAP/Three.js-animated, Awwwards-tier marketing website for an IoT/software company in Patna, Bihar — using Laravel 11 + Inertia.js + React 18 (TypeScript) + MySQL, with a complete admin CMS (CRM, quotations, billing, offer letters, projects, blog, portfolio, testimonials, team, email campaigns, analytics). Mobile-first, Core Web Vitals 90+, fully SEO-optimized.

---

## 1. TECH STACK (Laravel-first)

| Layer | Choice |
|---|---|
| Backend Framework | Laravel 11 |
| Frontend Bridge | Inertia.js (server-driven SPA, no separate API needed) |
| Frontend UI | React 18 + TypeScript |
| Styling | Tailwind CSS 3 + CSS variables for theming |
| Animation | GSAP 3 + ScrollTrigger + Lenis (smooth scroll) |
| 3D / WebGL | Three.js + React Three Fiber (R3F) + drei |
| Database | MySQL 8 |
| ORM | Eloquent |
| Auth (public) | Laravel Breeze (Inertia + React preset) |
| Auth (admin) | Laravel Fortify / Sanctum + Spatie `laravel-permission` (roles/permissions) |
| Admin UI Kit | shadcn/ui (React) + Radix primitives |
| PDF Generation | `barryvdh/laravel-dompdf` or Spatie `laravel-pdf` (quotes, invoices, offer letters) |
| Email | Laravel Mail + Resend or Mailgun driver; queued via Laravel Queues |
| Queue/Jobs | Laravel Queue (database or Redis driver) for emails, PDF generation, follow-up reminders |
| Media/CMS storage | Laravel Filesystem (S3-compatible, e.g. Cloudinary or AWS S3) |
| Search (blog/portfolio) | Laravel Scout + MySQL fulltext (or Meilisearch if scale grows) |
| SEO | `artesaos/seotools` package + custom Schema.org JSON-LD components |
| Forms validation | Laravel Form Requests (backend) + React Hook Form + Zod (frontend) |
| Charts (admin analytics) | Recharts |
| Hosting | Laravel Forge / Vapor on AWS, or Hostinger/DigitalOcean VPS with Nginx + PHP-FPM |
| CI/CD | GitHub Actions → auto-deploy on push to `main` |
| Dev tools | Laravel Pint (style), Pest (testing), Vite (asset bundling) |

**Why this stack works for your ask:** Inertia gives you a true React SPA *feel* (smooth transitions, no full reloads) while keeping Laravel as a single monolith — no separate API layer to maintain, one codebase, one deploy, MySQL handles all relational data (leads, quotes, invoices, blog, etc.) cleanly through Eloquent.

---

## 2. PROJECT SETUP INSTRUCTIONS (for the AI/developer)

```bash
composer create-project laravel/laravel zytrixon
cd zytrixon
php artisan breeze:install react --typescript --ssr
composer require spatie/laravel-permission
composer require barryvdh/laravel-dompdf
composer require artesaos/seotools
npm install gsap @gsap/react three @react-three/fiber @react-three/drei lenis
npm install framer-motion clsx tailwind-merge lucide-react recharts
npm install react-hook-form zod @hookform/resolvers
```

- Enable **Inertia SSR** for SEO (critical — Google must see rendered HTML, not blank JS shell).
- Use **route model binding** + Laravel's named routes; expose them to React via `Ziggy` package so React can do `route('blog.show', slug)`.

---

## 3. DATABASE SCHEMA (MySQL — core tables)

```
users                 (id, name, email, password, role, ...)
roles / permissions    (via Spatie package)
leads                  (id, name, email, phone, service_interest, message, source, status, assigned_to, followup_at)
quotations             (id, lead_id, items_json, subtotal, gst, total, status, pdf_path, sent_at)
invoices               (id, client_id, project_id, amount, gst, status, due_date, pdf_path)
offer_letters          (id, type[client|hire], recipient_name, content_json, pdf_path, status)
projects               (id, client_name, title, status, start_date, end_date)
project_milestones      (id, project_id, title, status, due_date)
project_members        (id, project_id, user_id, role)
posts (blog)           (id, title, slug, excerpt, body, cover_image, status, published_at, seo_meta_json)
portfolio_items        (id, title, slug, industry, summary, results_json, cover_image, gallery_json, client_name)
testimonials           (id, client_name, company, photo, rating, content, is_featured, status)
team_members           (id, name, role, photo, bio, socials_json, is_active)
careers                (id, title, department, location, type, description, is_active)
career_applications    (id, career_id, name, email, resume_path, cover_note)
email_campaigns        (id, subject, body, segment, status, scheduled_at, sent_at)
subscribers            (id, email, status, subscribed_at)
locations (SEO pages)  (id, city, state, slug, content_json, seo_meta_json)
analytics_events       (id, event_type, page, source, meta_json, created_at)
```

Use **JSON columns** (`items_json`, `gallery_json`, `seo_meta_json`) for flexible structured data — keeps schema lean while allowing rich CMS-editable content.

---

## 4. PUBLIC WEBSITE — PAGES & EXACT REQUIREMENTS

### 4.1 Home `/` — ⭐ THE AWARD-WINNING PAGE (highest priority)
This page must feel like an **Awwwards Site of the Day** entry. Specifics:

**Hero Section**
- Full-bleed, 100vh, pure black background (`#000`) with a single accent color (electric cyan `#00F5D4` or muted gold `#C9A227` — pick one, use consistently everywhere).
- Custom **Three.js / R3F 3D scene**: a rotating low-poly IoT device / circuit-board mesh that responds subtly to mouse movement (parallax tilt, not full drag-rotate — keep it premium, not gimmicky).
- Headline uses **GSAP SplitText**-style character/word reveal on load — staggered, with a slight blur-to-sharp focus transition (this single effect is what separates "nice site" from "award site").
- Subheadline fades up 0.2s after headline.
- Primary CTA button has a **magnetic cursor effect** (button subtly follows cursor within a radius) + custom cursor (small dot + outline ring that scales on hover over interactive elements).
- A thin animated marquee strip below hero: scrolling tech-stack/IoT keywords, pure CSS/GSAP infinite loop, pauses on hover.

**Scroll Choreography (GSAP ScrollTrigger + Lenis smooth scroll)**
- Stats counter section: numbers count up from 0 when scrolled into view (e.g. "120+ Projects", "8 Years", "40+ Clients").
- Services overview: cards with **stagger entrance** (each card slides up + fades in, 80ms stagger delay between cards).
- Horizontal-scroll or pinned section for "Process" teaser (optional but high-impact: pin section, scroll vertically drives horizontal card movement).
- Parallax depth on at least 2 sections — background layer moves slower than foreground content as user scrolls.
- Footer CTA: full-width black section, large bold text, single button, micro-interaction on hover (text underline draws in via SVG stroke animation).

**Performance rule for 3D:** Detect mobile/low-power devices → serve a static optimized image or much simpler CSS-only animation instead of the Three.js scene. Never load heavy WebGL on mobile — load conditionally based on `window.innerWidth` and `navigator.hardwareConcurrency`.

**Micro-details that win awards (include all):**
- Custom favicon + browser tab title animation on tab-blur ("Come back! 👋").
- Page transition: when navigating via Inertia, do a 300ms wipe/fade transition (not jarring snap) — use Inertia's `router.on('start'/'finish')` hooks tied to a GSAP overlay animation.
- Loading screen on first visit: minimal logo animation (dot-grid logo assembling), max 1.2s, skippable on click.
- Grain/noise texture overlay (very subtle, 3-5% opacity) across the whole site for a premium editorial feel — common Awwwards technique.
- Cursor changes shape/label near images ("View Project") and links.

### 4.2 Services `/services` + dedicated subpages
- `/services/web-development`, `/services/app-development`, `/services/iot-solutions`, `/services/digital-marketing`
- Each subpage: hero, what's included, tech used, mini case-study callout, pricing tiers (optional), FAQ accordion (with FAQ schema), CTA.

### 4.3 Work / Portfolio `/work` + `/work/{slug}`
- Filterable grid by industry (smooth GSAP filter animation, no page reload — Inertia partial reload).
- Each case study: problem → solution → results (with before/after stat comparisons, animated count-up).

### 4.4 About `/about`
- Story timeline: Patna → Global, animated horizontal/vertical timeline.
- Team grid (pulls from `team_members` table), awards/recognitions strip.

### 4.5 Process `/process`
- Discovery → Design → Dev → Deploy, animated vertical timeline with scroll-linked progress line (SVG path draws as user scrolls).

### 4.6 Contact / Get a Quote `/contact` — ⭐ Lead Priority
- **Multi-step smart form** (React Hook Form + Zod validation, step transitions animated with Framer Motion):
  1. Service needed → 2. Budget range → 3. Timeline → 4. Contact details
- Live **instant quote estimator** (simple rule-based logic server-side via API endpoint, returns rough range).
- Sticky WhatsApp floating button (bottom-right, pulse animation every 8s to draw attention without being annoying).
- On submit: saves to `leads` table, fires queued email to admin + auto-reply to user, triggers a follow-up reminder job.

### 4.7 Blog `/blog` + `/blog/{slug}`
- Full SEO meta per post (`seotools` package), JSON-LD `Article` schema, reading-time estimate, related posts.

### 4.8 Location Pages `/locations/{city}`
- Programmatic SEO: "Software Company in Patna", "IoT Development Company in Bihar" etc. — templated but with unique city-specific content blocks, `LocalBusiness` schema.

### 4.9 Careers `/careers`
- Job listings from `careers` table, application form uploads resume to storage, ties to `career_applications`.

### 4.10 Privacy / Terms `/privacy`, `/terms`
- Standard static Inertia pages, but still on-brand design.

---

## 5. ADMIN PANEL — MODULES (route prefix `/admin`, protected by Spatie roles)

| Module | Key Features |
|---|---|
| **Dashboard** | Leads today, revenue this month, pending tasks, mini charts (Recharts) |
| **Lead / CRM** | Kanban or table view, status pipeline (New → Contacted → Quoted → Won/Lost), follow-up reminders (queued notifications) |
| **Quotation Builder** | Line-item builder, auto GST calc, generate PDF (dompdf), email directly to lead, track viewed/accepted status |
| **Billing / Invoices** | GST-compliant invoice generator, payment status tracking, automated due-date reminder emails |
| **Offer Letter Generator** | Branded templates for both clients and new hires, merge-field based (name, role, date auto-filled), PDF export |
| **Project Manager** | Milestones, Kanban board per project, team assignment, status %, linked to `projects`/`project_milestones` tables |
| **Blog / Content CMS** | Rich text editor (TipTap or Lexical inside React), draft/schedule/publish, SEO fields per post |
| **Portfolio Manager** | Add/edit case studies, image gallery uploader, results metrics fields |
| **Testimonials Manager** | Approve/reject submissions, feature toggle, drag-to-reorder |
| **Team Manager** | Add/remove members, role, photo, social links |
| **Email Campaigns** | Compose, segment by lead status/subscriber, schedule send, basic open-rate tracking |
| **Analytics Panel** | Traffic source breakdown, lead conversion funnel, top pages — pull from `analytics_events` + optionally pipe in Google Analytics API |
| **Settings** | Site-wide SEO defaults, social links, WhatsApp number, accent color toggle |

**Admin design note:** Keep admin UI clean and functional (shadcn/ui defaults are fine here) — it does NOT need the award-winning treatment. Save all animation/3D budget for the public site, especially the homepage.

---

## 6. DESIGN SYSTEM (lock this in before building anything)

```
Colors:
  --black: #000000
  --white: #FFFFFF
  --accent: #00F5D4   (electric cyan) — pick ONE accent, use everywhere consistently
  --gray-text: #888888 (secondary text on white/black)

Typography:
  Headings: "Space Grotesk" — bold/black weight, tight letter-spacing (-0.02em)
  Body: "Inter" or "DM Sans" — regular/medium

Spacing/Grid:
  12-column grid, generous whitespace, section padding min 120px desktop / 64px mobile

Motion principles:
  - Ease: custom cubic-bezier, never default "ease" — use GSAP's "power3.out" or similar
  - Duration: 0.6–0.9s for entrances, 0.2–0.3s for micro-interactions
  - Stagger: 60–100ms between sibling elements
  - Never animate more than is needed to guide attention — restraint = premium
```

---

## 7. SEO CHECKLIST (build into every page from day one)

- Inertia SSR enabled (mandatory — no SEO without server-rendered HTML)
- Unique `<title>` + meta description per page via `seotools`
- JSON-LD: `Organization`, `LocalBusiness`, `Service`, `FAQPage`, `Article`, `BreadcrumbList`
- `sitemap.xml` auto-generated (Laravel command + cron, or `spatie/laravel-sitemap`)
- `robots.txt` configured
- Image optimization: WebP/AVIF via Laravel's image pipeline, lazy-loading below fold
- Core Web Vitals target: LCP < 2.5s, CLS < 0.1, INP < 200ms — test with Lighthouse before launch
- Mobile-first responsive breakpoints, tap targets ≥ 44px

---

## 8. PRIORITY BUILD ORDER (tell the AI/dev to follow this sequence)

1. Laravel + Inertia + React scaffold, design tokens (Tailwind config), routing structure
2. **Homepage** (full award-winning treatment — this is the flagship, build it first and iterate)
3. Contact/Quote page + lead capture pipeline (DB + email)
4. Services, Work/Portfolio, About, Process pages
5. Blog + Location SEO pages
6. Admin panel: Dashboard → CRM → Quotation → Billing → Offer Letters → Project Manager → CMS modules
7. SEO pass + performance audit + Lighthouse optimization
8. QA on mobile devices (disable heavy 3D, test all forms, test PDF generation)

---

## 9. INSTRUCTION TO PASTE INTO YOUR AI CODING TOOL (Claude Code / Cursor / etc.)

> "Using the spec above, scaffold a Laravel 11 + Inertia.js + React + TypeScript + MySQL project named `zytrixon`. Start with the homepage exactly as described in section 4.1 and 6 — prioritize the GSAP hero text reveal, magnetic CTA button, custom cursor, and a lightweight Three.js rotating IoT mesh with mobile fallback. Then build the Contact/Quote multi-step form with the `leads` table and email pipeline. Follow the build order in section 8."

---
*This document is your single source of truth — hand it directly to a developer or paste section-by-section into an AI coding assistant.*
