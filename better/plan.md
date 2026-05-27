# Maximum Impact Plan — The Code Witches Website

_Synthesized from usp.md, target-audience.md, research.md, projects.md, references.md_

---

## Core diagnosis

The site leads with identity, but visitors arrive with a problem. They need to feel "these people know my situation" within 3 seconds. The strategic shift across all documents is the same:

**From:** "Here's who we are and what we believe"  
**To:** "Here's what we've solved — here's the complexity we held — here's how you'll feel working with us"

---

## ⚡ Quick Wins — Do today (minutes each)

### Q1 — Fix `--font-weight-bold: 400 → 600`
**Effort:** 30 seconds | **Impact:** immediate — restores typographic hierarchy across the entire page. Likely a typo.

### Q2 — Add monospace font for tech stacks
**Effort:** 10 min (one CSS rule) | **Impact:** immediate  
JetBrains Mono or IBM Plex Mono only for stack labels. Signals "we write real code" without a single word.

### Q3 — Rewrite meta description
**Effort:** 5 min | **Impact:** LinkedIn previews, Google snippets  
Currently: *"Rebels by heart. Coders by craft."* — repels KMU decision-makers.  
Replace with a positioning line that names what you do and for whom.

### Q4 — Name your target audience explicitly
**Effort:** 10 min | **Impact:** medium — immediate clarity for the right visitor  
Add one line somewhere early: *"We work with SMEs, technical teams, and founders"*  
Lena (CTO, 80-person company) needs to know immediately: *this is for someone like me.*

---

## 🔥 Highest Impact

### #1 — Rewrite the hero section
**Effort:** ~30 min | **Impact:** transformative — first thing every visitor sees

**Problem:** The hero leads with values ("technology as a tool for redistributing power"). This is meaningful but doesn't hook a KMU decision-maker who arrived with a concrete problem.

**Direction:** Lead with the client's situation, not the company's identity. The visitor should think "yes, that's exactly my problem" within 3 seconds.

**Suggested direction (from target-audience.md):**

EN:
```
Your legacy system is holding you back.
Your team is drowning in manual processes.
AI sounds promising — but nobody has time to figure it out.

We do.
```

DE:
```
Euer Legacy-System bremst euch aus.
Euer Team verliert Zeit in manuellen Prozessen.
KI klingt vielversprechend — aber wer soll das alles durchdenken?

Wir.
```

Keep "rebels by heart, coders by craft" — but not as the first thing a decision-maker reads. Move it to About or use it as a secondary tagline.

Also rewrite the descriptor: `// software engineering & technical consulting` is accurate but generic. Consider something like `// we hold the complexity, so you can lead`.

---

### #2 — Add a domain breadth section
**Effort:** 1–2h | **Impact:** very high — this is the core differentiator and currently invisible

**Problem:** The site shows 4 Skyseed/Freie Kunst Akademie projects. This makes the Code Witches look like a small Skyseed-adjacent shop. The actual range is extraordinary and goes completely unrepresented.

**What exists in references.md but isn't on the site:**

| What was built | What it signals |
|---|---|
| C++ renderer used in Hobbit, Tintin, Rise of the Planet of the Apes | Elite-level systems thinking, high-stakes delivery |
| Drone obstacle avoidance: runtime hours → minutes | Algorithmic depth, not just web dev |
| Real-time Kafka pipelines on GCP + Kubernetes | Enterprise-grade infrastructure |
| Live election forecasting system | Statistical rigor, research-to-production |
| Escape room control systems, bar recipe app, Shopify | Cross-domain pragmatism, any stack, any context |
| ERP replacing full spreadsheet-based operations | End-to-end ownership, full lifecycle |

**Direction:** Add a section between Services and Projects that communicates domain breadth visually and concisely. Not full case studies — just enough to create the reaction: *"wait, these people have serious range."*

Anchor line: *"Whatever the domain — if it runs on a computer, we've probably built something like it."*

**Format options:** horizontal scroll of domains, minimal list with one-line descriptors, a "selected work" grid with more entries than the current 4-card section.

---

### #3 — Rewrite project cards as outcome stories
**Effort:** 1–2h | **Impact:** high — this is where B2B trust is built or lost

**Problem:** Current cards describe what was built and the tech stack. They don't tell a story of what changed for the client. A KMU visitor can't picture themselves in the result.

**Direction:** Each card follows the arc: Problem → What we did → What changed. Stack stays but moves to secondary position.

**Example rewrite (Skyseed ERP):**
- Before: *"Built an end-to-end platform that manages the full lifecycle of reforestation projects..."*
- After: *"Skyseed's operations ran across spreadsheets, manual handoffs, and disconnected tools. We replaced all of it — inventory, project management, KPI reporting, accounting — with one system built exactly for how they work. They've run on it ever since."*

**Add to each card:**
- One sentence naming the problem before the work started
- One sentence naming the concrete outcome or change
- Optional: a short quote from the client

---

### #4 — Get and add testimonials
**Effort:** outreach now, publish when received | **Impact:** very high — 93% of B2B buyers read testimonials before deciding

**Problem:** There are zero testimonials anywhere on the site.

**Direction:** 2–3 quotes from real clients would substantially change contact conversion. Place them near the Services section and near the contact CTA — not at the bottom.

**What makes a strong testimonial here:**
- Names the problem that existed before working together
- Describes the experience (communication, safety to ask questions, reliability)
- Mentions something specific (a timeline, a result, a moment)

