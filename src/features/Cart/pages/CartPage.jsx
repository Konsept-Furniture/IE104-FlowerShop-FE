// import OrderStep from '@/components/OrderStep/OrderStep'
import { OutlinedButton } from '@/components/button/Button'
import { path } from '@/constants/path'
import { CircularProgress, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { addPurchaseProducts, getCart, updateCart } from '../cartSlice'
import CartItemList from '../components/CartItemList'
import './CartPage.scss'
import { createOrder } from '@/features/Order/orderSlice'
import ShoppingIcon from '@/assets/icons/ShoppingIcon'
import { IMAGES } from '@/assets/images'

function CartPage() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const history = useHistory()
   const cart = useSelector(state => state.cart)
   const [creatingOrder, setCreatingOrder] = useState(false)
   const background = IMAGES.CartCover
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
         await dispatch(getCart()).then(unwrapResult)
         const order = res.data
         history.push(`order/${order._id}`)
      } catch (error) {
         console.log('error to create order', error)
      }
      setCreatingOrder(false)
   }

   if (cart.getting) {
      return (
         <Box
            sx={{
               py: 15,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <CircularProgress color="black" />
         </Box>
      )
   }

   if (!cart.getting && cart.current.length === 0) {
      return (
         <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
            <h2 className="lg:text-2xl md:text-xl font-poppins text-3xl font-bold py-2">
               Your cart is empty
            </h2>
            <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
               <ShoppingIcon />
            </div>
            <div className="md:hidden grid place-content-center">
               <ShoppingIcon />
            </div>
            <OutlinedButton component={Link} to={path.products}>
               Shopping now
            </OutlinedButton>
         </div>
      )
   }

   return (
      <div>
         <div className="flex">
            <div
               className="w-full bg-cover bg-center h-96 mb-4"
               style={{ backgroundImage: 'url(' + background + ')' }}
            >
               <div className="flex items-center justify-center h-full w-full bg-opacity-50">
                  <div className="text-center">
                     <h1 className="text-black text-2xl font-josefins font-bold tracking-widest uppercase md:text-4xl">
                        YOUR CART
                     </h1>
                  </div>
               </div>
            </div>
         </div>

         <Grid container className="konsept-container cart-page" sx={{ height: '100%', mt: 3 }}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
               {/* <OrderStep step={0} /> */}
               <CartItemList
                  creatingOrder={creatingOrder}
                  products={cart.current}
                  onUpdateList={handleUpdateList}
                  onCheckoutClick={handleCheckoutClick}
               />
            </Grid>
         </Grid>
      </div>
   )
}

export default CartPage
