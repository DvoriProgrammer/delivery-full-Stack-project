import { createSlice } from "@reduxjs/toolkit";

//////////-------------------------------------------------------------------------
const initialState = {
  currentUser: null,
  status:null,
  myDliveries: []
};
export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.currentUser = action.payload;
    },
    editUser: (state, action) => {
      const currentUserIndex = state.findIndex(
        (u) => u.userId === action.payload.userId
      );
      state[currentUserIndex] = action.payload.user;
    },
    logOut: (state)=>{
      state.currentUser=null;
    },
    deleteUser: (state, action) => {
      state.fillter((u) => u.userId !== action.payload.userId);
    },
    choosenUser: (state, action) => {
       state.myDliveries=action.payload
    },
  },
});

export const {setUser,editUser,logOut,deleteUser,choosenUser } = usersSlice.actions;

export default usersSlice.reducer;
