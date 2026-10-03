# Aditya's portfolio

A three-page portfolio inspired by the restrained typography, borders, and layout of akramcodez.com. Built with Next.js App Router, React, TypeScript, and CSS Modules. Pages are prerendered; the About page refreshes its public GitHub contribution calendar hourly using Next.js incremental static regeneration on Vercel.

## Edit your content

`src/data/portfolio.ts` contains the name, subtitle, biography, current status, experience, and all four projects. Edit that file to update the site. Project order follows the array order; work entries are ordered by their starting date, newest first.

- `profile.email` and `profile.linkedin` are intentionally empty. Set them to your preferred public details to show those sidebar links.
- The name comes from your connected GitHub profile. The biography is a draft based on your supplied experience and projects.
- Work dates use `YYYY-MM`. An omitted end date displays `Present`.
- Projects accept optional `liveUrl`, `sourceUrl`, and `videoUrl` values. Missing links are omitted rather than sending visitors to an empty target.
- Striff Studio links to its live Vercel site. Its repository still reported private during implementation, so the source link is omitted until it is publicly accessible.
- Project screenshots live in `public/images`. Replace an image and update its descriptive alternative text in the content file.
- About uses lossless WebP versions of your supplied artworks in `public/images/about-light.webp` (cobalt) and `about-dark.webp` (black and white). Both retain every decoded pixel at the original 1774 × 887 resolution. `ThemeArt` bypasses Next.js resizing and recompression for these two images; project images still use responsive optimization. Static imports provide tiny blur previews and content-hashed URLs with immutable caching. The theme initialization script preloads only the selected artwork on an initial homepage visit; the hidden variant loads when its theme is selected. Replace these files to change the artwork.

Design colors are in `src/app/globals.css`. Layout and component styling are in `src/components/portfolio.module.css`. The theme toggle saves a visitor's choice in local storage; light is the initial default.

## Validate and preview the production build

```sh
npm run lint
npm run typecheck
npm run test:calendar
npm run build
npm run preview
```

Stop the development server before running the preview on port 3000, or set `PORT` to another port. The production build is written to `.next/`. The preview server binds only to the local machine. No database or API keys are required. The contribution calendar reads the publicly visible calendar from GitHub on the server, caches it for an hour, and shows the last three months with daily hover counts. Regeneration errors preserve the last successfully rendered page; an unavailable or changed data source never produces invented contribution counts.

Pages: `/`, `/work/`, `/projects/`, plus a custom 404. No blogs, support page, or contact form is included.

## GitHub and Vercel

The private GitHub repository is `adi29m/portfolio-website`. The live site is https://portfolio-website-inky-five-45.vercel.app. The Vercel project is `portfolio-website` under `adi29ms-projects`. Vercel builds Next.js from source using its Next.js adapter, including the hourly About page regeneration. Deployments currently use the Vercel CLI; automatic GitHub deployments are not connected because Vercel could not access the private repository.

To publish updates after validation, push your changes to GitHub and run `vercel deploy --prod --scope adi29ms-projects` from the linked project directory. To enable automatic deployments later, grant the Vercel GitHub integration access to this repository and connect it in the project's Git settings.

The local `.vercel/` project link, environment files, build output, and verification artifacts are excluded from Git. `.vercelignore` also keeps local verification artifacts and temporary source previews out of CLI uploads.

## Assets and content sources

- Rep Tracker and Musify: screenshots captured from your published applications.
- Carbon Ledger: `docs/screenshots/overview.png` from your repository; it shows fictional demonstration data.
- Striff Studio: screenshot rendered locally from your existing HTML/CSS/JavaScript repository. Temporary preview source is in ignored `artifacts/`, not the exported site.
- About artwork: your supplied “Cobalt celestial vortex over engraved landscape” and “Ancient Gazer Beneath the Cosmic Vortex” images, losslessly encoded into WebP assets (about 2.74 MB light and 2.24 MB dark). This preserves detail but transfers more data than resized or lossy versions on a first visit. The original files in your assets folder are unchanged.
- Inter, IBM Plex Mono, and Dancing Script: self-hosted through Fontsource packages. Page rendering does not depend on Google Fonts requests.

Project copy is based on the repository READMEs. Carbon Ledger is described as evidence preparation, without claiming regulatory certification. The portfolio does not reuse the reference owner's biography, achievements, or imagery.
