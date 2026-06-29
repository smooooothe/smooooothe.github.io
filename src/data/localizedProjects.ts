import { caseStudies, featured, selectedWorks } from "./projects";
import type { CaseStudy, Project } from "./projects";
import type { Language } from "./translations";

const ruFeatured: Project = {
  ...featured,
  tagline: "Платформа генерации AI-контента и лендингов для RU/CIS performance-маркетинга",
  outcome:
    "Запущенный с нуля платный SaaS с регулярным использованием, примерно 199 платящими клиентами и 30к+ сгенерированными сайтами в совокупной эксплуатации.",
  problem:
    "Ручная генерация лендингов и контента была медленной, однотипной и не масштабировалась для маркетинговых команд с большим объемом кампаний.",
  role: "Основатель — solo builder, end-to-end продукт и оркестрация AI-пайплайнов",
  thumbnail: featured.thumbnail
    ? {
        ...featured.thumbnail,
        alt: "Главная страница платформы FictioFactori — живой AI-продукт для генерации сайтов на fictiofactori.com",
        disclosure: "Скриншот живого продукта — fictiofactori.com",
      }
    : undefined,
};

const ruSelectedWorks: Project[] = [
  {
    ...selectedWorks[0],
    tagline: "Персональный LLM-пайплайн анализа в Cursor IDE",
    outcome:
      "Многоуровневый аудит с проверками против поддакивания и детерминированным экспортом в Obsidian для повторяемых ревью.",
    problem:
      "LLM-ответам нужна была структурная критика, а не cheerleading — с воспроизводимыми экспортами в базу знаний.",
    role: "Дизайнер и разработчик",
    thumbnail: selectedWorks[0].thumbnail
      ? {
          ...selectedWorks[0].thumbnail,
          alt: "Схема рефракции: входной prompt-луч проходит через тактильную призму и раскладывается на уровни критики L0-L3 с cyan anti-sycophancy линией",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
  },
  {
    ...selectedWorks[1],
    tagline: "Frontend-only радио для сна",
    outcome:
      "Запущен как ограниченный consumer-продукт с safe-audio ограничениями и намеренно низкой операционной сложностью.",
    problem:
      "Нужен был спокойный always-on опыт для сна без backend-сложности и расползания scope.",
    role: "Разработчик",
    thumbnail: selectedWorks[1].thumbnail
      ? {
          ...selectedWorks[1].thumbnail,
          alt: "Схема sleep-radio сигнала: медленная acid-green lullaby волна затухает в спокойную baseline линию на таймлайне",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
  },
  {
    ...selectedWorks[2],
    title: "Beauty Visualization Pipeline",
    tagline: "Процесс визуализации и инфографики для beauty-ниши",
    outcome:
      "Налажен переиспользуемый production-процесс для вертикальных beauty-визуалов: карточки, инфографика, кириллические подписи, сетки и стабильная подготовка материалов под разные ниши индустрии.",
    problem:
      "Beauty-контенту нужны аккуратная визуальная подача, читаемый текст и повторяемый layout; пайплайн должен переноситься не только на брови, но и на услуги, продукты и обучающую инфографику в индустрии.",
    stack: ["Python", "PIL", "Beauty-инфографика", "Генеративный пайплайн"],
    role: "Production-процесс + визуальный QC",
    thumbnail: selectedWorks[2].thumbnail
      ? {
          ...selectedWorks[2].thumbnail,
          alt: "Бруталистская contact-sheet схема: ряд из шести вертикальных карточек на exposed baseline grid, одна карточка выделена acid-green контуром",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
  },
  {
    ...selectedWorks[3],
    tagline: "Пайплайн исследования Telegram-каналов",
    outcome:
      "Воспроизводимый fetch-to-report пайплайн с русскоязычным синтезом и dry-run контролем затрат до запуска.",
    problem:
      "Исследование ниш в Telegram было ручным и дорогим — нужен был ограниченный, перезапускаемый цикл анализа.",
    role: "Разработчик",
    thumbnail: selectedWorks[3].thumbnail
      ? {
          ...selectedWorks[3].thumbnail,
          alt: "Схема fetch-to-report: шумное облако источников схлопывается через funnel в ранжированную output-колонку",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
  },
  {
    ...selectedWorks[4],
    tagline: "Набор баннеров Google Display",
    outcome:
      "Программный пайплайн матрицы баннеров с изолированными creative-вариантами для более чистого ad testing и handoff.",
    problem:
      "Масштабное производство display-креативов требовало стабильных plates и изолированных вариантов для тестирования.",
    stack: ["Python", "Pillow", "AI-генерация изображений"],
    role: "Разработчик",
    thumbnail: selectedWorks[4].thumbnail
      ? {
          ...selectedWorks[4].thumbnail,
          alt: "Бруталистская матрица banner-вариантов: сетка display plates с выделенной A/B variant lane и cyan winning-cell tick",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
  },
  {
    ...selectedWorks[5],
    tagline: "Автоматизация резюме для HeadHunter",
    outcome:
      "Ограниченный workflow для черновиков, адаптации и ревью материалов резюме HeadHunter перед ручной отправкой.",
    problem:
      "HeadHunter-процессы повторяются между ролями и откликами; ценность в контролируемом drafting и review, а не в слепом auto-apply.",
    role: "Дизайн автоматизации + разработка",
    thumbnail: selectedWorks[5].thumbnail
      ? {
          ...selectedWorks[5].thumbnail,
          alt: "Схема resume-automation: draft, tailor и review блоки ведут к acid-green decision gate перед ручной отправкой",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
  },
];

const ruCaseStudies: CaseStudy[] = [
  {
    ...caseStudies[0],
    tagline: "Флагманский SaaS для RU/CIS performance-маркетинга",
    visual: "Живая платформа — fictiofactori.com",
    image: caseStudies[0].image
      ? {
          ...caseStudies[0].image,
          alt: "Скриншот главной страницы FictioFactori — White Pages at Scale и три движка генерации",
          disclosure: "Скриншот живого продукта — fictiofactori.com",
        }
      : undefined,
    problem: {
      context:
        "Производство white-page и campaign-контента было ручным, медленным и плохо масштабировалось, когда нескольким офферам нужны были параллельные варианты.",
      stakes:
        "Без продуктового пайплайна команды теряли launch windows, а качество дрейфовало между операторами.",
    },
    approach: [
      "Начал с ограничений операторского workflow, затем обернул генерацию в строгие template rails вместо freeform prompting.",
      "Разделил генерацию, очереди и QA-checkpoints, чтобы failures можно было ретраить без повторного запуска всех batch'ей.",
      "Оставил model providers заменяемыми, чтобы контролировать стоимость и качество по мере изменения нагрузки.",
    ],
    built: [
      "FastAPI orchestration layer для роутинга задач, ретраев и run states.",
      "PostgreSQL + Redis + MinIO стек для durable state, очередей и хранения артефактов.",
      "React operator panel для ревью и контролируемой публикации.",
      "Provider integration layer для OpenAI, Replicate и Together/смежных model endpoints.",
    ],
    outcome: [
      "Запущено как платный SaaS, а не как набор внутренних скриптов.",
      "Достигнуто примерно 199 платящих клиентов и 30к+ сгенерированных сайтов в совокупном использовании.",
      "Выстроен повторяемый месячный cadence генерации около ~2к items с ongoing QA.",
    ],
    role: "Основатель и solo product engineer: product scoping, backend, infra, AI-пайплайн, frontend и operations.",
  },
  {
    ...caseStudies[1],
    title: "AI Agency Recovery System",
    tagline: "Multi-agent PM и слой контроля исполнения",
    visual: "Контекст governance и orchestration",
    image: caseStudies[1].image
      ? {
          ...caseStudies[1].image,
          alt: "Бруталистская editorial-схема multi-agent governance: numbered agent lanes проходят через центральный orchestration spine с acid-green checkpoint gates",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
    problem: {
      context:
        "Доставка была размазана по множеству потоков со слабой видимостью статуса и непостоянными quality gates.",
      stakes:
        "Без единой operating system работа выглядела активной, но ее было сложно верифицировать, делегировать или восстановить.",
    },
    approach: [
      "Создал contract-first recovery model с явными owner-only границами и требованиями к делегированию.",
      "Заставил каждый stream производить sprint docs, status boards, QA checklists и artifact indexes.",
      "Использовал tiered PM/specialist ownership, чтобы стратегия, реализация и QA имели независимые acceptance checks.",
    ],
    built: [
      "Recovery HQ структура документов со stream-specific PM зонами и acceptance criteria.",
      "Delegation mapping и specialist workflows, привязанные к реальным blockers вместо запрещенных blocker excuses.",
      "Evidence-oriented reporting templates, требующие build results, paths и tangible artifacts.",
      "Automation hooks для heartbeat/bot reminders и operating cadence там, где позволяют credentials.",
    ],
    outcome: [
      "Программа переведена из ad-hoc execution в отслеживаемую, reviewable system.",
      "Снижена неоднозначность статуса 'done' через требование openable artifacts и QA verdicts.",
      "Owner effort сфокусирован на настоящих owner-only действиях вместо generic coordination.",
    ],
    role: "Program PM и systems architect: governance design, stream orchestration, acceptance logic и recovery execution standards.",
  },
  {
    ...caseStudies[2],
    title: "QUIET MACHINE Creator System",
    tagline: "AI-directed persona и short-form video pipeline",
    visual: "Контекст identity и shot consistency",
    image: caseStudies[2].image
      ? {
          ...caseStudies[2].image,
          alt: "Схема identity-consistency: locked anchor identity token переносится через contact-sheet film strip вдоль acid-green lock axis",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
    problem: {
      context:
        "Большинство AI-creator output выглядело generic и inconsistent между кадрами, что убивало доверие для portfolio use.",
      stakes:
        "Если identity и art direction дрейфуют между renders, контент не может стать надежным brand asset.",
    },
    approach: [
      "Сначала зафиксировал identity через anchor look и явные visual constraints, до генерации любой sequence.",
      "Разделил still generation, motion generation и QA на отдельные passes, чтобы у каждой фазы были measurable checks.",
      "Трекал seeds/prompts/workflow configs, чтобы reruns оставались воспроизводимыми и редактируемыми.",
    ],
    built: [
      "Creator pipeline от reference framing до image generation, image-to-video и edit-ready selects.",
      "Dual-path workflow для hosted generators и воспроизводимых ComfyUI cloud graphs.",
      "Section-ready asset architecture с hero reel slot и clearly labeled upcoming concept slots.",
      "Disclosure standard для synthetic persona usage и artifact provenance.",
    ],
    outcome: [
      "Получено consistent persona direction, пригодное для портфолио вместо one-off clips.",
      "Creator output превращен в documented system, быстро принимающую новые concepts.",
      "Заданы quality gates для style lock, motion continuity и reusable publishing assets.",
    ],
    role: "Creative technologist и pipeline owner: direction, generation workflow, QA rubric и publishing structure.",
  },
  {
    ...caseStudies[3],
    tagline: "Детерминированный LLM-анализ и critique pipeline",
    visual: "Контекст review architecture",
    image: caseStudies[3].image
      ? {
          ...caseStudies[3].image,
          alt: "Бруталистская refraction-схема: deterministic input beam проходит через tactile prism в critique layers L0-L3 с cyan anti-sycophancy dissent line",
          disclosure: "AI-сгенерированный визуал",
        }
      : undefined,
    problem: {
      context:
        "Однопроходные LLM-ответы были быстрыми, но ненадежными для high-stakes продуктовых и стратегических решений.",
      stakes:
        "Без структурированной критики outputs сложно сравнивать со временем и слишком легко переоценивать.",
    },
    approach: [
      "Спроектировал staged critique levels (L0-L3), чтобы у каждого прохода была четкая цель и output contract.",
      "Добавил anti-sycophancy checks, которые заставляют анализировать несогласие вместо generic affirmation.",
      "Нормализовал финальный формат output для deterministic export в Obsidian knowledge workflows.",
    ],
    built: [
      "TypeScript orchestration вокруг multi-pass analysis flows.",
      "Provider abstraction для OpenAI и Anthropic под контролируемые model comparisons.",
      "Export layer для повторяемых markdown artifacts и decision logs.",
      "Prompt templates с акцентом на assumptions, counterarguments и confidence markers.",
    ],
    outcome: [
      "Повышена consistency AI-assisted reviews и снижен subjective drift между sessions.",
      "Анализ стал rerunnable и auditable, а не застрявшим в ad-hoc chat history.",
      "Улучшено качество signal для strategy и implementation planning.",
    ],
    role: "Tool designer и implementer: process design, prompt architecture, runtime logic и export spec.",
  },
];

export function getFeaturedProject(lang: Language): Project {
  return lang === "ru" ? ruFeatured : featured;
}

export function getSelectedWorks(lang: Language): Project[] {
  return lang === "ru" ? ruSelectedWorks : selectedWorks;
}

export function getCaseStudies(lang: Language): CaseStudy[] {
  return lang === "ru" ? ruCaseStudies : caseStudies;
}
