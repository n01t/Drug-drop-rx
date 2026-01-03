# 🚀 Quick Vercel Deployment

## Fastest Way - 3 Steps!

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Then run:

```bash
vercel --prod
```

**That's it! Your site will be live! 🎉**

---

## Alternative: Deploy via GitHub

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/drug-drop-rx.git
git push -u origin main
```

### 2. Import to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repo
4. **IMPORTANT:** Set these settings:
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Click "Deploy"

---

## ⚙️ Vercel Settings (If using Dashboard)

When importing project, use these settings:

- **Framework Preset:** Other
- **Root Directory:** `client`
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

---

## ✅ What's Already Configured

- ✅ `vercel.json` - Already created with correct settings
- ✅ React Router - Configured for SPA routing
- ✅ Build settings - All set up
- ✅ No backend needed - Uses localStorage

---

## 🎯 After Deployment

Your site will be live at: `https://your-project.vercel.app`

**Test:**

- ✅ Homepage loads
- ✅ Contact form works
- ✅ Admin login: `/admin/login` (admin/admin123)
- ✅ Admin panel: `/admin`

---

## 🔄 Update Your Site

Just run:

```bash
vercel --prod
```

Or push to GitHub (auto-deploys)

---

**Need help?** Check `VERCEL_DEPLOY.md` for detailed instructions.
