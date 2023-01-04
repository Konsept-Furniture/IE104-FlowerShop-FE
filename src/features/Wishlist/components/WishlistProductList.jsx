/* eslint-disable multiline-ternary */
import IconDelete from '@/assets/icons/IconDelete'
import {
   Backdrop, CircularProgress,
   IconButton,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import WishlistProductItem from './WishlistProductItem'
import './WishlistProductList.scss'

WishlistProductList.propTypes = {
   products: PropTypes.array.isRequired,
   onRemoveProduct: PropTypes.func.isRequired
}

function WishlistProductList({ products, onRemoveProduct }) {
   const [loading, setLoading] = useState(false)

   const handleRemoveProduct = async (id) => {
      setLoading(true)
      await onRemoveProduct(id)
      setLoading(false)
   }

   return (
      <div className="wishlist__product-list">
         <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
         </Backdrop>

         {products.length > 0 && (
            <Stack direction="column" spacing={3}>
               <Table>
                  <TableHead>
                     <TableRow sx={{ textTransform: 'uppercase' }}>
                        <TableCell padding="checkbox">
                           <IconButton aria-label="delete">
                              <IconDelete />
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
                        ></TableCell>
                        <TableCell align="left">Product</TableCell>
                        <TableCell
                           align="center"
                           sx={{
                              display: {
                                 xs: 'none',
                                 sm: 'table-cell'
                              }
                           }}
                        >
                           Unit Price
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
                           Stock Status
                        </TableCell>
                        <TableCell align="right"></TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {products.map((item, idx) => (
                        <WishlistProductItem
                           key={item._id}
                           product={item}
                           onRemove={handleRemoveProduct}
                        />
                     ))}
                  </TableBody>
               </Table>
            </Stack>
         )}
      </div>
   )
}

export default WishlistProductList
