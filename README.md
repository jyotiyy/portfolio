# Portfolio

A personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS, styled to closely match the layout and aesthetic of [karanwxliaa.github.io/portfolio](https://karanwxliaa.github.io/portfolio/): a dark, two-column layout with a profile sidebar on the left and an About / Resume / Projects / Contact panel on the right.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (icons)
- GitHub Actions → GitHub Pages

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (it will be under `/portfolio/`, matching the production base path).

## Building

```bash
npm run build
npm run preview
```

## Customizing your content

All the personal details you'll want to change live in two places — you never need to touch the component/JSX code:

### 1. `src/data/profile.ts`

```ts
export const profile = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "you@example.com",
  x: "your_x_handle",          // without the @
  leetcode: "your_leetcode_username",
  bio: "Your About Me paragraph...",
};
```

### 2. `src/data/projects.ts`

Add, remove, or edit entries in the `projects` array. Each project looks like:

```ts
{
  title: "Project Name",
  description: "Short project description.",
  image: "projects/project-1.jpg", // path relative to /public
  category: "Projects",             // "Projects" | "Research" | "Hackathons"
  technologies: ["React", "TypeScript"],
  organization: "",
  link: "",
}
```

### 3. Static assets (`public/`)

Replace these files with your own — keep the same filenames and the app will pick them up automatically:

- `public/profile.jpg` — your profile photo
- `public/resume.pdf` — your résumé
- `public/projects/project-1.jpg` (etc.) — project thumbnails

> Placeholder images and a placeholder résumé are included so the layout can be previewed immediately. Swap them out for your real content whenever you're ready.

## Project structure

```
src/
├── components/       Reusable UI (Sidebar, Navbar, cards, etc.)
├── sections/         About, Resume, Projects, Contact
├── data/             profile.ts and projects.ts — your editable content
├── lib/assets.ts      Helper for resolving public asset paths under the Vite base
├── App.tsx           Two-column layout + section switching
└── main.tsx
```

## Deploying to GitHub Pages

This repo is pre-configured to deploy to `https://YOUR_GITHUB_USERNAME.github.io/portfolio/`.

1. Create a GitHub repository named **`portfolio`** and push this project to it.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` will automatically build the site and deploy it.

No manual steps beyond that are required — `vite.config.ts` is already set to `base: '/portfolio/'`, which matches the GitHub Pages project-site URL structure.

### If you rename the repository

If your repository is not named `portfolio`, update `base` in `vite.config.ts` to match:

```ts
base: '/your-repo-name/',
```

## Notes

- The site only surfaces Email, X, and LeetCode for contact — no phone, LinkedIn, GitHub, or map, per the design brief.
- The Projects section filters (All / Projects / Research / Hackathons) are fully functional and driven by the `category` field in `src/data/projects.ts`.
- The Resume section simply links out to `/resume.pdf` in a new tab — there's no in-page PDF viewer, by design.
