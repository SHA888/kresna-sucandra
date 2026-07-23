# kresna-portfolio

Personal portfolio of dr. Kresna Sucandra — built with [Astro](https://astro.build) and deployed on GitHub Pages.

## Stack

- **Astro** — static site generator
- **Vanilla CSS** — scoped per component, shared variables in `src/styles/global.css`
- **pnpm** — package manager
- **GitHub Pages** — deployment, via GitHub Actions (`.github/workflows/deploy.yml`)

## Dev

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
pnpm build       # outputs to dist/
```

Pushing to `main` triggers the GitHub Actions workflow, which builds the site and publishes it to GitHub Pages automatically. Live at https://sha888.github.io/kresna-sucandra/.

## Structure

```
src/
├── layouts/
│   └── Base.astro          # nav, telemetry trace, footer, fonts, scroll JS
├── components/
│   ├── Hero.astro
│   ├── Domains.astro       # edit domains[] array to update
│   ├── Ventures.astro      # edit others[] array to update
│   ├── Projects.astro      # edit flagship[]/projects[] arrays to update
│   ├── Stack.astro         # edit cols[] array to update
│   ├── About.astro
│   └── Contact.astro
├── styles/
│   └── global.css          # CSS variables, type scale, shared classes
└── pages/
    └── index.astro         # assembles components, nothing else
```

Content lives as typed arrays at the top of each component — no CMS, no markdown, just edit the data and redeploy.
