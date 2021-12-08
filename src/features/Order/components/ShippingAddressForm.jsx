/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TextInputField from '@/components/form-controls/TextInputField'
import * as yup from 'yup'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import PrimaryButton from '@/components/button/Button'
import AddressField from '@/components/form-controls/AddressField'
import { CircularProgress, Divider, Stack, Typography } from '@mui/material'
import provinceApi from '@/api/provinceApi'
import { common } from '@/utils/common'
import CheckboxField from '@/components/form-controls/CheckboxField'
import SelectPaymentMethod from './PaymentMethod'
import { PaymentMethod } from '@/constants/enum'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'
import { usePayPalScriptReducer } from '@paypal/react-paypal-js'
import ReactPayPal from '@/components/ReactPayPal/ReactPayPal'
import { useSnackbar } from 'notistack'
import messages from '@/constants/messages'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
ShippingAddressForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   defaultValues: PropTypes.object
}

const schema = yup.object().shape({
   name: yup.string().max(255).required().label("Recipient's name"),
   phone: yup
      .string()
      .required()
      .label('Phone number')
      .test(
         'is-vietnamese-phonenumber',
         'Incorrect phone number format.',
         common.isVietnamesePhoneNumber
      ),
   email: yup.string().email().max(255).required().label('Email address'),
   shippingAddress: yup.object().shape({
      province: yup.number().required().label('Province').typeError('Province is a required field'),
      district: yup.number().required().label('District').typeError('District is a required field'),
      ward: yup.number().required().label('Ward').typeError('Ward is a required field'),
      street: yup.string().required().label('Street')
   }),
   save: yup.boolean(),
   payment: yup.string(),
   notes: yup.string()
})

function ShippingAddressForm({ defaultValues, onSubmit }) {
   const { deliveryInfo } = useSelector(state => state.auth.profile)
   const { isPaid } = useSelector(state => state.order.current)
   const { enqueueSnackbar } = useSnackbar()
   const [provinceList, setProvinceList] = useState([])
   const [districtList, setDistrictList] = useState([])
   const [wardList, setWardList] = useState([])

   const form = useForm({
      defaultValues: {
         name: '',
         phone: '',
         shippingAddress: {
            street: '',
            province: '',
            district: '',
            ward: ''
         },
         email: '',
         save: false,
         payment: PaymentMethod.COD,
         notes: ''
      },
      resolver: yupResolver(schema)
   })
   const { control, handleSubmit, reset } = form

   const watchPayment = useWatch({
      control,
      name: 'payment'
   })
   const [{ isPending }] = usePayPalScriptReducer()

   useEffect(() => {
      ;(async () => {
         try {
            const res = await provinceApi.getProvinces()
            setProvinceList(
               res.data.map(item => ({
                  label: item.name,
                  value: item.code
               }))
            )
         } catch (error) {
            console.log('error to get province list', error)
         }
      })()
   }, [])

   const handleChangeProvince = async e => {
      try {
         const res = await provinceApi.getDistricts(e.target.value)
         const districts = res.data.districts
         setDistrictList(
            districts.map(item => ({
               label: item.name,
               value: item.code
            }))
         )
         setWardList([])
      } catch (error) {
         console.log('error to get district list', error)
      }
   }
   const handleChangeDistrict = async e => {
      try {
         const res = await provinceApi.getWards(e.target.value)
         const wards = res.data.wards
         setWardList(
            wards.map(item => ({
               label: item.name,
               value: item.code
            }))
         )
      } catch (error) {
         console.log('error to get ward list', error)
      }
   }

   const handleLoadDefaultDeliveryInfo = async () => {
      ;(async () => {
         const province = deliveryInfo.address.province
         if (province) {
            try {
               const res = await provinceApi.getDistricts(province)
               setDistrictList(
                  res.data.districts.map(item => ({
                     label: item.name,
                     value: item.code
                  }))
               )
            } catch (error) {
               console.log('error to get province list', error)
            }
         }
      })()
      ;(async () => {
         const district = deliveryInfo.address.district
         if (district) {
            try {
               const res = await provinceApi.getWards(district)
               setWardList(
                  res.data.wards.map(item => ({
                     label: item.name,
                     value: item.code
                  }))
               )
            } catch (error) {
               console.log('error to get province list', error)
            }
         }
      })()
      reset({
         ...deliveryInfo,
         shippingAddress: deliveryInfo.address,
         payment: PaymentMethod.COD
      })
   }

   const handleSubmitOrder = async values => {
      console.log('submit order', values)
      if (watchPayment === 'PayPal' && !isPaid) {
         enqueueSnackbar(messages.PAYMENT_REQUIRED, {
            variant: 'error'
         })
      } else if (onSubmit) {
         const province = provinceList.find(
            item => item.value === Number.parseInt(values.shippingAddress.province)
         )
         const district = districtList.find(
            item => item.value === Number.parseInt(values.shippingAddress.district)
         )
         const ward = wardList.find(
            item => item.value === Number.parseInt(values.shippingAddress.ward)
         )
         const shippingAddress = {
            street: values.shippingAddress.street,
            province: province.label,
            district: district.label,
            ward: ward.label
         }
         await onSubmit({
            ...values,
            isPaid,
            address: shippingAddress,
            address_code: {
               street: values.shippingAddress.street,
               province: values.shippingAddress.province,
               district: values.shippingAddress.district,
               ward: values.shippingAddress.ward
            }
         })
      }
   }
   return (
      <form onSubmit={handleSubmit(handleSubmitOrder)}>
         <Stack direction="row" justifyContent="space-between" alignItems="flex-end">
            <Typography variant="h4">Delivery Information</Typography>

            {deliveryInfo.address.street && (
               <Typography
                  variant="subtitle1"
                  component="a"
                  onClick={handleLoadDefaultDeliveryInfo}
               >
                  Use your default delivery information? <AssignmentIndIcon />
               </Typography>
            )}
         </Stack>

         <TextInputField label="Recipient's name" name="name" control={control} />
         <Stack direction="row" spacing={2} alignItems="baseline">
            <TextInputField label="Phone number" name="phone" control={control} />
            <TextInputField label="Email" name="email" control={control} />
         </Stack>
         <AddressField
            label="address "
            name="shippingAddress"
            control={control}
            provinceList={provinceList}
            districtList={districtList}
            wardList={wardList}
            onChangeProvince={handleChangeProvince}
            onChangeDistrict={handleChangeDistrict}
         />
         <TextInputField label="Notes" name="notes" control={control} />

         <CheckboxField
            label="Save delivery information for the next time"
            name="save"
            control={control}
         />

         <Typography variant="h4">Payment Method</Typography>

         <SelectPaymentMethod name="payment" control={control} />

         {!isPaid && watchPayment === 'PayPal' && (
            <div style={{ maxWidth: '750px', minHeight: '200px', marginTop: 20 }}>
               <Divider sx={{ mb: 3 }} />
               {isPending ? (
                  <Box
                     sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                  >
                     <CircularProgress color="black" />
                  </Box>
               ) : null}
               <ReactPayPal currency={'USD'} showSpinner={false} />
            </div>
         )}

         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <PrimaryButton type="submit">Confirm Order</PrimaryButton>
         </Box>
      </form>
   )
}

export default ShippingAddressForm
