// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { useSelector } from 'react-redux';
// import {useNavigate } from 'react-router-dom'
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal({label, path}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const myUser=useSelector((state)=>state.user.currentUser)
//   const navigate=useNavigate();
//   const signed=()=>{
//     navigate(path)
//   }
//   return (
//     <div>
// {myUser?(
//       <Button onClick={signed}   style={{
//           textDecoration: 'none',
//           fontSize: 17,
//           backgroundColor: 'blue',
//           color: 'white',
//           padding: '10px 20px',
//           position: 'fixed',
//           top: '600px',
//           left: '60px',
//           zIndex: 999
//         }}>{label}</Button>):
//         (
//             <Button onClick={handleOpen}   style={{
//                 textDecoration: 'none',
//                 fontSize: 17,
//                 backgroundColor: 'blue',
//                 color: 'white',
//                 padding: '10px 20px',
//                 position: 'fixed',
//                 top: '600px',
//                 left: '60px',
//                 zIndex: 999
//               }}>add request</Button>)}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }





import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useSelector } from 'react-redux';
 import {useNavigate } from 'react-router-dom'
 import SpeedDial from '@mui/material/SpeedDial';
 import SpeedDialIcon from '@mui/material/SpeedDialIcon';
 import SpeedDialAction from '@mui/material/SpeedDialAction';
 import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
 import SaveIcon from '@mui/icons-material/Save';
 import PrintIcon from '@mui/icons-material/Print';
 import ShareIcon from '@mui/icons-material/Share';
 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BasicModal({label, path, prev}) {
  const myUser=useSelector((state)=>state.user.currentUser)
  const navigate=useNavigate();
  const signed=()=>{
    navigate(path,{state:{from:prev}})
  }

  const signIn = ()=>{
    navigate('/menu/signIn')
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
       
      {myUser?(
             <Box onClick={signed} sx={{  transform: 'translateZ(0px)', flexGrow: 1,textDecoration: 'none',
               fontSize: 17,
             color: 'white',
              padding: '10px 20px',
              position: 'fixed',
              top: '650px',
                left: '60px',
               zIndex: 999 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16}}
              icon={<SpeedDialIcon />}
            >
            </SpeedDial>
          </Box>
    ):
        (
            // <Button onClick={handleClickOpen}   style={{
            //     textDecoration: 'none',
            //     fontSize: 17,
            //     backgroundColor: 'blue',
            //     color: 'white',
            //     padding: '10px 20px',
            //     position: 'fixed',
            //     top: '600px',
            //     left: '60px',
            //     zIndex: 999
            //   }}>add request</Button>
            <Box onClick={handleClickOpen} sx={{ transform: 'translateZ(0px)', flexGrow: 1,textDecoration: 'none',
             fontSize: 17,

             color: 'white',
              padding: '10px 20px',
              position: 'fixed',
              top: '650px',
               left: '60px',
               zIndex: 999 }}>
            <SpeedDial
              ariaLabel="SpeedDial basic example"
              sx={{ position: 'absolute', bottom: 16, right: 16}}
            
              icon={<SpeedDialIcon />}
            >
            </SpeedDial>
          </Box>
              
              )}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Only users have access, you have'nt sign in
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={signIn}>sign in</Button>
          <Button onClick={handleClose}>cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
