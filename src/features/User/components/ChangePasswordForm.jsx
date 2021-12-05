import PrimaryButton from '@/components/button/Button'
import TextInputField from '@/components/form-controls/TextInputField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

ChangePasswordForm.propTypes = {
   onChangePasswordClick: PropTypes.func
}
const schema = yup.object().shape({
   oldPassword: yup.string().max(255).label('Old password').required(),
   newPassword: yup.string().min(8).max(255).label('New password').required(),
   confirmNewPassword: yup
      .string()
      .min(8)
      .max(255)
      .label('Confirm new password')
      .oneOf(
         [yup.ref('newPassword'), null],
         'Confirm new password does not match new password'
      )
      .required()
})

function ChangePasswordForm({ onChangePasswordClick }) {
   const form = useForm({
      defaultValues: {
         oldPassword: '',
         newPassword: '',
         confirmNewPassword: ''
      },
      resolver: yupResolver(schema)
   })
   const { control, handleSubmit } = form

   const handleChangePassword = async values => {
      console.log(values)
      if (onChangePasswordClick) await onChangePasswordClick(values)
   }
   return (
      <form onSubmit={handleSubmit(handleChangePassword)}>
         <Typography variant="h4">Change password</Typography>

         <TextInputField
            label="Old password"
            name="oldPassword"
            control={control}
            type="password"
         />
         <TextInputField
            label="New password"
            name="newPassword"
            control={control}
            type="password"
         />
         <TextInputField
            label="Confirm new password"
            name="confirmNewPassword"
            control={control}
            type="password"
         />

         <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
            <PrimaryButton type="submit">Update Password</PrimaryButton>
         </Box>
      </form>
   )
}

export default ChangePasswordForm
