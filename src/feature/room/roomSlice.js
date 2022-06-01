import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomService from './roomService'


const initialState = {
    rooms: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const getAllRooms = createAsyncThunk('rooms/getAll', async(_, thunkAPI) => {
    try{
        const token = thunkAPI.getState().auth.user.token
        return await roomService.getAllRooms(token)
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const roomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllRooms.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllRooms.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.rooms = action.payload
            })
            .addCase(getAllRooms.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
   },
})


export const {reset} = roomSlice.actions
export default roomSlice.reducer