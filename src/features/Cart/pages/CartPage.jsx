// import OrderStep from '@/components/OrderStep/OrderStep'
import {
   CircularProgress,
   Grid,
   LinearProgress,
   Typography
} from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
   addPurchaseProducts,
   createOrder,
   getCart,
   updateCart
} from '../cartSlice'
import CartItemList from '../components/CartItemList'
import './CartPage.scss'
import { Link, useHistory } from 'react-router-dom'
import { Box } from '@mui/system'
import { path } from '@/constants/path'

function CartPage() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const history = useHistory()
   const cart = useSelector(state => state.cart)
   const [creatingOrder, setCreatingOrder] = useState(false)

   const handleUpdateList = async payload => {
      try {
         const res = await dispatch(updateCart(payload)).then(unwrapResult)

         // get cart again
         await dispatch(getCart()).then(unwrapResult)
         enqueueSnackbar(res.message, {
            variant: 'success'
         })
         return true
      } catch (error) {
         console.log('error to update cart', error)
         return false
      }
   }

   const handleCheckoutClick = async selectedProducts => {
      setCreatingOrder(true)
      // Save to redux
      dispatch(addPurchaseProducts(selectedProducts))
      try {
         const payload = {
            products: selectedProducts.map(item => ({
               productId: item._id,
               quantity: item.quantity,
               amount: item.quantity * item.price
            })),
            amount: selectedProducts.reduce((prev, cur) => {
               return prev + cur.quantity * cur.price
            }, 0)
         }
         const res = await dispatch(createOrder(payload)).then(unwrapResult)
         const order = res.data
         history.push(`order/${order._id}`)
      } catch (error) {
         console.log('error to create order', error)
      }
      setCreatingOrder(false)
   }

   if (cart.current.length === 0) {
      return (
         <Box
            sx={{
               pt: 20,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            {cart.getting ? (
               <CircularProgress color="black" />
            ) : (
               <Typography variant="h4" component="div">
                  Your cart is empty. {"Let's "}
                  <Link
                     to={path.products}
                     style={{ textDecoration: 'underline' }}
                  >
                     shopping
                  </Link>
                  !
               </Typography>
            )}
         </Box>
      )
   }

   return (
      <Grid
         container
         className="konsept-container cart-page"
         sx={{ height: '100%' }}
      >
         <LinearProgress />

         <Grid item lg={12}>
            {/* <OrderStep step={0} /> */}

            <CartItemList
               creatingOrder={creatingOrder}
               products={cart.current}
               onUpdateList={handleUpdateList}
               onCheckoutClick={handleCheckoutClick}
            />
         </Grid>
      </Grid>
   )
}

export default CartPage
