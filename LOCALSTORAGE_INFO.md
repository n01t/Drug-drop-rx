# localStorage Storage Information

## 📍 Where Data is Stored

The contact form data is now stored in the **browser's localStorage** instead of a database.

**Storage Key:** `drugdroprx_contacts`

## 🔍 How to View Data

### Method 1: Admin Panel (Recommended)
Visit: `http://localhost:3000/admin`

This shows all submissions in a nice table format with:
- Refresh button to reload data
- Clear All button to delete all entries
- All contact information displayed

### Method 2: Browser Developer Tools

1. **Open Browser DevTools:**
   - Press `F12` or `Ctrl+Shift+I` (Windows/Linux)
   - Press `Cmd+Option+I` (Mac)

2. **Go to Application Tab (Chrome) or Storage Tab (Firefox):**
   - Chrome: Application → Local Storage → `http://localhost:3000`
   - Firefox: Storage → Local Storage → `http://localhost:3000`

3. **Find the key:** `drugdroprx_contacts`
4. **View the value:** It will be a JSON array of all contacts

### Method 3: Browser Console

Open the browser console (F12) and run:
```javascript
JSON.parse(localStorage.getItem('drugdroprx_contacts'))
```

Or to see it formatted:
```javascript
console.table(JSON.parse(localStorage.getItem('drugdroprx_contacts')))
```

## 📊 Data Structure

Each contact is stored as:
```json
{
  "id": "1234567890abcdef",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "description": "Inquiry message",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

## ⚠️ Important Notes

1. **Browser-Specific:** Data is stored per browser and per domain
2. **Not Shared:** Data in one browser won't appear in another
3. **Persistence:** Data persists even after closing the browser
4. **Storage Limit:** localStorage typically has a 5-10MB limit
5. **Clearing:** Clearing browser data will delete all contacts

## 🧹 Clear All Data

**Option 1: Using Admin Panel**
- Visit `/admin` page
- Click "Clear All" button
- Confirm deletion

**Option 2: Using Browser Console**
```javascript
localStorage.removeItem('drugdroprx_contacts')
```

**Option 3: Clear All Browser Data**
- Browser Settings → Clear Browsing Data
- Select "Cookies and other site data"
- Clear data

## ✅ Advantages

- ✅ No backend server needed
- ✅ Works offline
- ✅ Fast and instant
- ✅ No database setup required
- ✅ Simple to implement

## ⚠️ Limitations

- ❌ Data only exists in that specific browser
- ❌ Not accessible from other devices
- ❌ Can be cleared by user
- ❌ Limited storage capacity
- ❌ Not suitable for production with multiple users

