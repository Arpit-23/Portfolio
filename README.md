# Arpit Mali — Portfolio

A clean, responsive personal portfolio built with **React + TypeScript + Vite + Tailwind CSS + shadcn/ui**.

## 🗂️ Folder Structure

```
arpit-mali-portfolio/
├── public/
│   ├── favicon.svg          # Your favicon
│   └── resume.pdf           # ← Drop your CV here
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky navigation bar
│   │   │   └── Footer.tsx       # Footer with social links
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Intro + CTA buttons
│   │   │   ├── StatsSection.tsx     # 3-stat cards row
│   │   │   ├── ExperienceSection.tsx # Work history
│   │   │   ├── SkillsSection.tsx    # Skills by category
│   │   │   ├── ProjectsSection.tsx  # Project cards
│   │   │   └── ContactSection.tsx   # Contact CTA banner
│   │   └── ui/
│   │       ├── badge.tsx        # shadcn Badge
│   │       ├── button.tsx       # shadcn Button
│   │       └── card.tsx         # shadcn Card
│   │
│   ├── data/
│   │   └── portfolio.ts     # ← ALL your content lives here
│   │
│   ├── lib/
│   │   └── utils.ts         # cn() helper
│   │
│   ├── App.tsx              # Root — composes all sections
│   ├── main.tsx             # React entry point
│   └── index.css            # Global + Tailwind styles
│
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── ...
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Add shadcn/ui components
npm run setup

# Start dev server
npm run dev
```

## ✏️ Customizing Content

**All content is in one file:** `src/data/portfolio.ts`

Update your name, bio, links, experience, skills, and projects there — no need to touch any component files.

Don't forget to:
- Place your CV at `public/resume.pdf`
- Add your real GitHub and LinkedIn URLs in `portfolio.ts`
- Add live/GitHub URLs to each project in `portfolio.ts`

## 🌐 Deployment Options

### ✅ Recommended — Vercel (Easiest)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done ✅
5. Free custom domain: `arpit-mali.vercel.app`

### ✅ Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy** ✅

### GitHub Pages (free, needs config tweak)
Add `base: '/repo-name/'` to `vite.config.ts`, then:
```bash
npm run build
# push the dist/ folder to gh-pages branch
```

## 🏗️ Build for Production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```
