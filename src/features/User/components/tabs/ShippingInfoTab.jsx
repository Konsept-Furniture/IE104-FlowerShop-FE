import userApi from '@/api/userApi'
import { useSnackbar } from 'notistack'
import React from 'react'
import ShippingInfoForm from '../ShippingInfoForm'

ShippingInfoTab.propTypes = {}

function ShippingInfoTab(props) {
   const { enqueueSnackbar } = useSnackbar()

   const handleSave = async values => {
      console.log(values)
      try {
         const payload = {
            deliveryInfo: values
         }
         const res = await userApi.updateMe(payload)
         console.log(
            '🚀 ~ file: ShippingInfoTab.jsx ~ line 18 ~ ShippingInfoTab ~ res',
            res
         )
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
