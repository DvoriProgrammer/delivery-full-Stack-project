import React, { useState, useEffect } from 'react';
import './fallingImage.css';
import img from '../../images/faill.png'
const FallingImage = () => {
  const [falling, setFalling] = useState(false);



  return (
    <div  >
      {/* Your image goes here */}
      <img src={img} alt="Falling Image" className="falling-image" style={{width:"25%"}}/>
     
    </div>
  );
};

export default FallingImage;
