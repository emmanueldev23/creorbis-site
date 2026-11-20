# CREORBIS website

Astro + TypeScript + Tailwind CSS v4. Static output, no backend.

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # outputs dist/
    npm run preview   # serve the production build

Edit company details, services and projects in `src/config/site.ts`.

## Before launch
- Replace `public/brand/symbol.png` and `wordmark.png` (interim crops from the brand board) with the official transparent logo files; add a flat SVG favicon.
- Set `contactEmail` in `src/config/site.ts` once a creorbis.com mailbox exists.
- The contact form validates only; no delivery is wired. Choose a form backend before launch.
- Hosting (planned): Netlify free plan. Verify its current terms and card requirement before deploying. `netlify.toml` and `public/_headers` are ready.
