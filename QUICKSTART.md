# 🚀 QUICK START GUIDE
## Get Your Restaurant Online in 10 Minutes

---

## ⚡ Super Quick Deploy (5 Commands)

```bash
# 1. Extract the project
tar -xzf restaurant-mvp-complete.tar.gz
cd restaurant-ordering-mvp

# 2. Install dependencies
npm install

# 3. Test locally (optional)
npm run dev
# Visit http://localhost:3000

# 4. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/restaurant-mvp.git
git push -u origin main

# 5. Deploy on Vercel
# Go to vercel.com → Import GitHub repo → Deploy
```

**That's it! You're live! 🎉**

---

## 📝 Minimal Customization (Before Launch)

### 1. Update Restaurant Info

**File**: `src/app/contact/page.tsx`

Find and replace:
```typescript
// Line 23-25 (Arabic)
<p className="text-gray-600" dir="ltr">+965 1234 5678</p>  // ← Your phone
<p className="text-gray-600" dir="ltr">+965 9876 5432</p>  // ← Your WhatsApp
<p className="text-gray-600">info@restaurant.com</p>        // ← Your email

// Line 73-75 (English) - Same changes
```

### 2. Update Working Hours

**File**: `src/data/config.ts`

```typescript
export const RESTAURANT_CONFIG = {
  workingHours: {
    open: '10:00',  // ← Your opening time
    close: '23:00', // ← Your closing time
  },
  deliveryHours: {
    open: '11:00',  // ← Delivery start
    close: '22:30', // ← Delivery end
  },
  timeSlotInterval: 30, // Keep as 30 minutes
  defaultDeliveryFee: 1.000, // ← Your base delivery fee (KWD)
};
```

### 3. Test WhatsApp Integration

**File**: `src/app/confirmation/page.tsx`

For testing, uncomment line 50:
```typescript
// Replace this line:
const phoneNumber = whatsappNumber.startsWith('965') ? whatsappNumber : `965${whatsappNumber}`;

// With your test number:
const phoneNumber = '96550001234'; // ← Your WhatsApp for testing
```

**After testing, revert to user's number for production!**

---

## 🎨 Optional Customizations

### Add Your Logo

1. Add logo image to `public/logo.png`
2. Edit `src/components/Header.tsx`:

```typescript
// Replace line 16
<Link href="/" className="text-2xl font-bold">
  {t('header.title')}
</Link>

// With:
<Link href="/" className="flex items-center gap-2">
  <Image src="/logo.png" alt="Logo" width={40} height={40} />
  <span className="text-2xl font-bold">{t('header.title')}</span>
</Link>
```

### Change Theme Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: '#000000',   // ← Your brand color
  secondary: '#FFFFFF', // ← Secondary color
  accent: '#1a1a1a',    // ← Accent color
},
```

### Update Menu Items

**File**: `src/data/menu.ts`

Add your products:
```typescript
{
  id: 'your-product-001',
  name: 'اسم المنتج',
  nameEn: 'Product Name',
  description: 'وصف المنتج',
  descriptionEn: 'Product description',
  price: 3.500, // KWD
  image: 'https://your-image-url.com/image.jpg',
  category: 'burgers', // or pizza, pasta, salads, drinks, desserts
  available: true,
}
```

**Tip**: Use [Unsplash](https://unsplash.com) for free product images.

### Update Delivery Areas

**File**: `src/data/locations.ts`

Adjust delivery fees:
```typescript
{ 
  id: 'salmiya', 
  name: 'السالمية', 
  nameEn: 'Salmiya', 
  deliveryFee: 1.000  // ← Change this
},
```

---

## 🧪 Testing Checklist

### Desktop Testing
```
□ Visit http://localhost:3000
□ Browse menu
□ Add items to cart
□ Go through checkout
□ Test both delivery and dine-in
□ Change language (AR ↔ EN)
□ Verify WhatsApp button works
```

### Mobile Testing
```
□ Open on iPhone/Android
□ Test touch interactions
□ Check RTL layout (Arabic)
□ Test WhatsApp redirect
□ Verify cart floating button
□ Test sticky category bar
```

---

## 🐛 Common Issues & Fixes

### Issue: Build fails with "Module not found"
```bash
# Solution: Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Issue: Images not showing
```typescript
// next.config.js - Add your image domain
images: {
  domains: [
    'images.unsplash.com',
    'your-cdn.com',  // ← Add this
  ],
},
```

### Issue: WhatsApp link does nothing
**Desktop**: WhatsApp Web must be open
**Mobile**: WhatsApp app must be installed

### Issue: Arabic text looks wrong
**Solution**: Font not loading. Check internet connection or use system fonts:
```typescript
// tailwind.config.ts
fontFamily: {
  arabic: ['Tahoma', 'system-ui', 'sans-serif'], // Fallback fonts
},
```

---

## 📱 Launch Day Checklist

```
Day Before:
□ Test on multiple devices (iOS, Android, Desktop)
□ Verify all phone numbers are correct
□ Check all menu items and prices
□ Test delivery areas and fees
□ Review privacy policy and terms
□ Share with staff for training

Launch Day:
□ Monitor Vercel dashboard for errors
□ Test first real order (friends/family)
□ Check WhatsApp is receiving orders
□ Monitor website performance
□ Have support phone ready

First Week:
□ Gather user feedback
□ Fix any reported issues
□ Update menu if needed
□ Monitor order completion rate
```

---

## 🆘 Need Help?

### Documentation
- Full docs: `README.md`
- Deployment guide: `DEPLOYMENT.md`
- Project overview: `PROJECT_SUMMARY.md`

### Technical Support
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs

### Community
- Next.js Discord: https://nextjs.org/discord
- Stack Overflow: Tag `next.js`

---

## 🎉 You're Ready!

Your restaurant is now online with:
- ✅ Secure ordering system
- ✅ Mobile-optimized design
- ✅ Arabic & English support
- ✅ WhatsApp integration
- ✅ Zero monthly costs (Vercel free tier)

**Go live and start accepting orders! 🚀**

---

*Need advanced features? Check PROJECT_SUMMARY.md for upgrade path to database, payments, and admin dashboard.*
