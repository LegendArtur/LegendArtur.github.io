# 🚀 Vercel Deployment Guide

## Prerequisites
- ✅ GitHub account
- ✅ Vercel account (free tier available)
- ✅ Your portfolio code ready

## Step 1: Push to GitHub

1. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

## Step 2: Deploy to Vercel

### Option A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `LegendArtur.github.io` repository
5. Configure:
   - **Framework:** Next.js (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

## Step 3: Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables, add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=x1ehmpv1
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-13
```

## Step 4: Domain Setup (Optional)

For `legendartur.github.io` or custom domain:

1. **GitHub Pages Alternative:**
   - Set Vercel domain as: `legendartur.vercel.app`

2. **Custom Domain:**
   - Add your domain in Vercel → Domains
   - Update DNS records as instructed

## Step 5: Continuous Deployment

✅ **Automatic:** Every push to `main` triggers a new deployment
✅ **Preview:** Pull requests get preview deployments
✅ **Rollback:** Easy rollback to previous versions

## Deployment Features You Get:

### 🌟 Vercel Benefits:
- **Global CDN** - Fast loading worldwide
- **Automatic HTTPS** - SSL certificates included
- **Serverless Functions** - For API routes
- **Analytics** - Built-in performance monitoring
- **Preview Deployments** - Test before going live

### 🎯 Perfect for Your Portfolio:
- **Static Generation** - Ultra-fast loading
- **Image Optimization** - Automatic image optimization
- **Sanity Integration** - ISR (Incremental Static Regeneration)
- **SEO Optimized** - Server-side rendering support

## Expected URLs:
- **Production:** `https://your-portfolio.vercel.app`
- **Studio:** `https://your-portfolio.vercel.app/studio`
- **Custom Domain:** `https://legendartur.dev` (if configured)

## Post-Deployment Checklist:

1. ✅ Test all pages load correctly
2. ✅ Verify Sanity Studio works at `/studio`
3. ✅ Check responsive design on mobile
4. ✅ Test contact forms and links
5. ✅ Set up analytics (optional)
6. ✅ Add content through Sanity Studio

## Troubleshooting:

**Build Errors:**
```bash
# Test build locally first
npm run build
npm start
```

**Environment Variables:**
- Ensure all `NEXT_PUBLIC_` variables are set in Vercel
- Check Sanity project ID is correct

**Sanity Studio Issues:**
- Verify `/studio` route works
- Check Sanity CORS settings allow your domain

Your portfolio is now ready for professional deployment! 🚀
