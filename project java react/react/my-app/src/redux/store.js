import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "./reducers/UserSlice";
import requestSlice from "./reducers/requestSlice";
import {getRequestsMidd,postAddRequest,deleteRequest} from '././middleware/requestMiddleWare'
import {postSignInMidd,postSignUpWithImageMidd,postSignUpMidd} from '././middleware/usersMiddleWare';
import {addComentMid} from '././middleware/comentMiddleWare'

import volunteerSlice from "./reducers/volunteerSlice";
export const store = configureStore({

    reducer:{
        user: usersSlice,
        request:requestSlice,
        volunteer:volunteerSlice
    },
    middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware({serializableCheck: false}) ,getRequestsMidd,postSignInMidd,postSignUpMidd,postSignUpWithImageMidd,postAddRequest,addComentMid,deleteRequest]
})