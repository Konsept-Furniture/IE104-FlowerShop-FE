import React from 'react'
import PropTypes from 'prop-types'

SortDropdown.propTypes = {

}

function SortDropdown (props) {
   return (
      <div className="bg-white py-6 flex flex-col justify-right">
         <div className="flex items-right justify-right">
            <div className=" relative inline-block text-left dropdown">
               <span className="rounded-md shadow-sm">
                  <button className="text-konsept-gray inline-flex justify-center w-full px-4 py-2 text-md font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                     type="button">
                     <span>Default Sort</span>
                     <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
               </span>
               <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" role="menu">
                     <div className="py-1">
                        <a href="#" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-md leading-5 text-left" role="menuitem" >Default Sorting</a>
                        <a href="#" tabIndex="1" className="text-gray-700 flex justify-between w-full px-4 py-2 text-md leading-5 text-left" role="menuitem" >Sort price low to high</a>
                        <span role="menuitem" tabIndex="-1" className="flex justify-between w-full px-4 py-2 text-md leading-5 text-left text-gray-700 cursor-not-allowed opacity-50">Sort price high to low</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SortDropdown
