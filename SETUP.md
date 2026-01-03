# Quick Setup Guide

## Prerequisites

- Node.js (v14 or higher) - [Download](https://nodejs.org/)
- npm (comes with Node.js)
- MongoDB (local installation or MongoDB Atlas account)

## Installation Steps

### 1. Install All Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

Or use the convenience command:

```bash
npm run install-all
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/drugdroprx
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**MongoDB Setup:**

- **Local MongoDB**: Install from https://www.mongodb.com/try/download/community
- **MongoDB Atlas (Cloud)**: Sign up free at https://www.mongodb.com/cloud/atlas and get connection string

**To get a Google Maps API Key:**

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable "Maps JavaScript API"
4. Create credentials (API Key)
5. Copy the key to your `.env` file

**Note:** The contact form works without the Google Maps API key, but the map will show a placeholder.

### 3. Run the Application

**Development Mode (Both Frontend & Backend):**

```bash
npm run dev
```

This starts:

- Backend: http://localhost:5000
- Frontend: http://localhost:3000

**Or run separately:**

Backend only:

```bash
npm run server
```

Frontend only (in a new terminal):

```bash
npm run client
```

### 4. Test the Application

1. Open http://localhost:3000 in your browser
2. Test the carousel (auto-plays every 5 seconds)
3. Fill out the contact form
4. Check the database - contacts are saved in MongoDB

### 5. View Contact Submissions

**Via API (Easiest):**

```bash
curl http://localhost:5000/api/contacts
```

**Or visit in browser:**

```
http://localhost:5000/api/contacts
```

**Or use Admin Panel:**

```
http://localhost:3000/admin
```

**Using MongoDB Shell:**

```bash
mongosh mongodb://localhost:27017/drugdroprx
db.contacts.find().pretty()
```

## Troubleshooting

### Port Already in Use

If port 5000 or 3000 is in use:

- Change `PORT` in `.env` for backend
- React will prompt to use a different port

### Database Errors

- Ensure MongoDB is running (if using local MongoDB)
- Check MongoDB connection string in `.env`
- Verify MongoDB Atlas connection string (if using cloud)
- Check server logs for connection errors

### Google Maps Not Showing

- Verify API key in `.env`
- Check browser console for errors
- Ensure Maps JavaScript API is enabled in Google Cloud Console

## Next Steps

- See `README.md` for detailed documentation
- See `DEPLOYMENT.md` for deployment instructions
- Customize colors, content, and map location in component files
