import { path } from '@/constants/path'
import StorageKeys from '@/constants/StorageKeys'
import { getCart, updateCart } from '@/features/Cart/cartSlice'
import useQuery from '@/hooks/useQuery'
import { Alert, Backdrop, CircularProgress } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { login } from '../authSlice'
import './Login.scss'
import messages from '@/constants/messages'
import { unwrapResult } from '@reduxjs/toolkit'
import LoginForm from './components/LoginForm'

Login.propTypes = {}

function Login() {
   const { enqueueSnackbar } = useSnackbar()
   const history = useHistory()
   const dispatch = useDispatch()
   const params = useQuery()
   const [loading, setLoading] = useState(false)
   const defaultValues = {
      username: params.username || '',
      password: ''
   }
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
         <LoginForm defaultValues={defaultValues} onSubmit={handleSubmit} />
      </div>
   )
}

export default Login
