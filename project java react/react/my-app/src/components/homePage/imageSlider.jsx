import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // זה מחליף את התמונה בכל 3 שניות (ניתן לשנות את הזמן לפי הצורך)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // הפסק להתחלף כשהקומפוננטה מוסרת או מתנתקת
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
          <button style={{backgroundColor:"red",zIndex:9999}}>sign in</button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{
            width: '100%',
            height: '90%',
            objectFit: 'cover',
            transition: 'opacity 1s ease-in-out',
            opacity: index === currentIndex ? 1 : 0,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
        }}

      >
    
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: index === currentIndex ? '#3498db' : '#95a5a6',
              margin: '0 5px',
              cursor: 'pointer',
            }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
