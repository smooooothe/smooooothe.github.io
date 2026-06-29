# GitHub Pages Deployment Guide

## Prerequisites

1. Repository on GitHub (public or private with GitHub Pro)
2. GitHub Pages enabled in repository settings

## Setup Steps

### 1. Enable GitHub Pages

Go to **Settings → Pages** in your repository:

- **Source**: GitHub Actions
- Save the settings

### 2. Configure Repository Name (if needed)

If your repository is named something other than `smooooothe.github.io`, update `astro.config.mjs`:

```javascript
const BASE_PATH = '/your-repo-name/';
```

For `smooooothe.github.io` repository, keep:
```javascript
const BASE_PATH = '/';
```

### 3. Deploy

Push to the `main` branch:

```bash
git add .
git commit -m "Add i18n, favicon and GitHub Pages deployment"
git push origin main
```

The GitHub Action will automatically build and deploy your site.

### 4. Monitor Deployment

Go to **Actions** tab in your repository to see the deployment status.

Once complete, your site will be available at:
- `https://smooooothe.github.io` (if using username.github.io repo)
- `https://smooooothe.github.io/repo-name/` (if using project repo)

## Language Switcher

The site defaults to Russian (RU). Click **EN** in the header to switch to English version.

Language preference is saved in browser localStorage and persists between sessions.

## Manual Build (Local Testing)

```bash
npm run build
# Preview the static build
npm run preview
```

## Troubleshooting

- **404 errors**: Check that `BASE_PATH` in `astro.config.mjs` matches your repository structure
- **Action fails**: Check Node.js version compatibility (requires Node 22+)
- **Assets not loading**: Ensure all assets use relative paths or `${import.meta.env.BASE_URL}` prefix
