import React,{ useState} from 'react';
import './profilePage.css'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
// import CardProfile from './CardProfile.jsx'
// import SideRight from './sideRight.jsx'
import SideLeft from './sideLeft.jsx';
import ProfileCenter from './profileCenter.jsx'
import ScrollToTopOnMount from '../scroll.jsx';
// import ButtonAddRequest from './buttonAddRequest.jsx'
import { useDispatch } from 'react-redux';
export default function  Profile()  {
const dispatch=useDispatch();
 
    const handleCheckboxClick = () => {
      setCheckboxVisible(false);
    };
  useEffect(()=>{
   const myUser=useSelector((state)=>(state.user.currntUser))
     dispatch({type: 'CHOOSEN_USER',id: myUser.id})
  })
    return (
      <> <ScrollToTopOnMount/>
<br/><br/><br/>
  <div ><SideLeft /></div> 
 <div style={{width:'98%'}}><ProfileCenter /></div> 
{/* < ButtonAddRequest/> */}
           </>
 
    );
}