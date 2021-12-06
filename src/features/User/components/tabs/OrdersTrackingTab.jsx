/* eslint-disable multiline-ternary */
import orderApi from '@/api/orderApi'
import { CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import AccordionOrderTracking from '../AccordionOrderTracking'

OrdersTrackingTab.propTypes = {}

function OrdersTrackingTab(props) {
   const [orders, setOrders] = useState([])
   useEffect(() => {
      ;(async () => {
         try {
            const res = await orderApi.getAll()
            setOrders(res.data)
         } catch (error) {}
      })()
   }, [])
   return (
      <div>
         <Typography variant="h4" sx={{ mb: 2 }}>
            Orders tracking
         </Typography>
         {orders.length > 0 ? (
            orders.map((order, i) => (
               <AccordionOrderTracking order={order} key={order._id} />
            ))
         ) : (
            <Box
               sx={{
                  pt: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <CircularProgress color="black" />
            </Box>
         )}
      </div>
   )
}

export default OrdersTrackingTab
