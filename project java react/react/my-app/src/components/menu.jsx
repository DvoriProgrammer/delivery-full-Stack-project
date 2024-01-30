import React, { useState } from 'react';
import { Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import Home from './home';
import About from './about';
import SignIn from './signIn';
import FooterComponent from './footer';
import BlogPost from './side';
import logo from '../images/logo.png';
import './menu.css';
import Profile from './Profile/profile.jsx';
import PositionedMenu from './Profile/profileMenu.jsx';
//import SignInSide from './sign/signIn.jsx'
import CardsVolunteering from '../components/volunteering/cardsVolunteering.jsx'
export default function Menu() {
  const [isProfile,setisProfile]=useState(0)
 
    const navigate = useNavigate();

    const moveProfile = () => {
      // Navigate to the Profile component
      // console.log('navigate')
      // navigate('profile');
     
    // <ProfileMenu style={{display:"fixed"}}/>
    };
  return (
    <>
   
        <nav style={{ backgroundColor: "#34495e", position: 'fixed', top: 0, left:"0", width: '100%', textAlign: 'center', zIndex:9999 ,height:"10vh"}}>
        <div style={{ display: 'flex', justifyContent: 'center' ,height:"10%",top:0, width:'50%'}}>
        <ul className="dots" onClick={moveProfile}>
      <li>
        <a >
        < PositionedMenu />
           
        </a>
         {/* <h4 style={{color:"white", fontSize:14,textDecoration: 'none',fontFamily:"initial" }} onClick={moveProfile}>my account</h4> */}
      </li>
      </ul>
          <Link to="/menu/about" style={{ flex: 1 ,textDecoration: 'none'}}>
            <h2 style={{ textDecoration: 'none',
 fontSize:17}} className='h2hover'>about</h2>
          </Link>
          <Link to="/menu/CardsVolunteering" style={{ flex: 1 ,textDecoration: 'none'}}>
            <h2 style={{ textDecoration: 'none',fontSize:17
}}className='h2hover'>Volunteering</h2>
          </Link>
          
          <Link to="/menu/signIn" style={{ flex: 1,textDecoration: 'none' }}>
            <h2 style={{ fontSize:17,textDecoration: 'none' }} className='h2hover'>signIn/Up</h2>
          </Link>
          <Link to="/menu/cards" style={{ flex: 1 ,textDecoration: 'none'}}>
            <h2 style={{ textDecoration: 'none',
 fontSize:17}} className='h2hover'>Requests</h2>
          </Link>
          <Link to="/" style={{ flex: 1,top:0 ,textDecoration: 'none'}}>
            <h2 style={{ top:0}}><img src={logo}  style={{width:78,height:78,top:0}}></img></h2>
          </Link>
      
        </div>
      </nav>
      <br/>  <br/>
      <Outlet style={{ position: 'absolute', top: '100px', width: '100%', zIndex: 1 }} />

      <Routes >
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>

      {/* <FooterComponent style={{ backgroundColor: 'red', position: 'fixed', buttom:0, left:"6.4%", width: '100%', textAlign: 'center', zIndex: 9999 ,height:"10%",marginTop:40}}/>  */}
    </>
  );
}
