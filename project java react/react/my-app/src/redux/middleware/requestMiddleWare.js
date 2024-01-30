import axios from "axios";
import {setAllRequests,addRequest,deleteDelivery} from '../reducers/requestSlice';
import {setAllVolunteer,addVolunteer} from '../reducers/volunteerSlice';


export const getRequestsMidd=({dispatch,getState})=>next =>action=>{
    if(action.type==='GET_REQUESTS'){
          axios.get(`http://localhost:8585/api/delivery/getRequests/${action.id}`)
         .then((response)=>{
            console.log('response.data',response.data);
            console.log(action.id);
            if(action.id===1)
             dispatch(setAllRequests(response.data));
            if(action.id===2)
            dispatch(setAllVolunteer(response.data));
         })
         .catch((error)=>{
            console.error("error",error)
         })
         
        };
        return next(action);
}
export const postAddRequest = ({ dispatch, getState }) => next => action => {
   if (action.type === 'POST_ADD_REQUEST') {
     const newRequest = action.payload;
     console.log('newRecipe',newRequest);
       // Perform the asynchronous operation
       axios.post('http://localhost:8585/api/delivery/create',newRequest)
           .then((response) => {
               console.log('response.data',response.data);
               if(action.isCrd)
                 dispatch(addRequest(response.data));
                else
                dispatch(addVolunteer(response.data));
           })
           .catch((error) => {
               console.error('Error fetching recipes:');
               // Handle the error as needed
           });
   }
   // Continue the action through the middleware chain
   return next(action);
};
export const deleteRequest = ({ dispatch, getState }) => next => action => {
    if (action.type === 'DELETE_REQUEST') {     
        console.log(action.id,action.choosenId)
      console.log("------------------------------------------------------------------------------------------------")
        // Perform the asynchronous operation
        axios.put(`http://localhost:8585/api/delivery/update/${action.id}/${action.choosenId.id}`)
            .then((response) => {
                console.log('response.data',response.data);
                dispatch(deleteDelivery(action.req));
            })
            .catch((error) => {
                console.error('Error fetching recipes:',error);
                // Handle the error as needed
            });
    }
    // Continue the action through the middleware chain
    return next(action);
 };