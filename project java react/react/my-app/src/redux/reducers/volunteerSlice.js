import { createSlice } from "@reduxjs/toolkit";

//////////-------------------------------------------------------------------------
const initialState = {
    volunteerList: [],
    volunteerFilter: []
};
export const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    setAllVolunteer: (state, action) => {
        state.volunteerList = action.payload;
        state.volunteerFilter = action.payload;
    },
   addVolunteer: (state,action)=>{
   state.volunteerList.push(action.payload);
    },
    clearFilter:(state)=>{
      state.volunteerFilter=state.volunteerList
    },
    filterVolunteer: (state,action)=>{
      state.volunteerFilter = action.payload;

    },
    addComent2: (state, action) => {
      const { ID, ...commentData } = action.payload;
      const requestIndex = state.volunteerList.findIndex(u => u.id === ID);
      const filtertIndex = state.volunteerFilter.findIndex(u => u.id === ID);
      if (requestIndex !== -1) {
        state.volunteerList[requestIndex].coments.push(commentData);
      }
      if (filtertIndex !== -1) {
        state.volunteerFilter[filtertIndex].coments.push(commentData);
      }
    },
  }});



export const {setAllVolunteer,addVolunteer,clearFilter,filterVolunteer,addComent2} = volunteerSlice.actions;

export default volunteerSlice.reducer;
