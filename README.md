# Simon E. Azar | Portfolio

Premium portfolio website for Simon E. Azar — Marketing Strategist & Creative Marketer.

**Bold Ideas. Cultural Relevance. Marketing That Connects.**

## Tech Stack

- **Next.js 16** — React framework
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **GSAP + ScrollTrigger** — Scroll-triggered effects
- **Lenis** — Smooth scrolling

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
npm start
```

## Deploy on GitHub Pages

The repo includes a GitHub Actions workflow that builds and deploys on every push to `master`. Your site will be live at **https://01samber.github.io/portfolio-simon/** once the workflow completes.

## Deploy on Vercel

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Import your repository
4. Vercel will auto-detect Next.js — click **Deploy**
5. Your site will be live with a `.vercel.app` URL

For a custom domain (e.g. `simonazar.com`), add it in Project Settings → Domains.

## Customization

- **Metadata & SEO**: Edit `src/app/layout.tsx` for title, description, and Open Graph
- **Content**: Update section components in `src/components/`
- **Contact form**: Connect to an API or service (e.g. Formspree, Resend) in `src/components/Contact.tsx`
- **Favicon**: Replace `public/favicon.svg` with your own

## Sections

- Hero — Name, tagline, CTAs
- About — Introduction
- Skills — 10 core competencies
- Experience — Timeline (Freelance, You Experience MENA)
- Projects — 6 case studies (Crepaway, BOB Finance, Bobay, Modern Mills, Premier Animal Feed, Creme Cafe)
- Education — Bishmizzine High School, Notre Dame University
- Contact — Email, phone, Instagram, contact form
- Footer — Navigation, social links
