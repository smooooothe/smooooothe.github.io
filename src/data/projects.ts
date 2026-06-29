export type Project = {
  id: string;
  title: string;
  tagline: string;
  outcome: string;
  problem: string;
  stack: string[];
  role: string;
  accent?: string;
  thumbnail?: VisualAsset;
  span?: "wide" | "tall" | "normal";
  links?: { label: string; href: string }[];
};

export type VisualAsset = {
  src: string;
  alt: string;
  disclosure?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  tagline: string;
  visual?: string;
  image?: VisualAsset;
  problem: {
    context: string;
    stakes: string;
  };
  approach: string[];
  built: string[];
  outcome: string[];
  role: string;
};

export const featured: Project = {
  id: "mwcc",
  title: "FictioFactori / MWCC",
  tagline: "AI content & landing-page generation platform (RU/CIS performance marketing)",
  outcome:
    "Bootstrapped paid SaaS with recurring usage, roughly 199 paying clients, and 30k+ generated sites in cumulative operations.",
  problem:
    "Manual landing-page and content generation was slow, generic, and did not scale for marketing teams running high-volume campaigns.",
  stack: [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "MinIO",
    "Docker",
    "React",
    "OpenAI",
    "Replicate",
  ],
  role: "Founder — solo builder, end-to-end product + AI pipeline orchestration",
  thumbnail: {
    src: "/media/portfolio/fictiofactori-platform.png",
    alt: "FictioFactori platform homepage — live AI site-generation product at fictiofactori.com",
    disclosure: "Live product screenshot — fictiofactori.com",
  },
  links: [
    { label: "Live site", href: "https://fictiofactori.com/" },
    { label: "GitHub", href: "https://github.com/smooooothe" },
  ],
};

export const selectedWorks: Project[] = [
  {
    id: "prism",
    title: "Prism",
    tagline: "Personal LLM analysis pipeline in Cursor IDE",
    outcome:
      "Multi-layer audit workflow with anti-sycophancy checks and deterministic Obsidian exports for repeatable reviews.",
    problem:
      "LLM outputs needed structured critique, not cheerleading — with reproducible exports into a knowledge base.",
    stack: ["TypeScript", "OpenAI", "Anthropic", "Obsidian"],
    role: "Designer + builder",
    accent: "#f43f5e",
    thumbnail: {
      src: "/media/portfolio/case-prism-refraction-2026.webp",
      alt: "Schematic refraction diagram: an input prompt beam splits through a tactile prism into staged critique layers L0-L3 with a cyan anti-sycophancy counter-line",
      disclosure: "AI-generated visual",
    },
    span: "wide",
  },
  {
    id: "lullaby",
    title: "AI Lullaby Radio",
    tagline: "Frontend-only sleep radio",
    outcome:
      "Shipped and deployed as a bounded consumer product with safe-audio constraints and intentionally low operational overhead.",
    problem:
      "Needed a calm, always-on sleep experience without backend complexity or runaway scope.",
    stack: ["Vite", "TypeScript"],
    role: "Builder",
    accent: "#a78bfa",
    thumbnail: {
      src: "/media/portfolio/work-lullaby-signal-2026.webp",
      alt: "Schematic sleep-radio signal diagram: a slow acid-green lullaby sine wave decaying into a calm flat baseline across a timeline of cyan tick markers above a sparse night field",
      disclosure: "AI-generated visual",
    },
    span: "tall",
  },
  {
    id: "brows-cards",
    title: "Beauty Visualization Pipeline",
    tagline: "Reusable beauty-industry visual and infographic process",
    outcome:
      "Reusable production process for vertical beauty visuals: service cards, infographics, deterministic Cyrillic labels, layout grids, and repeatable asset preparation across beauty niches.",
    problem:
      "Beauty content needs clean presentation, readable text, and repeatable layout; the workflow had to generalize beyond brows into services, products, and educational infographics.",
    stack: ["Python", "PIL", "Beauty infographics", "Generative pipeline"],
    role: "Production pipeline + visual QC",
    accent: "#34d399",
    thumbnail: {
      src: "/media/portfolio/work-brows-cardgrid-2026.webp",
      alt: "Brutalist contact-sheet diagram: a row of six blank vertical cards aligned on an exposed baseline grid with index ticks, one card outlined in acid-green and a cyan alignment tick",
      disclosure: "AI-generated visual",
    },
    span: "normal",
  },
  {
    id: "telegram-parser",
    title: "Telegram Niche Parser",
    tagline: "Telegram channel research pipeline",
    outcome:
      "Reproducible fetch-to-report pipeline with Russian-language synthesis and dry-run cost controls before execution.",
    problem:
      "Telegram niche research was manual and expensive — needed a bounded, rerunnable analysis loop.",
    stack: ["Python", "Telethon", "OpenAI", "Map-reduce"],
    role: "Builder",
    accent: "#38bdf8",
    thumbnail: {
      src: "/media/portfolio/work-telegram-funnel-2026.webp",
      alt: "Schematic fetch-to-report signal graph: a noisy node-and-edge source cloud collapsing through a funnel into a single ranked output column, with an acid-green winning path and a cyan top-rank tick",
      disclosure: "AI-generated visual",
    },
    span: "normal",
  },
  {
    id: "ad-creatives",
    title: "Affiliate Ad Creatives",
    tagline: "Google Display banner suite",
    outcome:
      "Programmatic banner matrix pipeline with isolated creative variants for cleaner ad testing and handoff.",
    problem:
      "Display creative production at scale needed consistent plates plus isolated variants for testing.",
    stack: ["Python", "Pillow", "AI image generation"],
    role: "Builder",
    accent: "#fb923c",
    thumbnail: {
      src: "/media/portfolio/work-ad-matrix-2026.webp",
      alt: "Brutalist banner-variant matrix diagram: a grid of blank display-banner plates with one acid-green-highlighted A/B variant lane and a cyan winning-cell tick",
      disclosure: "AI-generated visual",
    },
    span: "wide",
  },
  {
    id: "hh-resume",
    title: "hh_resume AI Automation",
    tagline: "HeadHunter resume workflow automation",
    outcome:
      "Scoped workflow for drafting, tailoring, and reviewing HeadHunter resume materials before manual submission.",
    problem:
      "HeadHunter workflows repeat across roles and applications; the value is controlled drafting and review, not blind auto-apply.",
    stack: ["Python", "OpenAI", "Automation"],
    role: "Automation design + builder",
    accent: "#e879f9",
    thumbnail: {
      src: "/media/portfolio/work-resume-pipeline-2026.webp",
      alt: "Schematic resume-automation pipeline: draft, tailor and review process boxes leading to an acid-green decision gate and a cyan approval tick before a manual-submit terminal node",
      disclosure: "AI-generated visual",
    },
    span: "normal",
  },
];

