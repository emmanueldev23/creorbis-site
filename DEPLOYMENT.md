# Deploying CREORBIS (when you approve)

Nothing here is done yet. Local build first: `npm run build && npm run preview`.

## 0. Before anything
- Read Netlify's current free-plan terms and confirm commercial use and that signup needs no card. Stop if either is not true and tell Claude.
- Set `formAccessKey` (Web3Forms), `contactEmail` and optionally `whatsapp` in `src/config/site.ts`. Send a test enquiry locally.
- Replace the interim logo crops in `public/brand/` with the official files.

## 1. GitHub
Create a private repo, then: `git init`, `git add .`, `git commit -m "Initial site"`, add the remote, `git push`. `.gitignore` already excludes node_modules and dist.

## 2. Netlify
Import the repo. Build command `npm run build`, publish directory `dist` (already in `netlify.toml`). Confirm the preview URL works on phone and desktop.

## 3. Domain (creorbis.com)
In Netlify: Domain management, add `creorbis.com`. Netlify then shows the exact DNS records or nameservers to use. Enter them at your registrar. Do not guess records. DNS can take from minutes to hours.

## 4. Verify after launch
- https://creorbis.com loads over HTTPS (Netlify issues the certificate automatically once DNS resolves).
- `/sitemap-index.xml` and `/robots.txt` load.
- Submit a real test enquiry and confirm it arrives.
- Run Lighthouse on the live URL.

## Updating
Edit content in `src/config/site.ts` and `src/data/posts.ts`, commit and push. Netlify rebuilds automatically.
