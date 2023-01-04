import { Box, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { path } from '@/constants/path'
import { OutlinedButton } from '@/components/button/Button'

const OrderProductItem = ({ product }) => {
   const history = useHistory()
   const handleRate = () => {
      history.push(`products/${product.productId}#review`)
   }
   return (
      <TableRow hover>
         <TableCell
            align="right"
            width="150px"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'table-cell'
               }
            }}
         >
            <img className="product-image" src={product.img} />
         </TableCell>
         <TableCell align="left">
            <Box>
               <Link to={`${path.products}/${product.productId}`}>
                  <Typography variant="h6" component="div">
                     {product.title}
                  </Typography>
               </Link>
            </Box>
         </TableCell>
         <TableCell
            align="right"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'table-cell'
               }
            }}
         >
            ${product.price.toFixed(2)}
         </TableCell>
         <TableCell align="right">{product.quantity}</TableCell>

         <TableCell
            align="right"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'table-cell'
               }
            }}
         >
            ${(product.quantity * product.price).toFixed(2)}
         </TableCell>
         <TableCell
            align="right"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'table-cell'
               }
            }}
         >
            <OutlinedButton onClick={handleRate}>Rate</OutlinedButton>
         </TableCell>
      </TableRow>
   )
}
OrderProductItem.propTypes = {
   product: PropTypes.object.isRequired
}
export default OrderProductItem
