import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
//import PhoneNumberField from "./phone";
import "./AddRequest.css"; // Import your CSS file
import img1 from "../../images/new.png";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ScrollToTopOnMount from "../scroll.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import GoogleMaps from "./googleMaps/googleMaps.jsx";
import {useLocation} from "react-router-dom";
import AlertDialog from "./seccefully.jsx";
const AddRequest = () => {
  const dispatch = useDispatch();
  const myRequest = useSelector((state) => state.request.listRequest);
  const myUser = useSelector((state) => state.user.currentUser);
  //   const [ID, setID] = useState(1); // State to hold the user ID
  //   const [req, setReq] = useState(
  // null
  //   );

  //   useEffect(() => {
  //     // Ensure myUser is not null or undefined before accessing its properties
  //     if (myUser && myUser.id) {
  //       const userID = myUser.id;
  //       setID(userID);
  //     }
  //   }, [myUser]);

  // useEffect(() => {
  //   // Ensure myUser is not null or undefined before accessing its properties
  //   if (ID ) {
  const location = useLocation();
  const loc = location.state.from;
  const [isCard,setIsCard] = useState(true);
  // console.log(additionalParams)

  // if (loc=="cards")
  //   const vol = true
  // else
  //   const vol = false
  useEffect(() => {
    console.log(isCard);
    if (loc!= "cards") {
      setReq((prevUser) => ({ ...prevUser, category: { id: 2 }}));
    } else {
      setReq((prevUser) => ({ ...prevUser, category: { id: 1 }}));
    }
  }, []);
  console.log("nnnnnnnnnnn");
  const navigate = useNavigate();
  const adddedddd = () => {
    // Navigate to the Profile component
    console.log("navigate");
    navigate("/menu/add");
    handleClose();
  };


  const [req,setReq] = useState({
    fromWhere: "",
    toWher: "",
    price:0,
    size:0,
    recognaize: "",
    dateTime:new Date(),
    requesHour: "",
    userId: {
      id: myUser.id,
    },
    category: {
      id: isCard? 1 : 2,
    },
  });

  const handleDateWhenTimeChange = (event) => {
    const newTime = event.target.value;
    const [hours, minutes] = newTime.split(":");
    const hourString = `${hours}:${minutes}`;
    setReq((prevUser) => ({ ...prevUser, requesHour: hourString }));
  };
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(inputPhoneNumber);
    // Validate the phone number format
    const isValidPhoneNumber = /^\d{10}$/.test(inputPhoneNumber);
    setError(!isValidPhoneNumber);
  };

  const [showForm, setShowForm] = useState(true);
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateWhen, setSelectedDateWhen] = useState(new Date());
  const [selectedButton, setSelectedButton] = useState(null);
  const setFromWhere = (event) => {
    console.log(myUser.id);
    setReq((prevUser) => ({ ...prevUser, fromWhere: event }));
    // setShowForm(true);
  };
  const setToWhere = (event) => {
    setReq((prevUser) => ({ ...prevUser, toWhere: event }));
  };
  const setPrice = (event) => {
    setReq((prevUser) => ({ ...prevUser, price: event.target.value }));
  };

  const recognaize = (event) => {
    setReq((prevUser) => ({ ...prevUser, recognaize: event.target.value }));
  };

  const handleDateWhenChange = (event) => {
    const selectedDate = new Date(event.target.value);
    selectedDate.setHours(0, 0, 0, 0); // Set time components to zero
    setPerson((prevPerson) => ({
      ...prevPerson,
      dateTime: selectedDate,
    }));
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setReq((prevUser) => ({ ...prevUser, size: buttonName }));
  };
  const addRequestNow = () => {
    console.log(
      "--------------------------------",
      req.category.id,
      "--------------------------------"
    );

    dispatch({
      type: "POST_ADD_REQUEST",
      payload: req,
      category: isCard ? 1 : 2,
    });
    adddedddd();
  };
  const pull_data = (data) => {
    console.log(data);
    setFromWhere(data);
  };
  return (
    <>
      <ScrollToTopOnMount />
      <html>
        <body>
          <div className="divgrid">
            <div
              className="container2 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              style={{ left: 0, marginRight: "auto" }}
            >
              <header>Request details</header>
              <form action="#">
                <div className="form first">
                  <div className="details personal">
                    {/* <span className="title1">Personal Details</span> */}

                    <div className="fields1">
                      {/* <div style={{ display: "flex", alignItems: "baseline" }}> */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "auto auto auto  ",
                          margin: "2px",
                        }}
                      >
                        <div>
                          <LocationOnIcon />
                          {/* <TextField
                          id="standard-multiline-flexible"
                          label="from where"
                          multiline
                          maxRows={1}
                          variant="standard"
                          sx={{ height: "7ch", width: "35ch" }}
                          onChange={setFromWhere}
                        /> */}
                          <GoogleMaps
                            label={"from where"}
                            func={setFromWhere}
                          />
                        </div>
                        <div> </div>

                        <div>
                          <LocationOnIcon />
                          <GoogleMaps label={"to where"} func={setToWhere} />
                        </div>{" "}
                      </div>
                      {/* </div> */}
                      <div className="radio-buttons"></div>
                      {showForm && (
                        <>
                          <Box
                            sx={{ marginLeft: "150px", "& button": { m: 1 } }}
                          >
                            <div>
                              <Button
                                variant="outlined"
                                size="small"
                                sx={{
                                  backgroundColor:
                                    selectedButton === "1" ? "red" : "blue",
                                  color: "white",
                                }}
                                onClick={() => handleButtonClick("1")}
                              >
                                Small{" "}
                              </Button>
                              <Button
                                variant="outlined"
                                size="medium"
                                sx={{
                                  backgroundColor:
                                    selectedButton === "2" ? "red" : "blue",
                                  color: "white",
                                }}
                                onClick={() => handleButtonClick("2")}
                              >
                                Medum{" "}
                              </Button>{" "}
                              <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                  backgroundColor:
                                    selectedButton === "3" ? "red" : "blue",
                                  color: "white",
                                }}
                                onClick={() => handleButtonClick("3")}
                              >
                                large
                              </Button>
                            </div>
                          </Box>
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
                                value={req.dateTime.toISOString().split("T")[0]}
                                variant="standard"
                                sx={{
                                  height: "7ch",
                                  width: "35ch",
                                  marginTop: "30px",
                                }}
                                onChange={handleDateWhenChange}
                              />
                            </div>
                            {/* Time When Picker */}
                            <div>
                              <TextField
                                id="time-picker-when"
                                label="When (Time)"
                                type="time"
                                value={req.requesHour || ""}
                                variant="standard"
                                sx={{
                                  height: "7ch",
                                  width: "35ch",
                                  marginTop: "30px",
                                  marginLeft: "40px",
                                }}
                                onChange={handleDateWhenTimeChange}
                              />
                            </div>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            {isCard && (
                              <TextField
                                id="standard-multiline-flexible"
                                label="price"
                                multiline
                                maxRows={1}
                                variant="standard"
                                sx={{
                                  width: "35ch",
                                  marginLeft: "10px",
                                  marginTop: "13px",
                                }}
                                onChange={setPrice}
                              />
                            )}
                          </div>
                          {/* <PhoneNumberField /> */}
                          <div
                            style={{ display: "flex", alignItems: "baseline" }}
                          >
                            <FingerprintIcon sx={{ verticalAlign: "middle" }} />
                            <TextField
                              id="standard-multiline-flexible"
                              label="notation"
                              multiline
                              maxRows={1}
                              variant="standard"
                              sx={{ width: "70ch", marginTop: "13px" }}
                              onChange={recognaize}
                            />{" "}
                          </div>{" "}
                          {/* <button
                            style={{ backgroundColor: "blue" }}
                            onClick={addRequestNow}
                          >
                            add request
                          </button> */}
                          <AlertDialog pro={req} category={isCard ? 1 : 2} />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Identity Details section */}
                  <div className="details ID"></div>

                  <div className="row g-3" id="form-second"></div>
                </div>
              </form>
            </div>
            <div>
              <img src={img1} style={{ height: "100%" }} />
            </div>
          </div>
        </body>
      </html>
    </>
  );
};

