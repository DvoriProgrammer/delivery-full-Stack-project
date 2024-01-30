import React, { useEffect, useState } from 'react';
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
 import Slider from "react-slick";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
const ProfileCenter = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed:5000,
    autoplaySpeed: 3000,
    cssEase: "linear"
};

const myUser=useSelector((state)=>state.user.currentUser);
const request=useSelector((state)=>state.request.listRequest);
const myAds=useSelector((state)=>state.user.myDeliveries)
// const  myAds=request?.filter((e)=>e?.userId?.id===myUser?.id)


  return (

   
<div >
                    <Slider {...settings}>
                        {myAds && myAds.map((item, index) =>
                            <div key={item.id || index} style={{ padding: '4vw' }}>
                              <Card sx={{ maxWidth:800,maxHeight:1000 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {/* src={`data:image/png;base64,${myUser?.choosenUser?.img}`} */}
            {item?.choosenUser?.firstName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title= "choosenUser:"
    header={item?.choosenUser?.firstName } hfh
    subheader={item?.choosenUser?.lastName }
      />
      <CardContent>
        <Typography variant="body2" color="black">
         {item.recognaize}<br/>
        {item.fromWhere}<br/>
        {item.towhere}<br/>
        {item?.choosenUser?.firstName } 
        </Typography>
      </CardContent>    
    </Card>
     </div>
      )}
                    </Slider>
                    </div>

  );
};

export default ProfileCenter;
