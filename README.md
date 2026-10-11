# Solarshop Website — Client Guide & Documentation

A fast, responsive, production-ready website for **Solarshop** built with **Next.js 14+ (App Router, TypeScript)** and **Tailwind CSS**.

---

## ☀️ Quick Start

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in your configuration:
- `RESEND_API_KEY`: Your API key from [Resend](https://resend.com) (starts with `re_`)
- `CONTACT_TO_EMAIL`: The inbox that receives customer quote requests (e.g., `hello@solarshop.com.au`)

> **Note**: In local development without an API key, form submissions are logged to the console and return success for effortless testing.

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 How to Update Site Content (Non-Developer Friendly)

All copy, navigation links, company numbers, stats, and FAQs are centralized in a single file so you never need to touch complex code.

### 📝 Updating Text & Copy
Open `data/site.ts`:
- **Company Info**: Change phone number, email, address, trading hours, and ABN in `company`.
- **Navigation**: Add or edit header menu items in `navigation`.
- **Hero & Trust**: Update headline, lead paragraph, and warranty claims in `hero` and `trustStrip`.
- **Calculator**: Adjust the average savings multiplier, base price, or default bill in `calculator`.
- **Solutions & Bento**: Modify titles, descriptions, and feature bullets in `solutions.items`.
- **Why Solarshop & Stats**: Update the installed systems count, MW deployed, or pillars in `whySolarshop`.
- **Process Steps**: Update the 4 roadmap steps in `howItWorks.steps`.
- **FAQs**: Add or revise accordion questions and answers in `faq.items`.
- **Contact Details**: Update interest dropdown options in `contact.interests`.

---

## 🖼️ Updating Images & Photography

All external imagery is managed in `data/images.ts`:

1. Open `data/images.ts`.
2. Locate the slot you want to update (e.g., `hero`, `solutions.residential`, `projects`, etc.).
3. Replace the `url`, `alt`, and `photographer` fields with your new image.
4. If using a new image provider outside of Unsplash or Pexels, ensure the domain is added to `next.config.ts` under `images.remotePatterns`.

### Brand Imagery Rules
- Daylight only (warm sun, natural blue sky, green foliage).
- No dark moody filters or overcast grey tones.
- No third-party corporate watermarks.

---

## 🏷️ Updating the Company Logo

The Solarshop logo is located in:
```
public/Likley_Logo.png
```
- To swap the logo, replace `public/Likley_Logo.png` with your new transparent PNG or SVG.
- Keep the aspect ratio approximately 3:1 for optimal header and footer alignment.
- The footer automatically places the logo inside a soft ivory (`#fbf7ea`) container to maintain brand contrast on dark earth backgrounds.

---

## 🚀 Deployment to Vercel

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your Solarshop repository.
4. Under **Environment Variables**, add:
   - `RESEND_API_KEY`: Your Resend production API key
   - `CONTACT_TO_EMAIL`: `hello@solarshop.com.au` (or client inbox)
5. Click **Deploy**. Vercel will build and launch your site with zero manual configuration.

---

## 📂 Project Architecture

```
solarshop/
├── app/
│   ├── api/contact/route.ts  # Serverless contact form email handler with honeypot
│   ├── globals.css           # Tailwind v4 theme tokens & organic palette
│   ├── layout.tsx            # Plus Jakarta Sans + Fraunces fonts & SEO metadata
│   ├── page.tsx              # Assembled homepage
│   ├── robots.ts             # Search engine robot crawler directives
│   └── sitemap.ts            # Dynamic XML sitemap generator
├── components/
│   ├── Header.tsx            # Dynamic blurred navigation & mobile drawer
│   ├── Hero.tsx              # Full-height hero with lead CTAs and daylight visual
│   ├── SavingsCalculator.tsx # Interactive client savings slider (40-800 bill)
│   ├── TrustStrip.tsx        # 5 certified installer trust badges
│   ├── Solutions.tsx         # 6-column Bento grid with 4 pastel palettes
│   ├── WhySolarshop.tsx      # Forest green section with sun circle & stats
│   ├── HowItWorks.tsx        # 4 numbered process cards with distinct colors
│   ├── Projects.tsx          # 3 solar case studies with photo showcases
│   ├── Testimonial.tsx       # Goldtint section with Fraunces italic quote
│   ├── FaqSection.tsx        # Accessible accordion with keyboard navigation
│   ├── ContactSection.tsx    # Consultation form with validation & honeypot
│   └── Footer.tsx            # Earth background with ivory logo box & links
├── data/
│   ├── images.ts             # Live verified photos, alt text, and licenses
│   └── site.ts               # Client-editable copy and content dictionary
├── public/
│   └── Likley_Logo.png       # Original brand logo
├── .env.example              # Template environment variables
└── README.md                 # Client handbook
```
