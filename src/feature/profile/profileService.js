import axios from 'axios'

const REMOTE_URL = `https://backend-faceapp.herokuapp.com`
const API_URL =  `${REMOTE_URL}/api/profile/`


const createProfile = async(roomData, roomID, token) => {
 
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.post(API_URL + roomID, roomData,  config)
    return response.data
}




const profileService = {
    createProfile
}

export default profileService