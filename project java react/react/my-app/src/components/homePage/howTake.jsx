import React from "react";
import "./howTake.css";
import p1 from '../../images/computer.png'
import p2 from '../../images/sender.png'
import p3 from '../../images/motorcycle.png'
import p4 from '../../images/pay1.png'
const HowTake = () => {
  return (

    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between", // this line ensures equal spacing
      paddingLeft: "10px",
      paddingRight: "10px",
      marginTop: "5%",
      marginBottom: "0",
      buttom:0
    }}>
        
      <div className="card" style={{ padding: 4 }}>
        <div className="arrow">→</div>
        <h2>Cheese Burger</h2>
        <p>
         <img src={p1}  style={{width:70}}/>
          <br />
          With cheese that gives a thrill.
        </p>
      </div>
      <div className="card" style={{ padding: 4 }}>
        <div className="arrow">→</div>
        <h2>Cheese Burger</h2>
        <p>
        <img src={p2}  style={{width:70}}/>
          <br />
          With cheese that gives a thrill.
        </p>
      </div>
      <div className="card" style={{ padding: 4 }}>
        <div className="arrow">→</div>
        <h2>Cheese Burger</h2>
        <p>
        <img src={p3}  style={{width:70}}/>
          <br />
          With cheese that gives a thrill.
        </p>
      </div>
      <div className="card" style={{ padding: 4 }}>
        <div className="arrow">→</div>
        <h2>Cheese Burger</h2>
        <p>
         <img src={p4}  style={{width:90}}/>
          <br />
          bnkihihi
        </p>
      </div>
    </div>
  );
};

export default HowTake;
