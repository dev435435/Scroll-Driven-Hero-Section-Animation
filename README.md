
# Welcome Itzfizz: scroll-driven car hero

Next.js (React) + Tailwind CSS + GSAP ScrollTrigger.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to GitHub Pages
1. Create a GitHub repo and push this project to `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. The included workflow builds a static export and publishes it at
   `https://<username>.github.io/<repo>/`.

## How the motion works
- **Intro** (`components/Hero.jsx`): one GSAP timeline staggers the headline letters, drops the car in, then reveals the four stats one by one with a count-up.
- **Scroll**: a `ScrollTrigger` timeline with `scrub: 1` ties the car's position, scale and rotation to scroll progress (the extra smoothing is the easing). The hero is pinned with CSS `position: sticky`, so no scroll listeners run.
- **Performance**: only `transform` and `opacity` are animated; the lane markings are a single element translated in whole dash periods so the loop is seamless.
- **Accessibility**: with `prefers-reduced-motion`, all animation is skipped and the static layout is shown.
=======
# Scroll-Driven-Hero-Section-Animation
Scroll-Driven Hero Section Animation
>>>>>>> 12c38441e1c96ac551a289a0413598e9128f1b0e
