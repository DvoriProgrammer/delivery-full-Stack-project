import React, { useState } from 'react';
import Filter from './fil.jsx'; // Assuming you have a Filter component
import "./filter.css"; // Import your CSS file
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FilterListIcon from '@mui/icons-material/FilterList';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import GoogleMaps from "./googleMaps/googleMaps.jsx";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import FilterAltIcon from '@mui/icons-material/FilterAlt';




export default function FilterBar(props) {

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedDateWhen, setSelectedDateWhen] = useState(new Date());
  const [selectedButton, setSelectedButton] = useState(null);

    const [req, setReq] =useState( 
      {fromWhere: null,
    toWhere: null,
    price: 0,
    size: 0,
    dateTime:null,
    requesHour:null,
  })
// const handleDateWhenTimeChange = (event) => {//update the requst hour
//   const newTime = event.target.value;
//   const [hours, minutes] = newTime.split(":");
//   const updatedDate = new Date(selectedDateWhen);
//   updatedDate.setHours(hours);
//   updatedDate.setMinutes(minutes);
//   setSelectedDateWhen(updatedDate);
//   setReq((prevUser) => ({ ...prevUser, requestHour: selectedDateWhen }));
// };
const handleDateWhenTimeChange = (event) => {
  const newTime = event.target.value;
  const [hours, minutes] = newTime.split(":");
  const hourString = `${hours}:${minutes}`;
  setReq((prevUser) => ({ ...prevUser, requesHour: hourString }));
};
const [error, setError] = useState(false);




const setFromWhere = (data) => {
  // console.log(event.target.value)
  setReq((prevUser) => ({ ...prevUser, fromWhere:data}));
  // setShowForm(true);
};
const setToWhere = (data) => {
  setReq((prevUser) => ({ ...prevUser, toWhere:data }));
};
const setPrice = (event) => {
  setReq((prevUser) => ({ ...prevUser, price: event.target.value }));
};

const handleDateWhenChange = (event) => {
  setReq((prevUser) => ({
    ...prevUser,
    localDateTime: new Date(event.target.value),
  }));
};



  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    > 
    </Box>
  );

  
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setReq((prevUser) => ({ ...prevUser, size: buttonName }));
  };

  const handleFilterApply = () => {
    // Implement your filtering logic here using selectedSize, selectedColor, etc.
    console.log("Filter Applied:", {
      size: selectedSize,
      color: selectedColor,
    });

    // Call the onFilterChange function with the selectedColor
    onFilterChange(selectedColor);
  };
  const f8= ()=>{
  const dataToSend = req;
  props.f(dataToSend);
   console.log(req);
  //  console.log(anchor)
  // toggleDrawer(anchor, true)
 
  }

  return (
    <div>
        {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{  fontSize: 17,
          
          color: 'black',
          padding: '10px 20px',
          position: 'fixed',
          top: '20%',
          left: '0px',
          zIndex: 999}}>
         {/* <FilterListIcon style={{width:'100%'}}/> */}
         <FilterAltIcon/>
          </Button>
     
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
               <div className="filter-bar"  style={{zIndex: 999, top:'20%'}}>
        <div className="filter-section">
          {/* <div style={{ display: "flex", alignItems: "baseline" }}>
            <TextField
              id="standard-multiline-flexible"
              label="From Where"
              maxRows={1}
              variant="standard"
              sx={{ height: "7ch", width: "35ch", marginLeft: "10px" }}
              onChange={setFromWhere}
            /> </div>  */}
             <GoogleMaps label={'from where'} func={setFromWhere}/>
               {/* <TextField
              id="standard-multiline-flexible"
              label="To Where"
              maxRows={1}
              variant="standard"
              sx={{ height: "7ch", width: "35ch", marginLeft: "10px" }}
              onChange={setToWhere}
            />
         */}
          <GoogleMaps label={'to where'} func={setToWhere}/>
        </div>

        <Box sx={{ marginLeft: "1px", "& button": { m: 1 } }}>
          <div>
            <Button
              variant="outlined"
              size="small"
              sx={{  backgroundColor: selectedButton === "1" ? "red" : "blue",
                color: "white",}}
         
              onClick={() => handleButtonClick("1")}
            >
              Small
            </Button>
            <Button
              variant="outlined"
              size="medium"
              sx={{
                backgroundColor: selectedButton === "2" ? "red" : "blue",
                color: "white",
              }}
              onClick={() => handleButtonClick("2")}
            >
              Medium
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                backgroundColor: selectedButton === "3" ? "red" : "blue",
                color: "white",
              }}
              onClick={() => handleButtonClick("3")}
            >
              Large
            </Button>
          </div>
        </Box>

        <div className="filter-section">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div>
              <TextField
                id="date-picker-when"
                label="When (Date)"
                type="date"
                defaultValue={selectedDateWhen.toISOString().split("T")[0]}
                variant="standard"
                sx={{ height: "7ch", width: "35ch", marginTop: "30px" }}
                onChange={handleDateWhenChange}
              />
            </div>
          </div>

          {/* When Time Picker */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div>
              {/* <TextField
                id="time-picker-when"
                label="When (Time)"
                type="time"
                defaultValue={selectedDateWhen
                  .toISOString()
                  .split("T")[1]
                  .slice(0, 5)}
                variant="standard"
                sx={{ height: "7ch", width: "35ch", marginTop: "30px" }}
                onChange={handleDateWhenTimeChange}
              /> */}
               <TextField
   id="time-picker-when"
   label="When (Time)"
  type="time"
    value={req.requesHour || ''}
   variant="standard"
   sx={{ height: "7ch", width: "35ch", marginTop: "30px" }}
   onChange={handleDateWhenTimeChange}
 />
        
            </div>
          </div>
        </div>

       {props.c&&<div style={{ display: "flex", alignItems: "baseline" }}>
         <TextField
            id="standard-multiline-flexible"
            label="To price"
            maxRows={1}
            variant="standard"
            sx={{ height: "10ch", width: "35ch", marginLeft: "10px" }}
            onChange={setPrice}
          />
        </div>} 
        <button className="apply-button" onClick={f8} >
  Filter
</button>
      </div>
      <button onClick={f8}  style={{backgroundColor:'blue' , top: '330px'}}> clicccccck</button>
  
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
// const FilterBar = ({ onFilterChange, cardSize, setCardSize, onToggleFilter ,f}) => {
//   const [isFilterVisible, setIsFilterVisible] = useState(true);
//   const handleFilterChange = (color) => {
//     setFilteredColor(color);
//   };
//   const handleToggleFilter = () => {
//     setIsFilterVisible(!isFilterVisible);
//     setCardSize(isFilterVisible ? 'regular' : 'small');
//     onToggleFilter(); // Call the function to toggle filter visibility in the Cards component

//   };

//   return (
//     <div className={`filter-bar ${isFilterVisible ? 'visible' : 'hidden'}`}>
//       <div className="close-button-container">
//         <button className="close-button" onClick={handleToggleFilter} style={{position: 'absolute',
//     top: '300px',
// zIndex: 9999999,}} >
//           close
//         </button>
//         <button style={{position: 'absolute',
//     top: '300px',
// zIndex: 9999999,}}>x</button>
//       </div>
//       {isFilterVisible && <Filter onFilterChange={onFilterChange} f2={(data) => f(data)}/>}
//     </div>
//   );
// };

// export default FilterBar;
