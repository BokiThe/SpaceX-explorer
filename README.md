# SpaceX Explorer

This is a Next.js application exploring SpaceX launch data. The project demonstrates Server Components, small client-only interactive components, React Query for data fetching, and a lightweight persisted store for user favorites.

## Getting started

Install and run locally:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Edit pages in `src/app` to iterate.

## Architecture decisions

- App Router: The project uses the Next.js App Router (`src/app`) to leverage Server Components and the improved routing primitives.
- Server vs Client: Pages that benefit from SEO and fast first paint (for example the launch detail page) are implemented as Server Components. Interactive widgets (favorites toggle) are implemented as small Client Components to minimize client bundle size.
- State management: Zustand is used for a small, persistent client store (`src/stores/favoritesStore.ts`) to store favorite launch IDs in `localStorage`. This keeps the implementation simple and fast to read/write from multiple components.
- Data fetching: React Query (@tanstack/react-query) is used for data caching, retries, and background refetching. API helper functions in `src/api` centralize request logic.

## SpaceX API usage

- API client: `src/api/spacex.ts` creates a single axios instance pointed at the SpaceX v4 API.
- Launches list: uses the SpaceX `/launches/query` endpoint with pagination. The list uses React Query infinite queries for pagination and fetchNextPage.
- Favorites fetching: we batch-fetch favorites with a single POST to `/launches/query` using `_id: { $in: [...] }` and `pagination: false` to retrieve multiple launches by ID.
- Single resource helpers: `src/api/launches.ts` includes `fetchLaunchById`, `fetchRocketById`, and `fetchLaunchpadById` that call the appropriate v4 endpoints.

## Performance & accessibility

- Server Components and selective client components minimize client JS and improve Time to First Byte and First Contentful Paint.
- `next/image` is used for optimized images; `next.config.ts` contains `images.remotePatterns` to allow external Flickr/Imgur sources used by SpaceX.
- React Query caches API responses and avoids unnecessary network requests; use sensible cache times and invalidation in a production setup.
- Accessibility: favorite buttons use `aria-pressed` and semantic headings are used across pages. More a11y testing and keyboard navigation work is recommended.

## Tradeoffs and next steps

- Tradeoff: Server-rendered pages + client-only interactivity reduces bundle size but requires careful handling of persisted client state to avoid hydration mismatch. We intentionally defer reading localStorage until client mount in toggles to avoid this problem.

With more time I'd:

- Add E2E tests (Cypress/Playwright) for critical flows (launch list, favorites flow, detail page).
- Implement BroadcastChannel for robust cross-tab favorites sync.
- Add server-backed user favorites for persistent multi-device state (requires auth).
- Improve image gallery (lightbox, lazy thumbnails) and implement progressive image placeholders.
- Expand a11y testing and add unit tests for custom hooks and store logic.

## Known limitations / TODOs

- Rocket and launchpad have minimal typed interfaces; expand interfaces to display more metadata (status, images, reuse info).
- Some UI states and empty/error screens need improvement (especially for the single-launch page).
- Add tests and CI checks.
- Consider rate-limiting and caching strategy for high-traffic usage.

## Key files

- `src/app/launches/page.tsx` — launches list
- `src/app/launches/[id]/page.tsx` — launch detail (server component)
- `src/components/LaunchDetail/*` — detail page subcomponents
- `src/api/launches.ts` — API helper functions
- `src/stores/favoritesStore.ts` — Zustand persisted favorites
- `next.config.ts` — image remotePatterns for external images

---

If you want this converted into a `CONTRIBUTING.md` or a shorter README TL;DR, tell me which format you prefer and I will produce it.


