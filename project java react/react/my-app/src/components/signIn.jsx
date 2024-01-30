import React, { useState } from 'react';
import './signIn.css'; // Import your stylesheet
import ScrollToTopOnMount from './scroll';
import sign from '../images/תמונה7.png';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import Home from './home';
import axios from 'axios';
// import {editUser} from '../redux/reducers/UserSlice.js';
import {setUser} from '../redux/reducers/UserSlice.js'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormDialog from './forgotYourPassword.jsx'
import profileImg from '../images/profile.jpg'
// import Email from './sendMail'

  const SignIn = () => {
  const navigate = useNavigate();

  const signed = () => {
    console.log('signed');
     navigate('/menu/home');
  };

  const  dispatch = useDispatch();
  const myRequest=useSelector((state)=>state.request.listRequest)
  const [isSignUp, setIsSignUp] = useState(false);
  const [color, setColor] = useState("#f6b73c");
const [messegeEmail,setMessegeEmail]=useState("");
const [messegePassowrd,setMessegePassowrd]=useState("");
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
const [userUp,setUserUp]=useState({email:null,password:null,firstName:"",lastName:"",phone:""});
const [status,setStatus]=useState("200")
const [status2,setStatus2]=useState(null)
const [img,setImg]=useState(null)
  const togglePanel = () => {
    setIsSignUp(!isSignUp);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const funcEmail = (e) => {

    setUserUp((prevUser) => ({ ...prevUser, email: e.target.value }));

  };
  const funcImg = (e) => {
  console.log(e.target.files[0]);
    setImg(e.target.files[0]);
 
  };
     const sign = () => {

    dispatch({   type: 'POST_SIGN_UP',
      payload: userUp
    })
    }
    const signIn =async  (e) => {
      e.preventDefault()
      if(userUp.email&&userUp.password&&userUp.email.endsWith("@gmail.com"))
    //    dispatch({
    //     type: 'POST_SIGN_IN',
    //     payload: userUp
    //    }
    //  );
     await axios.post("http://localhost:8585/api/user/signIn", userUp)
      .then((response) => {
       console.log('response.data', response.data);
        dispatch(setUser(response.data));
      // const u=useSelector((state) => state.user.currentUser)
      //   if(u)
         signed(); 
         })
         .catch((error) => {
          setStatus('0')
           console.error("error", error);
         });
    //  if()
    // Now, this should wait for dispatch to complete before navigating
    };
  
    const signUp = (e) => {
      // console.log(userUp);
      // console.log(img);
      setMessegePassowrd("One or more of the details you entered are incorrect.Try again")
      e.preventDefault()
      if(userUp.email&&userUp.password&&userUp.firstName&&userUp.lastName&&userUp.phone&&userUp.email.endsWith("@gmail.com")&&userUp.phone.length==10&&userUp.password.length==6){
        const formData = new FormData();

        // append the file to the FormData object
        console.log('333333333333333333333',img)
        formData.append("img", img);
        formData.append("user", new Blob([JSON.stringify(userUp)], {
          type: "application/json"}));
        console.log(userUp);
        console.log(img);
        // make a POST request to the File Upload API with the FormData object and Rapid API headers
        axios.post("http://localhost:8585/api/user/signUp", formData
          )
          .then((response) => {
            // handle the response
            console.log(response.data);
            dispatch(setUser(response.data));
            setStatus2(response.status.toString());
            console.log(status);
            signed();
          })
          .catch((error) => {
            // handle errors
            console.log(error);
            setStatus2(4555);
          });
        
      }
      // dispatch({type: 'POST_SIGN_UP_WITH_IMG',
     
      //   payload: {userUp,img}
      // }) 
      
      }
    
  const funcPassword = (e) => {
    // Add any password validation logic if needed
    setUserUp((prevUser) => ({ ...prevUser, password: e.target.value }));
    // setPassword(e.target.value);
  };
  const funcFirstName = (e) => {
    // Add any password validation logic if needed
    setUserUp((prevUser) => ({ ...prevUser,firstName : e.target.value }));
    // setPassword(e.target.value);
  };

  const funcLastName = (e) => {
    // Add any password validation logic if needed
    setUserUp((prevUser) => ({ ...prevUser, lastName: e.target.value }));
    // setPassword(e.target.value);
  };
  const funcPhone = (e) => {
    // Add any password validation logic if needed
    setUserUp((prevUser) => ({ ...prevUser, phone: e.target.value }));
    // setPassword(e.target.value);
  };


  const sendEmail = ()=>{
    axios.post('http://localhost:8585/api/user/forgotYourPassword',{email: "dvori456@gmail.com",password: "1234"})
    .then((response) => {
        console.log('response.data',response.data);
        // dispatch(addComent({ ...response.data, ID }));
    })
    .catch((error) => {
        console.error('Error fetching recipes:',error);
        // Handle the error as needed
    });
  }
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
  return (
    <><ScrollToTopOnMount />
    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} style={{height:"80vh",width:"80%",left:"10%"}}>
      <div className="form-container sign-up-container">
        <form action="#">
        <Avatar sx={{ m: 1, bgcolor: 'red' ,position:"center"}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" >
            Create Account
            </Typography>
    
          <span>or use your email for registration</span>
          <input type="text" placeholder="First name" onChange={funcFirstName} required/>
          <input type="text" placeholder="Last name" onChange={funcLastName} required/>
          <input type="email" placeholder="Email" onChange={funcEmail} required/>
          <input type="tel" pattern="[0-9]{10}" placeholder="Phone Number" title="Please enter a 10-digit phone number" onChange={funcPhone} required/>
          <input type="password" placeholder="Password" onChange={funcPassword} required/>
<br></br>
 {(status2)&&<div >there is user whis this email address</div>}
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', margin: '30px' }}>
          <div><Button component="label" variant="contained" onChange={funcImg} startIcon={<CloudUploadIcon />} style={{backgroundColor:'red'}}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button></div>

       <div></div>
 {messegePassowrd}
       <div></div>
        
          {/* <input type="password" placeholder="Password" />
          <form action="/action_page.php"> */}
        {/* <button type="submit">Submit</button> */}
      {/* </form> */}
     
           <div>
           
          <button style={{backgroundColor:"red"}}  onClick={signUp}>Sign Up</button></div> 

      </div>   </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
        <Avatar sx={{ m: 1, bgcolor: 'red' ,position:"center"}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" >
              Sign in
            </Typography>

          <span>or use your account</span>
          {/* <input type="email" placeholder="Email" onChange={funcEmail}/> */}
          <input type="email" placeholder="Email" onChange={funcEmail} required/>
         <span style={{color:'blue'}}> {messegeEmail}</span>
          <input type="password" placeholder="Password" onChange={funcPassword} required/>
          {/* <Email/> onClick={sendEmail}*/}
          <FormDialog > <a href="#"  >Forgot your password?</a></FormDialog>
      
     {(status!='200')&&<span >your  email or password are wrong</span>}
          <button style={{backgroundColor:"red"}} onClick={signIn}>Sign In</button>
          {/* <Email/> */}
        </form>
      </div>
      <div className="overlay-container" >
        <div className="overlay" style={{ backgroundImage: `url(${sign})`}}>
          <div className="overlay-panel overlay-left" style={{color:"black"}}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost" onClick={togglePanel} style={{backgroundColor:"red"}}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right" style={{color:"black"}}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={togglePanel} style={{backgroundColor:"red"}}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;











