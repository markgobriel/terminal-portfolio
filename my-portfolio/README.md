## mark gobriel — portfolio

a react + vite single-page portfolio built to feel intentional, minimal, and a bit artsy. bilingual (en/fr), with custom cursor, hover micro-interactions, animated background, and project/skills cards that match a purple/blue palette.

### tech
- react 19 + vite
- custom css (no utility framework)
- devicons-react for skill icons
- vercel analytics + speed insights

### local dev
```bash
npm install
npm run dev
```
visit the printed localhost url. hot reload is on.

### build & preview
```bash
npm run build
npm run preview
```

### project structure (high level)
- `src/App.jsx` — page layout, language toggle wiring
- `src/components/` — sections (masthead, projects, skills, contact, etc.), cursor, nav, back-to-top
- `src/data/portfolio.js` — content + en/fr copy
- `src/index.css` — globals, theme tokens, background animation

### customization
- edit `src/data/portfolio.js` to update copy, links, skills, and projects in both languages.
- replace `public/portrait.jpg` and `public/favicon.jpg` with your own assets.
- update `public/resume.pdf` (or the resume href in `portfolio.js`) for the resume links.

### deploy
the app is static; any static host works (vercel, netlify, github pages). run `npm run build` and deploy the `dist` folder.
