import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useDispatch } from 'react-redux';
import {logOut}from '../../redux/reducers/UserSlice'
import { Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import Profile from './profilePage'
import { useSelector } from 'react-redux';
export default function PositionedMenu() {
  const navigate = useNavigate();
  const  dispatch = useDispatch()
  const myUser=useSelector((state)=>state.user.currentUser)
  const moveProfile = () => {
    // Navigate to the Profile component
    console.log('navigate')
    navigate('profilePage');
    handleClose();
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if(myUser!=null)
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
 
     
  };
  const logOutfunc = ()=>{
    dispatch(logOut());
    handleClose()
  }
  return (
    <div>
   <Button
      id="demo-positioned-button"
      aria-controls={open ? 'demo-positioned-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      {/* Use the src prop directly on the Avatar */}
      {/* {myUser.firstName + ' ' + myUser.lastName}?:not contact */}
      <Avatar
  alt="Remy Sharp"
  src={myUser && myUser?.img ? `data:image/*;base64,${myUser?.img}` : 'https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg'}
  sx={{ width:40, height:40,top:0 }}
/>
    </Button>
      <Menu
        style={{ zIndex: 99999, width: "100%", height: "100%" }} // Adjust width and height as needed
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={moveProfile} style={{ height: '100%', width: '100%', fontSize: '120%' }}>Profile</MenuItem>
        <MenuItem onClick={logOutfunc} style={{ height: '100%', width: '100%', fontSize: '120%' }}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
