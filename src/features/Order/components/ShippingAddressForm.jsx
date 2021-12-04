import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TextInputField from '@/components/form-controls/TextInputField'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import PrimaryButton from '@/components/button/Button'
import AddressField from '@/components/form-controls/AddressField'
import { Stack } from '@mui/material'
import provinceApi from '@/api/provinceApi'
import { common } from '@/utils/common'
import CheckboxField from '@/components/form-controls/CheckboxField'

ShippingAddressForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
}

function ShippingAddressForm({ onSubmit }) {
   const [provinceList, setProvinceList] = useState([])
   const [districtList, setDistrictList] = useState([])
   const [wardList, setWardList] = useState([])

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
         province: yup.string().required().label('Province'),
         district: yup.string().required().label('District'),
         ward: yup.string().required().label('Ward'),
         street: yup.string().required().label('Street')
      }),
      save: yup.boolean()
   })
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
         save: false
      },
      resolver: yupResolver(schema)
   })
   const { control, handleSubmit } = form

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

   const handleSubmitOrder = async values => {
      console.log('submit order', values)
      if (onSubmit) {
         const province = provinceList.find(
            item =>
               item.value === Number.parseInt(values.shippingAddress.province)
         )
         const district = districtList.find(
            item =>
               item.value === Number.parseInt(values.shippingAddress.district)
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
            address: shippingAddress
         })
      }
   }
   return (
      <form onSubmit={handleSubmit(handleSubmitOrder)}>
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
            label="address "
            name="shippingAddress"
            control={control}
            provinceList={provinceList}
            districtList={districtList}
            wardList={wardList}
            onChangeProvince={handleChangeProvince}
            onChangeDistrict={handleChangeDistrict}
         />
         <CheckboxField
            label="Save shipping information for the next time"
            name="save"
            control={control}
         />

         <PrimaryButton type="submit">Place Order</PrimaryButton>
      </form>
   )
}

export default ShippingAddressForm
