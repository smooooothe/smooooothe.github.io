export type Language = "ru" | "en";

export const translations = {
  ru: {
    // Site meta
    site: {
      name: "Smoothe",
      positioning:
        "AI-продуктовый инженер с запущенным SaaS, системами автоматизации и документацией для создателей контента. Создатель FictioFactori / MWCC — платформы генерации контента и лендингов для performance-маркетинга.",
    },

    // Header navigation
    nav: {
      flagship: "01 Флагман",
      caseStudies: "02 Кейсы",
      selectedWork: "03 Работы",
      agencySystem: "04 Агентская система",
      aiCreator: "05 AI Creator",
      contact: "06 Контакты",
      github: "GitHub",
      bookIntro: "Обсудить проект",
    },

    // Language switcher
    lang: {
      ru: "RU",
      en: "EN",
      switchTo: "Switch to English",
    },

    // Hero section
    hero: {
      kicker: "Направление портфолио · тактильный бруталистский эдиториал",
      title: ["Запускаю", "AI-продукты,", "не демо-театр."],
      description:
        "AI-продуктовый инженер с запущенным SaaS, системами автоматизации и документацией для создателей контента.",
      tags: ["AI-пайплайны", "FastAPI", "React", "Автоматизация", "SaaS"],
      viewFlagship: "Флагманский проект",
      startProject: "Начать проект",
      visualAnchor: "Визуальный якорь",
      source: "Источник",
      aiGeneratedHero: "AI-генерация hero-изображений",
      contact: "Контакт",
    },

    // Featured project section
    featured: {
      sectionNumber: "01",
      kicker: "Флагманский проект",
      title: "FictioFactori / MWCC",
      primaryCase: "Основной кейс",
      problem: "Проблема",
      outcome: "Результат",
      role: "Роль",
      stack: "Стек",
      liveSite: "Открыть сайт",
    },

    // Case studies section
    caseStudies: {
      sectionNumber: "02",
      kicker: "Кейсы",
      title: "Проблема → Система → Результат",
      caseStudy: "Кейс",
      context: "Контекст",
      stakes: "Риски",
      approach: "Подход",
      built: "Реализация",
      outcomeLabel: "Результат",
      role: "Роль",
    },

    // Work grid section
    work: {
      sectionNumber: "03",
      kicker: "Избранные работы",
      title: "Дополнительные запущенные системы",
      description:
        "Вспомогательные проекты ориентированы на результат и подкреплены доказательствами. Существующие визуалы проектов сохранены и переосмыслены в новой эдиториальной системе.",
    },

    // Agency section
    agency: {
      sectionNumber: "04",
      kicker: "Операционная система AI-агентства",
      title: "От хаоса к аудируемой доставке",
      problem: "Проблема",
      approach: "Подход",
      outcome: "Результат",
      operatingOutputs: "Операционные выходы",
      problemText: "Активная работа с низким качеством верификации.",
      approachText: "Управление через контракты и специализированную маршрутизацию.",
      outcomeText: "Аудируемое исполнение с явными следами владения.",
      outputs: [
        "PM-документы потоков с гейтами приемки",
        "Прогресс и блокеры на основе доказательств",
        "Делегирование по владению ролями",
        "Артефакты сборки/QA до статуса 'готово'",
      ],
    },

    // AI Creator section
    aiCreator: {
      sectionNumber: "05",
      kicker: "Галерея AI Creator",
      title: "Режиссерские видео-пайплайны, а не промпт-рулетка",
      description:
        "Два флагманских фильма плюс восемь тестовых работ по брифу на двух производственных стеках: Higgsfield для режиссерского мультишот-кино и коммерческой рекламы, Comfy Cloud — для консистентности персонажей, контролируемых раскрытий и модульных кампаний. Каждая работа построена от брифа и документированного, воспроизводимого пайплайна; каждый финал поставляется с осмысленным аудио (голос + музыка/амбьенс), а не немым футажом. Весь футаж AI-сгенерирован.",
      requestLogs: "Запросить полные логи процесса →",
      flagshipFilms: "Флагманские фильмы",
      flagshipTitle: "Построены от брифа, а не от одиночного промпта",
      flagshipDescription:
        "Две новые end-to-end работы, каждая из документированного, воспроизводимого пайплайна с зафиксированной идентичностью персонажа во всех кадрах.",
      higgsfieldTitle: "Higgsfield стек · тесты по брифу",
      higgsfieldSubtitle: "Режиссерское кино и коммерческая реклама",
      higgsfieldDescription:
        "Четыре работы 9:16 по брифу: реклама локального бизнеса, кинематографичный luxury-продукт, ролик с консистентным персонажем и kinetic logo reveal. Ключевые кадры фиксируют identity, камера поставлена режиссерски, а каждый cut получает микс с voiceover и музыкальной подложкой.",
      comfyTitle: "Comfy cloud стек · тесты по брифу",
      comfySubtitle: "Воспроизводимые workflow",
      comfyDescription:
        "Четыре работы по брифу: image-to-video motion, контроль раскрытия через первый/последний кадр, доказанный lock консистентности персонажа и модульная кампания из трех частей на одном reusable workflow. Каждая поставляется с аудио-подложкой и приглушенным voiceover.",
      creatorCards: {
        contentLab: {
          title: "AI Content Lab",
          description:
            "Короткие сценарии, ньюслеттеры и build-in-public заметки, которые превращают запущенные AI-продукты в полезные публичные артефакты.",
          status: "Очередь публикаций",
        },
        workflowDemos: {
          title: "Демо workflow агентов",
          description:
            "Записанные walkthrough-видео ограниченных многошаговых workflow агентов: исследование, критика, разбиение задач и реализация.",
          status: "В production-заметках",
        },
        tooling: {
          title: "Creator tooling",
          description:
            "Темплейты для превращения продуктовых сборок в кейсы, лендинги и исследование аудитории без выдумывания метрик.",
          status: "Готово к упаковке",
        },
      },
    },

    // About/Proof section
    about: {
      sectionNumber: "06",
      kicker: "О себе + доказательства",
      title: "Билдер, отвечающий за full-stack доставку",
      builderDescription: [
        "Я запускаю production AI-продукты и автоматизации end-to-end: архитектура, пайплайны, инфраструктура и интерфейсы. MWCC — якорное доказательство: платный SaaS с повторяющимся клиентским использованием, примерно 199 платящих клиентов и 30к+ сгенерированных сайтов в совокупной эксплуатации. Вспомогательные проекты показывают диапазон: LLM-инструменты, генеративные пайплайны и ограниченные frontend-продукты.",
        "AI здесь — рычаг доставки, а не единственный headline skill. Я оптимизирую пропускную способность, надежность и доказательства, которые нанимающий менеджер или клиент могут реально оценить.",
        "Публичная био и длинная founder story финализируются:",
      ],
      tbd: "TBD_FOR_FINAL_POLISH",
      quote: '"Запустил платный SaaS соло — продукт, инфра, клиенты и операции, не проект выходного дня."',
      quoteCaption: "Позиционирование · публичное резюме кейса MWCC",
      capabilities: "Компетенции",
      capabilitiesList: {
        ai: { title: "AI / Автоматизация", desc: "LLM пайплайны, агенты, контроль затрат" },
        backend: { title: "Бэкенд", desc: "FastAPI, Postgres, Redis, Docker" },
        frontend: { title: "Фронтенд", desc: "React, Astro, TypeScript, a11y-first" },
        product: { title: "Продукт", desc: "Founder-led доставка, истории на основе доказательств" },
      },
      proof: {
        commercial: "Коммерческое доказательство",
        commercialValue: "Платный SaaS в операции",
        scale: "Масштаб",
        scaleValue: "~199 клиентов · 30к+ сайтов",
        scope: "Объем исполнения",
        scopeValue: "Продукт + инфра + AI + QA",
      },
    },

    // Contact section
    contact: {
      sectionNumber: "07",
      kicker: "Контакты",
      title: "Подключайте меня там, где AI должен дойти до продакшена",
      description:
        "Роли и клиентские проекты получают одинаковый стандарт: четко ограниченные системы, рабочее ПО и доказательства, выдерживающие проверку.",
      directChannels: "Прямые каналы:",
      hireMe: {
        title: "Наймите меня",
        description:
          "Полная занятость или контрактная разработка — глубина стека, запущенный SaaS и владение AI-пайплайнами.",
        cta: "Email {email} →",
      },
      workWithMe: {
        title: "Работайте со мной",
        description:
          "Фриланс-автоматизация, AI-продукты и дизайн пайплайнов — проекты, ориентированные на результат.",
        cta: "Telegram @{handle} →",
      },
      activeChannels: "Активные каналы связи:",
    },

    // Footer
    footer: {
      builtWith: "Собрано на Astro + Tailwind для превью рекрутеров/клиентов.",
    },

    // Common
    common: {
      skipToContent: "Перейти к контенту",
    },
  },

  en: {
    // Site meta
    site: {
      name: "Smoothe",
      positioning:
        "AI product builder with a shipped SaaS anchor, automation systems, and creator-grade documentation. Creator of FictioFactori / MWCC, a content and landing-page generation platform for performance-marketing teams.",
    },

    // Header navigation
    nav: {
      flagship: "01 Flagship",
      caseStudies: "02 Case studies",
      selectedWork: "03 Selected work",
      agencySystem: "04 Agency system",
      aiCreator: "05 AI creator",
      contact: "06 Contact",
      github: "GitHub",
      bookIntro: "Book intro",
    },

    // Language switcher
    lang: {
      ru: "RU",
      en: "EN",
      switchTo: "Переключить на русский",
    },

    // Hero section
    hero: {
      kicker: "Portfolio direction · tactile brutalist editorial",
      title: ["Shipped", "AI products,", "not demo theater."],
      description:
        "AI product builder with a shipped SaaS anchor, automation systems, and creator-grade documentation.",
      tags: ["AI pipelines", "FastAPI", "React", "Automation", "SaaS"],
      viewFlagship: "View flagship",
      startProject: "Start project",
      visualAnchor: "Visual anchor",
      source: "Source",
      aiGeneratedHero: "AI-generated hero art system",
      contact: "Contact",
    },

    // Featured project section
    featured: {
      sectionNumber: "01",
      kicker: "Flagship case",
      title: "FictioFactori / MWCC",
      primaryCase: "Primary system case",
      problem: "Problem",
      outcome: "Outcome",
      role: "Role",
      stack: "Stack",
      liveSite: "Live site",
    },

    // Case studies section
    caseStudies: {
      sectionNumber: "02",
      kicker: "Case studies",
      title: "Problem → System → Outcome",
      caseStudy: "Case study",
      context: "Context",
      stakes: "Stakes",
      approach: "Approach",
      built: "Built",
      outcomeLabel: "Outcome",
      role: "Role",
    },

    // Work grid section
    work: {
      sectionNumber: "03",
      kicker: "Selected work",
      title: "Additional shipped systems",
      description:
        "Supporting projects remain outcome-led and evidence-oriented. Existing bespoke project visuals are preserved and re-framed with the new editorial system.",
    },

    // Agency section
    agency: {
      sectionNumber: "04",
      kicker: "AI agency operating system",
      title: "From chaos to auditable delivery",
      problem: "Problem",
      approach: "Approach",
      outcome: "Outcome",
      operatingOutputs: "Operating outputs",
      problemText: "Active work with low verification quality.",
      approachText: "Contract-first governance and specialist routing.",
      outcomeText: "Auditable execution with explicit ownership trails.",
      outputs: [
        "Stream PM docs with acceptance gates",
        "Evidence-first progress and blockers",
        "Delegation routes by role ownership",
        "Build/QA artifacts before 'done'",
      ],
    },

    // AI Creator section
    aiCreator: {
      sectionNumber: "05",
      kicker: "AI creator production gallery",
      title: "Directed video pipelines, not prompt roulette",
      description:
        "Two flagship pipeline films plus eight brief-driven test pieces across two production stacks: Higgsfield for directed, multi-shot cinema and commercial ads, and Comfy Cloud for character consistency, controlled reveals and modular campaigns. Each piece is built from a brief and a documented, reproducible pipeline — and every final ships with intentional audio (voiceover + music/ambience bed), not silent footage. All footage is AI-generated.",
      requestLogs: "Request the full process logs →",
      flagshipFilms: "Flagship pipeline films",
      flagshipTitle: "Built from a brief, not a single prompt",
      flagshipDescription:
        "Two new end-to-end pieces, each from a documented, reproducible pipeline with a locked character identity carried across every shot.",
      higgsfieldTitle: "Higgsfield stack · brief tests",
      higgsfieldSubtitle: "Directed cinema & commercial ads",
      higgsfieldDescription:
        "Four brief-driven 9:16 pieces — a local-business ad, a cinematic luxury product, a consistent-character spot, and a kinetic logo reveal. Keyframe identity locks, directed camera, and a scored mix (VO + bed) on every cut.",
      comfyTitle: "Comfy cloud stack · brief tests",
      comfySubtitle: "Reproducible workflows",
      comfyDescription:
        "Four brief-driven pieces — image-to-video motion, first/last-frame reveal control, a proven character-consistency lock, and a modular 3-part campaign from one reusable workflow. Each ships with a stable-audio bed + ducked VO.",
      creatorCards: {
        contentLab: {
          title: "AI Content Lab",
          description:
            "Short-form scripts, newsletters, and build-in-public notes that translate shipped AI products into useful public artifacts.",
          status: "Publishing queue",
        },
        workflowDemos: {
          title: "Agent workflow demos",
          description:
            "Recorded walkthroughs of bounded multi-step agent workflows: research, critique, task breakdown, and implementation loops.",
          status: "In production notes",
        },
        tooling: {
          title: "Creator tooling",
          description:
            "Templates for turning product builds into case studies, launch pages, and audience research without inventing metrics.",
          status: "Ready to package",
        },
      },
    },

    // About/Proof section
    about: {
      sectionNumber: "06",
      kicker: "About + proof",
      title: "Builder who owns full-stack delivery",
      builderDescription: [
        "I ship production AI products and automations end-to-end: architecture, pipelines, infra, and the interface layer. MWCC is the anchor proof: paid SaaS with recurring client usage, approximately 199 paying clients, and 30k+ generated sites in cumulative operation. Supporting projects show range: LLM tooling, generative pipelines, and bounded frontend products.",
        "AI is a delivery lever here, not the headline skill. I optimize for throughput, reliability, and evidence a hiring manager or client can actually evaluate.",
        "Public bio and long-form founder story are finalizing:",
      ],
      tbd: "TBD_FOR_FINAL_POLISH",
      quote: '"Shipped a paid SaaS solo — product, infra, clients, and ops, not a weekend hack."',
      quoteCaption: "Positioning proof · public-safe MWCC case-study summary",
      capabilities: "Capabilities",
      capabilitiesList: {
        ai: { title: "AI / Automation", desc: "LLM pipelines, agents, cost controls" },
        backend: { title: "Backend", desc: "FastAPI, Postgres, Redis, Docker" },
        frontend: { title: "Frontend", desc: "React, Astro, TypeScript, a11y-first" },
        product: { title: "Product", desc: "Founder-led delivery, evidence-first narratives" },
      },
      proof: {
        commercial: "Commercial proof",
        commercialValue: "Paid SaaS in operation",
        scale: "Scale snapshot",
        scaleValue: "~199 clients · 30k+ sites",
        scope: "Execution scope",
        scopeValue: "Product + infra + AI + QA",
      },
    },

    // Contact section
    contact: {
      sectionNumber: "07",
      kicker: "Contact",
      title: "Bring me in where AI has to ship",
      description:
        "Roles and client projects get the same standard: scoped systems, working software, and proof that survives scrutiny.",
      directChannels: "Direct channels:",
      hireMe: {
        title: "Hire me",
        description:
          "Full-time or contract engineering — stack depth, shipped SaaS, AI pipeline ownership.",
        cta: "Email {email} →",
      },
      workWithMe: {
        title: "Work with me",
        description:
          "Freelance automation, AI product builds, and pipeline design — outcome-first engagements.",
        cta: "Message @{handle} on Telegram →",
      },
      activeChannels: "Active contact channels:",
    },

    // Footer
    footer: {
      builtWith: "Built with Astro + Tailwind for recruiter/client preview.",
    },

    // Common
    common: {
      skipToContent: "Skip to content",
    },
  },
} as const;

export type Translations = typeof translations;
export type TranslationKey = keyof Translations["ru"];
