import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '../components/AppBar'
import {getAllRooms, reset} from '../feature/room/roomSlice'
import RoomCard from '../components/RoomCard/RoomCard'

const Dashboard = () => {
  
 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { rooms, isLoading, isError, message} = useSelector((state) => state.rooms)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
    dispatch(getAllRooms())
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