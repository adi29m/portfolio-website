# Aditya's portfolio

A three-page portfolio inspired by the restrained typography, borders, and layout of akramcodez.com. Built with Next.js App Router, React, TypeScript, and CSS Modules. All pages export as static files.

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. In PowerShell, use `npm.cmd` if script execution policy prevents running `npm`.

## Edit your content

`src/data/portfolio.ts` contains the name, subtitle, biography, current status, experience, and all four projects. Edit that file to update the site. Project order follows the array order; work entries are ordered by their starting date, newest first.

- `profile.email` and `profile.linkedin` are intentionally empty. Set them to your preferred public details to show those sidebar links.
- The name comes from your connected GitHub profile. The biography is a draft based on your supplied experience and projects.
- Work dates use `YYYY-MM`. An omitted end date displays `Present`.
- Projects accept optional `liveUrl`, `sourceUrl`, and `videoUrl` values. Missing links are omitted rather than sending visitors to an empty target.
- Striff Studio links to its live Vercel site. Its repository still reported private during implementation, so the source link is omitted until it is publicly accessible.
- Project screenshots live in `public/images`. Replace an image and update its descriptive alternative text in the content file.
- About uses your two supplied artworks in `public/images/about-light.png` (cobalt) and `about-dark.png` (black and white). `ThemeArt` follows the header toggle and the saved theme without cropping the images. Replace these files to change the artwork.

Design colors are in `src/app/globals.css`. Layout and component styling are in `src/components/portfolio.module.css`. The theme toggle saves a visitor's choice in local storage; light is the initial default.

## Validate and preview the static export

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

Stop the development server before running the preview on port 3000, or set `PORT` to another port. The export is written to `out/`. The preview server binds only to the local machine. No deployment, database, API keys, or backend are required.

Pages: `/`, `/work/`, `/projects/`, plus a custom 404. No blogs, support page, live GitHub contribution API, or contact form is included.

## GitHub and Vercel

The private GitHub repository is `adi29m/portfolio-website`. The Vercel project is `portfolio-website` under `adi29ms-projects`. Vercel builds the Next.js static export from source using its Next.js adapter. Deployments currently use the Vercel CLI; automatic GitHub deployments are not connected because Vercel could not access the private repository.

To publish updates after validation, push your changes to GitHub and run `vercel deploy --prod --scope adi29ms-projects` from the linked project directory. To enable automatic deployments later, grant the Vercel GitHub integration access to this repository and connect it in the project's Git settings.

The local `.vercel/` project link, environment files, build output, and verification artifacts are excluded from Git. `.vercelignore` also keeps local verification artifacts and temporary source previews out of CLI uploads.

## Assets and content sources

- Rep Tracker and Musify: screenshots captured from your published applications.
- Carbon Ledger: `docs/screenshots/overview.png` from your repository; it shows fictional demonstration data.
- Striff Studio: screenshot rendered locally from your existing HTML/CSS/JavaScript repository. Temporary preview source is in ignored `artifacts/`, not the exported site.
- About artwork: your supplied “Cobalt celestial vortex over engraved landscape” and “Ancient Gazer Beneath the Cosmic Vortex” images, copied without modifying the originals.
- Inter, IBM Plex Mono, and Dancing Script: self-hosted through Fontsource packages. Page rendering does not depend on Google Fonts requests.

Project copy is based on the repository READMEs. Carbon Ledger is described as evidence preparation, without claiming regulatory certification. The portfolio does not reuse the reference owner's biography, achievements, or imagery.
