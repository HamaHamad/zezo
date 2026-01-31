# 🚀 DEPLOYMENT GUIDE

## Quick Start (5 Minutes)

### Prerequisites
- GitHub account
- Vercel account (free tier works)

---

## Step 1: Prepare Repository

### 1.1 Initialize Git (if not already done)
```bash
cd restaurant-ordering-mvp
git init
git add .
git commit -m "Initial commit: Production-ready MVP"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `restaurant-ordering-mvp`
3. **Private** or Public (your choice)
4. Do NOT initialize with README (already exists)
5. Click "Create repository"

### 1.3 Push Code to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/restaurant-ordering-mvp.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Method A: Vercel Dashboard (Recommended for Beginners)

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Click "Sign Up" or "Log In"
   - Use GitHub to authenticate

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `restaurant-ordering-mvp`
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)
   - **Environment Variables**: ❌ None needed!

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes ⏳
   - Your site is live! 🎉

### Method B: Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (will prompt for project settings)
vercel --prod

# Follow prompts:
# - Link to existing project? No
# - Project name: restaurant-ordering-mvp
# - Framework: Next.js
```

---

## Step 3: Post-Deployment

### 3.1 Test Your Deployment

Visit your Vercel URL (e.g., `https://restaurant-ordering-mvp.vercel.app`)

**Test Checklist**:
- [x] Home page loads
- [x] Categories filter works
- [x] Add products to cart
- [x] Cart shows correct totals
- [x] Proceed to checkout
- [x] Select delivery/dine-in
- [x] Choose location (if delivery)
- [x] Select time slot
- [x] Enter WhatsApp number
- [x] Accept terms & privacy
- [x] Review order
- [x] Confirm order
- [x] WhatsApp button works
- [x] Language toggle (AR ↔ EN)
- [x] RTL layout correct

### 3.2 Connect Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Go to your project
   - Settings → Domains
   - Add domain (e.g., `order.yourrestaurant.com`)

2. **Update DNS**:
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Wait for SSL certificate (automatic)

### 3.3 Configure WhatsApp Number

**Important**: Update the restaurant's WhatsApp number in the code

Edit `src/app/confirmation/page.tsx`:
```typescript
// Line ~50
const phoneNumber = whatsappNumber.startsWith('965') ? whatsappNumber : `965${whatsappNumber}`;

// Replace with your restaurant's WhatsApp number for testing
// const phoneNumber = '96550001234'; // Uncomment for testing
```

---

## Step 4: Maintenance & Updates

### Update Menu Items

1. Edit `src/data/menu.ts`
2. Commit changes:
```bash
git add src/data/menu.ts
git commit -m "Update menu items"
git push
```
3. Vercel auto-deploys in 2-3 minutes

### Update Delivery Areas

1. Edit `src/data/locations.ts`
2. Push changes (same as above)

### Update Translations

1. Edit `src/data/translations.ts`
2. Push changes

---

## Troubleshooting

### Build Failed on Vercel

**Error**: `Module not found` or `Type error`

**Solution**:
```bash
# Test build locally first
npm run build

# If it works locally, clear Vercel cache:
# In Vercel Dashboard → Settings → General → Clear Build Cache
```

### Images Not Loading

**Error**: Images showing broken

**Solution**:
- Check `next.config.js` → `images.domains`
- Add your image CDN domain
- Redeploy

### WhatsApp Link Not Working

**Checklist**:
- Phone number includes country code (965)
- WhatsApp is installed on device
- Test on actual mobile device, not desktop

### RTL Issues

**Problem**: Arabic text not displaying correctly

**Solution**:
- Check browser language settings
- Clear cache and hard reload (Ctrl+Shift+R)
- Verify `document.documentElement.dir` in DevTools

### Session Data Lost

**This is expected behavior!** Data is stored in `sessionStorage` which clears when:
- Browser tab closes
- Browser restarts
- User clears cache

---

## Performance Optimization

### Enable Vercel Analytics (Optional)

1. Go to Vercel Dashboard → Project → Analytics
2. Enable Web Analytics
3. Note: This adds tracking, ensure privacy policy reflects this

### Optimize Images

Replace placeholder images with:
- **WebP format** (smaller size)
- **Proper dimensions** (max 800x600px)
- **CDN hosting** (e.g., Cloudinary, Vercel Blob)

### Enable Caching

Vercel automatically caches static assets. No action needed.

---

## Security Checklist (Production)

- [x] HTTPS enabled (automatic with Vercel)
- [x] Security headers configured (`next.config.js`)
- [x] No API keys in code
- [x] Input sanitization active
- [x] No persistent data storage
- [x] Privacy policy accessible
- [x] Terms & conditions accessible

---

## Support & Monitoring

### Monitor Deployments

Vercel Dashboard → Your Project → Deployments
- View build logs
- Check deployment status
- Roll back if needed

### Error Reporting

Vercel automatically captures:
- Build errors
- Runtime errors (visible in dashboard)

### Performance Monitoring

Use Vercel Analytics or Google Lighthouse:
```bash
# Run Lighthouse locally
npx lighthouse https://your-site.vercel.app --view
```

---

## Next Steps (Beyond MVP)

When ready to upgrade:

1. **Add Database** (Supabase):
   - Create Supabase project
   - Update `SUPABASE_URL` and `SUPABASE_ANON_KEY` env vars
   - Implement database layer in service files

2. **Add Authentication**:
   - Enable Supabase Auth
   - Add login/signup pages
   - Protect order history routes

3. **Add Payments** (K-Net):
   - Integrate K-Net API
   - Add payment confirmation flow
   - Update order processing

4. **Add Admin Dashboard**:
   - Create admin routes
   - Order management interface
   - Menu management

---

## Emergency Contacts

- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Create in your repository

---

**You're all set! 🚀**

Your restaurant ordering platform is now live and serving customers securely.
