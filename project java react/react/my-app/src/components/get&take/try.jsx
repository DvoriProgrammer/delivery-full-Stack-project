import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const CardComponent = () => {
  return (
    <Card sx={{width:"70%",left:'20%'}}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
          <Avatar
            className="rounded-circle shadow-1-strong me-3"
            alt="avatar"
            src="https://mui.com/static/images/avatar/1.jpg"
            width={100} // Adjust the width to make the image larger
            height={100} // Adjust the height accordingly
          />
          <div>
            <Typography variant="h6" className="fw-bold mb-1">
              Alexa Bennett
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Typography variant="body2" color="textSecondary" style={{ marginRight: '0.5rem' }}>
                March 24, 2021
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Typography variant="body2" color="textSecondary">
                <IconButton className="link-muted">
                  <i className="fas fa-redo-alt"></i>
                </IconButton>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <IconButton className="link-muted">
                  <i className="fas fa-heart"></i>
                </IconButton>
              </Typography>
            </div>
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" style={{ fontSize: 15 }}>
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't
          look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
          need to.
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', margin: '30px' }}>
        <div><LocationOnIcon/><strong style={{fontSize:'20'}}>From:</strong></div>
        <div><LocationOnIcon/> <strong style={{fontSize:'20'}}>To:</strong></div>
          <div><AttachMoneyIcon/><strong style={{fontSize:'20'}}>Price:</strong></div>
       
        <div>
        <button style={{ background: 'white', color: 'black', backgroundColor: 'white',borderBlockColor:'white' }}>
          <ChatBubbleOutlineIcon sx={{ left: '80%',width:'100' }} />
        </button></div> </div>


        {/* <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', margin: '30px' }}>
        <div><LocationOnIcon/>From:</div>
        <div><LocationOnIcon/> To:</div>
          <div><AttachMoneyIcon/>Price:</div>
       
        <div>        </div>
        
        </div> */}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
