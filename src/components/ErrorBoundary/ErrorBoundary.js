import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '@/constants/path'
import { Box } from '@mui/system'
import PrimaryButton from '../button/Button'
import Header from '../Header/Header'

export default class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props)
      this.state = { hasError: false }
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true }
   }

   componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         // You can render any custom fallback UI
         return (
            <div>
               <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4 mt-20">
                  <h2 className="lg:text-4xl md:text-2xl tracking-widest text-red font-josefins text-3xl font-bold py-2 mb-8">
                     ERROR PAGE
                  </h2>
                  <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
                     <p className="text-gray-notfound font-sans text-base text-center mb-8">
                        The page you are looking for doesn't exist. It may have
                        been moved or removed altogether. Please try searching
                        for some other page, or return to the website's homepage
                        to find what you're looking for.
                     </p>
                  </div>
                  <div className="md:hidden grid place-content-center">
                     <img
                        className="w-60 h-60"
                        src="https://i.imgur.com/dCYujyC.png"
                        alt="empty"
                     />
                  </div>
                  <Link to={path.home}>
                     <PrimaryButton> Go to Homepage </PrimaryButton>
                  </Link>
               </div>
            </div>
         )
      }
      return this.props.children
   }
}
