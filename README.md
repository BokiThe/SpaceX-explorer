# SpaceX Explorer

A Next.js app showcasing SpaceX launch data with an emphasis on Server Components, minimal client bundles, and pragmatic UX improvements.

Quick start

Requires Node.js >= 18 (project used Node 22.x during development).

```bash
npm install
npm run dev
```

Open http://localhost:3000 and edit pages under `src/app` to iterate.

What changed (latest)

- Server-rendered launches list: `/launches` is a server component and now provides deterministic, SEO-friendly rendering.
- Route-level loading and error UI: `src/app/launches/loading.tsx` and `src/app/launches/error.tsx` provide server-rendered skeletons and friendly error screens during navigation.
- Persisted favorites: favorite IDs are stored in a small Zustand store at `src/stores/favoritesStore.ts` and are read on the client to avoid hydration mismatches.
- Typed API query separation: the SpaceX/Mongo-style query payload uses a dedicated API type (see `src/interfaces/launches`) instead of reusing the public filter type.
- Robust single-launch fetching: `src/lib/getLaunchDetails.ts` parallelizes fetching of launch, rocket, and launchpad and the detail page (`src/app/launches/[id]/page.tsx`) uses this helper and returns 404s when appropriate.
- Debounced search: a reusable `useDebounce` hook reduces unnecessary queries from the search input.
- UX polish: loading skeletons, an error retry flow (server error UI with a client RetryButton), and a Load More flow that uses route navigation so the server `loading.tsx` is shown.
- Changelog: `CHANGELOG.md` added to document breaking/major changes and release notes.

Architecture decisions

- App Router: Uses Next.js App Router (`src/app`) to leverage Server Components and route-level loading/error UI.
- Server vs Client: Server Components handle pages and heavy data fetching (better FCP/SEO). Small client components handle interactivity (favorites toggle, retry button) and are kept minimal to reduce bundle size.
- State management: Zustand stores favorites persistently in `localStorage`. The app defers localStorage reads until client mount to avoid hydration issues.
- Data fetching: API helpers live in `src/api`. Server actions and server components do most list/detail fetching; client-side fetching is used only for small interactive flows.

SpaceX API usage

- The launches list uses the SpaceX `/launches/query` endpoint with a server-side query payload. The app maps public filter params → API query using a typed `LaunchesAPIQuery` shape (see `src/interfaces/launches`).
- Helpers in `src/api/launches.ts` provide single-resource fetch helpers (launch, rocket, launchpad) and batched favorites fetch.

Performance & accessibility

- Fewer client bundles thanks to Server Components; use of `next/image` for remote images is configured in `next.config.ts`.
- Debounced search and route-level loading reduce wasted requests and improve perceived performance.
- Favorite controls include `aria-pressed` for a11y; more a11y testing is recommended.

Tradeoffs and next steps

- Tradeoff: server-rendered pages + client-only interactivity reduces client JS but requires careful handling of persisted client state and deterministic server output.

Planned improvements:


- Optional server-backed favorites (requires auth)
- Client-side infinite scroll variant (currently Load More uses navigation so server loading UI is shown)
- Implement recharts and charts for the success and failure rates

Known limitations

- Rocket and launchpad types are minimal; expand them to show richer metadata.
- Some UI and empty/error states can be improved further.

Key files

- `src/app/launches/page.tsx` — server-rendered launches list
- `src/app/launches/loading.tsx` — route-level loading UI
- `src/app/launches/error.tsx` — route-level error UI
- `src/app/launches/[id]/page.tsx` — launch detail (server component)
- `src/lib/getLaunchDetails.ts` — helper to fetch launch + rocket + launchpad in parallel
- `src/stores/favoritesStore.ts` — persisted Zustand favorites
- `src/components/skeletons/LaunchSkeleton.tsx` — loading skeleton
- `src/components/Errors/ErrorState.tsx` & `src/components/Errors/RetryButton.tsx` — server error UI + client retry
- `src/api/launches.ts` — API helper functions
- `CHANGELOG.md` — release notes and changelog





