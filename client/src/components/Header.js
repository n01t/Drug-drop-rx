import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('admin_logged_in') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkLoginStatus();
    // Check periodically in case login status changes
    const interval = setInterval(checkLoginStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Drug Drop Rx</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          {isLoggedIn ? (
            <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="admin-link">
              Admin Panel
            </Link>
          ) : (
            <Link to="/admin/login" onClick={() => setIsMenuOpen(false)} className="admin-link">
              Admin Login
            </Link>
          )}
        </nav>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

