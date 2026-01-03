# Drug Drop Rx - Single Page Dynamic Website

A modern, responsive single-page website built with React, featuring a carousel, contact form with database integration, and Google Maps.

## Features

- ✅ **Responsive Header** with mobile navigation
- ✅ **Image Carousel** with auto-play and manual controls
- ✅ **Contact Form** with validation (name, email, phone, description)
- ✅ **Database Integration** - MongoDB database to store contact submissions
- ✅ **Google Maps Integration** - Interactive map display
- ✅ **Modern UI/UX** - Beautiful gradient design with smooth animations
- ✅ **Fully Responsive** - Works on all devices

## Tech Stack

### Frontend

- React 18.2.0
- React Router DOM
- Axios for API calls
- @react-google-maps/api for Google Maps
- CSS3 with modern styling

### Backend

- Node.js
- Express.js
- MongoDB database (with Mongoose ODM)
- CORS enabled
- Body Parser

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)
- Google Maps API Key (optional, for map functionality)

### Step 1: Install Dependencies

```bash
# Install root dependencies (backend)
npm install

# Install client dependencies (frontend)
cd client
npm install
cd ..
```

Or use the convenience script:

```bash
npm run install-all
```

### Step 2: Set Up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/drugdroprx
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

**MongoDB Setup Options:**

**Option 1: Local MongoDB**

- Install MongoDB Community Edition from https://www.mongodb.com/try/download/community
- Use connection string: `mongodb://localhost:27017/drugdroprx`

**Option 2: MongoDB Atlas (Cloud - Recommended)**

- Sign up for free at https://www.mongodb.com/cloud/atlas
- Create a cluster (free tier available)
- Get your connection string and add it to `.env`:
  ```
  MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/drugdroprx
  ```

**To get a Google Maps API Key:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API
4. Create credentials (API Key)
5. Copy the API key to your `.env` file

**Note:** The contact form will work without the Google Maps API key, but the map will show a placeholder.

### Step 3: Run the Application

#### Development Mode (Both Frontend and Backend)

```bash
npm run dev
```

This will start:

- Backend server on `http://localhost:5000`
- React development server on `http://localhost:3000`

#### Run Separately

**Backend only:**

```bash
npm run server
```

**Frontend only:**

```bash
npm run client
```

## Project Structure

```
drug-drop-rx/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Carousel.js
│   │   │   ├── ContactForm.js
│   │   │   ├── GoogleMap.js
│   │   │   └── Footer.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Express backend
│   ├── index.js           # Server entry point
│   ├── config/
│   │   └── database.js    # MongoDB connection
│   └── models/
│       └── Contact.js     # Contact model
├── package.json
├── .env                   # Environment variables
└── README.md
```

## API Endpoints

### POST `/api/contact`

Submit contact form data.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "description": "Inquiry about services"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Contact information saved successfully",
  "id": "507f1f77bcf86cd799439011"
}
```

### GET `/api/contacts`

Get all contact submissions (for admin/testing).

### GET `/api/contacts/:id`

Get a single contact by ID.

### GET `/api/health`

Health check endpoint (includes database connection status).

## Database

The application uses **MongoDB** database with Mongoose ODM. The database and `contacts` collection are automatically created on first run.

**Contacts Collection Schema:**

- `_id` - MongoDB ObjectId (auto-generated)
- `name` - String (required)
- `email` - String (required, validated)
- `phone` - String (required)
- `description` - String (optional)
- `createdAt` - Date (auto-generated)
- `updatedAt` - Date (auto-generated)

## Deployment

### Option 1: Deploy to Heroku

1. Install Heroku CLI
2. Create a Heroku app:
   ```bash
   heroku create your-app-name
   ```
3. Set environment variables:
   ```bash
   heroku config:set REACT_APP_GOOGLE_MAPS_API_KEY=your_key
   ```
4. Deploy:
   ```bash
   git push heroku main
   ```

### Option 2: Deploy to Vercel/Netlify (Frontend) + Railway/Render (Backend)

**Frontend (Vercel/Netlify):**

1. Build the React app: `cd client && npm run build`
2. Deploy the `client/build` folder
3. Set environment variable: `REACT_APP_GOOGLE_MAPS_API_KEY`

**Backend (Railway/Render):**

1. Deploy the `server/` directory
2. Set environment variables in the platform dashboard
3. Update the API URL in `ContactForm.js` to point to your backend URL

### Option 3: Traditional VPS Deployment

1. Build the React app:

   ```bash
   cd client
   npm run build
   cd ..
   ```

2. Set `NODE_ENV=production` in `.env`

3. Use PM2 to run the server:

   ```bash
   npm install -g pm2
   pm2 start server/index.js --name drug-drop-rx
   ```

4. Configure Nginx to serve the React build and proxy API requests

## Customization

### Change Map Location

Edit `client/src/components/GoogleMap.js`:

```javascript
const center = {
  lat: YOUR_LATITUDE,
  lng: YOUR_LONGITUDE,
};
```

### Modify Carousel Slides

Edit the `slides` array in `client/src/components/Carousel.js`

### Change Color Scheme

Modify the gradient colors in:

- `Header.css` - Header background
- `Footer.css` - Footer background
- `ContactForm.css` - Button colors

## Troubleshooting

### Contact form not submitting

- Ensure the backend server is running on port 5000
- Check CORS settings if deploying separately
- Verify database file permissions

### Google Maps not showing

- Verify your API key is set in `.env` as `REACT_APP_GOOGLE_MAPS_API_KEY`
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check browser console for API errors

### Database errors

- Ensure SQLite3 is properly installed
- Check file permissions for `server/contacts.db`
- Delete `contacts.db` to recreate the database

## License

ISC

## Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using React and Express**
