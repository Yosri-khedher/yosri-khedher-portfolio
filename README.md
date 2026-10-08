# Yosri Khedher — NFC Portfolio

A mobile-first personal portfolio designed for an NFC digital business card.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For a production check:

```bash
npm run lint
npm run build
npm start
```

## Update content

- Profile, contact details, skills and languages: `src/data/profile.ts`
- Projects and their optional links: `src/data/projects.ts`
- Experience, leadership and certifications: `src/data/timeline.ts`
- CV PDF: put the real PDF at `public/cv/Yosri_Khedher_CV.pdf`

`url` is intentionally optional on each project. Add a GitHub or demo URL only once it is public; a non-invented disabled state appears in the interface until then. The current LinkedIn URL is stored in `src/data/profile.ts`.

## Deploy free on Vercel

1. Create a GitHub repository and push this folder.
2. Sign in to [Vercel](https://vercel.com) with GitHub and choose **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically; use the default build settings.
4. Add the project. Your portfolio receives a `*.vercel.app` URL immediately.
5. Add a custom domain in **Project → Settings → Domains** when you have one, then program the NFC card with the root URL only (for example `https://your-domain.com`).

The NFC card should store only the website URL. CV updates and portfolio edits then require no NFC reprogramming.
