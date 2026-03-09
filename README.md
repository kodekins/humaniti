# Humaniti AI — Agency Website

A production-ready Next.js 14 website for Humaniti AI agency. Same editorial, brutalist aesthetic as the HTML prototype — rebuilt as a full-stack Next.js application with React components, TypeScript, Tailwind CSS, and a Node.js API backend.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env template
cp .env.local.example .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
humaniti-ai/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, Navbar, Footer)
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── services/page.tsx         # Services page (full detail)
│   ├── work/page.tsx             # Case studies / portfolio
│   ├── contact/page.tsx          # Contact form
│   └── api/
│       ├── contact/route.ts      # POST /api/contact (nodemailer + Airtable)
│       └── services/route.ts     # GET /api/services (services data)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky nav with mobile menu
│   │   └── Footer.tsx            # Site footer
│   ├── sections/
│   │   ├── Hero.tsx              # Homepage hero
│   │   ├── Marquee.tsx           # Acid-green marquee ticker
│   │   ├── ServicesPreview.tsx   # 6-card services grid
│   │   ├── Process.tsx           # 4-step process + AutoChain
│   │   ├── WorkPreview.tsx       # Case studies preview
│   │   └── CTABanner.tsx         # Acid CTA section
│   └── ui/
│       ├── Cursor.tsx            # Custom animated cursor
│       ├── FadeUp.tsx            # Scroll-triggered fade-up wrapper
│       ├── AutoChain.tsx         # Animated pipeline/chain component
│       └── SectionHeader.tsx     # Reusable section header
│
├── styles/
│   └── globals.css               # Design tokens, grain overlay, animations
│
├── tailwind.config.ts            # Custom colors, fonts, keyframes
├── tsconfig.json
├── next.config.js
├── .env.local.example
└── README.md
```

---

## 🎨 Design System

### Colors
| Token       | Hex       | Usage                    |
|-------------|-----------|--------------------------|
| `black`     | `#050505` | Background               |
| `offwhite`  | `#f5f0e8` | Body text                |
| `acid`      | `#c8ff00` | Accent, CTAs, highlights |
| `crimson`   | `#ff2d2d` | Trigger nodes, alerts    |
| `gray`      | `#1a1a1a` | Card backgrounds         |
| `gray2`     | `#2a2a2a` | Borders                  |
| `muted`     | `#6b6b6b` | Subdued text             |

### Typography
- **Display:** Bebas Neue — headlines, stats, numbers
- **Body:** DM Sans — paragraphs, descriptions
- **Mono:** JetBrains Mono — labels, badges, code-style elements

---

## ⚙️ Configuration

### 1. Email (Contact Form)
Install nodemailer if not already installed:
```bash
npm install nodemailer @types/nodemailer
```
Set env vars in `.env.local`:
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=hello@humanitiai.com
```
Then uncomment the email block in `app/api/contact/route.ts`.

### 2. Airtable CRM (optional)
Add submissions directly to your Airtable base:
```
AIRTABLE_API_KEY=your_key
AIRTABLE_BASE_ID=your_base_id
```
Uncomment the Airtable block in `app/api/contact/route.ts`.

---

## 📄 Pages

| Route        | Page              |
|--------------|-------------------|
| `/`          | Homepage          |
| `/services`  | Services (full)   |
| `/work`      | Case Studies      |
| `/about`     | About the Agency  |
| `/contact`   | Contact + Form    |

## 🔌 API Routes

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/contact`   | Contact form submission  |
| GET    | `/api/services`  | Services data (JSON)     |

---

## 🚢 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```
Add env vars in your Vercel project dashboard.

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🛠 Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 14 (App Router)             |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS + Global CSS           |
| Animation    | CSS keyframes + Framer Motion ready |
| Forms        | React state + Fetch API             |
| Backend API  | Next.js Route Handlers (Node.js)    |
| Email        | Nodemailer (SMTP)                   |
| Fonts        | Google Fonts (next/font)            |
| Deploy       | Vercel                              |

---

## 🔧 Customization Checklist

- [ ] Update agency name/branding in `components/layout/Navbar.tsx` and `Footer.tsx`
- [ ] Replace case study data in `app/work/page.tsx` with real client results
- [ ] Add team member photos in `app/about/page.tsx`  
- [ ] Configure email in `.env.local` and uncomment in API route
- [ ] Update `metadata` in `app/layout.tsx` with real SEO data
- [ ] Add Google Analytics / Posthog to `app/layout.tsx`
- [ ] Connect Airtable or CRM for lead capture
- [ ] Add real testimonials section
- [ ] Configure domain in Vercel dashboard

---

Built by Humaniti AI. © 2026 All rights reserved.
