# Premium Portfolio

A modern personal portfolio built with Next.js, React, Tailwind CSS, and Framer Motion.

## Run locally

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000)

## Customize content

Edit the placeholder portfolio content in `data/site.ts`:
- name, title, intro, about, email
- social links
- stats
- service cards
- projects and categories
- process steps
- testimonials

## Project structure

- `app/` App Router pages, metadata, and global styles
- `components/` Reusable portfolio sections and UI structure
- `data/site.ts` Central content source for easy editing

## Notes

- The contact form currently uses a front-end loading state only.
- Connect it later to Formspree, Resend, EmailJS, or a custom Next.js API route.
- Project thumbnails currently use Unsplash placeholders and can be swapped in `data/site.ts`.
