# Smoothe Portfolio Frontend

Recruiter/client-facing portfolio for **Smoothe** (`@smooooothe`), built with Astro 7 + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build and preview

```bash
npm run build
npm run preview
```

Preview serves from `http://localhost:4321` using built assets from `dist/`.

## What changed in this pass

- Upgraded visual hierarchy and spacing across hero, featured, work cards, about, and contact sections.
- Added a dedicated **Case Studies** section with structured `problem -> approach -> architecture -> outcome` narratives for MWCC, Prism, AI Lullaby Radio, and Telegram Niche Parser.
- Added a concise **AI Agency workflow** section describing multi-agent delivery flow and QA/research gates.
- Expanded the AI video area into a gallery with:
  - **Higgsfield pipeline** sub-gallery (`hf-*` clips with graceful source fallback).
  - **ComfyUI / Comfy Cloud pipeline** sub-gallery (`comfy-1..4` placeholders with fallback text/poster).
- Kept `/media/ai-creator/quiet-machine-reel.mp4` as the section hero reel.
- Added explicit disclosure where persona media appears: **AI-generated / synthetic persona**.
- Replaced weak placeholders with `TBD_FOR_FINAL_POLISH` markers while keeping GitHub as the active contact route.
- Removed hard numeric claims from public-facing proof cards to avoid unverified/fabricated metrics.

## Remaining `TBD_FOR_FINAL_POLISH` items

- Final public email/contact details (currently routed via GitHub profile).
- Public bio/founder narrative short text refinement.
- Final direct scheduling/contact CTA destination (if different from GitHub).
- Any still-missing gallery clip files referenced by expected names (`hf-*`, `comfy-*`).

## Notes

- If expected gallery files are missing, layout remains stable; each `<video>` shows poster + graceful fallback text.
- Synthetic persona assets are clearly labeled for disclosure safety.
