# Smartleads website

Marketing site for Smartleads, WhatsApp AI agents by Inferex Pvt Ltd. Plain HTML, CSS and a few lines of JavaScript: no build step, no dependencies.

- `index.html`, `styles.css`, `main.js`: the page
- `assets/logo.svg`: the robot logo (also the favicon)
- `vercel.json`: security headers (strict CSP, HSTS) and caching

Preview locally: `python3 -m http.server 8080` and open http://localhost:8080

Sign-in and sign-up buttons point to the platform at https://platform.smartleads.in. Deployment: connect this repository to a Vercel project (framework preset "Other", no build command, output directory `.`); every push to `main` deploys.
