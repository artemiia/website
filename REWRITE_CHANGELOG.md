# Website Rewrite — Change Log

Running log of every change made on the `website-rewrite` branch, relative to
`pilot-protocol/website@main`. Grouped by area. Newest entries at the bottom of
each section. Driven by the **GTM Website Rewrite Brief (v2, 2026-07-02)**.

Legend: 🟢 done · 🟡 partial · ⛔ blocked/gated · `[VERIFY Jul 6]` = number pending sign-off.

---

## Homepage — hero (`src/pages/index.astro`)
- 🟢 Replaced headline "The web was built for humans. Pilot is built for agents."
  → **"The Network OS for agents."** (Brief Option A; category line moved into
  the slogan slot).
- 🟢 Rewrote hero sub-paragraph → "Agents use Pilot to connect, trade answers,
  and install tools built for them. No human in the loop. Now companies can
  reach them too." (agent count removed — it lives in the stats section).
- 🟢 CTAs: primary **"Plug in your agent"** (→ /docs/getting-started), secondary
  **"Publish your app"** (→ /publish) given a **green outline** button style.

## Homepage — later cosmetic tweaks
- 🟢 Removed the green "→" arrow from the App Store callout (+ dead `.ac-arr` CSS).
- 🟢 Tightened the mobile gap between the hero "Standard" line and the App Store
  callout (hero bottom padding 72→36px, `#thesis` top padding 48→24px on mobile).
- 🟢 "vs" old-web column: removed the animated strike-through — lines are now plain
  text (✕ markers retained).
- 🟢 Thesis copy now mentions the **App Store of apps and tools**, not just the
  435+ service agents.

## Homepage — App Store callout (thesis section)
- 🟢 Enlarged the "Agent-native apps" callout (padding, heading, tile size).
- 🟢 Expanded the icon rail to 9 real app icons (removed blank/misrendering ones:
  `slipstream` wordmark; inverted `aegis` so it shows on dark). Counter → "+5".
- 🟢 Added a **green outline** to the callout box.
- 🟢 Pulled the callout up closer to the section divider (`#thesis` padding-top).
- 🟢 Made the callout **dynamic**: app tiles now **float freely** at scattered
  heights (each with its own 2D drift path, slow 11–15s cycles), plus a **green
  glow** on the right side that brightens on hover. Reduced-motion parks them.

## Homepage — capability wheel (new section)
- 🟢 Added an **interactive capability wheel** after the economy section
  ("Everything an agent can do here"): a 5-segment SVG ring (P2P · Tasks ·
  Services · Apps · Swarms). Hover/tap a segment → it pops outward, turns accent,
  and the center reveals that capability's detail. Built client-side with a
  no-JS fallback list, keyboard focus + aria labels, and reduced-motion guard.
  Redesigned larger (600px) with per-segment colors + glow, emoji icons + titles
  on every segment, a bigger color-tinting center panel, and an ambient slow-
  spinning dashed ring.

## Homepage — section order + more motion
- 🟢 Brief §3/§4: **lifted the "Network stats" proof strip near the top** — now
  directly after the thesis/App-Store section, before the "vs" comparison.
- 🟢 Brief §-motion: "How it works" **terminal prints line-by-line** on scroll-in
  (live-output feel); reversible; reduced-motion shows all at once.
- 🟢 **"vs" section redesigned** (copy + graphics): new headline "A web built for
  eyes. Rebuilt for agents."; two-card before/after with ✕ (old, struck through)
  vs ✓ (Pilot) markers; the Pilot card is the "winner" — accent border, tinted
  bg, soft glow; a center → arrow; and a speed-metric bar (~~51s web~~ → 12s
  Pilot · 4× faster). Animated strike-through retained on the old-web lines.
- 🟢 Added a **Trust & security** line under it (Brief §7): "✓ Curated — Every app
  is reviewed and verified before an agent can find it."

## Homepage — copy / sections
- 🟢 "The moment" (Brief §4): thesis lede now "AI agents are the biggest shift in
  computing in years. But they've been working alone… agents adopted it anyway."
- 🟢 "How it works" (Brief §5): 4 technical steps → **3 human steps** (finds &
  installs → gets an address & meets agents → discovers vetted apps and services
  and gets to work).
- 🟢 **Added "The agent economy" block** (Brief §8): agent-to-agent payments
  "rolling out," earn-credit-for-useful-work framing, **$300–500B by 2030**
  (Bain, `[VERIFY before launch]`), "Pilot is the rails." Placed above Network
  stats. Payments appear **once, mid-page**, never as an earnings claim.
- 🟢 **Removed** the "What agents actually ask Pilot for" use-cases section (10 rows).
- 🟢 **Removed** the "The Backbone" network section (backbone/interest-groups/service-agents).
- 🟢 Service-agent count updated **350 → 435** (then the standalone stat was removed).

## Homepage — Network stats (`#numbers`)
- 🟢 Removed the phantom empty 4th grid cell (grid 4-col → matched to stat count).
- 🟢 Stat numbers: initially green/teal differentiation → **both Pilot green**;
  added a faint green **dot-grid texture** to the stat boxes.
- 🟢 Removed the "Specialized service agents" stat → **2 stats** (agents, requests).
- 🟢 **Count-up animation**: numbers spin from 0 → live value on scroll-in
  (format-preserving; reactive to scroll direction; respects reduced-motion).

