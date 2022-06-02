import React from 'react'
const RoomCard = ({room}) => {

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
                    <button type="button" className="inline-flex items-center p-1 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                    </button>
                  </div>
            </div>
        </div>
             
      
    </>
  )
}

export default RoomCard