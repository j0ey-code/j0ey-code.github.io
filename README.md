# j0ey-code — React port

The portfolio site, rebuilt as a React single-page app with Vite and
React Router. The React app IS the site; it lives at the repository root
and is what gets deployed.

The original hand-written HTML/CSS site is kept, unchanged, in `legacy/`
so the two can still be compared. Nothing outside `public/` is copied
into a build, so `legacy/` is never published — it is an archive, not a
second live site.

## Running it

```bash
npm install
npm run dev      # dev server with hot reload, http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

## Layout

```
.
├── index.html              Vite entry. One shell document for every route.
├── vite.config.js          Build config; see the note about `base`.
├── legacy/                 The original static site. Archived, not built.
├── public/                 Copied verbatim into the build, unprocessed.
│   ├── win-c-compilers.html    the blog post, still plain HTML
│   ├── tunerV2-index.html      the tuner, still vanilla Web Audio
│   ├── site.css / post.css     frozen copies the post uses (see below)
│   ├── 404.html                GitHub Pages SPA fallback
│   └── assets/                 images, docs, the old scripts
└── src/
    ├── main.jsx            Mounts React; imports every stylesheet.
    ├── App.jsx             The route table.
    ├── components/         Layout, SiteHeader, SiteFooter, the cards.
    ├── pages/              One per route.
    ├── data/               posts.js, projects.jsx — the content.
    ├── hooks/              useStreakParallax, useDocumentTitle.
    ├── lib/                links.js
    └── styles/             The original CSS, near-unchanged.
```

`npm run serve:old` serves `legacy/` on port 8080, so the old and new
versions can be opened side by side.

## What changed, and why

**Routes replace files.** `homepage.html` → `/home`, `about.html` →
`/about`, and so on. `index.html` (the landing splash) → `/`.

**One layout instead of five copies.** The return bar, header, nav and
footer were pasted into all five inner pages. They live in
`components/Layout.jsx` once, and `<Outlet />` is where each page drops
in.

**The nav highlights itself.** `class="active"` used to be maintained by
hand in five files. `NavLink` derives it from the URL — and adds
`aria-current="page"`, which the hand-written version never had.

**Content is data.** This was the real problem in the old site: three
projects and three blog posts existed *twice*, written out word for word
in both `homepage.html` and their own listing page. Now `src/data/`
holds them once. `Projects.jsx` maps over all of them, `Home.jsx` takes
the ones flagged `featured`. Adding a project is a single edit.

**Imperative DOM work became state and effects.** The hamburger was
`querySelector` plus `classList.toggle`; it is a `useState` boolean now,
so the button and the panel cannot disagree. The scroll parallax became
`useStreakParallax`, which removes its listeners on cleanup — a SPA keeps
the page alive across navigations, so the old fire-and-forget listeners
would have stacked up.

**Things a SPA has to add back.** A multi-page site got these for free
from full page loads: scrolling to the top on navigation
(`ScrollToTop`), a per-page `<title>` (`useDocumentTitle`), and closing
the mobile nav after following a link.

## Two things to know before deploying

**`base` and `basename` must agree.** `vite.config.js` sets `base: '/'`,
which is right for a user site at `j0ey-code.github.io`. Deploying to a
*project* repo instead — `j0ey-code.github.io/some-repo/` — means
setting `base: '/some-repo/'` **and** giving `<BrowserRouter>` a matching
`basename="/some-repo"`. Changing one without the other gives you a page
that loads but routes to nothing.

**Deep links need the 404 shim.** GitHub Pages looks for a real file at
`/projects`, finds none, and serves `404.html`. That file stashes the
requested path and bounces to `/`; `main.jsx` restores it before React
Router reads the URL. Without it, refreshing any route but `/` 404s.

`.github/workflows/deploy.yml` builds and publishes on every push to
`main` — Pages does not run builds itself, so committing JSX without this
would publish the JSX.

Because the app now sits at the repository root, **Pages must be set to
"GitHub Actions" as its source**, not "deploy from a branch". In branch
mode Pages would serve this directory's raw `index.html`, which points at
unbuilt JSX and renders nothing.

## Known duplication

`public/site.css` and `public/post.css` are frozen copies of the
stylesheets in `src/styles/` (and `legacy/` holds a third copy of the
originals, deliberately, as an archive). The blog post is still served as a plain
static page outside the React build, so it cannot import from `src/`.
Both copies carry a header saying so. Moving that article into the app
— as a component, or via MDX — removes the duplication.

## Not ported

`tunerV2-index.html` is left as vanilla JavaScript. It is a Web Audio
app whose whole job is imperative work against an audio graph; a React
rewrite would add a layer without buying anything.
