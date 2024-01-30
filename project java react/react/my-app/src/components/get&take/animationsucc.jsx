import React, { useState } from 'react';
import './seccefully.css'; // Replace with the correct path to your styles

const SuccessCheckmark = () => {
  const [showCheckmark, setShowCheckmark] = useState(true);

  const restartAnimation = () => {
    setShowCheckmark(false);
    setTimeout(() => {
      setShowCheckmark(true);
    }, 10);
  };

  return (
    <div className="success-checkmark">
      <div className={`check-icon ${showCheckmark ? '' : 'hidden'}`}>
        <span className="icon-line line-tip"></span>
        <span className="icon-line line-long"></span>
        <div className="icon-circle"></div>
        <div className="icon-fix"></div>
      </div>
      <center>
        <button id="restart" onClick={restartAnimation}>
          Restart Animation
        </button>
      </center>
    </div>
  );
};

export default SuccessCheckmark;
