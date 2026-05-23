# TaskFlow Layout Improvement Plan

> **For Hermes:** Use this plan task-by-task to refactor the website into a more organized, charity-site-inspired layout with a cleaner `/app` experience.

**Goal:** Improve TaskFlow’s website structure and `/app` todo layout so it feels more organized, maintainable, and visually calm — similar to a well-structured charity website, but still clearly TaskFlow.

**Architecture:**
Use a small set of shared layout primitives and page-specific components. Keep the landing page and `/app` route separate, but share the same design tokens, spacing system, and typography. Treat the charity website as a layout reference: strong section hierarchy, card-based content blocks, generous whitespace, and clear footer/navigation patterns. Preserve the existing app behavior while reorganizing the UI so future maintenance is easier.

**Tech Stack:** React, Vite, Tailwind CSS, Framer Motion, React Icons, localStorage, Vercel rewrites.

---

## Task 1: Audit the existing pages and define a cleaner structure

**Objective:** Break the current monolithic UI into a clearer layout plan before changing code.

**Files:**
- Review: `src/App.jsx`
- Review: `src/index.css`
- Review: `vercel.json`
- Review: `README.md`

**Work to do:**
1. Identify which parts belong to the landing page and which belong to the `/app` page.
2. Mark repeated UI patterns that should become shared pieces:
   - section labels
   - rounded cards
   - gradient CTA buttons
   - sidebar filters
   - task cards
3. Decide the page hierarchy:
   - Landing page: hero → social proof → features → how-it-works → testimonials → pricing → FAQ → footer
   - `/app`: top header → left sidebar filters → right task workspace → progress + empty state
4. Write down any layout issues to remove:
   - too many unrelated elements in one visual area
   - low contrast body text
   - inconsistent spacing between sections

**Verification:**
- A clear page map exists before implementation starts.
- No new code yet; this is a structure-first pass.

---

## Task 2: Create shared layout and design primitives

**Objective:** Make the UI maintainable by extracting reusable layout pieces.

**Files:**
- Create: `src/components/SectionHeading.jsx`
- Create: `src/components/PrimaryButton.jsx`
- Create: `src/components/StatCard.jsx`
- Create: `src/components/InfoCard.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Work to do:**
1. Create a shared section heading component with:
   - uppercase purple label
   - bold dark title
   - readable supporting text
2. Create card primitives with:
   - white background
   - purple borders
   - soft shadow
   - hover lift
3. Standardize button styles:
   - primary purple button
   - cyan hover state
   - outline secondary button
4. Move global contrast rules into `src/index.css` so body text stays dark and readable.
5. Keep spacing tokens consistent across both pages.

**Verification:**
- Every section uses the same heading treatment.
- Buttons and cards look consistent across the site.

---

## Task 3: Rework the landing page into a charity-style, sectioned layout

**Objective:** Make the homepage feel more organized, premium, and easier to scan.

**Files:**
- Create: `src/pages/LandingPage.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`
- Optional: `src/data/landingContent.js`

**Work to do:**
1. Replace the current all-in-one landing markup with a page component.
2. Add stronger section spacing and card grouping so each block feels like a self-contained panel.
3. Keep the charity-site-inspired layout principles:
   - clear headings
   - compact content cards
   - visible CTA hierarchy
   - simple footer columns
4. Improve hero presentation:
   - more impactful headline
   - stronger gradient accent
   - clearer primary CTA
   - better secondary CTA
5. Keep the navigation and footer, but organize them into cleaner bands.
6. Reduce visual noise by simplifying secondary decorations.

**Verification:**
- The homepage reads like a polished information website.
- Section boundaries are obvious.
- The content is easier to scan on mobile and desktop.

---

## Task 4: Redesign `/app` as a clean public todo workspace

**Objective:** Make the todo route feel like a well-organized dashboard rather than a dense form.

**Files:**
- Create: `src/pages/TodoPage.jsx`
- Create: `src/components/TaskFilters.jsx`
- Create: `src/components/TaskForm.jsx`
- Create: `src/components/TaskList.jsx`
- Create: `src/components/TaskCard.jsx`
- Create: `src/components/ProgressBar.jsx`
- Modify: `src/App.jsx`
- Modify: `src/index.css`

**Work to do:**
1. Build a two-column desktop layout:
   - left sidebar for filters, sorting, progress, and actions
   - right content area for task entry and task list
2. Keep a clean white-card look with purple accents.
3. Preserve all existing todo behavior:
   - add task with Enter or button
   - priority selection
   - due dates
   - category tags
   - complete/delete/clear completed
   - localStorage persistence
4. Make the task list easier to read:
   - task title first
   - priority and category chips second
   - due date and created date underneath
5. Add an empty state that feels intentional and friendly.
6. Keep confetti only when all tasks are complete.

**Verification:**
- `/app` still works without login.
- Tasks persist after refresh.
- Layout remains usable on mobile.

---

## Task 5: Improve visual contrast, typography, and responsiveness

**Objective:** Fix the washed-out feel and make the interface read clearly everywhere.

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`
- Modify: new shared component files from Tasks 2–4

**Work to do:**
1. Ensure body text never drops below a readable dark gray.
2. Use bold, dark headings throughout.
3. Keep section labels uppercase and purple with letter spacing.
4. Increase contrast on cards, buttons, and labels.
5. Tighten responsive behavior for smaller screens:
   - stacked sidebar on mobile
   - full-width buttons
   - collapsed navigation where needed
6. Keep animations subtle and purposeful.

**Verification:**
- Text remains readable in both light and dark mode.
- The layout works cleanly on mobile, tablet, and desktop.

---

## Task 6: Verify, document, and publish safely

**Objective:** Make sure the refactor is stable and easy to maintain.

**Files:**
- Modify: `README.md`
- Modify: `vercel.json`
- Validate: all touched `src/*` files

**Work to do:**
1. Confirm `/app` still resolves correctly in production.
2. Run build and lint checks.
3. Update the README with the new page structure and run steps.
4. Remove dead code, unused assets, and duplicated styles.
5. Commit the work in small, readable checkpoints.

**Verification commands:**
```bash
npm run build
npm run lint
```

**Expected result:**
- Build passes
- Lint passes
- Both routes work
- Layout is cleaner and easier to maintain

---

## Recommended execution order

1. Task 1 — audit and structure
2. Task 2 — shared primitives
3. Task 3 — landing page refactor
4. Task 4 — `/app` dashboard refactor
5. Task 5 — contrast and responsiveness polish
6. Task 6 — verification and docs

---

## Success criteria

- The website feels more organized and premium
- The layout is inspired by the charity site’s clarity, not its content
- The todo app is still fully functional
- The codebase is easier to maintain
- The UI is readable, consistent, and responsive
