# Netflix UI — React + TypeScript Rebuild

[View live →](https://deeptiwari690.github.io/react-netflix-ui/)

A pixel-faithful rebuild of the Netflix India landing page — originally built with vanilla HTML, CSS, and JavaScript, now rebuilt with React and TypeScript.

## What's inside

- **Hero** — full-bleed background, lighting effects, email CTA form
- **Top 10 Carousel** — Swiper with custom prev/next controls, disabled state tracking
- **Value Props** — 4 feature cards, component-driven with props
- **FAQ Accordion** — expand/collapse with `useState`, accessible ARIA attributes
- **Footer** — links grid, language picker, reCAPTCHA disclosure toggle
- **Floating CTA** — fixed mobile button using `IntersectionObserver` + `useEffect`

## Tech stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **Swiper** — carousel library
- **ITCSS** — layered CSS architecture

## What I learned

- Component architecture — when to extract, when to keep flat
- Props — passing data down, destructuring, surgical prop design
- `useState` — local state for accordion, carousel, disclosure toggle
- `useRef` — accessing the Swiper instance from outside
- `useEffect` — running side effects after mount (IntersectionObserver)

## Getting started

```bash
npm install
npm run dev
```

## Status

Core UI complete. Card click popups (Top 10 section) not yet implemented.
