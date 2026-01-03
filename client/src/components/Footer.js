import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Drug Drop Rx</h3>
            <p>Your trusted partner in pharmaceutical services and healthcare solutions.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 info@drugdroprx.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Healthcare St, Medical City</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#!" aria-label="Facebook" onClick={(e) => e.preventDefault()}>Facebook</a>
              <a href="#!" aria-label="Twitter" onClick={(e) => e.preventDefault()}>Twitter</a>
              <a href="#!" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>LinkedIn</a>
              <a href="#!" aria-label="Instagram" onClick={(e) => e.preventDefault()}>Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Drug Drop Rx. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            <Link to="/admin/login" style={{ color: '#bdc3c7', textDecoration: 'none' }}>
              Admin Login
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

