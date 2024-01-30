import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
export default function SideLeft(){
  const myUser=useSelector((state)=>state.user.currentUser)
    return(
    
      <Card sx={{ minWidth:"100%"}}>
        <CardContent>
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp"   src={`data:image/png;base64,${myUser.img}`}
          sx={{ width: 130, height: 130,left:"45%" }}/>
    </Stack>
          <Typography sx={{ fontSize:18}} color="text.secondary" gutterBottom>
       {myUser?.firstName}  {myUser?.lastName}<br/>
       {myUser?.email}
          </Typography>
          <Typography variant="h5" component="div">
          <br/><br/><br/><br/>
          </Typography>
          <Typography sx={{ fontSize:15 }} color="text.secondary">
           num delivery:{myUser.deliverCount}
          </Typography>
          <Typography variant="body2">
        
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>




        
      </Card>
   
    )
}