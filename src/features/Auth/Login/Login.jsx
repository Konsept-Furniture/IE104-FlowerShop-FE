import TextInputField from '@/components/form-controls/TextInputField'
import messages from '@/constants/messages'
import { path } from '@/constants/path'
import StorageKeys from '@/constants/StorageKeys'
import { getCart, updateCart } from '@/features/Cart/cartSlice'
import useQuery from '@/hooks/useQuery'
import { yupResolver } from '@hookform/resolvers/yup'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Backdrop, CircularProgress } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import * as yup from 'yup'
import { login } from '../authSlice'
import './Login.scss'

Login.propTypes = {}

const schema = yup.object().shape({
   username: yup.string().max(32).required(),
   password: yup.string().max(32).min(4).required()
})

function Login() {
   const { enqueueSnackbar } = useSnackbar()
   const history = useHistory()
   const dispatch = useDispatch()
   const params = useQuery()
   const [loading, setLoading] = useState(false)

   const form = useForm({
      defaultValues: {
         username: params.username || '',
         password: ''
      },
      resolver: yupResolver(schema)
   })
   const {
      formState: { isSubmitting },
      control
   } = form

   const handleSubmit = async data => {
      setLoading(true)
      try {
         const payload = {
            username: data.username,
            password: data.password
         }
         const res = await dispatch(login(payload)).then(unwrapResult)
         enqueueSnackbar(res.message, {
            variant: 'success'
         })
         // get cart
         const { data: cart } = await dispatch(getCart()).then(unwrapResult)

         const productsInLocalCart = JSON.parse(localStorage.getItem(StorageKeys.cart))
         if (productsInLocalCart.length > 0) {
            const updateCartPayload = {
               cartId: cart._id,
               payload: {
                  products: productsInLocalCart
               }
            }
            await dispatch(updateCart(updateCartPayload)).then(unwrapResult)
         }

         history.push(path.home)
      } catch (error) {
         enqueueSnackbar(error.message, {
            variant: 'error',
            preventDuplicate: true
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
            <p>To connect to your account, enter your email address and password.</p>
         </div>

         {params.message_code && (
            <Alert severity={params.message_code === 'LOGIN_NOW' ? 'success' : 'warning'}>
               {messages[params.message_code]}
            </Alert>
         )}

         <form onSubmit={form.handleSubmit(handleSubmit)}>
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

            <p className="sign-up">
               Don&lsquo;t have an account?
               <a
                  className="text--success"
                  onClick={() => {
                     history.push(path.register)
                  }}
               >
                  {' '}
                  Sign up
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
