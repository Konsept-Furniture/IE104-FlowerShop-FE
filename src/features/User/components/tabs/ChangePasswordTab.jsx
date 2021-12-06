import { changePassword } from '@/features/Auth/authSlice'
import { Backdrop, CircularProgress } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ChangePasswordForm from '../ChangePasswordForm'

function ChangePasswordTab() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(false)

   const handleChangePassword = async values => {
      setLoading(true)
      try {
         const res = await dispatch(changePassword(values)).then(unwrapResult)
         console.log(
            '🚀 ~ file: ChangePasswordTab.jsx ~ line 20 ~ ChangePasswordTab ~ res',
            res
         )
         enqueueSnackbar(res.message, {
            variant: 'success'
         })
      } catch (error) {
         enqueueSnackbar(error.message, {
            variant: 'error'
         })
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
         <ChangePasswordForm onChangePassword={handleChangePassword} />
      </>
   )
}

export default ChangePasswordTab
