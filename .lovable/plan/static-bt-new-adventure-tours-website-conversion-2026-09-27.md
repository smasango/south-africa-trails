# Static BT New Adventure Tours website conversion

## Goal
Convert the current website into a self-contained static site that preserves its existing design, content, branding, responsive layouts, and interactions, ready to upload directly into `public_html/`.

## Static pages
- Recreate Home, About Us, Services, Tours, Attractions, Gallery, Request a Quote, Contact, Privacy Policy, Terms & Conditions, and Cookie Policy as standalone HTML files.
- Keep the current shared header, large logo, desktop/mobile navigation, footer, WhatsApp button, page banners, sections, cards, calls to action, and legal content.
- Use `.html` links throughout so every page works on ordinary shared hosting without rewrite rules.

## Styling and interactions
- Translate the current colour tokens, Manrope/Outfit typography, spacing, borders, shadows, hover effects, breakpoints, and reduced-motion behaviour into plain CSS.
- Recreate icons as local SVG assets or inline accessible SVG markup without external JavaScript libraries.
- Implement the mobile menu, current-page navigation state, gallery lightbox with Escape/backdrop closing, and accessible form validation in vanilla JavaScript.
- Keep enquiry forms honest: validate locally, then explain that email delivery requires a configured form endpoint rather than claiming an enquiry was received.

## Images and assets
- Copy the uploaded logo and eight supplied tour photographs into organised relative folders under `images/`, preserving practical source filenames while using clear website filenames where needed.
- Reuse the same image placements as the existing site; do not introduce stock or generated substitutes.
- Keep the favicon and all image references local and relative.
- The Windows `C:` folder is not accessible from this environment. The current upload set contains the logo and eight tour photos; any additional images from `images\\other` can be added later using the documented folder and replacement map.

## Search, accessibility, and performance
- Preserve unique titles, descriptions, Open Graph data, canonical URLs, semantic headings, alt text, schema data, sitemap, and robots file.
- Add visible focus states, keyboard-safe controls, accessible labels, ARIA states, and appropriate lazy loading.
- Keep CSS and JavaScript dependency-free and small enough for direct static hosting.

## Delivery and verification
- Replace the application source with the final static structure and update the project documentation for FTP/cPanel deployment.
- Add a custom static `404.html` and retain all eleven public content pages.
- Audit the static deliverable for forbidden framework/build references, broken links, missing assets, and absolute/development-only paths.
- Verify the main pages and interactions in desktop, tablet, and mobile browser sizes.
- Package a clean ZIP containing only the deployable static website, ready to extract and upload into `public_html/`.

## Technical details
- Final site files will use only HTML5, CSS3, vanilla ES6 JavaScript, local images, and local SVG icons.
- No React, TypeScript, JSX/TSX, Vite, npm, Node.js, router package, compilation, or server process will be required in the deliverable.
- Business values remain centralised in a small static JavaScript data object used for repeated phone, email, website, and WhatsApp values.
