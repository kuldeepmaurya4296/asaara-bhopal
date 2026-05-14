# 🕌 Bhopal Ashara Mubaraka — Relay Centre Portal

A premium, full-featured web portal for the **Bhopal Ashara Mubaraka Relay Centre** — serving the Dawoodi Bohra community with live relay updates, masjid information, accommodations, transport, volunteer coordination, and more.

> **Developed & Managed by [Fakhri IT Services](https://www.fakhriitservices.com/)**

--- 

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 **Homepage** | Hero slider, countdown timer, Ashara overview, masjid cards, services carousel, gallery & FAQ |
| 🕌 **Masjid Directory** | 4 verified Bhopal masjids (Haideri, Husaini, Badri, Burhani) with real Google Maps, images & details |
| 🏨 **Accommodations** | Hotels from 2★ to 5★ with WhatsApp booking links |
| 🚌 **Transport** | Rail, air, road & city transport guides |
| 📡 **Relay Zones** | 4 relay centre zones with full details |
| 🤝 **Volunteers** | 23 departments & community contacts |
| 🖼️ **Gallery** | Image gallery with lightbox viewer |
| ❓ **FAQ** | Frequently asked questions with accordion UI |
| 📧 **Contact Us** | Working SMTP contact form powered by Gmail |
| 📱 **WhatsApp Integration** | All booking links redirect to community WhatsApp |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 8, Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Routing** | React Router DOM v7 |
| **Smooth Scroll** | Lenis |
| **Icons** | Lucide React |
| **Backend (API)** | Express (local dev) / Vercel Serverless Functions (production) |
| **Email** | Nodemailer + Gmail SMTP |
| **Deployment** | Vercel |

---

## 📁 Project Structure

```
asaara-bhopal/
├── api/
│   └── contact.js           # Vercel serverless function (email API)
├── public/
│   ├── bhplLogo.png          # Application logo
│   ├── Fakhri_White.png      # Developer branding logo
│   └── ...                   # Other static assets & icons
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Fixed header with nav dropdown & mobile drawer
│   │   ├── Navbar.jsx        # Secondary navigation bar
│   │   ├── Footer.jsx        # Footer with quick contact form & dev branding
│   │   ├── HeroSlider.jsx    # Auto-sliding touch carousel
│   │   ├── CountdownTimer.jsx # Ashara countdown
│   │   ├── MasjidSection.jsx # Masjid cards with hero images
│   │   ├── ServicesGrid.jsx  # 12 Umoor responsive carousel
│   │   ├── Gallery.jsx       # Image gallery section
│   │   ├── FAQ.jsx           # FAQ accordion section
│   │   ├── SEO.jsx           # Dynamic meta tags
│   │   └── animations/       # FadeIn & motion utilities
│   ├── data/
│   │   ├── masjids.js        # 4 masjid entries with real data
│   │   ├── accommodations.js # Hotel data with WhatsApp links
│   │   ├── services.js       # 12 Umoor services
│   │   └── about.js          # About page content
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MasjidPage.jsx    # Dynamic /masjid/:slug detail page
│   │   ├── UmoorPage.jsx     # Dynamic /umoor/:slug detail page
│   │   ├── ContactPage.jsx   # Contact form with SMTP integration
│   │   ├── AboutPage.jsx
│   │   ├── AccommodationsPage.jsx
│   │   ├── TransportPage.jsx
│   │   ├── RelayZonesPage.jsx
│   │   ├── VolunteersPage.jsx
│   │   ├── GalleryPage.jsx
│   │   └── FAQPage.jsx
│   └── App.jsx               # Routes & layout
├── server.js                  # Local Express dev server (reuses api/contact.js)
├── vercel.json                # Vercel deployment configuration
├── vite.config.js             # Vite config with API proxy
├── .env                       # Environment variables (EMAIL_USER, EMAIL_PASS)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ installed
- **npm** v9+
- Gmail account with [App Password](https://support.google.com/accounts/answer/185833) enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/kuldeepmaurya4296/asaara-bhopal.git
cd asaara-bhopal

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
EMAIL_USER=bhopalashararelay@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

### Run Locally

```bash
npm run dev
```

This starts **both** the Vite frontend (port 5173) and the Express backend (port 5000) concurrently.

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment (Vercel)

This project is optimized for **Vercel** deployment with zero configuration:

1. Push to GitHub
2. Import the repo in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables in Vercel:
   - `EMAIL_USER` → your Gmail address
   - `EMAIL_PASS` → your Gmail App Password
4. Deploy — Vercel auto-detects the `api/` directory as serverless functions

The `vercel.json` handles:
- `/api/*` → Serverless Functions (Nodemailer)
- `/*` → SPA with `index.html` fallback (React Router)

---

## 📧 Email Integration

The application uses **Nodemailer** with Gmail SMTP for two contact forms:

| Form | Location | Subject Line |
|---|---|---|
| **Contact Page** | `/contact` | User-provided subject |
| **Footer Quick Contact** | Every page (footer) | "Quick Contact Form" |

Emails are sent **to** the configured `EMAIL_USER` with the visitor's details, and `Reply-To` is set to the visitor's email for easy response.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Starts Vite + Express backend concurrently |
| `build` | `npm run build` | Builds production frontend bundle |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint |

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Emerald Dark** | `#0d4a3a` |
| **Gold** | `#d4a843` |
| **Cream** | `#faf6ef` |
| **Charcoal** | `#2d2d2d` |
| **Font Heading** | Playfair Display |
| **Font Body** | Inter |

---

## 📞 Contact

- **Phone:** +91 89826 75004
- **Email:** bhopalashararelay@gmail.com
- **WhatsApp:** [Chat Now](https://wa.me/918982675004?text=Hello)

---

<p align="center">
  <strong>Developed & Managed by <a href="https://www.fakhriitservices.com/">Fakhri IT Services</a></strong>
</p>
