# GitHub Pages Activation Guide

## Репозиторий создан и код запушен!

**URL репозитория:** https://github.com/smooooothe/smooooothe.github.io

## Шаг 1: Включить GitHub Pages

1. Перейди в репозиторий: https://github.com/smooooothe/smooooothe.github.io
2. Открой **Settings** (вкладка справа)
3. В левом меню выбери **Pages**
4. В разделе **Source** выбери:
   - **GitHub Actions**
5. Нажми **Save**

## Шаг 2: Запустить деплой

GitHub Action запустится автоматически при пуше. Для первого запуска:

1. Перейди во вкладку **Actions** в репозитории
2. Найди workflow "Deploy to GitHub Pages"
3. Если workflow не запустился автоматически, нажми **Run workflow** → **Run workflow**

## Шаг 3: Проверить статус

После успешного деплоя сайт будет доступен по адресу:

**https://smooooothe.github.io**

## Возможные проблемы

### Workflow не видит package-lock.json

Если workflow падает с ошибкой "package-lock.json not found":

1. Открой `.github/workflows/deploy.yml` в репозитории
2. Измени строку:
   ```yaml
   cache-dependency-path: frontend/package-lock.json
   ```
   на:
   ```yaml
   cache-dependency-path: package-lock.json
   ```
3. Убедись, что пути в workflow правильные (без `frontend/` префикса):
   ```yaml
   - run: npm ci
   - run: npm run build
   - with:
       path: dist/
   ```

## Проверка локально

```bash
cd /Users/nikitaskripai/Desktop/AI_AGENCY/streams/C_portfolio/frontend
npm run build
# Проверь что dist/ создан и содержит index.html
ls dist/
```

## Функции сайта

- **Русский язык по умолчанию** — открывается автоматически
- **Переключатель EN/RU** — в правом верхнем углу хедера
- **URL параметр** — добавь `?lang=en` для английской версии
- **Сохранение языка** — выбор сохраняется в localStorage

## Структура изменений

```
src/
├── data/translations.ts      # Переводы RU/EN
├── stores/language.ts        # nanostores для языка
├── components/LanguageSwitcher.astro
└── [все компоненты обновлены для i18n]

public/
└── favicon.svg               # Бруталистский favicon

.github/workflows/
└── deploy.yml                # CI/CD для GitHub Pages
```
