# Frontend Forensics Microprojects

Runnable, copy-paste demos behind my YouTube fixes (Next.js/React).

## Quick start (recommended)

```bash
pnpm i
pnpm -F next-lcp-priority dev
```

Open:

http://localhost:3000/?mode=before

http://localhost:3000/?mode=after

Demo folder: apps/next-lcp-priority

# Repo structure

apps/ — each folder is a runnable microproject (1 problem → 1 fix → 1 proof)
tools/ — scripts to create new microprojects fast (ex: create-micro.mjs)
proof/ — optional Lighthouse reports / screenshots / traces used in videos

# Run another microproject

pnpm -F <app-name> dev
