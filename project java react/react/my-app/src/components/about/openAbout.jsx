import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './openAbout.css'
const OpenAbout = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      // Add your VanillaTilt options here
    });

    return () => {
      tiltRef.current.vanillaTilt.destroy(); // Cleanup VanillaTilt on component unmount
    };
  }, []); // Run this effect once, similar to componentDidMount in class components

  return (
    <section className="home">
      {/* Add your JSX code here, replacing the original HTML */}
      <div ref={tiltRef} className="description">
        <h1 className="title">
          <span className="gradient-text">Grow Professionally</span>with the Best
        </h1>
        {/* ... Other HTML content */}
      </div>

      <div className="users-color-container">
        {/* ... Other HTML content */}
      </div>
    </section>
  );
};

export default OpenAbout;
