# Happy 45th, Anand 🎂

A birthday tribute website for **Anand** from **The Beatles** — the WhatsApp group
of four friends (Mayank, Vighanesh, Paras & Anand) that has run since 2014.

Every quote on the site is taken **verbatim** from the group chat (2014–2026) and
dated. The content was curated from ~20,000 messages across twelve years.

## What's here

| File | What it is |
|------|------------|
| `index.html` | The page structure |
| `styles.css` | All styling (night-sky / gold theme) |
| `data.js` | **All the content** — quotes, timeline, legends, wishes. Edit this. |
| `app.js` | Rendering + animations (starfield, confetti, the cake) |
| `assets/photos/` | Drop photos here (currently empty) |

It's a plain static site — **no build step, no dependencies**. Just open
`index.html` in a browser, or host the `site/` folder anywhere.

## How to view it locally

Open `site/index.html` directly in any browser. (Or run a tiny server so fonts
load cleanly: `cd site && python3 -m http.server 8000`, then visit
`http://localhost:8000`.)

## How to publish it (free, ~2 minutes)

**GitHub Pages**
1. Push this repo to GitHub (already done if you're reading this in the PR).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → pick the branch
   and set the folder to `/site` (or move the `site/` contents to the repo root).
3. Your link will be `https://<username>.github.io/<repo>/`.

**Or Netlify / Vercel:** drag-and-drop the `site/` folder at app.netlify.com/drop.

## How to edit the content

Everything lives in **`data.js`** in clearly labelled sections:

- `quotes` — Anand's own best lines. Add `weight: 2` to make a card larger.
- `timeline` — one headline per year.
- `about` — what friends said about him.
- `legends` — the running jokes / group mythology.
- `milestones` — life events.
- `wishes` — birthday messages by year.
- `closing` — the final note.

Add an item by copying an existing one and changing the text/date. Save, refresh.

## How to add photos (when you have them)

The chat export had no media, so the site is text-first by design. When you get
the photos:

1. Drop image files into `site/assets/photos/`.
2. Tell me (or edit yourself) which photo belongs to which year / milestone, and
   I'll wire a `photo:` field into the relevant cards and add a small gallery.

A photo gallery section is easy to slot in — the layout already leaves room for it.
