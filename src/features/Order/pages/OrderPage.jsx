import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import OrderSummary from '../components/OrderSummary'
import ShippingAddressForm from '../components/ShippingAddressForm'

function OrderPage() {
   const purchaseProducts = useSelector(state => state.cart.purchaseProducts)
   const { deliveryInfo } = useSelector(state => state.auth.profile)

   const handleSubmitOrder = async values => {
      console.log(values)
   }
   return (
      <div className="konsept-container">
         <Grid container spacing={5} sx={{ mt: 1, mb: 5 }}>
            <Grid item lg={8}>
               <Typography variant="h4">Shipping Information</Typography>

               <ShippingAddressForm
                  defaultValues={deliveryInfo}
                  onSubmit={handleSubmitOrder}
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
