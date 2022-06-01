import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '../components/AppBar'
import RoomCard from '../components/RoomCard/RoomCard'
import {getAllRooms, reset} from '../feature/room/roomSlice'



const Dashboard = () => {
  
  const { rooms, isLoading, isError, message} = useSelector((state) => state.rooms)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
 

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(getAllRooms())

    
    return () => {
      dispatch(reset())
    }
  }, [user, navigate])


  return (
    <>
      {user && <AppBar/>}
      {rooms.map((room) => (
          <RoomCard key={room._id} room={room}/>
      ))}
         
       
      
    </>
  )
}
export default Dashboard