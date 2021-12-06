import provinceApi from '@/api/provinceApi'
import PrimaryButton from '@/components/button/Button'
import AddressField from '@/components/form-controls/AddressField'
import TextInputField from '@/components/form-controls/TextInputField'
import { common } from '@/utils/common'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

ShippingInfoForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
}
const schema = yup.object().shape({
   name: yup.string().max(255).label("Recipient's name"),
   phone: yup
      .string()
      .label('Phone number')
      .test(
         'is-vietnamese-phonenumber',
         'Incorrect phone number format.',
         value => {
            if (!value) return true

            return common.isVietnamesePhoneNumber(value)
         }
      ),
   email: yup.string().email().max(255).label('Email address'),
   address: yup.object().shape({
      province: yup.number().label('Province'),
      district: yup.number().label('District'),
      ward: yup.number().label('Ward'),
      street: yup.string().label('Street')
   })
})

function ShippingInfoForm({ onSubmit }) {
   const { deliveryInfo } = useSelector(state => state.auth.profile)
   const [provinceList, setProvinceList] = useState([])
   const [districtList, setDistrictList] = useState([])
   const [wardList, setWardList] = useState([])

   const form = useForm({
      defaultValues: {
         name: '',
         phone: '',
         address: {
            street: '',
            province: '',
            district: '',
            ward: ''
         },
         email: ''
      },
      resolver: yupResolver(schema)
   })
   const { control, handleSubmit, reset } = form

   useEffect(() => {
      if (deliveryInfo) {
         reset(deliveryInfo)
      }
   }, [deliveryInfo])

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

   useEffect(() => {
      if (deliveryInfo) {
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
      }
   }, [deliveryInfo])

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

   const handleSave = async values => {
      if (onSubmit) onSubmit(values)
   }
   return (
      <form onSubmit={handleSubmit(handleSave)}>
         <Typography variant="h4">Shipping Information</Typography>

         <TextInputField
            label="Recipient's name"
            name="name"
            control={control}
         />
         <Stack direction="row" spacing={2} alignItems="baseline">
            <TextInputField
               label="Phone number"
               name="phone"
               control={control}
            />
            <TextInputField label="Email" name="email" control={control} />
         </Stack>
         <AddressField
            label="address"
            name="address"
            control={control}
            provinceList={provinceList}
            districtList={districtList}
            wardList={wardList}
            onChangeProvince={handleChangeProvince}
            onChangeDistrict={handleChangeDistrict}
         />

         <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
            <PrimaryButton type="submit">Save information</PrimaryButton>
         </Box>
      </form>
   )
}

export default ShippingInfoForm
