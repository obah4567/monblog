# Personal Developer Portfolio

A production-ready personal developer website and engineering blog.
Built with React, Vite, TypeScript, Tailwind CSS, and MDX.

## Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool |
| TypeScript | 5 (strict) | Type safety |
| Tailwind CSS | 4 | Utility styles |
| React Router | 7 (HashRouter) | Client-side routing |
| MDX | 3 | Blog articles |
| Lucide React | latest | Icons |
| GitHub Actions | — | CI/CD |
| GitHub Pages | — | Hosting |

## Requirements

- Node.js 20+ (see `.nvmrc`)
- npm 9+

## Installation

```bash
git clone https://github.com/YOUR_USERNAME/developer-portfolio
cd developer-portfolio
npm ci
npm run dev
```

The site runs at `http://localhost:5173`.

## Available commands

```bash
npm run dev      # Start development server
npm run build    # Production build (output: dist/)
npm run preview  # Preview production build locally
npm run typecheck # Run TypeScript type checking only
```

## Transferring to another computer

This project is fully portable. No machine-specific configuration exists.

1. Copy the repository (or clone from GitHub)
2. Run `npm ci` — this installs exact versions from `package-lock.json`
3. Run `npm run dev`

Do **not** copy `node_modules/` or `dist/`.

## Customizing personal information

Replace every `YOUR_NAME`, `YOUR_USERNAME`, and `your@email.com` placeholder with your real information.

Files to update:

| File | What to change |
|------|----------------|
| `index.html` | Page title, description |
| `src/components/Header.tsx` | Logo / name |
| `src/components/Footer.tsx` | Social links |
| `src/pages/About.tsx` | Biography |
| `src/pages/Now.tsx` | Current activity |
| `src/pages/Uses.tsx` | Hardware / software setup |
| `src/lib/projects.ts` | Real projects |
| `public/favicon.svg` | Your favicon |

## Writing a blog article

1. Create a new file: `src/content/blog/my-article-slug.mdx`

```mdx
---
title: "My Article Title"
date: "2024-11-15"
description: "A short description of this article."
tags: ["typescript", "architecture"]
category: "Engineering"
draft: false
---

## Introduction

Your content here...
```

2. Add metadata to `src/content/blog/index.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  // existing posts...
  {
    slug: 'my-article-slug',
    title: 'My Article Title',
    date: '2024-11-15',
    description: 'A short description of this article.',
    tags: ['typescript', 'architecture'],
    category: 'Engineering',
    draft: false,
    readingTime: '5 min read',
  },
]
```

3. Register the lazy import in `src/pages/Article.tsx`:

```typescript
const mdxModules: Record<string, ReturnType<typeof lazy>> = {
  // existing...
  'my-article-slug': lazy(() =>
    import('@/content/blog/my-article-slug.mdx').then((m) => ({ default: m.default }))
  ),
}
```

## Adding a project

Edit `src/lib/projects.ts` and add a new entry to the `projects` array:

```typescript
{
  id: 'my-project',
  name: 'My Project',
  description: 'Short description.',
  longDescription: `
## Context
...

## Implementation
...
  `,
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/YOUR_USERNAME/my-project',
  demoUrl: 'https://example.com',
  featured: true,
  year: 2024,
}
```

## Deploying to GitHub Pages

### Automatic (recommended)

Push to the `main` branch. GitHub Actions will build and deploy automatically.

### First-time setup

1. Go to your repository **Settings → Pages**
2. Set Source to **GitHub Actions**
3. Push to `main`

### Repository name handling

The workflow automatically sets `base` to `/<repo-name>/` for project sites
(e.g. `username.github.io/developer-portfolio`) and `/` for user sites
(e.g. `username.github.io`). No manual configuration needed.

### Local vs deployed routing

The site uses `HashRouter` — all routes use `/#/path` format.
This ensures direct refresh and shared links work without server configuration.

## Project structure

```
src/
  components/      # Reusable UI components
  content/
    blog/          # MDX articles + registry
    projects/      # (extend if needed)
  hooks/           # Custom React hooks (useTheme)
  layouts/         # Page layout wrappers
  lib/             # Utilities (blog.ts, projects.ts)
  pages/           # Route pages
  styles/          # Global CSS + design tokens
  types/           # TypeScript types

public/
  favicon.svg
  images/          # Project thumbnails
  robots.txt

.github/
  workflows/
    deploy.yml     # GitHub Pages CI/CD
```

## Themes

Light/dark theme is controlled by the toggle in the header.
Preference is persisted in `localStorage`. The initial theme respects
`prefers-color-scheme` as fallback.

Design tokens (colors, fonts, spacing) are defined as CSS custom properties
in `src/styles/global.css`.
