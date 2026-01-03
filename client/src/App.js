import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ContactForm from './components/ContactForm';
import GoogleMap from './components/GoogleMap';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin';

function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Carousel />
        <div className="content-section">
          <ContactForm />
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';
  return isLoggedIn ? children : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <>
                  <Header />
                  <AdminPanel />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

