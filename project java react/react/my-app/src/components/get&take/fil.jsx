import React, { useState } from "react";
import "./filter.css"; // Import your CSS file
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Filter = ({ onFilterChange , f2}) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedDateWhen, setSelectedDateWhen] = useState(new Date());
  const [selectedButton, setSelectedButton] = useState(null);

  const handleDateWhenTimeChange = (event) => {
    const newTime = event.target.value;
    const [hours, minutes] = newTime.split(":");
    const updatedDate = new Date(selectedDateWhen);
    updatedDate.setHours(hours);
    updatedDate.setMinutes(minutes);

    setSelectedDateWhen(updatedDate);
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
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
  const dataToSend = 'tamar';
  f2(dataToSend);
  }

  return (
    <>
      <div className="filter-bar"  style={{zIndex: 999, top:'100px'}}>
        <div className="filter-section">
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <TextField
              id="standard-multiline-flexible"
              label="From Where"
              maxRows={1}
              variant="standard"
              sx={{ height: "7ch", width: "35ch", marginLeft: "10px" }}
            />
          </div>
        </div>

        <Box sx={{ marginLeft: "1px", "& button": { m: 1 } }}>
          <div>
            <Button
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: selectedButton === "button1" ? "red" : "blue",
                color: "white",
              }}
              onClick={() => handleButtonClick("button1")}
            >
              Small
            </Button>
            <Button
              variant="outlined"
              size="medium"
              sx={{
                backgroundColor: selectedButton === "button2" ? "red" : "blue",
                color: "white",
              }}
              onClick={() => handleButtonClick("button2")}
            >
              Medium
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                backgroundColor: selectedButton === "button3" ? "red" : "blue",
                color: "white",
              }}
              onClick={() => handleButtonClick("button3")}
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
              <TextField
                id="time-picker-when"
                label="When (Time)"
                type="time"
                defaultValue={selectedDateWhen
                  .toISOString()
                  .split("T")[1]
                  .slice(0, 5)}
                variant="standard"
                sx={{ height: "7ch", width: "35ch", marginTop: "30px" ,left:0}}
                onChange={handleDateWhenTimeChange}
              />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <TextField
            id="standard-multiline-flexible"
            label="To price"
            maxRows={1}
            variant="standard"
            sx={{ height: "10ch", width: "35ch", marginLeft: "10px" }}
          />
        </div>
        <button className="apply-button" onClick={f8}>
          Filter
        </button>
      </div>
      <button onClick={f8}  style={{backgroundColor:'blue' , top: '330px'}}> clicccccck</button>
    </>
  );
};

export default Filter;
