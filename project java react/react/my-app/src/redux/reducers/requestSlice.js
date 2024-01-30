import { createSlice } from "@reduxjs/toolkit";


const initialState ={
  listRequest: [],
  listFromData: [],
}
export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers:{
        setAllRequests: (state, action) => {
            state.listRequest = action.payload;
            state.listFromData = action.payload;
        },
         
        editRequest: (state,action)=>{
            const currentRequestIndex = state.findIndex(r=>r.id===action.payload.id);
            state[currentRequestIndex] = action.payload.request;
        },
        filterRequest: (state,action)=>{
          state.listFromData = action.payload;

        },
        deleteDelivery: (state,action)=>{
          
            state.listRequest = state.listRequest.filter(u => u.id !== action.payload.id);
            state.listFromData = state.listFromData.filter(u => u.id !== action.payload.id);

        },
        clearFilter:(state)=>{
          state.listFromData=state.listRequest
        },

       addRequest: (state,action)=>{
           state.listRequest.push(action.payload);
           state.listFromData.push(action.payload);
        },
        // addComent: (state,action)=>{
        //     const x = state.listRequest.findIndex(u => u.id == action.payload.id);
        //     state.listRequest[x].coments.push(action.payload);
        //      },
        addComent: (state, action) => {
            const { ID, ...commentData } = action.payload;
            const requestIndex = state.listRequest.findIndex(u => u.id === ID);
            const filtertIndex = state.listFromData.findIndex(u => u.id === ID);
            if (requestIndex !== -1) {
              state.listRequest[requestIndex].coments.push(commentData);
            }
            if (filtertIndex !== -1) {
              state.listFromData[filtertIndex].coments.push(commentData);
            }
          },


    }
})

export const { setAllRequests,editRequest,deleteDelivery,addRequest,addComent,filterRequest,clearFilter}=requestSlice.actions

export default requestSlice.reducer