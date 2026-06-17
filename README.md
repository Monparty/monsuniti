# monsuniti

Personal portfolio of **Suniti "Mon" Sukontaprapun** — a frontend developer.
Built with [Next.js](https://nextjs.org) (App Router) and styled with a retro
8-bit look using [NES.css](https://nostalgic-css.github.io/NES.css/) and
[Tailwind CSS](https://tailwindcss.com).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Create a production build         |
| `npm run start` | Run the production build          |
| `npm run lint`  | Lint the project with ESLint      |

## Project structure

```
src/app/
├── components/        # UI sections (Hero, About, Projects, …)
├── hooks/             # Reusable client hooks (useHorizontalScroll)
├── dataset.js         # All portfolio content (data, not markup)
├── layout.js          # Root layout, fonts, metadata
├── page.js            # Composes the section components
└── globals.css        # Global styles
```

Content lives in [`src/app/dataset.js`](src/app/dataset.js) — edit it to update
the profile, work experience, tech stack, projects, and contact details without
touching the components.
