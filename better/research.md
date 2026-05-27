# Website Research & Redesign Roadmap
_Marketing analysis for The Code Witches — KMU B2B positioning_

---

## Key Findings

### The core problem
The site leads with **ideology and identity**. German KMU decision-makers — typically a CTO, operations lead, or Geschäftsführer who's been in their role 10+ years — are pragmatic problem-solvers. They arrive at a website asking three questions:

> _Can these people fix my problem? Have they done it before? Can I trust them?_

They don't reject the values — they just need **proof of competence before they'll listen to values**. The current site answers "who we are" before it answers "why we're safe to hire."

---

### What B2B KMU clients actually need from a website

**Specificity over ideology**
Concrete outcomes convert. "Reduced runtime from several hours to minutes" is 10x more powerful than "we build software that serves people." Vague claims weaken credibility. Specific numbers, timeframes, and results build it.

**Social proof is non-negotiable**
93% of B2B buyers read reviews or references before deciding. German Mittelstand clients especially want to speak to past clients — not just read what's on a website. Testimonials scattered throughout the page outperform a single "projects" section at the bottom.

**Multi-stakeholder messaging**
German Mittelstand decisions involve multiple people: the CFO (ROI, cost, risk), the CTO (technical soundness, integration, stability), the Geschäftsführer (long-term trust, partnership). The current site speaks to one type of visitor.

**The About section builds trust or kills it**
B2B buyers go to the About page to answer: "Can I trust these people?" It needs to answer that — not just describe who you are.

**Values-driven positioning works — but as a differentiator, not a lead**
Agencies that win don't hide their identity. They layer it *after* establishing competence. Authenticity + track record = trusted partner. Leading with values before proof reads as a risk.

---

### The hidden superpowers (currently invisible on the site)

The `references.txt` file contains extraordinary range that goes completely unrepresented. This breadth is the real moat:

| What was built | What it signals |
|---|---|
| C++ renderer used in Hobbit, Tintin, Rise of the Planet of the Apes | Elite-level systems thinking, high-stakes delivery |
| Drone obstacle avoidance engine: hours → minutes | Algorithmic depth, not just web development |
| Real-time Kafka pipelines on GCP + Kubernetes | Enterprise-grade infrastructure capability |
| Survey weighting + election forecasting system | Statistical rigor, translating research into systems |
| Escape room control systems, bar recipe app, Shopify | Cross-domain pragmatism, any stack, any context |
| ERP replacing full spreadsheet-based operations | End-to-end ownership, stakeholder work, full lifecycle |

Most agencies are specialized. The Code Witches can hold complexity across domains. This is rare — and it is exactly the USP from the pitch text: _"We hold the whole system."_ But it has no evidence behind it on the current site.

---

### The strategic shift

**From:** "Here's who we are and what we believe"
**To:** "Here's what we've solved — here's the complexity we held — here's how you'll feel working with us"

The existing USP copy is excellent:
> _"So you can do the thing you were actually built to do. Ask the question. Make the decision. Be in charge of what you are building."_

This is the **emotional payoff**. It earns its place after proof has been established — not before.

The trust language ("nobody should feel judged for not knowing yet", "we create spaces where everyone feels welcome to ask questions") is also strong — it belongs near the CTA and contact section, where a visitor is on the edge of reaching out and needs to feel safe doing so.

---

### What's already been improved (main vs. redesign-experiment)

The main branch is already a meaningful step forward from the older redesign-experiment branch. These things don't need to be re-done:

