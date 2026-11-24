# Poshbee Eventz n’ Bridals — website

Rebuild of poshbeevents.com.ng (formerly WordPress + Elementor) with Next.js 16, React 19, TypeScript and Tailwind CSS v4.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

```
src/
  app/                 routes (App Router)
    page.tsx           home
    about/             about + CEO, mission, vision
    blog/              journal list + blog/[slug] posts
    contact/           contact details, map, enquiry form
    sitemap.ts robots.ts not-found.tsx icon.jpg
  components/          Header, Footer, PageHero, CtaBanner, ContactForm, WhatsAppFab, BrandIcons
  content/             ALL editable content lives here
    site.ts            phone, email, address, socials, nav
    services.ts        services + event types
    testimonials.ts
    posts.ts           blog posts (add an object to publish a post)
public/images/         photos and logo
```

## Notes

- Old WordPress URLs redirect permanently (`/about-us`, `/contact-us`, `/YYYY/MM/DD/slug`), so no links break or SEO is lost.
- The enquiry form needs no backend: it opens WhatsApp or the visitor's email app with the details pre-filled.
- SEO: per-page metadata, Open Graph, sitemap.xml, robots.txt and EventPlanner JSON-LD.
- Deploy: push to GitHub and import into Vercel (zero config), then point the domain's DNS at it.
