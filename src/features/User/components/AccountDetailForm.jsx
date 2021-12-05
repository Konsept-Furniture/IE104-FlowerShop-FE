/* eslint-disable indent */
import PrimaryButton from '@/components/button/Button'
import TextInputField from '@/components/form-controls/TextInputField'
import { common } from '@/utils/common'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import * as yup from 'yup'

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
   email: yup.string().email().max(255).label('Email address')
})

function AccountDetailForm({ onSaveAccountDetail }) {
   const user = useSelector(state => state.auth.profile)

   const form = useForm({
      defaultValues: {
         name: user.name,
         phone: user.phone,
         email: user.email
      },
      resolver: yupResolver(schema)
   })
   const { control, handleSubmit } = form

   const handleSaveAccountDetail = async values => {
      if (onSaveAccountDetail) {
         onSaveAccountDetail(values)
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

         <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
            <PrimaryButton type="submit">Save Information</PrimaryButton>
         </Box>
      </form>
   )
}

export default AccountDetailForm
