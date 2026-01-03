# Deployment Guide

This guide provides step-by-step instructions for deploying the Drug Drop Rx application.

## Quick Start

### Local Development Setup

1. **Install Dependencies**

   ```bash
   npm run install-all
   ```

2. **Set Up Environment Variables**

   - Copy `.env.example` to `.env`
   - Add your Google Maps API key (optional for contact form, required for map)

3. **Run the Application**
   ```bash
   npm run dev
   ```
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Deployment Options

### Option 1: Heroku (Full Stack)

**Prerequisites:**

- Heroku account
- Heroku CLI installed

**Steps:**

1. **Login to Heroku**

   ```bash
   heroku login
   ```

2. **Create Heroku App**

   ```bash
   heroku create your-app-name
   ```

3. **Set Environment Variables**

   ```bash
   heroku config:set REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key
   heroku config:set NODE_ENV=production
   ```

4. **Update package.json scripts for Heroku**
   Add to root `package.json`:

   ```json
   "scripts": {
     "start": "cd server && node index.js",
     "heroku-postbuild": "cd client && npm install && npm run build"
   }
   ```

5. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

### Option 2: Vercel (Frontend) + Railway (Backend)

#### Frontend on Vercel

1. **Build the React App**

   ```bash
   cd client
   npm run build
   ```

2. **Deploy to Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel` in the `client` directory
   - Set environment variable: `REACT_APP_GOOGLE_MAPS_API_KEY`
   - Set `REACT_APP_API_URL` to your backend URL

#### Backend on Railway

1. **Create Railway Account**

   - Go to [railway.app](https://railway.app)

2. **Deploy**

   - Create new project
   - Connect GitHub repository
   - Set root directory to `server/`
   - Set environment variables:
     - `NODE_ENV=production`
     - `PORT` (Railway provides this automatically)

3. **Update Frontend API URL**
   - In Vercel, set `REACT_APP_API_URL` to your Railway backend URL

### Option 3: Netlify (Frontend) + Render (Backend)

#### Frontend on Netlify

1. **Build Command**

   ```bash
   cd client && npm install && npm run build
   ```

2. **Publish Directory**

   ```
   client/build
   ```

3. **Environment Variables**
   - `REACT_APP_GOOGLE_MAPS_API_KEY`
   - `REACT_APP_API_URL` (your Render backend URL)

#### Backend on Render

1. **Create Web Service**

   - Connect GitHub repository
   - Root directory: `server/`
   - Build command: `npm install`
   - Start command: `node index.js`

2. **Environment Variables**
   - `NODE_ENV=production`

### Option 4: Traditional VPS (Ubuntu/Debian)

1. **Server Setup**

   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone and Setup**

   ```bash
   git clone your-repo-url
   cd drug-drop-rx
   npm run install-all
   ```

3. **Build Frontend**

   ```bash
   cd client
   npm run build
   cd ..
   ```

4. **Configure Environment**

   ```bash
   cp .env.example .env
   nano .env  # Edit with your values
   ```

5. **Start with PM2**

   ```bash
   pm2 start server/index.js --name drug-drop-rx
   pm2 save
   pm2 startup
   ```

6. **Setup Nginx**

   ```bash
   sudo apt install nginx
   ```

   Create `/etc/nginx/sites-available/drug-drop-rx`:

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       # Serve React app
       location / {
           root /path/to/drug-drop-rx/client/build;
           try_files $uri $uri/ /index.html;
       }

       # Proxy API requests
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:

   ```bash
   sudo ln -s /etc/nginx/sites-available/drug-drop-rx /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Setup SSL (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Environment Variables Reference

### Frontend (.env in client/ or platform settings)

- `REACT_APP_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `REACT_APP_API_URL` - Backend API URL (default: http://localhost:5000)

### Backend (.env in root or platform settings)

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## Database Management

### View Contacts (Development)

```bash
sqlite3 server/contacts.db "SELECT * FROM contacts;"
```

### Backup Database

```bash
cp server/contacts.db server/contacts_backup.db
```

### Reset Database

```bash
rm server/contacts.db
# Restart server to recreate
```

## Troubleshooting

### Contact Form Not Working

- Verify backend is running and accessible
- Check CORS settings in `server/index.js`
- Verify API URL in frontend environment variables
- Check browser console for errors

### Google Maps Not Showing

- Verify API key is set correctly
- Check Google Cloud Console for API restrictions
- Ensure Maps JavaScript API is enabled
- Check browser console for API errors

### Database Issues

- Ensure SQLite3 is installed: `npm install sqlite3`
- Check file permissions on `server/contacts.db`
- Verify database path in `server/index.js`

## Performance Optimization

1. **Enable Gzip Compression** (Nginx)

   ```nginx
   gzip on;
   gzip_types text/plain text/css application/json application/javascript;
   ```

2. **Cache Static Assets**

   ```nginx
   location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
       expires 1y;
       add_header Cache-Control "public, immutable";
   }
   ```

3. **Use CDN** for React build assets

## Security Checklist

- [ ] Use HTTPS in production
- [ ] Set secure CORS origins
- [ ] Validate all form inputs (already implemented)
- [ ] Use environment variables for sensitive data
- [ ] Regular database backups
- [ ] Rate limiting on API endpoints (consider adding)
- [ ] Input sanitization (consider adding)

## Monitoring

### PM2 Monitoring

```bash
pm2 monit
pm2 logs drug-drop-rx
```

### Health Check Endpoint

```bash
curl http://your-domain.com/api/health
```

## Support

For deployment issues, check:

1. Server logs
2. Browser console
3. Network tab in DevTools
4. Platform-specific logs (Heroku, Vercel, etc.)
