import axios from 'axios'


const API_URL = '/api/room/'


const getAllRooms = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.get(API_URL + `clerk/all-rooms`,  config)
    return response.data
}


const roomService = {
    getAllRooms
}

export default roomService