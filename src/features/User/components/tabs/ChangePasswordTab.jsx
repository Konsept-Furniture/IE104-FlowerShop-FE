import { Backdrop, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import ChangePasswordForm from '../ChangePasswordForm'

ChangePasswordTab.propTypes = {}

function ChangePasswordTab(props) {
   const [loading, setLoading] = useState(false)

   const handleChangePassword = async values => {
      setLoading(true)
      try {
         console.log(values)
      } catch (error) {
         console.log('error to change password', error)
      }
      setLoading(false)
   }
   return (
      <>
         <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         <ChangePasswordForm onChangePasswordClick={handleChangePassword} />
      </>
   )
}

export default ChangePasswordTab