- **Structure and layout** — section numbers (// 001 etc.), proper semantic HTML (`<article>` for projects), cleaner grid layouts are all in place
- **Calendar integration** — Google Calendar booking replaced the old `book.html` dead-end; the CTA in nav and hero both work
- **Tagline direction** — "rebels by heart, coders by craft" was personality-forward but unconverting for KMU; "software engineering & technical consulting" is more professional. The task now is to make it *both* — credible and memorable
- **Contact section** — the witch-cat video was removed; good call for a B2B audience
- **Service cards** — numbered (01/02/03), cleaner copy, better visual hierarchy

One **regression** to fix: the redesign-experiment branch had richer OG/Twitter meta tags (og:image, twitter:card, og:url) that were dropped in main. These matter for LinkedIn sharing — which is likely the main referral channel for KMU clients.

---

## Tasks — ordered by impact

---

### Task 1 — Rewrite the hero section
**Impact: highest** — first thing every visitor sees, sets the frame for everything else.

**Problem:** The hero leads with identity and ideology ("technology as a tool for redistributing power"). This is meaningful but doesn't hook a KMU visitor who arrived with a concrete problem. The descriptor `// software engineering & technical consulting` is accurate but generic — it signals nothing about what makes working with you different.

**Direction:** Lead with the client's relief, not the company's identity. The hero should make a visitor think "yes, that's exactly my situation" within 3 seconds. The name, logo, and CTA are already well-placed — only the statement needs rewriting.

**What to change:**
- Replace the ideology statement with a line that names the client's problem or the outcome they get
- The descriptor can carry more weight — consider something like `// we hold the complexity, so you can lead` or a line that turns the technical descriptor into a positioning statement
- Keep the `book a free session →` CTA prominent

**Reference copy to draw from:**
> _"We hold the whole system. Every layer, every dependency, how each part connects to the next. So you can do the thing you were actually built to do."_

---

### Task 2 — Add a "breadth of domain" section
**Impact: very high** — this is the core differentiator and it's completely missing.

**Problem:** The projects section shows only 4 Skyseed/Freie Kunst Akademie projects. This makes the Code Witches look like a small Skyseed-adjacent shop. The actual range — film rendering, drones, data pipelines, escape rooms, election systems — is never visible.

**Direction:** Add a section (between services and projects, or as part of about) that communicates domain breadth visually and concisely. Not a full case study — just enough to signal: *we've been in the weeds on very different kinds of hard problems.*

**What to include:**
- Industries: film/VFX, reforestation, academic institutions, political research, hospitality, e-commerce, drone tech, embedded systems
- Capability depth signals: C++, CUDA, Kubernetes, Kafka, Django, React, Drupal, embedded C, WebGL — without it reading like a skills list
- Anchor it with a line like: _"Whatever the domain — if it runs on a computer, we've probably built something like it."_

**Format options:** A horizontal scroll of domains, a minimal list with one-line descriptors, a "selected work" grid with more entries than the current 4-card section.

---

### Task 3 — Rewrite the projects section as outcome-first case studies
**Impact: high** — this is where trust is either built or lost for a B2B visitor.

**Problem:** Current project cards describe what was built and the tech stack. They don't tell a story of what changed for the client. A KMU reader can't picture themselves in the result.

**Direction:** Each project card should follow the arc: Problem → What we did → What changed. The stack stays — it signals technical credibility — but moves to secondary position.

**Example rewrite (ERP/Skyseed):**
- Before: _"Built an end-to-end platform that manages the full lifecycle of reforestation projects..."_
- After: _"Skyseed's operations ran across spreadsheets, manual handoffs, and disconnected tools. We replaced all of it — inventory, project management, KPI reporting, accounting — with one system built exactly for how they work. They've run on it ever since."_

**What to add to each card:**
- One sentence naming the problem before the work started
- One sentence naming the concrete outcome or change
- Optional: a quote from the client if available

---

### Task 4 — Add testimonials
**Impact: high** — social proof scattered through the page increases conversion significantly.

**Problem:** There are no testimonials anywhere on the site.

**Direction:** Even 2–3 quotes from real clients — specific, outcome-focused — would substantially increase trust. Place them near the services section and near the contact CTA. They don't need their own page.

**What makes a strong testimonial for this context:**
- Names the problem that existed before working together
- Describes the experience of working with the team (communication, safety to ask questions, reliability)
- Mentions something specific (a timeline, a result, a moment)

**Action:** Reach out to Skyseed and Freie Kunst Akademie contacts for a short quote. Even a sentence works. Video is even better if available.

---

### Task 5 — Rewrite the About section to build trust, not just introduce the team
**Impact: medium-high** — B2B buyers visit the About page specifically to decide if they can trust the people.

**Problem:** The current About section leads with partnership values and team personality. It doesn't answer the trust question: "Have these people solved hard problems? Will they still be around? Do they understand my world?"

**Direction:** Keep the warmth and personality — that's a differentiator — but open with the track record. Then let the personality follow as evidence of *how* they work, not just who they are.

**What to add or reframe:**
- Lead with combined years + domains spanned: "20+ years, built for film studios and Mittelstand and funded startups"
- Add one or two specific credibility signals early: _"Sehera built rendering systems used in major film productions. Denise built real-time data pipelines processing live election data."_
- The tandem model is a real USP — keep and strengthen: agency reliability + freelancer directness
- Move the trust/safety language ("nobody should feel judged") to near the contact CTA — it earns its place once credibility is established

---

### Task 6 — Rewrite the services section to speak to multiple stakeholders
**Impact: medium** — the services section currently speaks to one type of visitor (a founder thinking about starting something).

**Problem:** The three scenario bullets are good but narrow. A CTO with a legacy modernization problem, a CFO evaluating cost vs. risk, and a non-technical Geschäftsführer all read differently. The service cards (sparring, deep dive, 1 dev cycle) are compelling but the descriptions are inward-facing — they describe the format, not the outcome for the client.

**Direction:** Rewrite the scenarios to cover the three most common KMU entry points:
1. "You have something that needs to grow beyond where it is" (founder/product)
2. "You have a legacy system or tangled process that needs untangling" (ops/CTO)
3. "You're not sure what you need — you just know something isn't working" (any)

Add a brief outcome line to each service card answering: "what you walk away with."

---

### Task 7 — Strengthen the contact section with trust language
**Impact: medium** — the contact section is where a visitor decides to reach out or leave.

**Problem:** The current contact section is minimal ("let's discuss where you're at and where you want to go"). It doesn't reduce the anxiety of reaching out — especially for someone who feels they "don't know enough" to have the conversation.

**Direction:** Add the trust/safety copy here as a bridge before the CTA:
> _"Nobody should feel judged for not knowing yet. Everyone deserves a safe place to ask questions — even the ones that feel too basic. Especially those."_

Then the email / booking CTA. Reassurance → action.

---

### Task 8 — Restore and improve OG/Twitter meta tags
**Impact: medium** — affects how the site looks when shared on LinkedIn, which is likely the main referral channel.

**Problem:** The richer meta tags from the older branch (og:image, og:url, twitter:card, twitter:image) were dropped in main. Currently the site has no preview image when shared — it will appear as a text-only link card, which looks unfinished.

**What to restore/add:**
- `og:image` — needs an actual preview image (1200×630px); the `aeb4504` commit added an image for this, check if `assets/og-image.png` exists
- `og:url` with the canonical URL
- `twitter:card` set to `summary_large_image`
- Rewrite `og:description` and `meta description` to carry a real positioning line, not "Lean IT agency"

---

### Task 9 — SEO: add structured content for search discoverability
**Impact: low (longer-term)** — currently the site has almost no text search engines can index for relevant queries.

**Problem:** A German KMU searching "Softwareentwicklung Mittelstand" or "technische Beratung KMU" will not find this site.

**Direction:** Weave 2–3 relevant terms naturally into body copy:
- maßgeschneiderte Softwareentwicklung
- technische Beratung für KMU
- Datenprodukte und Webentwicklung

This doesn't need to feel like SEO copy — it can live in the About or services section naturally.
