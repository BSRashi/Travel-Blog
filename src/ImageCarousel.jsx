import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images, altText = "Carousel image" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          &lt;
        </button>
        
        <div className="carousel-content">
          <img 
            src={images[currentIndex]} 
            alt={`${altText} ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
