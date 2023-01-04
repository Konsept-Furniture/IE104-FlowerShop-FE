import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import OrderProductItem from './OrderProductItem'
import PropTypes from 'prop-types'

const OrderProductList = ({ products }) => {
   return (
      <Table>
         <TableHead>
            <TableRow>
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
               <TableCell align="left">Product Detail</TableCell>
               <TableCell
                  align="right"
                  sx={{
                     display: {
                        xs: 'none',
                        sm: 'table-cell'
                     }
                  }}
               >
                  Price
               </TableCell>
               <TableCell align="right">Quantity</TableCell>
               <TableCell
                  align="right"
                  sx={{
                     display: {
                        xs: 'none',
                        sm: 'table-cell'
                     }
                  }}
               >
                  Subtotal
               </TableCell>
               <TableCell align="right"></TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {products.map((item, idx) => (
               <OrderProductItem key={item._id} product={item} />
            ))}
         </TableBody>
      </Table>
   )
}

OrderProductList.propTypes = {
   products: PropTypes.array
}
export default OrderProductList
