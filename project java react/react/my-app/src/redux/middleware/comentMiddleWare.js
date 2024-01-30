// export const getRequestsMidd=({dispatch,getState})=>next =>action=>{
//     if(action.type==='GET_REQUESTS'){
//           axios.get(`http://localhost:8585/api/delivery/getRequests/${id}`)
//          .then((response)=>{
//             console.log('response.data',response.data);
//              dispatch(setAllRequests(response.data));
//          })
//          .catch((error)=>{
//             console.error("error",error)
//          })
         
//         };
//         return next(action);
// }
import axios from 'axios'
import {addComent} from '../reducers/requestSlice';
import {addComent2} from '../reducers/volunteerSlice';
export const addComentMid = ({ dispatch, getState }) => next => action => {
   if (action.type === 'ADD_COMENT') {
    // console.log("id",action.payload.user);
     const newComent = action.payload;
     const ID=action.id
     console.log('newComent',newComent);
     console.log('newComent',ID?.userId);
       // Perform the asynchronous operation
       axios.post('http://localhost:8585/api/coments/add',newComent)
           .then((response) => {
               console.log('response.data',response.data);
            //    if(action.category==1)
               dispatch(addComent({ ...response.data, ID }));
               
           })
           .catch((error) => {
               console.error('Error fetching recipes:');
               // Handle the error as needed
           });
   }
   // Continue the action through the middleware chain
   return next(action);
};