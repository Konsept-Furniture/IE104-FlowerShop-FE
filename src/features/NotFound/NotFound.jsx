import React from 'react'
import PropTypes from 'prop-types'

NotFound.propTypes = {

}

function NotFound (props) {
  return (
      <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
         <h2 className="lg:text-5xl md:text-4xl font-poppins text-3xl font-bold text-red-500 py-2">CANNOT FIND THIS PAGE</h2>
         <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
            <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="cc" />
         </div>
         <div className="md:hidden grid place-content-center">
            <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="cc" />
         </div>
         <div className="flex md:flex-row flex-col items-center justify-center md:gap-8 mt-4 mb-12 w-full">
            <button className="p-4 text-base text-center font-bold text-white md:w-auto md:mb-0 mb-4 w-full bg-blue-500 border rounded-md hover:bg-red-500">Get back to Homepage</button>
            <button className="p-4 text-base text-white font-bold text-center md:w-auto w-full bg-blue-500 border rounded-md hover:bg-red-500">Contact Support</button>
         </div>
      </div>
  )
}

export default NotFound
