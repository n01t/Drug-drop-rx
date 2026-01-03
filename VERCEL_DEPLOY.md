# Quick Vercel Deployment Guide

## 🚀 Deploy to Vercel in 5 Minutes

### Option 1: Deploy via Vercel CLI (Fastest)

1. **Install Vercel CLI** (if not installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name? (Press Enter for default or enter custom name)
   - Directory? **./client**
   - Override settings? **No**

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/drug-drop-rx.git
   git push -u origin main
   ```

2. **Go to Vercel Dashboard**:
   - Visit https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository

3. **Configure Project**:
   - **Framework Preset:** Other
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

4. **Environment Variables** (Optional):
   - `REACT_APP_ADMIN_USERNAME` (if you want to change default)
   - `REACT_APP_ADMIN_PASSWORD` (if you want to change default)

5. **Deploy!**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live!

### Option 3: Deploy via Vercel Dashboard

1. **Go to https://vercel.com**
2. **Click "Add New Project"**
3. **Drag and drop the `client` folder** OR connect GitHub
4. **Configure**:
   - Framework: Other
   - Build Command: `npm run build`
   - Output Directory: `build`
5. **Deploy!**

## ⚙️ Project Configuration

The `vercel.json` file is already configured with:
- ✅ Correct build directory (`client/build`)
- ✅ React Router support (all routes → index.html)
- ✅ Static asset caching
- ✅ Build command

## 🔧 Environment Variables (Optional)

If you want to customize admin credentials, add in Vercel Dashboard:
- Settings → Environment Variables

```
REACT_APP_ADMIN_USERNAME=your_username
REACT_APP_ADMIN_PASSWORD=your_password
```

## 📝 Important Notes

- ✅ **No backend needed** - Contact form uses localStorage
- ✅ **No database needed** - All data stored in browser
- ✅ **No API keys needed** - Static map instead of Google Maps
- ✅ **Fully static** - Perfect for Vercel

## 🎯 After Deployment

1. Your site will be live at: `https://your-project.vercel.app`
2. Test the contact form
3. Test admin login: `/admin/login`
4. Default credentials: `admin` / `admin123`

## 🔄 Updating Your Site

**Via CLI:**
```bash
vercel --prod
```

**Via GitHub:**
- Just push to your repository
- Vercel auto-deploys on push

## 🐛 Troubleshooting

**Build fails?**
- Check that `client/package.json` exists
- Ensure build command is `npm run build`
- Check Vercel build logs

**Routes not working?**
- Ensure `vercel.json` is in root directory
- Check that all routes point to `/index.html`

**404 errors?**
- React Router needs all routes to serve `index.html`
- This is already configured in `vercel.json`

## ✨ That's It!

Your site should be live in minutes! 🎉

