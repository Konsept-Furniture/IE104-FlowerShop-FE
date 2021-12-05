import React from 'react'
import PropTypes from 'prop-types'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Stack,
   Typography
} from '@mui/material'
import OrderTrackingStepper from './OrderTrackingStepper'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { parseISO, formatDistance } from 'date-fns'

AccordionOrderTracking.propTypes = {
   order: PropTypes.object.isRequired
}

function AccordionOrderTracking({ order }) {
   console.log(order)
   return (
      <Accordion>
         <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
         >
            <Stack
               direction="row"
               justifyContent="space-between"
               sx={{ width: '100%' }}
            >
               <Typography>Order ID: {order._id}</Typography>
               <Typography sx={{ color: '#65627a' }} variant="body2">
                  Last updated:{' '}
                  {formatDistance(parseISO(order.updatedAt), new Date(), {
                     addSuffix: true
                  })}
               </Typography>
            </Stack>
         </AccordionSummary>
         <AccordionDetails>
            <OrderTrackingStepper order={order} />
         </AccordionDetails>
      </Accordion>
   )
}

export default AccordionOrderTracking
