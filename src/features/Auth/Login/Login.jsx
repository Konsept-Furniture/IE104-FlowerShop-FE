import TextInputField from '@/components/form-controls/TextInputField'
import { path } from '@/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
// import Button from '@mui/material/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import { login } from '../authSlice'
import './Login.scss'
import { unwrapResult } from '@reduxjs/toolkit'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert } from '@mui/material'
Login.propTypes = {

}

function Login() {
   // const { enqueueSnackbar, closeSnackbar } = useSnackbar()
   const history = useHistory()
   const dispatch = useDispatch()

   const schema = yup.object().shape({
      username: yup.string().max(256).required(),
      password: yup.string().max(256).min(4).required()
   })
   const form = useForm({
      defaultValues: {
         username: '',
         password: ''
      },
      resolver: yupResolver(schema)
   })
   const { formState: { isSubmitting } } = form

   const handleSubmit = async(data) => {
      console.log(data, isSubmitting)
      const payload = {
         username: data.username,
         password: data.password
      }
      try {
         const res = await dispatch(login(payload))
         unwrapResult(res)
         history.push(path.home)
         return <Alert severity="success">{res.message}</Alert>
      } catch (error) {
         window.alert('Wrong password')
         return <Alert severity="error">{error.message}</Alert>
      }
   }

   return (
      <div className="login">
         <div className="hello">
            <h2>Bonjour!</h2>
            <p>To connect to your account, enter your email address and password.</p>
         </div>

         <form onSubmit={form.handleSubmit(handleSubmit)}>
            <TextInputField
               form={form}
               name="username"
               label="Username"
               disable={isSubmitting}
               color="black"
            />
            <TextInputField
               form={form}
               name="password"
               label="Password"
               disable={isSubmitting}
               color="black"
               type="password"
               sx={{ mt: 1 }}
            />

            <p className="sign-up">
               Don&lsquo;t have an account?
               <a
                  className="text--success"
                  onClick={() => { history.push(path.register) }}
               > Sign up
               </a>
            </p>

            <LoadingButton
               fullWidth
               variant="contained"
               type="submit"
               className="btn--submit"
               loading={isSubmitting}
               color="black"
            >
               Log In
            </LoadingButton>
         </form>
      </div>
   )
}

export default Login
