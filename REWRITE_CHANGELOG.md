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

## Homepage — capability wheel (added, then removed)
- ⛔ Built an interactive capability wheel after the economy section, iterated on
  it (colors, icons, larger center, spin), then **removed it entirely** per
  request — homepage reverted to economy → pull quote → how-it-works.

## Upstream syncs
- 🟢 Merged `upstream/main` again: #72 (App Store reconciled with live catalogue,
  placeholder data removed) and #75 (blog registry → JSON). No conflicts.
- 🟢 **Merged `upstream/main` — session 2026-07-09** (through #113). Brought in all
  additive upstream work (new doc pages: node-sdk, swift-sdk, security, pilot-director
  + plain twins; app-store cards: Didit, MySQL, SQLite, Smol, Orthogonal, Bowmark,
  AgentPhone; new blog posts; `install.sh` sync). Resolved 4 conflicts, keeping our
  homepage rewrite:
  - `index.astro` — kept our hero, thesis, stats, economy, two-paths. **Adopted
    upstream's new DIRECTOR section** ("Don't pick the specialist. Ask pilot-director.")
    between how-it-works and two-paths. Pulled in upstream's USE CASES section too, then
    **removed it per request** ("What agents actually ask Pilot for" / "Surveyed across
    the network").
  - `src/lib/liveStats.ts` — added `liveRps` (requests/sec) to the shared stats so the
    new hero throughput chip works without abandoning our centralized-stats architecture.
  - `plain/index.astro`, `plain/docs/getting-started.astro` — kept our rewritten plain
    content, folded in upstream's new pilot-director/overview links; re-stamped the
    plain-source hash.
  - `for/skills.astro` — kept deleted (our removal) against upstream's edit.

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

## Homepage — session 2026-07-06 (this session)
- 🟢 **Added "What Pilot does for your agent" section** (new, below the App Store
  callout, above Network stats). Direct second-person framing ("Make your agent
  smarter."), a large green pull-quote lead ("The smartest agents aren't the ones
  with the most built in…"), then the value pillars + service wheel + before/after.
- 🟢 **Three value pillars** (Tool discovery / Live data / P2P networking) styled to
  match the App Store callout: frosted-glass cards, rounded, per-card accent colour
  (green/blue/purple) shown by default, top accent bar + corner glow, big mono
  titles. An **auto-rotating** active highlight cycles every ~2.6s (pauses on hover,
  respects reduced-motion). Copy leads with **tool discovery**; service agents are a
  side note; exact "435+" count dropped from this section.
- 🟢 **Rotating service wheel** — infinite marquee of flat mono domain tags
  (Finance, Weather, News, …), hover-pauses, reduced-motion falls back to scroll.
- 🟢 **Before/after comparison** ("Without Pilot" vs "With Pilot"): two flat cards,
  ✕ vs ✓ markers, the "With Pilot" card carries the **Pilot dog logo**, an accent
  glow, top bar + corner wash. Copy leads with tool discovery ("the right tool or
  third-party app"), not specialist agents. Enlarged text throughout.
- 🟢 **Scroll-reveal**: pillars use the shared `.stagger-group`; the comparison
  cards **fly in from opposite sides** and settle (custom reveal, reduced-motion safe).
- 🟢 **Thesis body rewritten** → high-level **"UDP-level networking stack for
  autonomous agents"** framing (substrate → discovery / service agents / App Store,
  self-organizing). Removed "Nobody marketed Pilot — agents adopted it anyway."
- 🟢 **Hero sub**: removed "Now companies can reach them too."; enlarged to
  `clamp(20→24px)`.
- 🟢 **Removed the entire "vs / The shift" section** (web-vs-Pilot two-card compare
  + 51s→12s metric bar) per request — supersedes the 🟢 entries under *"section
  order + more motion"* above. Deleted the dead `.vs-*` CSS block from `system.css`.
- 🟢 **Footer CTA rewrite** (Brief §10, **email box omitted per request**): added
  "Give your agent the network." headline + a **copyable install command**
  (click-to-copy, "Copied" state). Kept the Install / Read-the-spec buttons.
- 🟢 **Meta description** rewritten to the UDP-stack framing (dropped "companies can
  now reach them"). Title "Network OS for agents" kept (slogan ladder, Brief §1).
- 🟢 **Plain/bot homepage synced** (Brief §6 follow-up): overview → UDP-stack +
  discovery-first positioning, dropped "companies can now reach" and the standalone
  service-agent stat (now 2 stats, matching the human page). Source hash re-stamped;
  `check-plain-coverage` passes. NB: done **manually** — `regen-plain.mjs` needs
  `GEMINI_API_KEY` (absent here), so a proper LLM regen pass is still worth running
  in CI when the key is available.

## Homepage — session 2026-07-07 (this session)
- 🟢 **"Two paths" section added** (bottom of homepage, above footer): Pilot (with
  skill injection, marked Recommended, dog logo + accent glow) vs Pilot Lite (no
  injection). Explains why injection is what makes an agent get the full value of
  the network, with copyable `pilotctl skills set-mode auto|disabled` commands and a
  link to `/docs/consent#skillinject`.
- 🟢 **Sections removed** per request: Onboarding ("Give your agent the network in
  one command" + two moat cards); the standalone pull-quote ("Pilot becomes how
  agents reach everything…"); the stack-notes trio (Position / Services on Pilot /
  Addressing); and the "MCP is a crutch" Steinberger quote in the stack thesis.
- 🟢 **Copy edits**: thesis 2nd paragraph → "Every agent gets its own Pilot address…";
  agent-value pillar 01 → "right tool or app… straight through Pilot without ever
  touching the internet"; pillar 02 "Need live data?"; economy lede "earn credit for
  useful work" → "agents pay each other"; "Pilot is the rails." folded into the
  economy heading with "between agents" now green.
- 🟢 **De-italicised** headings per request: "Network stats." and the economy heading
  (accent instead of serif-italic).
- 🟢 **Before/after comparison**: dropped the two sub-lines, enlarged the
  Without/With titles, added a circular **"VS" badge** between the cards (accent,
  always visible), and condensed the boxes on mobile.
- 🟢 **Deleted `/for/skills`** (low value): removed the page, the Nav dropdown entry,
  repointed two `for/setups` CTAs to the App Store, and removed the plain-coverage
  pair. Kept the data-driven bot page `/plain/skills`. Build 326 → 325 pages.
- 🟢 **Plain homepage** rewritten to mirror the human homepage section-for-section
  (intro, what Pilot is, what it does for your agent, without/with, stats, the stack,
  economy, how it works, install, two paths, related). Manual sync — `regen-plain.mjs`
  still needs `GEMINI_API_KEY`.

## Site sweep — session 2026-07-07
- 🟢 **Fixed 4 sets of broken links** (all 404s in plain/bot pages): `/plain/index`
  Protocol-Spec `/docs/ietf-…` → `/blog/ietf-…`; `/plain/docs/getting-started`
  `/docs/compatibility` → `/for/compatibility`; `/plain/publish` `/plain/{terms,aup,
  publisher-agreement}` → the real `/…`; `/plain/docs/go-sdk` `/plain/{python-sdk,
  services,cli-reference}` → `/plain/docs/…`. Full re-scan: **0 broken internal links.**
- 🟢 **Dead-CSS cleanup** (from removed sections): `.econ-thesis`, `.sub-quote`,
  `.cmp-sub` in `index.astro`; `.stack-thesis .quote/.attr` and the whole `.pull` /
  `.quote-mark` block in `system.css`. Homepage `<style>` audited clean.
- 🟢 **Preview sharing**: added `vite.server.allowedHosts: ['.trycloudflare.com']` to
  `astro.config.mjs` so a `cloudflared` quick tunnel can serve the dev build (dev-only).
- ⚠️ **Known issue (external, gated):** `github.com/pilot-protocol/pilot-skills` 404s
  and the `/plain/skills` page fetches `skills.json` from it — page degrades gracefully
  (200, empty) but the skills catalogue is empty until that repo is created. Tracked by
  the `TODO: pilot-skills repo does not exist yet` comments. NB: `skillinject` repo now
  resolves (200), so that half of those TODOs is stale.

## Homepage — latest-blog bar (built, then parked) — session 2026-07-07
- 🟡 Built a **"From the blog" bar** under the thesis section (below "One line of code
  gets an agent online…"): pulls the **3 most recent posts** live from
  `src/data/blogPosts.json` (sorted by `iso_date` desc), each showing its **banner
  thumbnail** (`/blog/<banner>`, native 1200×630 ratio, `object-fit: contain` so the
  full image shows), **date**, and **title** (2-line clamp), linking to the post. A
  mono "FROM THE BLOG" label + "All posts →" link sit on the left.
- Iterated on the styling per request: slim → thicker → bigger thumbnails; **angular**
  (sharp corners, not rounded like the App Store callout); outline switched from Pilot
  green to a **theme-flipping neutral** (`var(--ink)` — near-white in dark mode,
  near-black in light) with a **soft outer glow**; fill removed (outline only).
- 🟡 **Removed from `src/pages/index.astro`** on user request and **saved verbatim**
  (frontmatter + markup + CSS) to **`.snippets/blog-bar.md`** for later re-insertion.
  To restore: re-add the three pieces from that file (blogPosts import + `latestPosts`
  compute; the `.blog-bar` markup after the thesis "One line of code" block; the
  `.blog-bar` CSS in the homepage `<style>`).

## Homepage — glow reduction — session 2026-07-08
- 🟢 Toned down the coloured glow around homepage boxes (neutral depth `#000`
  drop-shadows left intact — this only touched the accent bloom):
  - **Pillar cards** (`.pillar::after`): radial glow colour 30% → 18%, resting
    opacity 0.55 → 0.30; hover/active opacity 1.0 → 0.55.
  - **App Store callout** (`.appstore-callout::after`): green glow colour 32% →
    20%, resting opacity 0.75 → 0.42; hover opacity 1.0 → 0.65.
  - **"With Pilot" comparison card + recommended path card** (`.cmp-with`,
    `.path-full`, shared box-shadow): accent ring 20% → 14%, outer glow 22% → 10%.

## Homepage — hero rotating capability line — session 2026-07-10
- 🟢 Added a line under the hero — **"Pilot lets your agent …"** — where the "…"
  is a **vertical slot-machine rotator** cycling green phrases: discover other
  agents · install apps built for it · get accurate live data · pay other agents
  directly · reach any peer, anywhere · tap 400+ live specialists · run tools on
  demand. Screen-reader users get the full list via an `.sr-only` span; reduced
  motion shows a single static phrase.
- 🟢 Iterated per feedback: moved from below the headline → **below the CTA
  buttons** → finally a **full-width centered line below the whole hero row**
  (`grid-column: 1 / -1`). Sizing grew from ~22px to a big **clamp(28px, 4.4vw,
  52px)**; gap after "agent" tightened to a single normal word-space.
- 🟢 Reworked from a CSS-keyframe track to a **JS rotator** so the box hugs each
  word (auto width, no dead space) — word slides up/out, next drops in from
  below, box eases its width; re-fits after fonts load + on resize.
- 🟢 **Mobile:** on ≤960px the line reorders **above** the "Agents use Pilot to
  connect…" sub-paragraph; on ≤560px it goes two centered lines (sentence on top,
  big green word beneath) since one big line can't fit a phone.

## Homepage — DIRECTOR section polish — session 2026-07-10
- 🟢 On the DIRECTOR section (merged from upstream #113): **"pilot-director" now
  renders green** (`<em class="accent">`), **terminal moved to the right**, copy
  to the left. Reworded the lede to **"Pilot-director — your one-stop navigator
  for the network. …"** with the name in accent green.
- 🟢 **Removed the USE CASES section** ("What agents actually ask Pilot for /
  Surveyed across the network") that had come in with the same upstream merge,
  and dropped its now-unused `.uc-*`/`.rows` CSS.

## Homepage — App Store callout: featured-app carousel — session 2026-07-10
- 🟢 Expanded the big **App Store callout** with a **Featured** strip below the
  existing eyebrow/heading/floating-icon row (wrapped the original content in
  `.ac-top`, added `.ac-featured` below with a top divider).
- 🟢 The strip **shuffles through every live app** (`apps.filter(a => a.real)`),
  showing the real **app logo** (reusing the `AppIcon` component — same render as
  `/app-store`), **name**, and **short description** (`tagline`). Slides
  **left→right**, dwelling **4.2s** (deliberately slower than the 2.2s hero word
  rotator). Reduced motion → gentle fade.
- 🔧 Ported the `.app-icon` CSS from `appstore.css` into the homepage `<style>`
  using **`:global(...)`** (the icon markup is rendered by the `AppIcon`
  component, which Astro scopes to a different cid — without `:global` the styles
  never matched and the logos rendered unstyled / wrong aspect ratio). Did **not**
  import the whole `appstore.css` because its `.chip` rule would clobber the hero
  throughput chip.
- 🟢 Iterated on placement per feedback (verified each pass with a puppeteer
  screenshot at 1440px). Final desktop layout: **two columns** — the **left is a
  clean vertical stack** (eyebrow → "Discover the Pilot Protocol App Store"
  heading → sub → floating icon rail), the **right is a compact featured panel**
  (`flex: 0 0 clamp(230px, 24%, 300px)`, 56px logo, name, one-line description)
  divided by a left rule. The icon rail spans the full left width with
  `justify-content: space-between` so it fills the row instead of leaving a dead
  gap before the divider. Stacks vertically (featured below) ≤760px.
  - Earlier missteps (recorded so we don't repeat them): three items strung
    across **one flex row** crushed the heading into a skinny 5-line column; a
    **wide** right panel (88px logo) overflowed and `overflow:hidden` clipped it;
    briefly **hid the rail** which lost the floating icons. All reverted.

## Homepage — App Store callout redesign + dev strip + featured links — session 2026-07-10
- 🟢 **Callout became a `<div>`** (was one big `<a>`): the heading area (`.ac-top`)
  links to `/app-store`; each **featured card is now its own link to `/apps/{id}`**
  (only the active card is `pointer-events:auto`). Un-nested the anchors so this is
  valid HTML.
- 🟢 **Featured carousel** finalized: logo + name side-by-side on top, description
  below; **"Lets your agent …" blurbs** per app (green, `var(--accent)`), keyed by
  id via `featuredBlurbs` map in frontmatter; 88px logo, name 27px, desc 17px; icons
  **lined up in a straight row** (drift animation killed) and spread edge-to-edge.
- 🟢 **Removed the interior green glow** (`.appstore-callout::after` deleted).
- 🟢 **Green developer strip** pinned to the bottom edge (callout is now a column:
  `.ac-main` row + `.ac-devstrip`): copy "Are you a developer? Get your app in front
  of agents and publish it to the Pilot App Store." + **PUBLISH YOUR APP →** pill →
  `/publish`. Copy enlarged to 18px.
- 🟢 Real harness/app logos live in `public/brand/harness/` (claude, cursor, cline
  from Simple Icons; openai from svgl) — see MCP section entry.

## Homepage — section reorder + copy — session 2026-07-10
- 🟢 Moved **"What Pilot does for your agent"** (pillars + service wheel) ABOVE the
  "AI agents are the biggest shift…" thesis text — split the old `#thesis` section:
  callout stays in `#thesis`, thesis copy became a new `#thesis-copy` section placed
  after `#agent-value`.
- 🟢 **Removed the Without Pilot / With Pilot compare cards** (`.compare` block) from
  the agent-value section. (Dead `.cmp-*` CSS left behind, harmless.)
- 🟢 Copy: box 2 (Live data) now "**400+ specialist agents**"; hero sub now
  "install **tools and apps** built for them"; rotator gained **"connect over MCP"**.

## Homepage — new "Works with MCP" section — session 2026-07-10
- 🟢 Added `#mcp` section after `#thesis-copy` ("Already on MCP? Pilot plugs right
  in.") — terminal on the left, copy on the right. **All facts sourced verbatim from
  `src/pages/docs/mcp-setup.astro`** (upstream PR #112, live at
  `pilotprotocol.network/docs/mcp-setup`, publisher Vulture Labs) — NOT invented.
  Setup command corrected to `npx -y pilot-mcp setup`.
- 🟢 **Realistic typewriter TUI**: the terminal types char-by-char (command slower,
  output faster) with a blinking block cursor (`.tw-cursor`), fires on scroll into
  view, and **loops/replays** (~3s hold between runs). Static content kept as no-JS /
  reduced-motion fallback. Data-driven via `[data-mcp-term]` + JS at the bottom of
  the page. `min-height: 9.6em` reserves the box so it doesn't jump.
- 🟢 **Harness logo row** above the docs link — Claude Code · Cursor · Cline · Codex
  as chips using the **real official brand logos** (files in `public/brand/harness/`),
  rendered via CSS `mask` (`.mcp-hn-i`). NOTE (in progress when Mac died): user wants
  these **in colour + larger**, and the whole MCP section text **larger + briefer +
  value-oriented** — NOT yet done.
- 🟢 Section made **always-visible** (dropped the `reveal` class) so the scroll-fade
  can't hide it.

## Session 2026-07-10 (resumed after Mac died)
- 🟢 **MCP section polish — DONE.** Harness logos enlarged 22px→30px, chip text
  14px→17px, roomier padding; hover now washes each chip in its own brand colour
  (`--logo-color`). Copy tightened to be briefer + value-led: lede "The whole overlay,
  native in your MCP client", body cut from 3 paras to 2 ("400+ live specialists,
  typed queries, and agent-to-agent messaging — as MCP tools…" / "Your own identity,
  peer-to-peer, no API keys"). Lede/body font sizes bumped. NOTE: logos are
  single-path Simple Icons, so "in colour" = brand-tinted mask (true multicolor isn't
  in those asset files); enlargement + brand-colour hover is the practical ceiling.
- 🟢 **End-to-end validation — DONE.** Every MCP-section claim verified verbatim
  against `src/pages/docs/mcp-setup.astro` (→ github.com/TeoSlayer/pilot-mcp): setup
  command, daemon behaviour, harness list, 400+ specialists, no-API-keys/P2P identity,
  ~1m. No invented claims. `npm run build` passes (344 pages).

## Outstanding (from brief, not yet done)
- ⬆️ App Store **module** (shelf of live apps + install counts) under hero (Brief §2).
- Email capture — hero secondary + footer (Brief §4). **Front-end stub only until
  the main repo wires a backend — see `Email capture — handoff` below.** (Footer CTA
  itself now shipped without the email field.)
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

---

## Session 2026-07-10 (part 2) — homepage polish pass

Large iterative pass on `src/pages/index.astro` (+ `src/styles/system.css`,
`src/styles/global.css`, `src/lib/liveStats.ts`). Highlights:

**Hero**
- Rotating capability line reworded "Pilot lets your agent" → **"With Pilot your
  agent can…"**; added app-capability phrases (spin up VMs, get a phone number, run
  SQL, sandbox code, send an SMS); faster cadence + motion-blur on the swap.
- Shrunk "Network OS for agents" headline + tightened hero padding so the rotator
  lands in first view; later softened to a middle ground.
- "on tools built for people" set in Pilot green.

**App Store callout**
- Featured card moved to the LEFT, "Discover…" text to the RIGHT; divider flipped +
  extended full-height (top-to-bottom), made solid.
- "+5" tile → arrow (→). Removed "Agent-native apps" eyebrow; enlarged then scaled
  the whole callout back down. Featured panel widened, fill extended edge-to-edge
  (no gap, squared bottom-left), green toned down.
- Featured badge: "Featured" → "Featured app" with centred ✦; **animated spotlight**
  (rotating conic sheen + base tint) behind the featured card.

**Agent economy** (`#economy`)
- Title → "Make money with your agent."; removed the "foundation of the agent
  economy" intro and the Bain $300–500B stat.
- Wallet copy: "download a free wallet app", pays over **x402** (verified vs the
  wallet app: x402 + EIP-3009 USDC). Wallet app card (icon + green bullet list,
  links to /apps/io.pilot.wallet), title "Pilot Wallet". Em dashes removed.
- New **"Advertise to agents"** developer callout (250,000+ agents).

**How it works** (`#how`)
- Terminal replaced with a focused **install card**: single curl one-liner + direct
  Copy button, plus an "or / tell your agent to join Pilot Protocol
  (pilotprotocol.network)" prompt with its own Copy button.
- Steps → 3 numbered **green circles connected by a line**; copy tightened.

**MOM section** (`#director`, formerly pilot-director)
- Renamed pilot-director → **MOM** (heading all-caps green); copy rephrased (refer
  to it as "it"). NOTE: terminal command shows `mom` and docs link still points to
  `/docs/pilot-director` — underlying agent rename NOT propagated site-wide.
- Built an **animated planning TUI**: agent types a request → spinner "compiling
  tools" → colour-coded plan (service agent = green highlight, agentphone = blue +
  app logo, calendar = violet) streams in → **green success banner** ("table
  booked…"). Static fallback carries identical colours. Cleaned spacing (hairline
  step separators, grid-areas layout).

**Network stats** (`#numbers`)
- "Requests routed" → **"Requests per hour"** (derived from polo API
  `requests_per_sec × 3600`; added `liveRequestsPerHour` to `liveStats.ts`).
- Reworked layout: killed the 200px min-height dead space; grouped header/number/
  label, gradient-filled numbers, pulsing live dot.

**The Stack** (`#stack`)
- Heading fact-checked and changed to **"Pilot is the network overlay built for
  agents."** (avoids the false OSI-number precision — Pilot is an overlay over
  transport, not a clean L-number). Graphic relabelled: "L5 · Pilot Protocol" →
  "Overlay · Pilot Protocol"; connector softened. Rebuilt as a vertical 3-tier
  stack (on-top chips → Pilot band → foundation) with defined outlines. OSI button
  centred.

**Two paths → skill injection** (`#paths`)
- Reframed from two equal options to a single persuasive **skill-injection** pitch
  ("Get the most out of Pilot for your agent"); Pilot Lite demoted to a one-line
  compliance footnote.

**Global**
- Removed the thin grey `border-top` divider on every `.section` (site-wide).
- **Standardised section vertical rhythm** (60px desktop / 44px mobile) via
  `.section#id` selectors, replacing the scattered per-section padding tweaks.
- All three terminal boxes now share **rounded corners + the same green outline**
  (base `.term` in system.css; removed the mom-shell one-off).

- 🟢 App Store featured panel: **toned down the spotlight glow** — sheen opacity 0.75→0.5, bright lobes 14%→8%, base tint 4%→3%.
- 🟢 Thesis body ("Pilot is a UDP-level networking stack…") now **slides in from the right** on scroll-into-view (keyed to `#thesis-copy.visible`; reduced-motion static).
- 🟢 Removed the redundant "Open the wallet app →" link from the wallet card (whole card already links to /apps/io.pilot.wallet).
- 🟢 Nudged the hero rotator line ("With Pilot your agent can…") down slightly (margin-top 20→30px).
- 🟢 Fixed install card being invisible in **light mode**: the terminal stays dark in both themes, but the copy/caption/or-divider used `var(--ink)`/`var(--ink-dim)` (dark in light mode). Switched to fixed light terminal tones + re-declared `.c/.y` syntax colours for `.ic-cmd`.
- 🟢 MOM TUI animation now **plays once and freezes** on the final booked state (removed the `wait(run, 4200)` loop-back).
- 🟢 Nav: moved standalone **Plans** link into the **For** dropdown, relabelled **"Private networks"** (→ /plans). For-dropdown stays active on the plans route.
- 🟢 Fixed App Store callout + featured panel on **mobile**: the ≤760px rules now fully reset the desktop edge-extension (negative margins, rounded corner, side divider, spotlight, base tint) so the featured card stacks cleanly below the text with a top divider; carousel viewport min-height instead of fixed.
- 🟢 Mobile featured card: shrank the app icon (88→56px), name (27→20px) and desc (16→13.5px, 2-line clamp); tighter viewport min-height.
- 🟢 Mobile: condensed the "Make your agent smarter" pillars (≤600px) — smaller padding (24→18px), num (21→16px) and lead (17→14.5px, clamped to 3 lines) so the three boxes take far less vertical space.
- 🟢 Mobile: shrank the hero "Network throughput" chip (≤600px) — font 13→10.5px, val 17→13px, tighter padding/letter-spacing so it no longer dominates the top of the page.
- 🟢 MOM steps: raised the vertical-stack breakpoint 520→640px (name/pill/desc stack with clear row-gap) so phones never render the step text glued.
- 🟢 Mobile: terminal bar labels now truncate (ellipsis) instead of colliding with the traffic-light dots; the right-side time label is hidden on ≤600px so the bar title no longer clips.
- 🟢 MOM steps rebuilt with a **flex wrapper** (badge · [name+pill row / desc]) instead of CSS grid-areas — spacing is now structural in the markup (both animated JS + static), so the step text can never render glued together regardless of viewport/cache. Removed the obsolete grid mobile block.
- 🟢 MOM steps: added explicit `margin-left` between name and pill (`.mom-head > * + *`) as a fallback for flex `gap`, so they can never glue together.
- 🟢 **Root cause fix** for glued MOM step text: Astro scopes the `<style>` with a `data-astro-cid-*` attribute, but the animation builds elements via JS `innerHTML` so they lacked that attribute — the scoped `.mom-pill/.mom-head/…` rules never applied (pill rendered as unstyled text glued to the name). Now `row()` stamps the cid onto every generated element + descendants (and re-stamps the plan header). Step styling + spacing now applies to the animated DOM.
- 🟢 MOM steps: fixed the agentphone logo not showing (removed the white-bg/padding on `.mom-ico`; app icons are self-contained → `object-fit: cover`). Reduced step padding (11→8px). Replaced the fictional **google-calendar** step with the real **io.pilot.wallet** app ("pay the reservation deposit over x402") + its icon.
- 🟢 MOM terminal made a little smaller (font clamp 15–18→13.5–16px, line-height 1.7→1.6, min-height 16.5→15em).
- 🟢 MOM terminal: another compaction pass (font 13.5–16→12.5–15px, line-height 1.6→1.55, body padding 28/24→22/20, step padding 8→6px, min-height 15→13.5em).
- 🟢 MOM success line: dropped "· added to your calendar" (last step is now the wallet, not a calendar) → "table booked · Fri 8:00pm".
- 🟢 Stack legend: **centered** the three items; gave "shared transport" a distinct **blue** swatch (#6ea8ff) instead of the muted grey.
- 🟢 Stack: gave the shared-transport tier (sv-base, Network/Transport) a **blue** tint + border + label to match the "shared transport" legend swatch.
