/* eslint-disable multiline-ternary */
import orderApi from '@/api/orderApi'
import { CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccordionOrderTracking from '../AccordionOrderTracking'

function OrdersTrackingTab() {
   const { enqueueSnackbar } = useSnackbar()
   const [orders, setOrders] = useState([])
   const [isEmpty, setIsEmpty] = useState(false)

   useEffect(() => {
      ;(async () => {
         try {
            const res = await orderApi.getAll()
            if (res.data.length > 0) {
               setOrders(res.data)
            } else {
               setIsEmpty(true)
            }
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
      })()
   }, [])

   return (
      <div>
         <Typography variant="h4" sx={{ mb: 2 }}>
            Orders tracking
         </Typography>

         {orders.length > 0 ? (
            orders.map((order, i) => <AccordionOrderTracking order={order} key={order._id} />)
         ) : (
            <Box
               sx={{
                  pt: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               {!isEmpty ? (
                  <CircularProgress color="black" />
               ) : (
                  <Typography variant="h5">
                     No order found. <Link style={{ textDecoration: 'underline' }}>Shopping</Link>{' '}
                     now!
                  </Typography>
               )}
            </Box>
         )}
      </div>
   )
}

export default OrdersTrackingTab
