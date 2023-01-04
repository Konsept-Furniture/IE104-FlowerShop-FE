import IconDelete from '@/assets/icons/IconDelete'
import { path } from '@/constants/path'
import { IconButton, TableCell, TableRow, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function WishlistProductItem({ product, onRemove }) {
   const handleRemove = () => {
      if (onRemove) onRemove(product._id)
   }

   return (
      <TableRow hover>
         <TableCell padding="checkbox">
            <IconButton
               aria-label="delete"
               color="error"
               onClick={handleRemove}
            >
               <IconDelete width={30} height={30} />
            </IconButton>
         </TableCell>
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
            <div>
               <Link to={`${path.products}/${product._id}`}>
                  <Typography variant="h6" component="div">
                     {product.title}
                  </Typography>
               </Link>
            </div>
         </TableCell>
         <TableCell
            align="center"
            sx={{
               display: {
                  xs: 'none',
                  sm: 'table-cell'
               }
            }}
         >
            ${product.price.toFixed(2)}
         </TableCell>
         <TableCell align="center">
            {/* <QuantityField name={name} control={control} /> */}
            {product.quantity > 0 ? 'In stock' : 'Out of stock'}
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
         </TableCell>
      </TableRow>
   )
}
WishlistProductItem.propTypes = {
   product: PropTypes.object.isRequired,
   onRemove: PropTypes.func.isRequired
}

export default WishlistProductItem
