import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../feature/auth/authSlice'
import roomReducer from "../feature/room/roomSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomReducer
    }
})