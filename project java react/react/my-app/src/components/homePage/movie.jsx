import React from 'react';

import background1 from '../..//images/background1.png'
import movie from '../..//images/My Movie.mp4'


export default function Questions(){
 

  return (
  <>
 <div >
  <h1 style={{fontFamily:"monospace"}}>The best way to send</h1>
  <h1 style={{fontFamily:"revert-layer"}}>The best way to earn</h1>
  <div><video style={{width:"90%", objectFit:"cover"}} autoPlay  muted>
        <source src={movie} type="video/mp4" />
      </video></div>
  
  </div>
  </>
 
      );
    };