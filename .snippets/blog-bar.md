# Latest-blog bar (saved for later re-insertion)

A slim, angular, theme-flipping (white-on-dark / black-on-light) outlined strip with
an outer glow, showing the 3 most recent blog posts (thumbnail + date + title) below
the thesis section's "One line of code gets an agent online. No SDK. No API key."

Removed from `src/pages/index.astro` on 2026-07-07 at the user's request; restore all
three pieces below verbatim when asked to "put the blog bar back".

---

## 1. Frontmatter (top of `src/pages/index.astro`, after the `getLiveStats` import + call)

Add the import:
```js
import { blogPosts } from '../data/blogPosts';
```

Add after `const { liveAgents, liveAgentsExact, liveRequests } = await getLiveStats();`:
```js
// Three most recent posts for the thesis blog bar, newest first.
const latestPosts = [...blogPosts]
  .sort((a, b) => (b.iso_date ?? '').localeCompare(a.iso_date ?? ''))
  .slice(0, 3);
```

## 2. Markup — inside `#thesis`, immediately after the closing `</div></div>` of the
`.thesis` block (i.e. right after the "One line of code…" paragraph's container),
before the section closes:

```html
    <!-- Latest blog posts bar. -->
    <div class="blog-bar">
      <div class="bb-label">
        <span class="bb-eyebrow">From the blog</span>
        <a class="bb-all" href="/blog/">All posts →</a>
      </div>
      <div class="bb-posts">
        {latestPosts.map((post) => (
          <a class="bb-post" href={`/blog/${post.slug}`}
             data-track="cta_click" data-track-target="blog" data-track-location="thesis">
            <span class="bb-thumb">
              <img src={`/blog/${post.banner}`} alt="" loading="lazy" />
            </span>
            <span class="bb-body">
              <span class="bb-date">{post.date}</span>
              <span class="bb-title">{post.title}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
```

## 3. CSS — inside the homepage `<style>` block:

```css
  /* Latest-blog bar under the thesis — slim, angular, theme-flipping outline + glow. */
  .blog-bar {
    margin-top: 40px;
    padding: 30px 32px;
    /* Theme-flipping outline: near-white in dark mode, near-black in light mode. */
    border: 1px solid color-mix(in srgb, var(--ink) 55%, transparent);
    /* Soft outer glow in the same theme-flipping tone. */
    box-shadow:
      0 0 24px color-mix(in srgb, var(--ink) 18%, transparent),
      0 0 4px color-mix(in srgb, var(--ink) 22%, transparent);
    display: flex;
    align-items: center;
    gap: 36px;
  }
  .bb-label {
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex: none;
  }
  .bb-eyebrow {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .bb-all {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.04em;
    color: var(--ink-dim);
    text-decoration: none;
  }
  .bb-all:hover { color: var(--accent); }
  .bb-posts {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .bb-post {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 10px;
    text-decoration: none;
    color: inherit;
    transition: background 0.15s;
  }
  .bb-post:hover { background: color-mix(in srgb, var(--ink) 8%, transparent); }
  .bb-thumb {
    flex: none;
    width: 168px;
    aspect-ratio: 1200 / 630;
    overflow: hidden;
    background: var(--bg-2);
  }
  .bb-thumb img { width: 100%; height: 100%; object-fit: contain; display: block; transition: transform 0.3s ease; }
  .bb-post:hover .bb-thumb img { transform: scale(1.05); }
  .bb-body { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
  .bb-date {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink-dim);
  }
  .bb-title {
    font-size: 15px;
    line-height: 1.4;
    letter-spacing: -0.01em;
    color: var(--ink);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .bb-post:hover .bb-title { color: var(--accent); }
  @media (max-width: 860px) {
    .blog-bar { flex-direction: column; align-items: stretch; gap: 14px; }
    .bb-label { flex-direction: row; align-items: baseline; justify-content: space-between; }
  }
  @media (max-width: 600px) {
    .bb-posts { grid-template-columns: 1fr; }
  }
```
