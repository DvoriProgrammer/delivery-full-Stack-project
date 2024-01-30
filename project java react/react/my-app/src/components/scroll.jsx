import React, { useEffect } from 'react';

const ScrollToTopOnMount = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(5, 5);
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  return null; // This component doesn't render anything, it's just for handling the scroll effect
};

export default ScrollToTopOnMount;
