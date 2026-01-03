import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Quality Pharmaceutical Services',
      description: 'Your trusted partner in healthcare solutions',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=600&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Fast & Reliable Delivery',
      description: 'Get your medications delivered to your doorstep',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Expert Medical Consultation',
      description: 'Professional advice from licensed pharmacists',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=600&fit=crop&q=80',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="carousel-section" id="home">
      <div className="carousel-container">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay"></div>
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious} aria-label="Previous slide">
          &#8249;
        </button>
        <button className="carousel-btn carousel-btn-next" onClick={goToNext} aria-label="Next slide">
          &#8250;
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

