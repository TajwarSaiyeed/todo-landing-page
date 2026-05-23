# TaskFlow - Smart Todo App

TaskFlow is a modern landing page plus a public todo app route built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Pages

- `/` — marketing landing page
- `/app` — fully working public todo app with localStorage persistence

## Features

- Hero, stats, features, how-it-works, testimonials, pricing, FAQ, and footer
- Sticky blurred navbar with working mobile menu
- Dark mode toggle
- Back-to-top button
- Cookie/notification banner
- Scroll reveal animations
- Public todo app with:
  - add tasks with Enter or button
  - priorities: High, Medium, Low
  - due dates
  - category tags: Work, Personal, Shopping, Health
  - complete / delete / clear completed
  - filters and sorting
  - progress bar
  - empty state
  - localStorage persistence
  - confetti when everything is done

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment note

The project includes a Vercel rewrite so `/app` works as a direct route in production.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
