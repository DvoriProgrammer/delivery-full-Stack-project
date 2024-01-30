import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import p4 from '../images/forget.png'
import axios from 'axios'
import {useState} from 'react'
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [email,setEmail]=useState("");
  const setEmailFunc=(e)=>{
    setEmail(e.target.value)
    
  }
  const sendEmail=()=>{
    axios.post('http://localhost:8585/api/user/forgotYourPassword',{email: email,password: "1234"})
    .then((response) => {
        console.log('response.data',response.data);
        // dispatch(addComent({ ...response.data, ID }));
    })
    .catch((error) => {
        console.error('Error fetching recipes:',error);
        // Handle the error as needed
    });
    handleClose()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment >
      <Button variant="outlined" onClick={handleClickOpen} 
>
        forget your passowrd?
      </Button>
      <Dialog open={open} onClose={handleClose} style={{fullWidth:'50%'}}>
        <DialogTitle> "   "</DialogTitle>
        <DialogContent>
           <img src={p4}  style={{height:"2%"}}/>
          <DialogContentText>
           
            To get your passowrd, please enter your email address here. We
            will send updates occasionally.
            
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={setEmailFunc}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={sendEmail}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