**Action:** Reach out to Skyseed and Freie Kunst Akademie contacts today. Even a single sentence works. Video is even better.

---

## 📐 Structural — Page section order

### #5 — Fix the section order
**Effort:** ~1h | **Impact:** medium-high — structural, affects every visitor

**Problem:** About before Services is a classic mistake. Visitors want to know if you can solve their problem before they want to know who you are.

**Current order:** Hero → About → Services → Projects → Contact

**Recommended order:**
1. Hero *(problem-first)*
2. Services *(pain points, formats)*
3. Projects *(named client proof)*
4. Domain breadth *(range signal — new section)*
5. About *(earns its place now that credibility is established)*
6. Contact *(trust language + CTA)*

**Also:** Promote the 3 scenario bullets (*"You have a massive legacy system…", "You hear of AI…", "You vibecoded a bit…"*) — these are the strongest copy on the current site and they're buried after a generic intro paragraph. They should lead the Services section, possibly move into the hero area.

---

## 📝 Medium Impact — Copy improvements

### #6 — Concretize the individual bios
**Effort:** ~15 min | **Impact:** medium — transforms "okay, developers" into "wait, that's serious depth"

- **Sehera:** add *"...used in major film productions"* — currently invisible on the site
- **Denise:** name specific domains (election data, real-time data pipelines, research systems)

One specific line per person is the difference between "credible" and "memorable."

---

### #7 — Add honest AI positioning
**Effort:** ~30 min | **Impact:** medium-high — timely and differentiating

Add one new service bullet + one or two sentences in the services intro. The core:

> *"We work with AI where it genuinely helps — and we'll tell you when it doesn't."*

This does more than three paragraphs of AI hype. It builds immediate trust with the skeptical KMU buyer. Also signals: we do the real work others skip — data structures, knowledge bases, actual integrations.

---

### #8 — Rewrite the About section to build trust, not just introduce the team
**Effort:** ~30 min | **Impact:** medium-high

**Problem:** The current About section leads with partnership values and team personality. It doesn't answer the B2B trust question: "Have these people solved hard problems? Will they still be around? Do they understand my world?"

**Direction:** Keep the warmth — it's a differentiator — but open with the track record. Personality follows as evidence of *how* they work.

**What to add:**
- Lead with combined years + domains: *"20+ years, built for film studios and Mittelstand and funded startups"*
- Add specific credibility signals early: *"Sehera built rendering systems used in major film productions. Denise built real-time data pipelines processing live election data."*
- Keep and strengthen the tandem model framing: agency reliability + freelancer directness

---

### #9 — Rewrite the services section to speak to multiple stakeholders
**Effort:** ~30 min | **Impact:** medium

**Problem:** The three scenario bullets are good but narrow. A CTO with a legacy problem, a CFO evaluating cost vs. risk, and a non-technical Geschäftsführer all read differently.

**Rewrite the scenarios to cover the three most common KMU entry points:**
1. "You have something that needs to grow beyond where it is" *(founder/product)*
2. "You have a legacy system or tangled process that needs untangling" *(ops/CTO)*
3. "You're not sure what you need — you just know something isn't working" *(any)*

Add a brief outcome line to each service card: what you walk away with.

---

### #10 — Strengthen the contact section with trust language
**Effort:** ~15 min | **Impact:** medium — this is where visitors decide to reach out or leave

**Problem:** The contact section is minimal. It doesn't reduce the anxiety of reaching out, especially for someone who feels they "don't know enough" to start the conversation.

**Add before the CTA:**
> *"Nobody should feel judged for not knowing yet. Everyone deserves a safe place to ask — especially the questions that feel too basic."*

This is the trust language from the USP doc. It earns its place here, right when a visitor is on the edge of reaching out. Reassurance → action.

---

## 🔗 Technical — One-time fixes

### #11 — Restore OG/Twitter meta tags
**Effort:** ~30 min | **Impact:** medium — affects every LinkedIn share

**Problem:** No `og:image`, no `twitter:card` → the site appears as a plain text link on LinkedIn, which is likely the main B2B referral channel.

**What to add:**
- `og:image` — 1200×630px preview image
- `og:url` — canonical URL
- `twitter:card: summary_large_image`
- Rewritten `og:description` and `meta description` with a real positioning line

---

## 🌱 Longer term

### #12 — SEO keyword integration
**Impact:** low now, compounds over time  
Weave 2–3 relevant terms naturally into body copy:
- maßgeschneiderte Softwareentwicklung
- technische Beratung für KMU
- Datenprodukte und Webentwicklung

Doesn't need to feel like SEO copy — it can live naturally in About or Services.

### #13 — Visual hierarchy for past vs. featured projects
Full cards for featured projects. Lighter format (smaller cards or a list on creme background) for past references. Hierarchy instead of equality.

### #14 — Consistent section transitions
Use the existing color-band design language as visual separators between sections throughout the page.

---

## Summary — If you only do 5 things

1. **Rewrite the hero** — problem-first copy (30 min, transformative)
2. **Add the domain breadth section** — film, drones, elections are invisible (1–2h, biggest credibility gap)
3. **Rewrite project cards** as outcome stories (1–2h)
4. **Fix section order** — About moves after Projects (1h)
5. **Reach out for testimonials today** — even one quote changes the page
