# GoDaddy Static Hosting Deployment Guide

## ✅ Pre-Deployment Checklist

### Configuration Complete
- [x] next.config.ts set to `output: "export"`
- [x] Image optimization disabled (`unoptimized: true`)
- [x] All API routes removed (not supported on static hosting)
- [x] Pricing checkout flow uses client-side redirect
- [x] All pages use default exports
- [x] Build completes successfully

### Static Export Generated
Run `npm run build` to generate the static export. This creates:
```
out/
├── index.html              # Home page (/)
├── courses.html            # Courses page (/courses)
├── pricing.html            # Pricing page (/pricing)
├── success.html            # Success page (/success)
├── cancel.html             # Cancel page (/cancel)
├── 404.html               # 404 error page
├── _next/                 # Next.js assets (CSS, JS)
│   ├── static/
│   └── ...
└── ...                    # Other static assets
```

---

## 📦 What to Upload to GoDaddy

### Files/Folders from `out/` directory:
1. **All HTML files** (`*.html`)
2. **`_next/` folder** (contains all CSS, JS, and static assets)
3. **Any files from `public/` folder** (images, fonts, etc.)
4. **`.htaccess` file** (from `public/.htaccess`)

### Upload Structure on GoDaddy:
```
public_html/              (Your domain root)
├── .htaccess             ← Copy from public/.htaccess
├── index.html            ← From out/
├── courses.html          ← From out/
├── pricing.html          ← From out/
├── success.html          ← From out/
├── cancel.html           ← From out/
├── 404.html              ← From out/
├── _next/                ← Entire folder from out/
└── [other static files]  ← From out/
```

---

## 🚀 Deployment Steps

### Step 1: Build the Project
```bash
npm run build
```
This generates the `out/` folder with all static files.

### Step 2: Upload to GoDaddy

**Option A: Using File Manager (Web Interface)**
1. Log in to GoDaddy cPanel
2. Navigate to File Manager
3. Go to `public_html/` directory
4. Upload all contents from `out/` folder
5. Ensure `.htaccess` is uploaded (may be hidden by default)

**Option B: Using FTP (Recommended for large files)**
1. Download an FTP client (FileZilla, Cyberduck, etc.)
2. Get FTP credentials from GoDaddy cPanel
3. Connect to your hosting
4. Navigate to `public_html/`
5. Upload all contents from `out/` folder
6. Upload `.htaccess` from `public/.htaccess`

### Step 3: Verify Deployment
Visit these URLs to confirm everything works:
- `https://yourdomain.com/` (Home)
- `https://yourdomain.com/courses` (Courses)
- `https://yourdomain.com/pricing` (Pricing)
- `https://yourdomain.com/success` (Success page)
- `https://yourdomain.com/cancel` (Cancel page)

---

## 🔧 Current Limitations (Static Export)

### Not Available:
- ❌ API Routes (removed from project)
- ❌ Server-Side Rendering (SSR)
- ❌ Dynamic Image Optimization
- ❌ Incremental Static Regeneration (ISR)
- ❌ Server Components with dynamic data
- ❌ Middleware

### Available:
- ✅ All static pages
- ✅ Client-side routing
- ✅ Client-side JavaScript
- ✅ Static assets (images, fonts, CSS, JS)
- ✅ Client-side data fetching
- ✅ Mock checkout flow (client-side redirect)

---

## 🔄 Future Migration Path

When moving to VPS or paid hosting with Node.js support:

### 1. Re-enable Dynamic Features
Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  // Remove or comment out these lines:
  // output: "export",
  // images: { unoptimized: true },
};
```

### 2. Add Real Payment Gateway

**Replace mock checkout in `app/pricing/page.tsx`:**
```typescript
// Current (static):
const handleCheckout = (plan) => {
  setTimeout(() => {
    window.location.href = `/success?...`;
  }, 1000);
};

// Future (with Stripe/Razorpay):
const handleCheckout = async (plan) => {
  const response = await fetch('/api/checkout', {
    method: 'POST',
    body: JSON.stringify(plan),
  });
  const { url } = await response.json();
  window.location.href = url;
};
```

**Create API route** (`app/api/checkout/route.ts`):
```typescript
import Stripe from 'stripe';

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({...});
  return Response.json({ url: session.url });
}
```

### 3. Deploy to VPS
- Use Vercel, Netlify, or custom VPS
- Set environment variables
- Deploy with `npm run build && npm start`

---

## 📝 Maintenance

### Updating Content
1. Make changes locally
2. Run `npm run build`
3. Upload new `out/` contents to GoDaddy
4. Clear browser cache to see changes

### Performance Tips
- `.htaccess` already includes compression and caching
- Optimize images before adding to `public/`
- Keep bundle size small

---

## ❓ Troubleshooting

### Issue: Pages show 404 error
**Solution:** Ensure `.htaccess` is uploaded and Apache mod_rewrite is enabled

### Issue: Styling broken
**Solution:** Check that `_next/` folder is uploaded correctly

### Issue: Links don't work
**Solution:** Use Next.js `<Link>` component, not `<a>` tags

### Issue: Checkout redirects to error
**Solution:** Verify success URL parameters are correct in pricing page

---

## 📊 Project Architecture (Static Export)

```
AI Skill Lab (Static)
├── Marketing Pages (Static HTML)
│   ├── Home (/)
│   ├── Courses (/courses)
│   └── Pricing (/pricing)
├── Mock Checkout Flow
│   ├── Pricing → Client-side redirect → Success
│   └── Cancel page (for user cancellation)
├── Static Assets
│   └── CSS, JS, Images (via _next/)
└── Apache Configuration
    └── .htaccess (URL routing)
```

---

## ✅ Final Checklist Before Upload

- [ ] `npm run build` completes without errors
- [ ] All pages render correctly in `out/` folder
- [ ] `.htaccess` file is in `public/` folder
- [ ] Images and assets are optimized
- [ ] Test all routes locally using `npx serve out`
- [ ] FTP/File Manager credentials ready
- [ ] Domain DNS is configured

---

**Status:** ✅ Ready for GoDaddy Static Hosting
**Build Output:** `out/` folder
**Upload Destination:** `public_html/`
