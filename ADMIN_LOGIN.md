# Admin Login System

## 🔐 Admin Authentication

The admin panel is now protected with a login system.

## 📍 Access Points

### Login Page

- **URL:** `http://localhost:3000/admin/login`
- **Footer Link:** Click "Admin Login" at the bottom of any page

### Admin Panel (Protected)

- **URL:** `http://localhost:3000/admin`
- **Requires:** Valid login credentials

## 🔑 Default Credentials

**Username:** `admin`  
**Password:** `admin123`

> ⚠️ **Important:** Change these credentials in production!

## 🔧 Change Admin Credentials

To change the default credentials, create a `.env` file in the `client/` directory:

```env
REACT_APP_ADMIN_USERNAME=your_username
REACT_APP_ADMIN_PASSWORD=your_secure_password
```

Or modify `client/src/components/AdminLogin.js`:

```javascript
const ADMIN_USERNAME = "your_username";
const ADMIN_PASSWORD = "your_secure_password";
```

## ✨ Features

- ✅ Secure login page with validation
- ✅ Protected admin panel route
- ✅ Automatic redirect if not logged in
- ✅ Logout functionality
- ✅ Session persistence (stored in localStorage)
- ✅ Beautiful, modern UI

## 🚪 How to Use

### Login

1. Navigate to `/admin/login` or click "Admin Login" in footer
2. Enter username: `admin`
3. Enter password: `admin123`
4. Click "Login"
5. You'll be redirected to the admin panel

### Logout

1. In the admin panel, click the "🚪 Logout" button
2. Confirm logout
3. You'll be redirected to the login page

### Access Admin Panel

- After logging in, visit `/admin` to view all contact submissions
- If you're not logged in, you'll be automatically redirected to login

## 🔒 Security Notes

**Current Implementation:**

- Credentials are checked client-side
- Login status stored in localStorage
- Suitable for development/testing

**For Production:**

- Implement server-side authentication
- Use JWT tokens or session management
- Hash passwords properly
- Add rate limiting
- Use HTTPS
- Implement proper session timeout

## 📱 Responsive Design

The login page is fully responsive and works on:

- Desktop
- Tablet
- Mobile devices

## 🎨 UI Features

- Gradient background
- Smooth animations
- Error messages
- Loading states
- Clean, professional design
