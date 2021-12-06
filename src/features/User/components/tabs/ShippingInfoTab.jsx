import { updateMe } from '@/features/Auth/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useDispatch } from 'react-redux'
import ShippingInfoForm from '../ShippingInfoForm'

ShippingInfoTab.propTypes = {}

function ShippingInfoTab(props) {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()

   const handleSave = async values => {
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
   }
   return (
      <div>
         <ShippingInfoForm onSubmit={handleSave} />
      </div>
   )
}

export default ShippingInfoTab
