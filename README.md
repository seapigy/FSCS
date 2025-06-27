# 🌍 FSCS Website

This is the official site of The Foundation Supporting Climate Science — a 501(c)(3) nonprofit promoting transparent, unbiased climate science.

Built with: React + TailwindCSS + Framer Motion + Lucide | Fully Responsive | Ready for Netlify/Vercel Deployment

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
The development server will start at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
This creates a `dist/` folder with optimized production files.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying

### Netlify Deployment
1. Connect your repository to Netlify
2. Set build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist/`
3. Deploy!

### Vercel Deployment
1. Connect your repository to Vercel
2. Framework preset: **React**
3. Build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/`
4. Deploy!

### Other Static Hosting
The `dist/` folder contains all static files ready for any static hosting service.

---

## 📁 Project Structure

```
fscs-website/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Responsive navigation
│   │   └── Footer.tsx      # Site footer
│   ├── pages/
│   │   ├── Home.tsx        # Home page
│   │   ├── About.tsx       # Mission and beliefs
│   │   ├── Leadership.tsx  # Team bios
│   │   ├── Support.tsx     # Donation page
│   │   └── Contact.tsx     # Contact form
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # React entry point
│   └── main.css            # Global styles
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

---

## 🛠️ Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animations and microinteractions
- **Lucide** - Icon library
- **Vite** - Build tool and dev server

### Key Features
- ✅ Fully responsive design (mobile-first)
- ✅ Modern scroll and entrance animations (Framer Motion)
- ✅ Microinteractions: card/button/nav hover, animated icons
- ✅ Professional typography (Merriweather + Open Sans)
- ✅ Custom color scheme (navy, charcoal, teal)
- ✅ Accessible navigation and forms
- ✅ Contact form (frontend only)
- ✅ Production ready

---

## 🎨 Design System

### Colors
- **Navy:** `#1e3a8a` - Primary brand color
- **Charcoal:** `#374151` - Text color
- **Steel:** `#64748b` - Secondary text
- **Teal:** `#0f766e` - Accent color

### Typography
- **Headings:** Merriweather (serif)
- **Body:** Open Sans (sans-serif)

### Animations & Interactions
- **Framer Motion** for fade, slide, staggered, and microinteractions
- **Lucide** icons for callouts, info, and navigation
- **Button/Nav/Card**: scale, shadow, underline, and color transitions
- **Section backgrounds**: alternating color, soft shadows, glassmorphism (optional)

---

## 📄 Content Pages

### Home (`/`)
- Hero section with NASA "Sunrise from the Station" image (`public/hero-earth.jpeg`), not full-screen height
- Image positioned off-center right, with dark overlay for text clarity
- Headline split across two lines: 'The Foundation Supporting' and 'Climate Science'
- Subtitle: 'Restoring trust and balance in the climate science debate.'
- What We Do overview
- Our Position on climate science
- Leadership preview cards
- Support CTA

### About (`/about`)
- Mission, beliefs, and policy concerns
- Animated, visually distinct sections

### Leadership (`/leadership`)
- Responsive cards with avatars
- Large headings, styled backgrounds

### Support (`/support`)
- 501(c)(3) nonprofit information
- Donation CTA
- Financial transparency details
- Tax information

### Contact (`/contact`)
- Enhanced contact form (Name, Email, Message)
- Organization information with icons
- Response time expectations

---

## 🧩 Customization

### Adding New Pages
1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Styling Changes
- Modify `tailwind.config.js` for theme changes
- Update `src/main.css` for global styles
- Use Tailwind utility classes for component styling

### Content Updates
- Edit content directly in page components
- Update placeholder text (EIN, contact info, etc.)
- Modify organization information as needed

---

## 📬 Contact Information

- **Email:** info@thefscs.org
- **EIN:** [Placeholder - Add actual EIN]
- **Status:** Registered 501(c)(3) nonprofit organization

---

## 📜 Legal & Compliance

- **Tax Status:** 501(c)(3) nonprofit
- **Donations:** Tax-deductible as allowed by law
- **Transparency:** 90%+ of funds granted annually
- **Reporting:** Annual financial reports available

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

© 2025 The Foundation Supporting Climate Science. All rights reserved.

---

## 🚀 Quick Deploy

Ready to deploy? The project is optimized for:
- **Netlify** - One-click deploy from Git
- **Vercel** - Automatic deployments
- **GitHub Pages** - Static hosting
- **Any static host** - Upload `dist/` folder

Just run `npm run build` and upload the `dist/` folder to your hosting service!

---

## 🛠️ Troubleshooting & Project Cleanliness
- All dependencies and scripts are managed inside `fscs-website/`.
- If you see duplicate `node_modules` or `package.json` files outside `fscs-website/`, you can safely delete them.
- Only the `fscs-website/` directory should contain your app and its dependencies.

---

## 🚧 Missing Information / To Be Completed
- **Donate Now button:** Destination/payment processor details needed
- **EIN number:** Actual EIN required for legal/tax display
- **Phone/address:** Contact phone number and mailing address needed
- **Contact form:** Specify the email or endpoint where messages should be sent
- **501(c)(3) status:** Final confirmation and documentation of nonprofit registration 