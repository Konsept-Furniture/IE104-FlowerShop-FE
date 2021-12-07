import TextInputField from '@/components/form-controls/TextInputField'
import { path } from '@/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import { Backdrop, CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import { register } from '../authSlice'
import './Register.scss'

Register.propTypes = {}

const schema = yup.object().shape({
   email: yup.string().email().max(256).required(),
   username: yup.string().max(256).required(),
   password: yup.string().max(256).min(4).required(),
   confirm_password: yup
      .string()
      .max(256)
      .min(4)
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
})

function Register() {
   const { enqueueSnackbar } = useSnackbar()
   const history = useHistory()
   const dispatch = useDispatch()
   const [loading, setLoading] = useState(false)

   const form = useForm({
      defaultValues: {
         email: '',
         username: '',
         password: '',
         confirm_password: ''
      },
      resolver: yupResolver(schema)
   })
   const {
      formState: { isSubmitting },
      control
   } = form

   const handleSubmit = async data => {
      setLoading(true)
      console.log(data, isSubmitting)
      try {
         const payload = {
            email: data.email,
            username: data.username,
            password: data.password
         }
         await dispatch(register(payload)).then(unwrapResult)
         history.push({
            pathname: path.login,
            search: `?username=${data.username}&message_code=LOGIN_NOW`
         })
      } catch (error) {
         enqueueSnackbar(error.message, {
            variant: 'error'
         })
      }
      setLoading(false)
   }

   return (
      <div className="login">
         <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
         </Backdrop>
         <div className="hello">
            <h2>Bonjour!</h2>
            <p>To connect to your account, enter your email address and your password </p>
         </div>

         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <TextInputField
               control={control}
               name="email"
               label="Email"
               disable={isSubmitting}
               color="black"
            />
            <TextInputField
               control={control}
               name="username"
               label="Username"
               disable={isSubmitting}
               color="black"
            />
            <TextInputField
               control={control}
               name="password"
               label="Password"
               disable={isSubmitting}
               color="black"
               type="password"
               sx={{ mt: 1 }}
            />
            <TextInputField
               control={control}
               name="confirm_password"
               label="Confirm password"
               disable={isSubmitting}
               color="black"
               type="password"
               sx={{ mt: 1 }}
            />

            <p className="sign-up">
               Already have an account?
               <a
                  className="text--success"
                  onClick={() => {
                     history.push(path.login)
                  }}
               >
                  {' '}
                  Log in
               </a>
            </p>

            <Button fullWidth variant="contained" type="submit" className="btn--submit">
               Sign Up
            </Button>
         </form>
      </div>
   )
}

export default Register
