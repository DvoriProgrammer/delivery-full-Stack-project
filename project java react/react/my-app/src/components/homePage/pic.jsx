import React from 'react';
import './pic.css'; // Import your stylesheet

const Section = ({ id, title }) => (
  <div id={id} className="section">
    <div className="content">
      <h1 style={{fontFamily:AnimationTimeline}}>{title}</h1>
    </div>
    <div className="overlay"></div>
  </div>
);

const YourComponent1 = () => (
  <div className="container" style={{width:"100%"}}>
    <Section id="marketing" title="Pick up." />
    <Section id="technology" title="Get." />
    <Section id="advertising" title="To earn." />
  </div>
);

export default YourComponent1;
