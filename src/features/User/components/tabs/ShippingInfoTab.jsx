import { updateMe } from '@/features/Auth/authSlice'
import { Backdrop, CircularProgress } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ShippingInfoForm from '../ShippingInfoForm'

ShippingInfoTab.propTypes = {}

function ShippingInfoTab(props) {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(false)

   const handleSave = async values => {
      setLoading(true)
      console.log(values)
      try {
         const payload = {
            deliveryInfo: values
         }
         const res = await dispatch(updateMe(payload)).then(unwrapResult)
         enqueueSnackbar(res.message, {
            variant: 'success'
         })
      } catch (error) {
         console.log('error to update user shipping info', error)
      }
      setLoading(false)
   }
   return (
      <div>
         <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         <ShippingInfoForm onSubmit={handleSave} />
      </div>
   )
}

export default ShippingInfoTab
