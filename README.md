# Amorlex Marketing Website

A clean, static marketing website for Amorlex — a software company focused on building systems that help businesses operate better.

## Deployment

### GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select `main` branch and `/ (root)` folder
5. Click **Save**

Your site will be live at `https://[username].github.io/[repo-name]/`

For a custom domain:
1. Add a `CNAME` file with your domain (e.g., `amorlex.com`)
2. Configure DNS with your registrar

## Customization

### Update Contact Email

In `index.html`, find the contact section and update:

```html
<a href="mailto:alex@amorlex.com">alex@amorlex.com</a>
```

### Change Colors

In `css/styles.css`, modify the CSS custom properties at the top:

```css
:root {
  --color-bg: #fafafa;           /* Page background */
  --color-bg-alt: #f5f5f5;       /* Alternate section background */
  --color-text: #1f2937;         /* Body text */
  --color-text-muted: #6b7280;   /* Secondary text */
  --color-heading: #111827;      /* Headings */
  --color-accent: #2563eb;       /* Links and accent color */
  --color-accent-hover: #1d4ed8; /* Accent hover state */
  --color-border: #e5e7eb;       /* Borders and dividers */
}
```

## File Structure

```
/
├── index.html          # Main page with all content
├── css/
│   └── styles.css      # All styles, organized by section
├── js/
│   └── main.js         # Mobile menu, scroll animations
├── assets/
│   └── favicon.svg     # Browser tab icon (replace with yours)
└── README.md           # This file
```

## Features

- Fully responsive (mobile-first)
- Accessible (semantic HTML, keyboard navigation, screen reader friendly)
- Fast (no build step, minimal dependencies)
- Respects `prefers-reduced-motion` for users who prefer less animation
- Clean, maintainable code

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge (latest versions)
- Safari on iOS, Chrome on Android

## License

Content and design are proprietary to Amorlex LLC.