export const aiCreatorCards = [
  {
    title: "AI Content Lab",
    description:
      "Short-form scripts, newsletters, and build-in-public notes that translate shipped AI products into useful public artifacts.",
    status: "Publishing queue",
  },
  {
    title: "Agent workflow demos",
    description:
      "Recorded walkthroughs of bounded multi-step agent workflows: research, critique, task breakdown, and implementation loops.",
    status: "In production notes",
  },
  {
    title: "Creator tooling",
    description:
      "Templates for turning product builds into case studies, launch pages, and audience research without inventing metrics.",
    status: "Ready to package",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "mwcc",
    title: "FictioFactori / MWCC",
    tagline: "Flagship SaaS for RU/CIS performance marketing teams",
    visual: "Live platform — fictiofactori.com",
    image: {
      src: "/media/portfolio/fictiofactori-platform.png",
      alt: "FictioFactori platform homepage screenshot — White Pages at Scale, three generation engines",
      disclosure: "Live product screenshot — fictiofactori.com",
    },
    problem: {
      context:
        "White-page and campaign content production was manual, slow, and hard to scale when multiple offers needed variants in parallel.",
      stakes:
        "Without a productized pipeline, teams lost launch windows and quality drifted between operators.",
    },
    approach: [
      "Started from operator workflow constraints first, then wrapped generation in strict template rails instead of freeform prompting.",
      "Separated generation, queueing, and QA checkpoints so failures could be retried without rerunning entire batches.",
      "Kept model providers swappable to control cost and quality as workloads changed.",
    ],
    built: [
      "FastAPI orchestration layer for task routing, retries, and run states.",
      "PostgreSQL + Redis + MinIO stack for durable state, queue behavior, and artifact storage.",
      "React operator panel for review and controlled publishing.",
      "Provider integration layer across OpenAI, Replicate, and Together/adjacent model endpoints.",
    ],
    outcome: [
      "Shipped as a paid SaaS, not an internal script bundle.",
      "Reached approximately 199 paying clients and 30k+ generated sites in cumulative use.",
      "Established a repeatable monthly generation cadence around ~2k items with ongoing QA.",
    ],
    role: "Founder and solo product engineer: product scoping, backend, infra, AI pipeline, frontend, and operations.",
  },
  {
    id: "ai-agency",
    title: "AI Agency Recovery System",
    tagline: "Multi-agent PM and execution control layer",
    visual: "Governance and orchestration context",
    image: {
      src: "/media/portfolio/case-ai-agency-governance-2026.webp",
      alt: "Brutalist editorial diagram of a multi-agent governance system: numbered agent lanes routing through a central orchestration spine of acid-green checkpoint gates into output nodes",
      disclosure: "AI-generated visual",
    },
    problem: {
      context:
        "Delivery spread across many streams with weak status visibility and inconsistent quality gates.",
      stakes:
        "Without a single operating system, work looked active but was hard to verify, delegate, or recover.",
    },
    approach: [
      "Created a contract-first recovery model with explicit owner-only boundaries and delegation requirements.",
      "Forced every stream to produce sprint docs, status boards, QA checklists, and artifact indexes.",
      "Used tiered PM/specialist ownership so strategy, implementation, and QA had independent acceptance checks.",
    ],
    built: [
      "Recovery HQ doc structure with stream-specific PM zones and acceptance criteria.",
      "Delegation mapping and specialist workflows aligned to real blockers vs forbidden blocker excuses.",
      "Evidence-oriented reporting templates requiring build results, paths, and tangible artifacts.",
      "Automation hooks for heartbeat/bot reminders and operating cadence (where credentials permit).",
    ],
    outcome: [
      "Converted the program from ad-hoc execution into a trackable, reviewable system.",
      "Reduced ambiguity around 'done' by requiring openable artifacts and QA verdicts.",
      "Made owner effort focus on true owner-only actions instead of generic coordination.",
    ],
    role: "Program PM and systems architect: governance design, stream orchestration, acceptance logic, and recovery execution standards.",
  },
  {
    id: "ai-creator",
    title: "QUIET MACHINE Creator System",
    tagline: "AI-directed persona and short-form video pipeline",
    visual: "Identity and shot consistency context",
    image: {
      src: "/media/portfolio/case-quiet-machine-identity-2026.webp",
      alt: "Schematic identity-consistency diagram: a locked anchor identity token propagated across a contact-sheet film strip held by an acid-green lock axis with a cyan QA-approved signal",
      disclosure: "AI-generated visual",
    },
    problem: {
      context:
        "Most AI-creator output looked generic and inconsistent across shots, which killed credibility for portfolio use.",
      stakes:
        "If identity and art direction drift between renders, content cannot become a reliable brand asset.",
    },
    approach: [
      "Locked identity first with an anchor look and explicit visual constraints before generating any sequence.",
      "Split still generation, motion generation, and QA into separate passes so each phase had measurable checks.",
      "Tracked seeds/prompts/workflow configs to keep reruns reproducible and editable.",
    ],
    built: [
      "Creator pipeline from reference framing to image generation, image-to-video, and edit-ready selects.",
      "Dual-path workflow targeting both hosted generators and reproducible ComfyUI cloud graphs.",
      "Section-ready asset architecture with hero reel slot plus clearly labeled upcoming concept slots.",
      "Disclosure standard for synthetic persona usage and artifact provenance.",
    ],
    outcome: [
      "Produced a consistent persona direction that is portfolio-usable instead of one-off clips.",
      "Turned creator output into a documented system that can absorb new concepts quickly.",
      "Set quality gates for style lock, motion continuity, and reusable publishing assets.",
    ],
    role: "Creative technologist and pipeline owner: direction, generation workflow, QA rubric, and publishing structure.",
  },
  {
    id: "prism",
    title: "Prism",
    tagline: "Deterministic LLM analysis and critique pipeline",
    visual: "Review architecture context",
    image: {
      src: "/media/portfolio/case-prism-refraction-2026.webp",
      alt: "Brutalist refraction schematic: a deterministic input beam refracts through a tactile prism into staged critique layers L0-L3 with a cyan anti-sycophancy dissent line",
      disclosure: "AI-generated visual",
    },
    problem: {
      context:
        "Single-pass LLM answers were fast but unreliable for high-stakes product and strategy decisions.",
      stakes:
        "Without structured critique, outputs became hard to compare over time and easy to over-trust.",
    },
    approach: [
      "Designed staged critique levels (L0-L3) so each pass had a clear objective and output contract.",
      "Added anti-sycophancy checks to force disagreement analysis instead of generic affirmation.",
      "Normalized final output format for deterministic export into Obsidian knowledge workflows.",
    ],
    built: [
      "TypeScript orchestration around multi-pass analysis flows.",
      "Provider abstraction across OpenAI and Anthropic for controlled model comparisons.",
      "Export layer for repeatable markdown artifacts and decision logs.",
      "Prompt templates emphasizing assumptions, counterarguments, and confidence markers.",
    ],
    outcome: [
      "Raised consistency of AI-assisted reviews and reduced subjective drift between sessions.",
      "Made analysis rerunnable and auditable instead of trapped in ad-hoc chat history.",
      "Improved signal quality for strategy and implementation planning.",
    ],
    role: "Tool designer and implementer: process design, prompt architecture, runtime logic, and export spec.",
  },
];
