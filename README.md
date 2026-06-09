# Adebissy's Pastries

Adebissy's Pastries is a responsive single-page storefront built with React, TypeScript, and Vite. It presents the bakery brand, showcases featured products in an auto-scrolling carousel, and lets customers place orders quickly through WhatsApp, phone, Instagram, or TikTok.

## What It Does

The site is structured as a smooth-scrolling landing page with these sections:

- A sticky navigation bar with section links and a WhatsApp order button.
- A hero section with a rotating pastry image carousel and a primary call to action.
- A featured products carousel with individual product cards and an order modal.
- An about section describing the bakery.
- A reasons-to-choose-us section highlighting pricing, freshness, and ease of ordering.
- A delivery information section covering service areas and opening hours.
- A final order call-to-action and a contact-focused footer.

## Key Features

- Responsive layout for mobile, tablet, and desktop.
- Animated entrances powered by AOS.
- Horizontal product carousel with mouse, touch, wheel, and keyboard support.
- WhatsApp ordering flow prefilled with product and quantity details.
- Social and contact links for WhatsApp, phone, Instagram, TikTok, GitHub, LinkedIn, and email.
- Bakery assets and product photos loaded from the public folder.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- AOS for scroll animations
- Bootstrap Icons
- Styled Components is installed, though the UI is currently styled primarily with Tailwind utility classes

## Project Structure

- `src/main.tsx` boots the app and imports global styles.
- `src/App.tsx` composes the page sections and initializes AOS.
- `src/Navbar.tsx` handles navigation visibility, section scrolling, and the top-level order button.
- `src/HeroSection.tsx` renders the hero content and rotating image slider.
- `src/ProductSection.tsx` renders the featured products carousel and the WhatsApp order modal.
- `src/Product.tsx` defines the product card UI.
- `src/About.tsx`, `src/WhyChooseUs.tsx`, `src/DeliveryInformation.tsx`, `src/OrderSection.tsx`, `src/Footer.tsx`, and `src/DevelopedBy.tsx` make up the rest of the landing page.
- `public/` stores the bakery images, logo, icons, favicon, and other static assets.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Vite will start a local development server and show the URL in the terminal.

### Build for Production

```bash
npm run build
```

This runs the TypeScript build and creates an optimized production bundle.

### Preview the Production Build

```bash
npm run preview
```

### Lint the Codebase

```bash
npm run lint
```

## Customization Notes

- Update the WhatsApp phone number and default messages in `Navbar.tsx`, `HeroSection.tsx`, `OrderSection.tsx`, `Footer.tsx`, and `ProductSection.tsx` if the ordering contact changes.
- Replace the product images and bakery photos in `public/` to match your current menu or branding.
- The product list in `ProductSection.tsx` is the main place to add, remove, or rename featured items.

## Notes

- The project is currently set up as a front-end storefront only; orders are sent through external contact channels rather than an internal checkout system.
- If you deploy the site, make sure the static assets in `public/` are included so the hero, product, and footer imagery load correctly.
