# kresna-portfolio

Personal portfolio of dr. Kresna Sucandra — built with [Astro](https://astro.build) and deployed on Vercel.

## Stack

- **Astro** — static site generator
- **Vanilla CSS** — scoped per component, shared variables in `src/styles/global.css`
- **pnpm** — package manager
- **Vercel** — deployment

## Dev

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
pnpm build       # outputs to dist/
vercel --prod    # or push to GitHub, Vercel auto-deploys
```

## Structure

```
src/
├── layouts/
│   └── Base.astro          # nav, footer, fonts, scroll JS
├── components/
│   ├── Hero.astro
│   ├── Domains.astro
│   ├── Ventures.astro      # edit ventures[] array to update
│   ├── Projects.astro      # edit projects[] array to update
│   ├── Research.astro
│   ├── Stack.astro
│   ├── Publications.astro
│   ├── About.astro
│   └── Contact.astro
├── styles/
│   └── global.css          # CSS variables + shared classes
└── pages/
    └── index.astro         # assembles components, nothing else
```

Content lives as typed arrays at the top of each component — no CMS, no markdown, just edit the data and redeploy.
