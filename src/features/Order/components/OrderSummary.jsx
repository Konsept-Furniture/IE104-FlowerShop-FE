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
      return products
         .reduce((prev, cur, curIndex) => {
            return prev + cur.quantity * cur.price
         }, 0)
         .toFixed(2)
   }
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
            {products.map(product => (
               <div key={product._id} className="product-card">
                  <div className="product-card__image">
                     <img width={150} src={product.img} alt="" />
                  </div>
                  <div className="product-card__info">
                     <Typography variant="h6">{product.title}</Typography>
                     <Typography variant="subtitle1">
                        {product.price} ⨉ {product.quantity.toFixed(2)}$
                     </Typography>
                  </div>
               </div>
            ))}
         </Stack>

         {/* <Box>discount</Box> */}

         <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="subtitle1">Subtotal</Typography>
               <Typography variant="subtitle1">
                  ${renderTotal(products)}
               </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="subtitle1">Tax</Typography>
               <Typography variant="subtitle1">${0.0}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="subtitle1">Shipping</Typography>
               <Typography variant="subtitle1">
                  ${renderTotal(products)}
               </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
               <Typography variant="h6">Shipping</Typography>
               <Typography variant="h6">${renderTotal(products)}</Typography>
            </Box>
         </Box>
      </Stack>
   )
}

export default OrderSummary
