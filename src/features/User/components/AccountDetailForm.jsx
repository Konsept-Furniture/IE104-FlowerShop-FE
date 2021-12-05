/* eslint-disable indent */
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
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import PropTypes from 'prop-types'

AccountDetailForm.propTypes = {
   onSaveAccountDetail: PropTypes.func.isRequired
}

const schema = yup.object().shape({
   name: yup.string().max(255).label('Name'),
   phone: yup
      .string()

      .label('Phone number')
      .test(
         'is-vietnamese-phonenumber',
         'Incorrect phone number format.',
         number => {
            if (!number) return true

            return common.isVietnamesePhoneNumber(number)
         }
      )
      .nullable(true),
   email: yup.string().email().max(255).label('Email address'),
   shippingAddress: yup.object().shape({
      province: yup.string().label('Province'),
      district: yup.string().label('District'),
      ward: yup.string().label('Ward'),
      street: yup.string().label('Street')
   })
})

function AccountDetailForm({ onSaveAccountDetail }) {
   const user = useSelector(state => state.auth.profile)
   const [provinceList, setProvinceList] = useState([])
   const [districtList, setDistrictList] = useState([])
   const [wardList, setWardList] = useState([])
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

   const form = useForm({
      defaultValues: {
         name: user?.name,
         phone: user?.phone,
         shippingAddress: user?.shippingAddress
            ? user?.shippingAddress
            : {
                 street: '',
                 province: '',
                 district: '',
                 ward: ''
              },
         email: user?.email
      },
      resolver: yupResolver(schema)
   })
   const { control, handleSubmit } = form

   const handleSaveAccountDetail = async values => {
      console.log(values)
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
         province: province ? province.label : '',
         district: district ? district.label : '',
         ward: ward ? ward.label : ''
      }

      if (onSaveAccountDetail) {
         onSaveAccountDetail({ ...values, shippingAddress })
      }
   }

   return (
      <form onSubmit={handleSubmit(handleSaveAccountDetail)}>
         <Typography variant="h4">My Account</Typography>

         <TextInputField label="Full name" name="name" control={control} />
         <Stack direction="row" spacing={2} alignItems="baseline">
            <TextInputField
               label="Phone number"
               name="phone"
               control={control}
            />
            <TextInputField label="Email" name="email" control={control} />
         </Stack>
         <AddressField
            label="Address"
            name="shippingAddress"
            control={control}
            provinceList={provinceList}
            districtList={districtList}
            wardList={wardList}
            onChangeProvince={handleChangeProvince}
            onChangeDistrict={handleChangeDistrict}
         />

         <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
            <PrimaryButton type="submit">Save Information</PrimaryButton>
         </Box>
      </form>
   )
}

export default AccountDetailForm
