import React from 'react'
import { Link } from 'react-router-dom'
import { path } from '@/constants/path'
import { Box } from '@mui/system'

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
            <Box
               sx={{
                  mt: 10,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <h1>
                  Something went wrong. Click to{' '}
                  <Link to={path.home} sx={{ textDecoration: 'underline' }}>
                     Home Page
                  </Link>
               </h1>
            </Box>
         )
      }
      return this.props.children
   }
}
