import axios from "axios";
// import  addUser  from '../reducers/UserSlice'; // Assuming you have a userSlice
import {setUser,choosenUser}from '../reducers/UserSlice'
import { useNavigate } from "react-router-dom";

export const getRequestsMidd=({dispatch,getState})=>next =>action=>{
    if(action.type==='GET_USER'){
          axios.get("http://localhost:8585/api/user/signIn")
         .then((response)=>{
            console.log('response.data',response.data);
             dispatch(setUser(response.data));
         })
         .catch((error)=>{
            console.error("error",error)
         })
         
        };
        return next(action);
    }

    export const postSignInMidd = ({ dispatch, getState }) => (next) => (action) => {
    //  const navigate=useNavigate();
      if (action.type === 'POST_SIGN_IN') {  
       axios.post("http://localhost:8585/api/user/signIn", action.payload)
       .then((response) => {
        console.log('response.data', response.data);
         dispatch(setUser(response.data));
        // navigate('/menu/home')
        //  alert("welcome back")
          })
          .catch((error) => {
            console.error("error", error);
          });
      }
    
      return next(action);
    };

export const postSignUpMidd = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === 'POST_SIGN_UP') {
    // const { password, email } = action.payload; // Assuming you have email and password in your payload

   axios.post("http://localhost:8585/api/user/add",action.payload)
      .then((response) => {
        console.log('response.data', response.data);
        // Assuming you have a setUser action in your userSlice
        dispatch(setUser(response.data));
      })
      .catch((error) => {
        console.error("error", error);
      });
  }

  return next(action);
};

export const postSignUpWithImageMidd = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type === 'POST_SIGN_UP_WITH_IMG') {
console.log('222222222222222')

  const { userUp, img } = action.payload; 


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
  })
  .catch((error) => {
    // handle errors
    console.log(error);
  });

  
} 
return next(action);
}




export const postEmailMidd = ({ dispatch, getState }) => (next) => (action) => {

if (action.type === 'SEND_EMAIN') { 
  const emailUser = action.emailTo
  // sender: myUser,emailTo:requester 
  axios.post('http://localhost:8585/api/user/getmail',emailUser)
  
  .then((response) => {
      console.log('response.data',response.data);
      // dispatch(addComent({ ...response.data, ID }));
  })
  .catch((error) => {
      console.error('Error fetching recipes:',error);
      // Handle the error as needed
  });

  return next(action);
};
}



// export const getChoosenUser = ({ dispatch, getState }) => (next) => (action) => {

//   if (action.type === 'CHOOSEN_USER') { 
//     // const emailUser = action.emailTo
//     // sender: myUser,emailTo:requester 
//     axios.post(`http://localhost:8585/api/delivery/choosen/${action.id}`)
    
//     .then((response) => {
//         console.log('response.data',response.data);
//         dispatch(choosenUser(response.data));
//     })
//     .catch((error) => {
//         console.error('Error fetching recipes:',error);
//         // Handle the error as needed
//     });
  
//     return next(action);
//   };
//   }
