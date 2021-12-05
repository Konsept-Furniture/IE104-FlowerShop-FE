import orderApi from '@/api/orderApi'
import { Typography } from '@mui/material'
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
         {orders.map((order, i) => (
            <AccordionOrderTracking order={order} key={order._id} />
         ))}
      </div>
   )
}

export default OrdersTrackingTab
