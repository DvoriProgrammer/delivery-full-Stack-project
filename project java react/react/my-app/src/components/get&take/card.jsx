

import './card.css'
import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { styled } from '@mui/material/styles';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ComentCard from './comentCard.jsx'
import { FaThumbsUp, FaThumbsDown, FaReply } from 'react-icons/fa';
import { useState,useEffect } from 'react';
// import AddRequest from './addRequest.jsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddComment from './addComment.jsx';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import axios from 'axios'
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ExpandMore = styled((props) => {
 
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
// ... (imports)

// useEffect(() => {
//   dispatch({type:'GET_COMENTS'})
// }, []);

export default function CardSingle(props) {
  const saveId=props.idcard;
  console.log("p",props.pro.id)
  const Sizes= {
   1:'small',
  2:"medium",
   3:"large",
  }
  const person = props.pro; 
  // console.log(person.id);
const navigate=useNavigate();
  const catId=props.c;
  const coment=person?.coments
  const  dispatch = useDispatch();
  const requester = person?.userId
  const myUser=useSelector((state)=>state.user.currentUser)
  // console.log(person.userId.id)
  console.log("request Id",saveId)
  console.log(myUser)

const [ID, setID] = useState(0); // State to hold the user ID
const signIn=()=>{
  navigate('/menu/signIn')
}

useEffect(() => {
  if(myUser) {
    const userID = myUser?.id;
    setID(userID);
  }
  console.log(ID);
},[myUser]);

 
const delete1=()=>{
  //person - בקשה 
dispatch({ type: "DELETE_REQUEST",payload: person});
  
// console.log(e.target.value);
}
// sender: myUser,
const sendEmail=()=>{
  // dispatch({ type: "SEND_EMAIN",emailTo :requester });
  axios.post('http://localhost:8585/api/user/getmail',[requester,myUser])
  
  .then((response) => {
      console.log('response.data',response.data);
      // dispatch(addComent({ ...response.data, ID }));
  })
  .catch((error) => {
      console.error('Error fetching recipes:',error);
      // Handle the error as needed
  });
 
// console.log(e.target.value);
}
  const [expanded, setExpanded] = React.useState(false);
  const [text,setText]=useState({coment:"",
  usersOffer:{id:person?.id},//הבקשה אליה מגיבים
  userId:{id:myUser?.id}//מי שענה
})
console.log("text",text);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const changeText = (e) => {
    setText((prevUser) => ({ ...prevUser, coment:e.target.value }));
// console.log(myUser.id,"12111111111111111111111111111111111111111")
  };
  const addComent = async(e)=>{
    e.preventDefault()
   
   
 console.log("787777777777777777777777777777",saveId);
 console.log("ffffffffffffffffffffffffffffffffffffffffffffffffffff",person);
       dispatch({type:"ADD_COMENT",payload:text, id:saveId,category:person?.category?.id});
       setText({
      coment: "",
      usersOffer:{id:person?.id},
      userId: {id: myUser?.id }
    });
    sendEmail()
 
}

const funcDelete=()=>{
  dispatch({ type: "DELETE_REQUEST", id: props.req.id,choosenId:person.userId,req:props.req});
}
  return (
    <>
   

      <Card sx={{ background: "ffff", padding: "0.2%", textAlign: "center", marginTop: "3%", left: "70%",width:'80%' }}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
          <Avatar
            className="rounded-circle shadow-1-strong me-3"
            alt="avatar"
          //  src={`data:image/png;base64, ${person?.userId?.img}`||"https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg"} 

           src={`data:image/png;base64,${person?.userId?.img}`}
         
           sx={{width:60,height:60}}
            // src={myUser.img}
            width={135} // Adjust the width to make the image larger
            height={135} // Adjust the height accordingly
          />
          <div>
            <Typography variant="h6" className="fw-bold mb-1">
          <h3 style={{margin:18}}>{person?.userId?.firstName} {person?.userId?.lastName} </h3>
               <h6>{person?.dataTime?.getDate()}</h6>

        
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>   
            
              <Typography variant="body2" color="textSecondary" style={{ marginRight: '0.5rem' }}>
              {person?.dateTime}
             
              
              </Typography>    
                 {/* <Stack direction="row" spacing={2} sx={{backgroundColor:red,left:'100%'}}>
      <Button variant="outlined" startIcon={<DeleteIcon />} sx={{backgroundColor:red,left:'100%'}}>
        Delete
      </Button>
      
    </Stack> */}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Typography variant="body2" color="textSecondary">
               
              </Typography>
              <Typography variant="body2" color="textSecondary">

              </Typography>
             
            </div>
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" style={{ fontSize: 15 }}>
         {person?.recognaize}
        </Typography>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto', margin: '30px' }}>
          
        <div><LocationOnIcon/><strong style={{fontSize:'20'}}>From:</strong>  {person?.fromWhere} </div>
        <div><LocationOnIcon/> <strong style={{fontSize:'20'}}>To:</strong>   {person?.toWhere}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto auto auto', margin: '30px' }}>
        <div><ForwardToInboxIcon/> <strong style={{fontSize:'20'}}>Size:</strong>{Sizes [person?.size]}</div>
 {/* { console.log(catId)} */}

 {/* <div>< LocalPhoneIcon/> <strong style={{fontSize:'20'}}>Phone:</strong> {person?.phone}</div> */}
        {catId&&<div><AttachMoneyIcon/><strong style={{fontSize:'20'}}>Price:</strong>  {person?.price}</div>}
        {/* <div> */}
  {/* <InsertInvitationIcon /> */}
  {/* when:
  {person.dateTime instanceof Date
    ? person.dateTime.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
    : 'N/A'}{' '}
  {person.requesHour} */}
{/* </div>  */}

       <div><InsertInvitationIcon/>when: {person?.dateTime} {person?.requesHour}</div> 
    {/* {console.log("hiiiiiiiiiiiiiiiiiiiiiiiiii",myUser.id,person?.userId?.id)}
       {myUser.id==person?.userId?.id&& (<Stack direction="row" spacing={1}>
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={funcDelete}>
        Delete
      </Button>
   </Stack>)} */}
       {/* when: {person.dateTime instanceof Date ? person.dateTime.toISOString().split('')[0]:''} {person.requesHour} */}
       <div/>  
       
        <div>  <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
           <FaReply/>
          </ExpandMore>
        </div>
    
         </div>
      </CardContent>
       
    
      {myUser? (
  <div style={{ display: 'grid', gridTemplateColumns: 'auto auto ', margin: '30px' }}>
    <div className="new-comment">
    <input type="text" placeholder="Add a comment..." onChange={changeText} value={text.coment}/>
    </div>
    <div style={{ top: '5%', left: '20%' }}>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={addComent}  endIcon={<SendIcon />} style={{backgroundColor: 'red'}}>
          Send
        </Button>
      </Stack>
    </div>
  </div>
) : (
  <div>What to add a comment?<a onClick={signIn}>First signIn</a> </div>
)}

{/* <button style={{backgroundColor: 'blue'}} >add coment</button> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ zIndex: 100 }}>
     
            <ComentCard  pro={coment} id={person?.userId?.id} req={person}/>
           
          </CardContent>
        </Collapse>
 



        
      </Card>
    </>
  );
}