export default AddRequest;

// import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import FingerprintIcon from "@mui/icons-material/Fingerprint";
// import ScrollToTopOnMount from "../scroll.jsx";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import GoogleMaps from "./googleMaps/googleMaps.jsx";
// import AlertDialog from "./seccefully.jsx";

// const AddRequest = () => {
//   const dispatch = useDispatch();
//   const myUser = useSelector((state) => state.user.currentUser);
//   const location = useLocation();
//   const loc = location.state.from;
//   const [isCard, setIsCard] = useState(true);

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (loc !== "cards") {
//       setIsCard(false);
//     }
//   }, [loc]);

//   const [req, setReq] = useState({
//     fromWhere: "",
//     toWhere: "",
//     price: 0,
//     size: 0,
//     recognaize: "",
//     dateTime: new Date(), // default to current date
//     requesHour: "",
//     userId: {
//       id: myUser.id,
//     },
//     category: {
//       id: isCard ? 1 : 2,
//     },
//   });

//   const handleDateWhenChange = (event) => {
//     setReq((prevUser) => ({
//       ...prevUser,
//       dateTime: new Date(event.target.value),
//     }));
//   };

// const handleDateWhenTimeChange = (event) => {
//   const newTime = event.target.value;
//   const [hours, minutes] = newTime.split(":");
//   const updatedDate = new Date(req.dateTime);
//   updatedDate.setHours(hours);
//   updatedDate.setMinutes(minutes);
//   setReq((prevUser) => ({ ...prevUser, requesHour: updatedDate }));
// };

//   const handleDateWhenTimeChange = (event) => {
//     const newTime = event.target.value;
//     const [hours, minutes] = newTime.split(":");
//     const hourString = `${hours}:${minutes}`;
//     setReq((prevUser) => ({ ...prevUser, requesHour: hourString }));
//   };

//   const setFromWhere = (event) => {
//     setReq((prevUser) => ({ ...prevUser, fromWhere: event }));
//   };

//   const setToWhere = (event) => {
//     setReq((prevUser) => ({ ...prevUser, toWhere: event }));
//   };

//   const setPrice = (event) => {
//     setReq((prevUser) => ({ ...prevUser, price: event.target.value }));
//   };

//   const recognaize = (event) => {
//     setReq((prevUser) => ({ ...prevUser, recognaize: event.target.value }));
//   };

//   const handleButtonClick = (buttonName) => {
//     setReq((prevUser) => ({ ...prevUser, size: buttonName }));
//   };

//   const addRequestNow = () => {
//     dispatch({ type: "POST_ADD_REQUEST", payload: req, category: isCard ? 1 : 2 });
//     adddedddd();
//   };

//   const adddedddd = () => {
//     navigate("/menu/add");
//     handleClose();
//   };

//   return (
//     <>
//       <ScrollToTopOnMount />
//       <html>
//         <body>
//           <div className="divgrid">
//             <div className="container2 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
//               <header>Driving Licence Registration Form</header>
//               <form action="#">
//                 <div className="form first">
//                   <div className="details personal">
//                     <div className="fields1">
//                       <LocationOnIcon sx={{ verticalAlign: "middle" }} />
//                       <GoogleMaps label={"from where"} func={setFromWhere} />

//                       <LocationOnIcon sx={{ verticalAlign: "middle" }} />
//                       <GoogleMaps label={"to where"} func={setToWhere} />

//                       {isCard && (
//                         <TextField
//                           id="standard-multiline-flexible"
//                           label="price"
//                           multiline
//                           maxRows={1}
//                           variant="standard"
//                           sx={{ width: "35ch", marginLeft: "10px", marginTop: "13px" }}
//                           onChange={setPrice}
//                         />
//                       )}

//                       <div>
//                         <TextField
//                           id="date-picker-when"
//                           label="When (Date)"
//                           type="date"
//                           value={req.dateTime.toISOString().split("T")[0]}
//                           variant="standard"
//                           sx={{ height: "7ch", width: "35ch", marginTop: "30px" }}
//                           onChange={handleDateWhenChange}
//                         />
//                       </div>
//                       <div>
//                         {/* <TextField
//                           id="time-picker-when"
//                           label="When (Time)"
//                           type="time"
//                           value={req.dateTime.toISOString().split("T")[1].slice(0, 5)}
//                           variant="standard"
//                           sx={{ height: "7ch", width: "35ch", marginTop: "30px", marginLeft: "40px" }}
//                           onChange={handleDateWhenTimeChange}
//                         /> */}
//                         <TextField
//   id="time-picker-when"
//   label="When (Time)"
//   type="time"
//   value={req.requesHour || ''}
//   variant="standard"
//   sx={{ height: "7ch", width: "35ch", marginTop: "30px", marginLeft: "40px" }}
//   onChange={handleDateWhenTimeChange}
// />

//                       </div>

//                       <div style={{ display: "flex", alignItems: "baseline" }}>
//                         <FingerprintIcon sx={{ verticalAlign: "middle" }} />
//                         <TextField
//                           id="standard-multiline-flexible"
//                           label="how will we recognize the package?"
//                           multiline
//                           maxRows={1}
//                           variant="standard"
//                           sx={{ width: "70ch", marginTop: "13px" }}
//                           onChange={recognaize}
//                         />
//                       </div>

//                       <AlertDialog pro={req} category={isCard ? 1 : 2} />
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div>
//               {/* Your image */}
//             </div>
//           </div>
//         </body>
//       </html>
//     </>
//   );
// };

// export default AddRequest;
