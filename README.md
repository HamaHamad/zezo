# Restaurant Ordering MVP - Production-Ready

A secure, stateless, mobile-first restaurant ordering platform built with Next.js, TypeScript, and Tailwind CSS. Designed for deployment on Vercel with zero external dependencies.

## 🚀 Features

### Core Functionality
- **Bilingual Support**: Arabic (RTL) and English
- **Product Catalog**: Browse menu with categories, search, and filters
- **Shopping Cart**: Real-time cart management with quantity controls
- **Order Types**: Delivery or Dine-In options
- **Location Selection**: Kuwait governorates and areas with delivery fees
- **Time Slot Selection**: Dynamic delivery time slots based on restaurant hours
- **WhatsApp Integration**: Send orders directly via WhatsApp
- **Legal Compliance**: Privacy policy, terms & conditions, user consent

### Security Features
- ✅ **Stateless Architecture**: No database, no persistent storage
- ✅ **Client-Side Only**: All data processing in browser
- ✅ **Input Sanitization**: XSS and injection prevention
- ✅ **Session Storage**: Temporary data cleared on exit
- ✅ **HTTPS Only**: Secure communication headers
- ✅ **No Tracking**: No analytics, no third-party cookies

### Technical Highlights
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Black & white theme, mobile-first
- **Context API**: Clean state management
- **Future-Ready**: Service abstraction for Supabase integration
- **SEO Optimized**: Metadata and semantic HTML
- **PWA Ready**: Mobile app-like experience

## 📋 Prerequisites

- Node.js 18+ or Bun
- Git
- GitHub account
- Vercel account

## 🛠️ Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd restaurant-ordering-mvp

# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
restaurant-ordering-mvp/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page (menu)
│   │   ├── cart/               # Cart page
│   │   ├── checkout/           # Multi-step checkout
│   │   ├── review/             # Order review
│   │   ├── confirmation/       # Order confirmation
│   │   ├── privacy/            # Privacy policy
│   │   ├── terms/              # Terms & conditions
│   │   └── contact/            # Contact page
│   ├── components/             # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── FloatingCart.tsx
│   │   └── checkout/           # Checkout step components
│   ├── context/                # React Context providers
│   │   ├── CartContext.tsx     # Cart state management
│   │   └── LanguageContext.tsx # i18n support
│   ├── data/                   # Static data
│   │   ├── menu.ts             # Product catalog
│   │   ├── locations.ts        # Kuwait areas & delivery fees
│   │   ├── config.ts           # Restaurant configuration
│   │   └── translations.ts     # Arabic/English translations
│   ├── types/                  # TypeScript types
│   │   └── index.ts
│   └── utils/                  # Utility functions
│       └── security.ts         # Sanitization & validation
├── public/                     # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🔧 Configuration

### Restaurant Settings

Edit `src/data/config.ts`:

```typescript
export const RESTAURANT_CONFIG = {
  workingHours: {
    open: '10:00',
    close: '23:00',
  },
  deliveryHours: {
    open: '11:00',
    close: '22:30',
  },
  timeSlotInterval: 30, // minutes
  defaultDeliveryFee: 1.000, // KWD
};
```

### Menu Items

Edit `src/data/menu.ts` to add/modify products.

### Kuwait Locations

Edit `src/data/locations.ts` to update governorates, areas, and delivery fees.

### Translations

Edit `src/data/translations.ts` for Arabic/English text.

## 🚀 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: **Next.js**
   - Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment Variables

No environment variables needed for MVP! 🎉

## 🔒 Security Checklist

- [x] No database
- [x] No API keys
- [x] No persistent storage
- [x] Input sanitization
- [x] XSS prevention
- [x] HTTPS headers
- [x] No tracking/analytics
- [x] Session-only data
- [x] Kuwait phone validation
- [x] Safe WhatsApp redirect

## 📱 Mobile Optimization

- Responsive design (mobile-first)
- Touch-optimized buttons
- Safe area support (iOS notch)
- Fast loading times
- No external dependencies

## 🌐 RTL Support

- Full RTL layout for Arabic
- LTR layout for English
- Direction-aware components
- Proper text alignment

## 🔄 Future Roadmap (Not in MVP)

These features are architecturally prepared but not implemented:

- [ ] Supabase database integration
- [ ] User authentication
- [ ] K-Net payment gateway
- [ ] Admin dashboard
- [ ] Order tracking
- [ ] Push notifications
- [ ] Analytics integration

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Session Data Not Persisting

This is **by design**. All data is session-only for security.

### WhatsApp Not Opening

- Ensure WhatsApp is installed
- Check phone number format (+965XXXXXXXX)
- Test on actual mobile device

## 📄 License

Proprietary - All rights reserved

## 👥 Support

For support, contact: info@restaurant.com

---

**Built with ❤️ for Kuwait restaurants**
