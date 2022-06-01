import React from 'react'
import { useState } from "react";
import { ModalContext } from '../../Modal/ModalContext/ModalContext'
import Filebase64 from 'react-file-base64'
import { useDispatch } from 'react-redux';

const CreateProfile = () => {

  
  let {handleModal} = React.useContext(ModalContext)
  const dispatch = useDispatch();

  const [proData, setData] = useState({
    name: '',
    id_number: '',
    roomID: '',
    image: ''
  })

  const {name, id_number, image, roomID} = proData

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
    
    const profileData = {
      name,
      id_number,
      image,
      roomID,
    }


    handleModal()
  }

  
  return (
    <>
         <div className="flex items-start justify-between">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">Submit Profile</h3>
          <button type="button" onClick={() => handleModal()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
          </button>
          </div>
          <form className="mt-5 space-y-6" onSubmit={onSubmit}>  
            <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
            <input type="text" name="name" id="name" value={name}  onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ex. Juan Dela Cruz" required=""/>
            </div>
            <div>
              <label htmlFor="id_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">ID Number</label>
              <input type="number" name="id_number" value={id_number} id="id_number" onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="181295" required=""/>
            </div> 
            <div>
              <label htmlFor="roomID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Room ID</label>
              <input type="text" name="roomID" id="roomID" value={roomID} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="627e10b33fdbbab86a64840f" required=""/>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Upload Image</label>
              <Filebase64 multiple={ false }  onDone={({base64}) => setData({...proData, image: base64})} className='text-sm font-medium text-white'/>
            </div>

            <div className='space-y-3'>
              <button type="submit" className="w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
              <button type="button" onClick={() => handleModal()} className="w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Close</button>
            </div>
            
          </form>
    </>
  )
}

export default CreateProfile
