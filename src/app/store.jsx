import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../feature/auth/authSlice'
import roomReducer from "../feature/room/roomSlice";
import profileReducer from "../feature/profile/profileSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomReducer,
        profiles: profileReducer
    }
})