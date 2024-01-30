import React from 'react';


import './qustion.css'


export default function Qustion(){
 

  return (

<div className="faq">
      <h1 style={{fontFamily:"cursive"}}>Frequently Asked Questions:</h1>
      <svg className="visually-hidden" xmlns="http://www.w3.org/2000/svg">
        <symbol id="expand-more" viewBox="0 0 24 24">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
        <symbol id="close" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
      </svg>

      {/* FAQ details */}
      <details >
        <summary>
         Does it cost monay?
          <svg className="control-icon control-icon-expand" width="24" height="24">
            <use xlinkHref="#expand-more" />
          </svg>
          <svg className="control-icon control-icon-close" width="24" height="24">
            <use xlinkHref="#close" />
          </svg>
        </summary>
        <p>if you need that someone take you it cost a minimal monay else </p>
      </details>

      <details>
        <summary>
          Anyone can join?
          <svg className="control-icon control-icon-expand" width="24" height="24">
            <use xlinkHref="#expand-more" />
          </svg>
          <svg className="control-icon control-icon-close" width="24" height="24">
            <use xlinkHref="#close" />
          </svg>
        </summary>
        <p>We trust in everyone!</p>
      </details>

      <details>
        <summary>
          Are there any restrictions?
          <svg className="control-icon control-icon-expand" width="24" height="24">
            <use xlinkHref="#expand-more" />
          </svg>
          <svg className="control-icon control-icon-close" width="24" height="24">
            <use xlinkHref="#close" />
          </svg>
        </summary>
        <p>Only your imagination my friend. Go forth!</p>
      </details>
    </div>
  );
};

