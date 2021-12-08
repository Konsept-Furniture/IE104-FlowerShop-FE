/* eslint-disable multiline-ternary */
import { path } from '@/constants/path'
import { updateMe } from '@/features/Auth/authSlice'
import { addPurchaseProducts } from '@/features/Cart/cartSlice'
import { Backdrop, CircularProgress, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary'
import ShippingAddressForm from '../components/ShippingAddressForm'
import { getOrder, updateOrder } from '../orderSlice'

function OrderPage() {
   const history = useHistory()
   const { enqueueSnackbar } = useSnackbar()
   const purchaseProducts = useSelector(state => state.cart.purchaseProducts)
   const order = useSelector(state => state.order.current)
   // const [deliveryInfo, setDeliveryInfo] = useState({})
   const [loading, setLoading] = useState(false)
   const dispatch = useDispatch()
   const { orderId } = useParams()

   // handle submit
   const handleSubmitShippingInfo = async values => {
      setLoading(true)
      console.log(values)

      try {
         const payload = {
            deliveryInfo: {
               address: values.address,
               name: values.name,
               email: values.email,
               phone: values.phone
            },
            notes: values.notes,
            payment: values.payment,
            status: 'PROCESSING'
         }
         console.log(payload)
         const res = await dispatch(updateOrder({ id: orderId, payload })).then(unwrapResult)
         console.log(res)

         // save deliveryInfo
         if (values.save) {
            await saveDeliveryInfo({
               address: values.address_code,
               name: values.name,
               email: values.email,
               phone: values.phone
            })
         }

         enqueueSnackbar(res.message, {
            variant: 'success'
         })

         history.push(`${path.user}?tab=2`)
      } catch (error) {
         console.log('error to update shipping info for order', error)
      }

      setLoading(false)
   }

   const saveDeliveryInfo = async deliveryInfo => {
      try {
         const payload = {
            deliveryInfo
         }
         const res = await dispatch(updateMe(payload)).then(unwrapResult)
         console.log(res)
      } catch (error) {
         console.log('error to save shipping info for user', error)
      }
   }

   useEffect(() => {
      if (!order) {
         ;(async () => {
            try {
               const res = await dispatch(getOrder(orderId)).then(unwrapResult)
               // Save to redux
               dispatch(addPurchaseProducts(res.data.products))
            } catch (error) {
               enqueueSnackbar(error.message, {
                  variant: 'error'
               })
               history.push(`${path.user}?tab=2`)
            }
         })()
      }
   }, [])

   if (purchaseProducts.length === 0) {
      return (
         <Box
            sx={{
               py: 20,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <CircularProgress color="black" />
         </Box>
      )
   }

   if (order?.status === 'PENDING') {
      return (
         <div className="konsept-container">
            <Backdrop
               sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
               open={loading}
            >
               <CircularProgress color="inherit" />
            </Backdrop>
            <Grid
               container
               spacing={5}
               sx={{
                  mt: 1,
                  mb: 5,
                  flexDirection: {
                     xs: 'column-reverse',
                     sm: 'column-reverse',
                     md: 'row',
                     lg: 'row',
                     xl: 'row'
                  }
               }}
            >
               <Grid item sm={12} md={8} lg={8}>
                  <ShippingAddressForm onSubmit={handleSubmitShippingInfo} />
               </Grid>
               <Grid item sm={12} md={4} lg={4}>
                  <Box>
                     <Typography variant="h5">Order Summary</Typography>

                     <OrderSummary products={purchaseProducts} />
                  </Box>
               </Grid>
            </Grid>
         </div>
      )
   }

   return (
      <Box
         sx={{
            pt: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
         }}
      >
         <Typography variant="h5">
            Your order is updated shipping information. If you want to track your order, go{' '}
            <Link to={`${path.user}?tab=1`} style={{ textDecoration: 'underline' }}>
               HERE
            </Link>
         </Typography>
      </Box>
   )
}

export default OrderPage
