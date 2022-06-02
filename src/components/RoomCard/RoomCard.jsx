import React from 'react'
import CreateProfile from '../CreateProfile/CreateProfile'
import { ModalContext } from '../../Modal/ModalContext/ModalContext'
const RoomCard = ({room}) => {
  let {handleModal} = React.useContext(ModalContext)

  return (
    <>
         <div className="w-full px-1 py-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
                <div className="flex justify-between p-4 overflow-hidden rounded-lg shadow-sm h-28 ring-gray-200 ring-2 md:p-4">
                  <div className='flex flex-col justify-between'>
                  <h1 className="text-lg font-bold text-gray-800">
                    {room.course}-{room.year}{room.section}
                  </h1>
                  <h2 className='font-semibold text-gray-600 text-md'>{room.name}</h2>
                  </div>
                  <div>
                    <button onClick={() => handleModal(<CreateProfile roomID={room._id}/>)} type="button" className="inline-flex items-center p-1 ml-auto text-sm text-gray-400 bg-transparent rounded-full hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </div>
            </div>
        </div>
    </>
  )
}

export default RoomCard

