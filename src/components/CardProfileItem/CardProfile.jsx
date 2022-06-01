import React from 'react'
import { useDispatch } from 'react-redux'


const CardProfile = () => {
  // const dispatch = useDispatch()


  
  return (
    <>
         <div className="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg dark:bg-gray-800" >
                <div className='relative'>
                    <img alt="Placeholder" className="object-cover w-full h-48"/>
                    <button type="button" className="absolute top-0 right-0 m-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                     </button>
                </div>
                <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                  <h1 className="text-lg text-white">
                     
                  </h1>
                </header>
                <footer className="flex items-center justify-between p-2 md:pl-2">
                        <h2 className="ml-2 text-lg text-white">
                            
                        </h2>
                        <p className="text-lg text-white">
                        
                        </p>
                </footer>
            </article>
         </div>

       
    </>
  )
}

export default CardProfile

