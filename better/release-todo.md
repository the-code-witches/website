# Pre-release TODOs

Synthesized from call notes (P1–P9) + existing buyer feedback.

---

## ~~C1 — Hero: update poem3 line (EN)~~ ✅ done
~~**Source:** call note + explicit instruction~~
~~Replace EN:~~
~~`"a legacy system nobody wants to touch"`~~
~~→ `"A legacy system that everybody wants to rewrite with AI"`~~
~~DE translation already correct.~~

---

## C2 — Product development box: bridge to hero vision line
**Source:** P7
Poem1 stays: `"A pioneering vision with no clear path yet"`
The product development service box needs to explicitly pick up that thread — make the connection obvious for founders reading it.
Direction: we excel in unknown waters / undefined requirements. We come from startup and research-heavy projects. We know how to get ambitious visions off the ground.
Update `services.offer.product.pain` and/or `services.offer.product.desc` in i18n.js + HTML fallback.

---

## C3 — Projects section restructure
**Source:** P1 + "other" note
- Rename section to **"references"** (nav + section title + i18n keys)
- change subsection header to **"current projects"** for the 2 active cards
- **Current projects:** Skyseed ERP (Process Digitization) + FKA Booking System
- Both cards updated to reflect the **ongoing maintainer contract** as well — frame as active, long-running partnerships, not one-off projects
- Remaining 2 Skyseed cards (Matching Algorithm, Product Configurator) → add to Range?

---

## C4 — Add numbers to case studies
**Source:** P2 + buyer feedback
Add at least one concrete metric per current project card or just get more precise. Examples:
- "replaced 4 separate tools with one system"
- "what took 3 days of manual work now runs overnight"
- "handles full operational workflow for a team of 25"
- from hours to minutes gets specific - from 6h to 2m
Specificity is the goal.

---

## C5 — Tandem section: add continuity framing
**Source:** P3
Current `about.p3`: *"We work as a tandem: a well-established powerhouse team of two giving you the service and reliability of an agency…"*
Add: **"If one of us is unavailable, the other knows your system and can keep things moving."**
This is the key continuity pitch — make it explicit.

---

## C6 — Rewrite sparring description
**Source:** P4
Current: `"find out if we vibe. share your situation, pick our brains, and get clear recommendations for next steps."`
Replace with:
> "Bring your situation, your stuck point, your half-formed idea. You leave with clear thinking and concrete next steps — and a real sense of whether we're the right fit."

reframe the right fit part. is not needed, is implied.

---

## C7 — Tone shift in services copy
**Source:** P5
Current: *"Nobody should feel judged for not knowing yet."* — comes across as reassurance-heavy / patronizing.
Reframe toward: open, welcoming, curious energy. We're here to understand YOUR problem and break it down. Fun, enthusiasm. Non-braggy.
Affects: `services.p3`, possibly `contact.p2`.
Direction: *don't* tell people they won't be judged — just make the space feel obviously warm and curious.

---

## C8 — Bio updates: personality and energy
**Source:** P6
Specific for Denise: Ruhe, Humor, Klarheit. Spaß UND Tiefe.
Specific for Sehera: her curiosity. can-do. when she hears of a problem she immediately jumps to how to solve it. she brings energy when things feel stuck and everyone wants to give up.
Update `about.sehera` and `about.denise` in i18n.js to reflect this energy more concretely.
Also update the HTML fallback text in `index.html`. maybe a sentence on how the two energies complement each other

---

## ~~C10 — Budget reassurance~~ ✅ done
~~**Source:** P8~~
~~Add somewhere near contact CTA or services bottom:~~
~~"Not sure if your budget fits? Ask anyway."~~
~~Placement: contact section or below the service-steps onramp line.~~

---

## C11 — Outreach: draft testimonial request message
**Source:** P9 — *not a website change* yet
Draft a message to send manually to existing clients (Skyseed, FKA) asking for a short testimonial or quote.
Once received, add quotes to the references section.
**Placement on site:** references/projects section, near or within the current project cards. or extra small section inbetween, we'll need to experiment here.

---

