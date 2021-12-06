import { updateMe } from '@/features/Auth/authSlice'
import { Backdrop, CircularProgress } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import AccountDetailForm from '../AccountDetailForm'

function AccountDetailTab() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(false)

   const handleSaveAccountDetail = async values => {
      setLoading(true)
      console.log(values)
      try {
         const res = await dispatch(updateMe(values)).then(unwrapResult)

         enqueueSnackbar(res.message, {
            variant: 'success'
         })
      } catch (error) {
         console.log('error to update user account detail', error)
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
         <AccountDetailForm onSaveAccountDetail={handleSaveAccountDetail} />
      </>
   )
}

export default AccountDetailTab
