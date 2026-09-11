# Hamza — Portfolio

A dark, motion-driven portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The build output lands in `dist/`, ready to deploy to GitHub Pages, Vercel, Netlify, etc.

## Things you'll likely want to personalize

- **Portrait**: `src/sections/HeroSection.tsx` currently points at a placeholder stock
  photo (no photo was provided). Swap it for a real photo — drop a `portrait.jpg`/`.png`
  into `public/` and update the `src` there. `public/portrait-placeholder.svg` (an
  initials avatar) is also included if you'd rather use that in the meantime.
- **Projects**: `src/data/projects.ts` — add live/GitHub links (`href`) once your repos
  are public, and swap the gradient placeholder tiles in
  `src/sections/ProjectsSection.tsx` for real screenshots.
- **Skills copy**: `src/data/skills.ts`.
- **Contact details**: `src/sections/Footer.tsx` and `src/components/ContactButton.tsx`.
- **Colors/fonts**: global tokens live in `src/index.css` (`.hero-heading` gradient) and
  `tailwind.config.js`.
