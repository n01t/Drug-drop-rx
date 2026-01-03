# MongoDB Setup Guide

## Quick Setup Options

### Option 1: MongoDB Atlas (Cloud - Recommended for Beginners)

**Advantages:**
- No local installation needed
- Free tier available (512MB storage)
- Automatic backups
- Easy to set up

**Steps:**

1. **Sign up for MongoDB Atlas**
   - Go to https://www.mongodb.com/cloud/atlas
   - Click "Try Free" and create an account

2. **Create a Cluster**
   - Choose "Build a Database" → "Free" tier
   - Select a cloud provider and region
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access" in the left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (save these!)
   - Set privileges to "Atlas admin" or "Read and write to any database"
   - Click "Add User"

4. **Whitelist Your IP**
   - Go to "Network Access" in the left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development) or add your IP
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" → Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `<dbname>` with `drugdroprx` (or your preferred database name)

6. **Add to .env file:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/drugdroprx?retryWrites=true&w=majority
   ```

### Option 2: Local MongoDB Installation

**Windows:**

1. Download MongoDB Community Server:
   - https://www.mongodb.com/try/download/community
   - Choose Windows version
   - Run the installer
   - Choose "Complete" installation
   - Install as a Windows Service (recommended)

2. MongoDB will start automatically

3. Add to `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/drugdroprx
   ```

**macOS:**

1. Using Homebrew:
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```

2. Add to `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/drugdroprx
   ```

**Linux (Ubuntu/Debian):**

1. Install MongoDB:
   ```bash
   wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
   sudo apt-get update
   sudo apt-get install -y mongodb-org
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

2. Add to `.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/drugdroprx
   ```

## Verify Connection

1. Start your server:
   ```bash
   npm run server
   ```

2. Look for this message:
   ```
   MongoDB Connected: cluster0.xxxxx.mongodb.net
   Database: drugdroprx
   ```

3. If you see connection errors, check:
   - MongoDB is running (for local installation)
   - Connection string is correct
   - IP is whitelisted (for Atlas)
   - Username/password are correct

## Viewing Data

### Using MongoDB Compass (GUI - Recommended)

1. Download: https://www.mongodb.com/try/download/compass
2. Connect using your connection string
3. Browse the `drugdroprx` database
4. View the `contacts` collection

### Using MongoDB Shell (mongosh)

1. Install mongosh: https://www.mongodb.com/try/download/shell
2. Connect:
   ```bash
   mongosh "mongodb://localhost:27017/drugdroprx"
   ```
   Or for Atlas:
   ```bash
   mongosh "mongodb+srv://username:password@cluster.mongodb.net/drugdroprx"
   ```
3. View contacts:
   ```javascript
   use drugdroprx
   db.contacts.find().pretty()
   ```

## Troubleshooting

### Connection Refused
- Ensure MongoDB is running: `mongod` or check service status
- Check if port 27017 is open
- Verify connection string

### Authentication Failed
- Check username and password
- Ensure user has proper permissions
- Verify database name

### Network Timeout (Atlas)
- Check IP whitelist
- Verify connection string
- Check firewall settings

## Production Considerations

- Use MongoDB Atlas for production
- Set up proper authentication
- Use environment variables for connection strings
- Enable MongoDB backups
- Set up monitoring and alerts

