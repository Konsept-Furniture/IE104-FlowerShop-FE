/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import { Divider, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React from 'react'
import './OrderSummary.scss'

OrderSummary.propTypes = {
   products: PropTypes.array.isRequired
}

function OrderSummary({ products }) {
   const renderTotal = products => {
      return products.reduce((prev, cur) => {
         return prev + cur.quantity * cur.price
      }, 0)
   }

   const subtotal = renderTotal(products)

   return (
      <Stack
         className="order-summary"
         direction="column"
         spacing={2}
         divider={<Divider orientation="horizontal" flexItem />}
      >
         <Stack
            className="products"
            spacing={2}
            divider={<Divider orientation="horizontal" flexItem />}
         >
            {products.length > 0 ? products.map((product, idx) => (
                    <div key={idx} className="product-card">
                       <div className="product-card__image">
                          <img width={150} src={product.img} alt="" />
                       </div>
                       <div className="product-card__info">
                          <Typography variant="h6">{product.title}</Typography>
                          <Typography variant="subtitle1">
                             {product.quantity} ⨉ ${product.price?.toFixed(2)}
                          </Typography>
                       </div>
                    </div>
                 )) : null}
         </Stack>

         {/* <Box>discount</Box> */}

         <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="subtitle1">Subtotal</Typography>
               <Typography variant="subtitle1">${subtotal?.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="subtitle1">Tax</Typography>
               <Typography variant="subtitle1">$0.00</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="subtitle1">Shipping</Typography>
               <Typography variant="subtitle1">${'0.00'}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="h6">Total</Typography>
               <Typography variant="h6">${renderTotal(products).toFixed(2)}</Typography>
            </Box>
         </Box>
      </Stack>
   )
}

export default OrderSummary
