# AETHER

AETHER is a fictional, portfolio-quality B2B SaaS concept exploring a premium business intelligence product experience. It is not a live service and does not represent a client case study.

## Stack

- Vite + React + TypeScript
- Motion for React
- Recharts
- Lucide React

The demo-request form is intentionally simulated: it validates in the browser and never sends or stores data.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

`npm run build` writes the production-ready static output to `dist/`. Deploy that folder to any static hosting provider, configuring SPA fallback if the provider requires it.

## Project structure

- `src/pages/AetherLandingPage.tsx` — composition and navigation
- `src/components/aether/` — product showcase and simulated demo-request form
- `src/styles/aether.css` — page design system and responsive styling

There are no environment variables, backend calls, credentials, or external integrations in this project.
