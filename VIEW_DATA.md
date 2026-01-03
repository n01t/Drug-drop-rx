# How to View Submitted Contact Form Data

## 📍 Where Data is Stored

The form data is stored in a **MongoDB database**. The connection string is configured in your `.env` file:

```
MONGODB_URI=mongodb://localhost:27017/drugdroprx
```

Or for MongoDB Atlas (cloud):

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/drugdroprx
```

The database and `contacts` collection are automatically created when you first submit a form.

## 🔍 Methods to View the Data

### Method 1: Using the API Endpoint (Easiest)

The server already has an endpoint to view all contacts. Open this URL in your browser:

```
http://localhost:5000/api/contacts
```

Or use curl in terminal:

```bash
curl http://localhost:5000/api/contacts
```

### Method 2: Using MongoDB Shell (mongosh)

1. **Install MongoDB** (if not already installed):

   - Download from https://www.mongodb.com/try/download/community
   - Or use MongoDB Atlas (cloud) - free tier available

2. **Connect to MongoDB:**

   ```bash
   mongosh mongodb://localhost:27017/drugdroprx
   ```

3. **View all contacts:**

   ```javascript
   use drugdroprx
   db.contacts.find().pretty()
   ```

4. **View sorted by date:**
   ```javascript
   db.contacts.find().sort({ createdAt: -1 }).pretty();
   ```

### Method 3: Using MongoDB Compass (GUI Tool)

1. **Download MongoDB Compass** (free):

   - https://www.mongodb.com/try/download/compass

2. **Connect to MongoDB:**
   - Enter connection string: `mongodb://localhost:27017`
   - Or use your MongoDB Atlas connection string
   - Select database: `drugdroprx`
   - Browse the `contacts` collection

### Method 4: Using the Admin Page (Recommended)

I've created an admin page component that you can add to view submissions. See instructions below.

## 📊 Database Schema

The `contacts` collection has the following structure:

- `_id` - Unique identifier (MongoDB ObjectId)
- `name` - Contact's name (required)
- `email` - Contact's email (required, validated)
- `phone` - Contact's phone number (required)
- `description` - Contact's message/description (optional)
- `createdAt` - Timestamp when the form was submitted (auto-generated)
- `updatedAt` - Timestamp when the record was last updated (auto-generated)

## 🧪 Test the Form

1. Fill out the contact form on http://localhost:3000
2. Submit the form
3. Use any of the methods above to view the data

## 🔒 Security Note

The `/api/contacts` endpoint is currently open. For production, you should:

- Add authentication
- Restrict access to admin users only
- Use environment variables for admin credentials
