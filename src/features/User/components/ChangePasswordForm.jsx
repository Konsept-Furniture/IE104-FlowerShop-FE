import PrimaryButton from '@/components/button/Button'
import TextInputField from '@/components/form-controls/TextInputField'
import authApi from '@/features/Auth/authApi'
import { yupResolver } from '@hookform/resolvers/yup'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

ChangePasswordForm.propTypes = {
   onChangePassword: PropTypes.func.isRequired
}
const schema = yup.object().shape({
   oldPassword: yup
      .string()
      .max(255)
      .label('Old password')
      .required()
      .test(
         'check-old-password-is-correct',
         'Old password is not correct',
         async value => {
            try {
               await authApi.changePassword({ oldPassword: value })
               return true
            } catch (error) {
               return false
            }
         }
      ),
   newPassword: yup.string().min(4).max(255).label('New password').required(),
   confirmPassword: yup
      .string()
      .min(4)
      .max(255)
      .label('Confirm new password')
      .oneOf(
         [yup.ref('newPassword'), null],
         'Confirm new password does not match new password'
      )
      .required()
})

function ChangePasswordForm({ onChangePassword }) {
   const form = useForm({
      defaultValues: {
         oldPassword: '',
         newPassword: '',
         confirmPassword: ''
      },
      resolver: yupResolver(schema),
      reValidateMode: 'onBlur'
   })
   const {
      control,
      handleSubmit,
      reset,
      formState: { isSubmitSuccessful }
   } = form

   const handleChangePassword = async values => {
      console.log(values)
      if (onChangePassword) {
         await onChangePassword(values)
         if (isSubmitSuccessful) reset()
      }
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
            name="confirmPassword"
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
