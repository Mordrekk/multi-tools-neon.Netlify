# MultiTools Neon – Colorful & Modern Utility Hub

A stunning, neon-styled multi-tool web application built with pure HTML, CSS, and JavaScript. No frameworks, no backends, completely client-side.

## ✨ Features

- **10 Fully Functional Tools:**
  1. Percentage Calculator
  2. Word Counter
  3. Password Generator
  4. BMI Calculator
  5. Unit Converter (length, weight, temperature)
  6. Timer & Stopwatch
  7. Random Name Generator
  8. Text Case Converter
  9. Age Calculator
  10. Notes App (with localStorage persistence)

- **Dark/Light Mode Toggle** - Persisted via localStorage
- **Responsive Design** - Mobile-first approach
- **Smooth SPA Transitions** - No page reloads
- **Neon Cyberpunk Aesthetic** - Electric blue, neon pink, purple, cyan, lime colors

## 🚀 Quick Start

Simply open `index.html` in any modern browser - no build step required!

## ☁️ Deploy to Cloudflare Pages (Recommended)

1. Push this project to a GitHub/GitLab repository
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/) → Workers & Pages → Create → Pages
3. Connect your repository and configure:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
4. Click "Save and Deploy" — your site will be live in seconds!

**Included optimizations:**
- `_headers` — Security headers and long-lived caching for CSS/JS assets
- `_redirects` — Ready for custom redirect rules when needed
- `404.html` — Custom neon-themed error page

## ☁️ Deploy to Netlify

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect via GitHub:
   - Push to GitHub repository
   - Import in Netlify → Build settings → Publish directory: `/`

## 🌐 Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

## 📁 Project Structure

```
multitools-neon/
├── index.html      # Main HTML file
├── styles.css      # All styles (neon theme)
├── script.js       # All tool functionalities
├── 404.html        # Custom 404 error page
├── _headers        # Cloudflare Pages caching & security headers
├── _redirects      # Cloudflare Pages URL redirects
└── README.md       # This file
```

## 🎨 Design

- **Primary Colors:** Electric Blue #00d4ff, Neon Pink #ff00ff, Purple #9d00ff
- **Accent Colors:** Cyan #00ffff, Lime #39ff14
- **Dark Background:** #0a0a1a with glowing cards
- **Light Background:** #f0f0ff with neon accents
- **Font:** Orbitron (headings) & Poppins (body) via Google Fonts

## ⚡ Technical Details

- Pure HTML5, CSS3, ES6 JavaScript
- No external libraries or frameworks
- localStorage for persistence (theme + notes)
- Fully responsive (mobile-first)
- SEO optimized with semantic HTML

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---
Built with 💜 by MultiTools Neon