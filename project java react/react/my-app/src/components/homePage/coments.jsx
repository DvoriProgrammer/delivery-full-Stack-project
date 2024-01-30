import React, { useState } from 'react';
import './coments.css'; // Import your stylesheet

const QuoteCard = ({ quote, author, company }) => (
  <figure className="snip1533">
    <figcaption>
      <blockquote>
        <p style={{color:'black'}}>{quote}</p>
      </blockquote>
      <h3 style={{color:'black'}}>{author}</h3>
     
    </figcaption>
  </figure>
);

const Coments = () => {
  const quotes = [
    {
      quote: "thank you so much for this site! it helped so much, when i needed to pick up a package!",
  
    },
    {
      quote: "genius idea! That way every time I travel I earn money and also help another person!",

    },
    {
      quote: "Thanks for the site thanks to which I found good hearted volunteers ,such a helping site", 
    },
    {
      quote: "Thanks for the site helped me find great and reliable  ,such a helping site!",

    }
    
    // Add more quotes as needed
  ];

  const itemsPerPage = 3;
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };

  const visibleQuotes = [
    quotes[(startIndex + 2) % quotes.length],
    quotes[(startIndex) % quotes.length],
    quotes[(startIndex + 1) % quotes.length]
  ];

  return (
    <div style={{marginTop:20}}>
      <div className="comment-navigation">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      {visibleQuotes.map((quote, index) => (
        <QuoteCard key={index} {...quote} />
      ))}
    </div>
  );
};

export default Coments;
