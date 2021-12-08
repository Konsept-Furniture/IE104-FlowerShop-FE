import React from 'react'
import PropTypes from 'prop-types'
import PrimaryButton from '@/components/button/Button'
import { Link } from 'react-router-dom'
import { path } from '@/constants/path'
import ShoppingIcon from '@/assets/icons/ShoppingIcon'

NotFound.propTypes = {

}

function NotFound(props) {
   return (
      <div>
         <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4 mt-20">
            <h2 className="lg:text-4xl md:text-2xl tracking-widest font-josefins text-3xl font-bold py-2 mb-8">
         ERROR PAGE
            </h2>
            <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
               <p className="text-gray-notfound font-sans text-base text-center mb-8">The page you are looking for doesn't exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website's homepage to find what you're looking for.</p>
            </div>
            <div className="md:hidden grid place-content-center">
               <ShoppingIcon/>
            </div>
            <Link to={path.home}>
               <PrimaryButton> Go to Homepage </PrimaryButton>
            </Link>
         </div>
      </div>
   )
}

export default NotFound
