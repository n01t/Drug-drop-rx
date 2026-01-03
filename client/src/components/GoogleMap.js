import React from 'react';
import './GoogleMap.css';

const GoogleMapComponent = () => {
  // Location details - you can change these to your actual location
  const location = {
    address: '123 Healthcare Street, Medical City, NY 10001',
    city: 'New York',
    state: 'New York',
    zipCode: '10001',
    phone: '+1 (555) 123-4567',
    email: 'info@drugdroprx.com',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  };

  return (
    <section className="google-map-section" id="location">
      <div className="map-container">
        <h2>Find Us</h2>
        <p className="section-subtitle">Visit us at our location</p>
        
        <div className="static-map-container">
          <div className="static-map">
            <div className="map-marker">
              <div className="marker-pin"></div>
              <div className="marker-pulse"></div>
            </div>
            <div className="map-streets">
              <div className="street horizontal street-1"></div>
              <div className="street horizontal street-2"></div>
              <div className="street horizontal street-3"></div>
              <div className="street vertical street-4"></div>
              <div className="street vertical street-5"></div>
            </div>
            <div className="map-buildings">
              <div className="building building-1"></div>
              <div className="building building-2"></div>
              <div className="building building-3"></div>
              <div className="building building-4"></div>
            </div>
          </div>
          
          <div className="location-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <strong>Address</strong>
                <p>{location.address}</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div className="info-content">
                <strong>Phone</strong>
                <p><a href={`tel:${location.phone}`}>{location.phone}</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div className="info-content">
                <strong>Email</strong>
                <p><a href={`mailto:${location.email}`}>{location.email}</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <div className="info-content">
                <strong>Hours</strong>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapComponent;

