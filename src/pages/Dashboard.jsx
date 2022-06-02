import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '../components/AppBar'
import RoomCard from '../components/RoomCard/RoomCard'
import {getAllRooms, reset} from '../feature/room/roomSlice'
import Spinner from '../components/Spinnner/Spinner'


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
  }, [user, navigate, isError, message, dispatch])


  if(isLoading){
    return <Spinner/>
  }

  
  return (
    <>
      {user && <AppBar/>}

     

      <div className="container px-4 mx-auto my-12 md:px-12">
      <h1 className='text-3xl font-bold text-gray-800'>Rooms</h1>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {rooms.map((room) => (
              <RoomCard key={room._id} room={room}/>
          ))}
          </div>
        </div>
       
      
    </>
  )
}
export default Dashboard