# 🔧 Fix Vercel Build Command Issue

## Solution: Set Root Directory First

Vercel locks the build command when it auto-detects the framework. Here's how to fix it:

### Step-by-Step Fix:

1. **In Vercel Dashboard - Project Settings:**
   - Go to your project → **Settings** → **General**
   - Scroll to **Root Directory**
   - Click **Edit**
   - Set to: `client`
   - Click **Save**

2. **Now Go to Build & Development Settings:**
   - Still in Settings → **Build & Development Settings**
   - Now you should be able to edit:
     - **Build Command:** `npm run build`
     - **Output Directory:** `build`
     - **Install Command:** `npm install`
   - Click **Save**

3. **Redeploy:**
   - Go to **Deployments** tab
   - Click the **3 dots** (⋯) on the latest deployment
   - Click **Redeploy**

---

## Alternative: Deploy from Root Directory

If you want to deploy from the root (not client folder):

1. **In Vercel Dashboard:**
   - **Root Directory:** Leave empty (root)
   - **Build Command:** `cd client && npm install && npm run build`
   - **Output Directory:** `client/build`
   - **Install Command:** `cd client && npm install`

---

## Quick Fix via vercel.json

I've updated `vercel.json` to be simpler. After setting Root Directory to `client`, the build should work automatically.

**Current vercel.json:**
```json
{
  "version": 2,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This will work when Root Directory is set to `client`.

---

## Still Having Issues?

1. **Delete and Re-import:**
   - Delete the project in Vercel
   - Re-import from GitHub
   - Set Root Directory to `client` FIRST
   - Then configure build settings

2. **Use Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel login
   cd client
   vercel
   ```

---

## ✅ Recommended Settings

**Root Directory:** `client`  
**Build Command:** `npm run build`  
**Output Directory:** `build`  
**Install Command:** `npm install`  
**Framework Preset:** Other (or leave blank)

