// import OrderStep from '@/components/OrderStep/OrderStep'
import { Grid } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPurchaseProducts, getCart, updateCart } from '../cartSlice'
import CartItemList from '../components/CartItemList'
import './CartPage.scss'
import { useHistory } from 'react-router-dom'

function CartPage() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const history = useHistory()
   const cart = useSelector(state => state.cart)

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

   const handleCheckoutClick = selectedProducts => {
      // Save to redux
      dispatch(addPurchaseProducts(selectedProducts))

      const orderId = 1
      history.push(`order/${orderId}`)
   }

   return (
      <Grid container className="konsept-container cart-page">
         {/* TODO: Add cover */}

         <Grid item lg={12}>
            {/* <OrderStep step={0} /> */}
            <CartItemList
               products={cart.current}
               onUpdateList={handleUpdateList}
               onCheckoutClick={handleCheckoutClick}
            />
         </Grid>
      </Grid>
   )
}

export default CartPage
