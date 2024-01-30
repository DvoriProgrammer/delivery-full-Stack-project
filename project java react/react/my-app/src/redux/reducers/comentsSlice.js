import { createSlice } from "@reduxjs/toolkit";


const initialState ={
  listRequest: [],
}
export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers:{
        setAllRequests: (state, action) => {
            state.listRequest = action.payload;
        },
         
        editRequest: (state,action)=>{
            const currentRequestIndex = state.findIndex(r=>r.id===action.payload.id);
            state[currentRequestIndex] = action.payload.request;
        },

        deleteRequest: (state,action)=>{
                state.fillter(u=>u.id!==action.payload.id)

        },
       addRequest: (state,action)=>{
       state.listRequest.push(action.payload);
        },

    }
})

export const {setAllRequests,editRequest,deleteRequest,addRequest}=requestSlice.actions

export default requestSlice.reducer