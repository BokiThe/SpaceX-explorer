# Changelog

[1.0] - 21-08-2025

### 1) Initialized the next.js project

- Description: Project initialized with npx create-next-app@latest followed by the documentation on the [Next.js docs](https://nextjs.org/docs), project cleanup and added spacex logo and favico
- Author: (BokiThe)
- Time spent: 30m
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/1)

[2.0] - 22-08-2025

### 2) Added Nvigation and Footer

- Description:

- This PR implements a complete navigation system for a SpaceX Explorer application, adding header navigation, footer, and routing structure.
- The changes establish the basic layout foundation with responsive navigation and proper page structure.
- Added responsive navigation header with mobile hamburger menu and routing to launches/favorites pages
- Implemented footer component with copyright information
- Created basic page components for launches, individual launch details, and favorites functionality
- Author: (BokiThe)
- Time spent: 1h
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/2)

[3.0] - 22-08-2025

### 3) API setup

- Description:

- This PR adds React Query (TanStack Query) setup to a React/Next.js application along with a SpaceX API integration and Prettier configuration. The changes enable data fetching and caching capabilities for the application.

- Added React Query provider with default configuration and dev tools
- Created SpaceX API instance with axios for HTTP requests
- Implemented launches query function with filtering and pagination support
- Added Prettier configuration for code formatting

- Author: (BokiThe)
- Time spent: 1h
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/3)

[4.0] - 22-08-2025

### 4) Launches page

- Description:

- This PR implements a launches page that displays SpaceX launches in a paginated list with infinite scroll functionality. The implementation includes proper data fetching with React Query, skeleton loading states, and a favorites system using localStorage.

- Added TypeScript interfaces for Launch and LaunchesResponse data structures
- Implemented infinite query hook with filtering capabilities and a favorites management hook
- Created reusable UI components including a generic List component, LaunchCard, and loading skeleton

- Author: (BokiThe)
- Time spent: 2h
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/4)

[5.0] - 22-08-2025

### 5) Filter and search form

- Description:

- This PR adds a comprehensive filter and search form for the SpaceX launches page, enabling users to search by mission name and filter by various criteria including date ranges, success status, and upcoming/past launches.

- Added a new LaunchesForm component with search and filtering capabilities
- Updated TypeScript interfaces to support expanded query options and pagination
- Integrated the form into the launches page with state management

- Author: (BokiThe)
- Time spent: 2h
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/5)

[6.0] - 22-08-2025

### 6) Favorite page

- Description:

- This PR implements a favorites system with Zustand state management and local storage persistence. The implementation allows users to mark launches as favorites and view them on a dedicated favorites page.

- Replaced manual localStorage handling with Zustand store for better state management
- Refactored useFavorites hook to use the new store pattern
- Added a dedicated favorites page with proper loading and error states

- Author: (BokiThe)
- Time spent: 2h
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/6)

[7.0] - 25-08-2025

### 7) Single launch page (feat/single-launch)

- Description: Implemented a server-rendered launch detail page at `/launches/[id]` that shows a hero image, Flickr image gallery, external links, and related rocket & launchpad sections. Added client-side favorite controls (`FavoriteToggle` + `FavoriteButton`) wired to the existing Zustand persisted favorites store so users can add/remove favorites from the detail page. Included API helper functions to fetch individual resources and updated layout/home components to surface the new detail view.

- ADDED

  - server page rendering launch details and hero image selection
  - FavoriteToggle, LaunchLinks, RocketSection, LaunchpadSection, other detail UI
  - Favorite button
  - `src/components/LaunchCard/LaunchCard.tsx` (styling and small behavior tweaks)
  - `src/api/launches.ts` (added `fetchLaunchById`, `fetchRocketById`, `fetchLaunchpadById`)
  - `src/stores/favoritesStore.ts` (store tweaks / persisted behavior)
  - Layout and home page improvements
  - Footer styling/content
  - added `images.remotePatterns` to allow Flickr/Imgur image hosts for `next/image`

- Author: (BokiThe)
- Time spent: 2h 30m (estimate)
- Notes:

  - The detail page is implemented as a Server Component to improve initial load and SEO; interactive favorite toggle is client-only and intentionally defers reading the persisted store until mount to avoid hydration mismatches.
  - The app now allows `next/image` to optimize third-party images from `*.staticflickr.com` and Imgur via `remotePatterns`.
  - Introduced a reusable `FavoriteButton` component and improved the LaunchCard styling for better responsiveness.

- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/7)

[8.0] - 26-08-2025

### 8) Added the CHANGELOG and updated README

- ADDED

- CHANGELOG

- UPDATED
- README file

- Author: (BokiThe)
- Time spent: 20min
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/8)

[9.0] - 26-08-2025

### 9) added the ssr to launches page

- UPDATED

- This PR adds server-side rendering (SSR) support to the launches page, replacing the previous client-side data fetching approach with Next.js server components and actions.

- Migrated from client-side React Query implementation to SSR with server actions
- Replaced the useLaunches hook with a server action for fetching launches data
- Added proper loading and error handling components for the launches route

- Author: (BokiThe)
- Time spent: 2h 30min
- Ticket / PR: [#PR](https://github.com/BokiThe/SpaceX-explorer/pull/8)
