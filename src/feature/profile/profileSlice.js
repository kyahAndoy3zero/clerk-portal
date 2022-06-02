import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from './profileService'


const initialState = {
    profiles: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


export const createProfile = createAsyncThunk('profiles/create', async(profileData, thunkAPI) => {
     
    const {name, id_number, image, roomID} = profileData
     const userData = {
        name,
        id_number,
        image,
      }

    try{
        const token = thunkAPI.getState().auth.user.token
        return await profileService.createProfile(userData, roomID, token)
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const profileSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.profiles.push(action.payload)
            })
            .addCase(createProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
   },
})


export const { reset } = profileSlice.actions
export default profileSlice.reducer