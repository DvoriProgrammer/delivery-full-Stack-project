import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({person}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>     <Avatar
            className="rounded-circle shadow-1-strong me-3"
            alt="avatar"
            src={`data:image/*;base64,${person.img}`}
            width={100} // Adjust the width to make the image larger
            height={100} // Adjust the height accordingly
            
          /> </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" color="black">
          {person.firstName} {person.lastName}<br></br><br></br>
           email: {person.email}<br></br><br></br>
           phone:{person.phone}<br></br><br></br>
           {/* count : {person.deliverCount} */}
           {/* {console.log(person.deliverCount)} */}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


