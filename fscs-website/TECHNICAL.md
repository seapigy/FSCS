# FSCS Website – Technical Documentation

## 1. Project Overview
This project is a modern, production-ready React + TypeScript website for The Foundation Supporting Climate Science (FSCS). It features a professional, academic design, full responsiveness, animated interactions, and is ready for deployment to Netlify, Vercel, or any static host.

## 2. Stack & Architecture
- **React 18** (with functional components and hooks)
- **TypeScript** (strict mode)
- **TailwindCSS** (utility-first CSS, custom config)
- **Framer Motion** (animations, microinteractions)
- **Lucide** (icon library)
- **React Router v6** (SPA routing)
- **Vite** (build tool, fast dev server)

### Directory Structure
```
fscs-website/
├── public/
├── src/
│   ├── components/   # Navbar, Footer, shared UI
│   ├── pages/        # Home, About, Leadership, Support, Contact
│   ├── App.tsx       # Main app, routing
│   ├── main.css      # Tailwind base, custom styles
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
└── ...
```

## 3. Key Dependencies
- `react`, `react-dom`, `react-router-dom`
- `typescript`
- `tailwindcss`, `postcss`
- `framer-motion`
- `lucide-react`
- `vite`

## 4. Routing & Page Structure
- **SPA** using React Router v6.
- All main pages are in `src/pages/` and registered in `src/App.tsx`.
- Navbar and Footer are persistent across all routes.
- Each page is a functional component, styled with Tailwind and animated with Framer Motion.

## 5. Animation & Microinteraction Patterns
- **Framer Motion** is used for:
  - Section/page fade-in, slide-in, and staggered entrance
  - Microinteractions: card hover (scale/shadow), button hover (scale/color), nav link underline
  - AnimatePresence is used for mobile menu transitions
- **Lucide** icons are used for callouts, info, and navigation
- Animations are accessible (respect reduced motion)

## 6. Theming & Customization
- **Colors**: Navy, Charcoal, Steel, Teal (see `tailwind.config.js`)
- **Typography**: Merriweather (serif) for headings, Open Sans for body
- **Section backgrounds**: alternate color, soft shadow, optional glassmorphism
- **SVG backgrounds/dividers**: can be added for further visual polish
- **Easily extendable**: add new pages/components, update theme in Tailwind config

## 7. Accessibility
- Semantic HTML, proper heading structure
- Keyboard navigable nav and forms
- Focus states and aria-labels where appropriate
- Sufficient color contrast
- Animations respect user motion preferences

## 8. Build & Deployment
- **Development**: `npm run dev` (Vite dev server)
- **Production build**: `npm run build` (outputs to `dist/`)
- **Preview build**: `npm run preview`
- **Deploy**: Upload `dist/` to Netlify, Vercel, or any static host

## 9. Extending the Project
- **Add a page**: Create a new file in `src/pages/`, add a route in `App.tsx`, and a link in `Navbar.tsx`
- **Add a component**: Place in `src/components/`, import where needed
- **Change theme**: Edit `tailwind.config.js` and `main.css`
- **Update content**: Edit the relevant page/component
- **Add icons**: Import from `lucide-react` and use as React components
- **Add/modify animations**: Use Framer Motion's `motion` components and variants

## 10. Developer Support
- For technical questions, open an issue in your repository or contact the maintainer.
- For FSCS-specific content, contact info@thefscs.org 

## 11. Hero Section Implementation
- Uses NASA "Sunrise from the Station" image (`public/hero-earth.jpeg`) as a background
- Not full-screen: fixed height (h-[60vh])
- Image positioned with backgroundPosition: 'center right 60%'
- Two overlays: semi-transparent black and right-to-left gradient for text clarity
- Headline split into two lines with <br />
- All text is accessible and readable over the image
- Image is served from the public folder for optimal performance and cacheability 

## 12. Troubleshooting & Maintenance
- All dependencies and scripts are managed inside `fscs-website/`.
- If you see duplicate `node_modules` or `package.json` files outside `fscs-website/`, you can safely delete them.
- Only the `fscs-website/` directory should contain your app and its dependencies. 