## Homepage — motion / interactivity
- 🟢 **Scroll-reveal**: sections fade/rise in on scroll, reusing the existing
  `.reveal`/`.visible` convention. Made **bidirectional** (replays on scroll up).
- 🟢 **Network-layer "deal" animation**: the OSI/stack cards slide out from under
  one another with a stagger on entry; container outline hidden until they land.
- 🟢 **Reusable `.stagger-group`**: staggered fade+micro-scale for child groups,
  toggled by the same scroll observer. Applied to the vs columns, the how-it-works
  steps, the economy grid, and the onboarding cards. Reduced-motion + no-JS
  fallbacks show everything.

## Homepage — cosmetic pass
- 🟢 Hero: (briefly added, then **removed**) the "Peer-to-peer network for AI
  agents" eyebrow per follow-up.
- 🟢 App Store callout: icons now **show on mobile** — the rail was `display:none`
  below 860px; on ≤640px it's a tidy static row (float off, first 5 icons + "+5"
  counter, wraps as needed).
- 🟢 Hero meta: kept the **live node count** next to "Network" (above the IETF
  line), bound to `data-live="agents-long"` so it stays fresh like elsewhere.

## Live data (`src/lib/liveStats.ts` — NEW)
- 🟢 New shared module `getLiveStats()` — single source of truth for network
  figures. Both the human homepage and the plain/bot homepage import it so the
  agent/request counts **can't drift**. Replaced the old inline fetch in
  `index.astro` and the hard-coded `~243,000 / ~104B` in `plain/index.astro`.

## Plain / bot homepage (`src/pages/plain/index.astro`)
- 🟢 Wired to live figures via `getLiveStats()`; synced intro copy to the new
  "Network OS for agents" positioning.
- 🟡 Out of sync with the human page's removed sections / new economy block —
  needs a regen pass (CI-driven via `regen-plain.mjs`).

## Homepage — SEO / meta (Brief §1 slogan ladder)
- 🟢 `<title>` "Pilot Protocol - The internet for agents" → **"...The Network OS
  for agents"**; meta description rewritten to the new positioning.

## Homepage — investor framing (language ladder)
- 🟢 Added "**foundation of the agent economy**" line to the economy section
  ("Pilot is the foundation of the agent economy — the network agents already
  run on.").

## Footer (`src/components/Footer.astro`)
- 🟢 Removed the giant "The internet / for agents" display text (per brief, that
  slogan is demoted). *(Global component — affects all pages.)*

## Styles
- `src/styles/global.css` — added `.btn.outline-accent` (green outline button).
- `src/styles/system.css` — stack "deal" animation, stats grid/border/color,
  reveal reduced-motion guard.

## Dead-CSS cleanup
- 🟢 Removed unused CSS for deleted sections: `NETWORK` block (`.network-*`) and
  `ROWS (numbered list)` block (`.uc-*`, `.rows`, `.r`) from `system.css`;
  `.foot-big` from `Footer.astro`; `.econ-status`/`.econ-dot`/`@keyframes
  econ-pulse` from `index.astro`. Verified 0 remaining references site-wide.

---

## Outstanding (from brief, not yet done)
- ⬆️ App Store **module** (shelf of live apps + install counts) under hero (Brief §2).
- Email capture — hero secondary + footer (Brief §4). **Front-end stub only until
  the main repo wires a backend — see `Email capture — handoff` below.**
- Footer CTA rewrite: "Give your agent the network." + install + email (Brief §10).
- Proof stats "70% start tasks on Pilot" and "16,000 installs in 10 days" (Brief §3).
- ⛔ "Backed by" investor strip — **embargoed until 2026-07-21**, build hidden (Brief §9).

---

## Email capture — handoff for the main-repo owners (Brief §4)
The homepage/footer email field is **front-end only** on its own — capturing and
storing addresses needs a backend the site doesn't have yet. What we can ship vs.
what the repo owners must wire:

**What we (front-end) provide**
- A `<form>` with one `<input type="email" required>` + submit button, in the
  hero secondary and the footer, copy: "Stay on the forefront of the agent
  economy." (interest list — no volume promise).
- Client-side validation + success/error states, and a POST to an agreed endpoint.

**What the repo owners must implement (one of):**
1. **Cloudflare Worker + KV/D1** — the site already runs on Cloudflare
   (`wrangler.toml`, `worker/`). Add a `POST /api/subscribe` route that validates
   the email and writes to KV/D1 or forwards to the ESP. Lowest friction — same
   infra the site already deploys to.
2. **ESP direct** (Mailchimp / ConvertKit / Loops / Resend Audiences) — create an
   audience/list, then either embed the ESP's hosted form action or call its API
   from the Worker in (1) with a server-side API key (never expose the key
   client-side).
3. **Form service** (Formspree / Basin) — fastest, no backend code; point the
   form `action` at the service URL. Least control over data.

**Recommended:** option (1) → Worker route that forwards to the ESP, so the API
key stays server-side and the data lands wherever GTM wants it.

**Decisions the owners need to make:** which ESP/list; double opt-in or single;
where submissions are stored; and (per brief) keep it an **interest list**, not a
newsletter commitment. Until an endpoint exists, the form should be shipped
**disabled or pointed at a placeholder** so it doesn't silently drop addresses.
</content>
