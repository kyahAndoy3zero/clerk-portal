import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AppBar from '../components/AppBar'
import CardProfile from '../components/CardProfileItem/CardProfile'





const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)


  useEffect(() => {

    if (isError) {
      console.log(isError)
    }
    if (!user) {
      navigate('/login')
    }


  }, [user, navigate, isError, message, dispatch])

  if(isLoading){
    return <div>Fetching Data</div>
  }

  return (
    <>
      {user && <AppBar/>} 
      {/* {profiles.length > 0 ? (
        <div className='container px-4 mx-auto my-12 md:px-12 '>
        <div className="flex flex-wrap -mx-1 lg:-mx-4 ">
        {profiles.map((profile) => (  
              <CardProfile key={profile.id_number} profile={profile} />
        ))}
        </div>
      </div>) : (<h2>Empty</h2>)}  */}
    </>
  )
}
export default Dashboard