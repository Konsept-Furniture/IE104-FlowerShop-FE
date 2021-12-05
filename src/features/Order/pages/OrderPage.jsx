/* eslint-disable multiline-ternary */
import orderApi from '@/api/orderApi'
import userApi from '@/api/userApi'
import { path } from '@/constants/path'
import { addPurchaseProducts } from '@/features/Cart/cartSlice'
import { Backdrop, CircularProgress, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import OrderSummary from '../components/OrderSummary'
import ShippingAddressForm from '../components/ShippingAddressForm'

function OrderPage() {
   const history = useHistory()
   const { enqueueSnackbar } = useSnackbar()
   const purchaseProducts = useSelector(state => state.cart.purchaseProducts)
   const { deliveryInfo } = useSelector(state => state.auth.profile)
   // const [deliveryInfo, setDeliveryInfo] = useState({})
   const [loading, setLoading] = useState(false)
   const [order, setOrder] = useState(null)
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
            status: 'PROCESSING'
         }
         const res = await orderApi.update(orderId, payload)
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
         const res = await userApi.updateMe(payload)
         console.log(res)
      } catch (error) {
         console.log('error to save shipping info for user', error)
      }
   }

   useEffect(() => {
      ;(async () => {
         try {
            const res = await orderApi.get(orderId)
            console.log(res)
            setOrder(res.data)
            // Save to redux
            dispatch(addPurchaseProducts(res.data.products))
         } catch (error) {
            console.log('error to get order', error)
         }
      })()
   }, [])

   if (purchaseProducts.length === 0) {
      return (
         <Box
            sx={{
               pt: 20,
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <CircularProgress color="black" />
         </Box>
      )
   }

   if (order?.status === 'PROCESSING' || order?.status === 'DELIVERIED') {
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
               Your order is updated shipping information. If you want to track
               your order, go{' '}
               <Link
                  to={`${path.user}?tab=1`}
                  style={{ textDecoration: 'underline' }}
               >
                  HERE
               </Link>
            </Typography>
         </Box>
      )
   }

   return (
      <div className="konsept-container">
         <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={loading}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         <Grid container spacing={5} sx={{ mt: 1, mb: 5 }}>
            <Grid item lg={8}>
               <ShippingAddressForm
                  defaultValues={deliveryInfo}
                  onSubmit={handleSubmitShippingInfo}
               />
            </Grid>
            <Grid item lg={4}>
               <Box>
                  <Typography variant="h5">Order Summary</Typography>

                  <OrderSummary products={purchaseProducts} />
               </Box>
            </Grid>
         </Grid>
      </div>
   )
}

export default OrderPage
