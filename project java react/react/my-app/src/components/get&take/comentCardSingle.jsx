import * as React from 'react';
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
import { useSelector ,useDispatch} from 'react-redux';
import BasicModal from './commentsDietail'
export default function ComentCardSingle(props) {
  const person=props.pro;
  const  dispatch = useDispatch();
  const myUser=useSelector((state)=>state.user.currentUser)

  const delete1=()=>{
    dispatch({ type: "DELETE_REQUEST", id: props.req.id,choosenId: person.userId,req: props.req});
  
  }
  return (
    <Card sx={{width:"100%",left:'70%'}}>
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {/* <Avatar
            className="rounded-circle shadow-1-strong me-3"
            alt="avatar"
            src={`data:image/*;base64,${person.userId.img}`}
            width={100} // Adjust the width to make the image larger
            height={100} // Adjust the height accordingly
            
          />  */}
          <BasicModal person={person.userId}/>
         
          <div>
            <Typography variant="h6" className="fw-bold mb-1">
            {person.userId?.firstName}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <Typography variant="body2" color="textSecondary" style={{ marginRight: '0.5rem' }}>
                {/* March 24, 2021 */}
                {/* {person.firstName} */}
              </Typography>
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
        {person.coment}
        </Typography>{(myUser?.id==props.id)&&
      <button onClick={delete1} style={{backgroundColor:'red',color:'white',width:"60px",fontSize:'8px'}}>choose</button>}
      
      </CardContent>
    </Card>
  );
}