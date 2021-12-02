import PrimaryButton, { OutlinedButton } from '@/components/button/Button'
import ClearIcon from '@mui/icons-material/Clear'
import {
   Checkbox,
   IconButton,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Toolbar,
   Tooltip,
   Typography
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import './CartItemList.scss'

CartItemList.propTypes = {
   products: PropTypes.array.isRequired,
   onUpdateList: PropTypes.func.isRequired,
   onPurchase: PropTypes.func.isRequired
}

function CartItemList({ products }) {
   const [isUpdated, setIsUpdated] = useState(false)
   const [selectedProducts, setSelectedProducts] = useState([])

   const handleSelectAll = event => {
      let newSelectedProducts

      if (event.target.checked) {
         newSelectedProducts = products.map(product => ({
            productId: product.productId,
            quantity: product.quantity
         }))
      } else {
         newSelectedProducts = []
      }

      setSelectedProducts(newSelectedProducts)
   }

   const handleSelectOne = item => {
      const idx = selectedProducts.findIndex(
         product => product.productId === item.productId
      )
      let newSelectedProducts = [...selectedProducts]

      if (idx === -1) {
         newSelectedProducts.push(item)
      } else {
         newSelectedProducts = newSelectedProducts.filter(
            product => product.productId !== item.productId
         )
      }
      setSelectedProducts(newSelectedProducts)
   }

   return (
      <div className="cart__product-list">
         <Toolbar
            sx={{
               pl: { sm: 2 },
               pr: { xs: 1, sm: 1 },
               whiteSpace: 'nowrap',
               alignItems: 'center'
               // ...(selectedProducts.length > 0 && {
               //    bgcolor: theme =>
               //       alpha(
               //          theme.palette.primary.main,
               //          theme.palette.action.activatedOpacity
               //       )
               // })
            }}
         >
            {selectedProducts.length > 0 ? (
               <Typography
                  sx={{ flex: '1 1 100%' }}
                  color="inherit"
                  variant="subtitle1"
                  component="div"
               >
                  {selectedProducts.length} item(s) selected
               </Typography>
            ) : (
               <Typography
                  sx={{ flex: '1 1 100%' }}
                  variant="h6"
                  id="tableTitle"
                  component="div"
               >
                  Cart
               </Typography>
            )}

            <Stack direction="row" spacing={2} alignItems="center">
               <Typography variant="h6" id="tableTitle" component="p">
                  Total: 50.00$
               </Typography>
               {isUpdated && <OutlinedButton>Update Cart</OutlinedButton>}
               {selectedProducts.length > 0 && (
                  <PrimaryButton>Checkout</PrimaryButton>
               )}
            </Stack>
         </Toolbar>
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell padding="checkbox">
                     <Checkbox
                        checked={selectedProducts.length === products.length}
                        color="black"
                        indeterminate={
                           selectedProducts.length > 0 &&
                           selectedProducts.length < products.length
                        }
                        onChange={handleSelectAll}
                     />
                  </TableCell>
                  <TableCell align="right" width="200px"></TableCell>
                  <TableCell align="left">Product Detail</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                  <TableCell align="right">Action</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {products.map(item => (
                  <TableRow hover key={item.productId}>
                     <TableCell padding="checkbox">
                        <Checkbox
                           checked={
                              selectedProducts.length > 0 &&
                              selectedProducts.findIndex(
                                 product =>
                                    product?.productId === item.productId
                              ) !== -1
                           }
                           onChange={() => handleSelectOne(item)}
                           value="true"
                           color="black"
                        />
                     </TableCell>
                     <TableCell align="right" sx={{ display: 'flex' }}>
                        <img
                           className="product-image"
                           src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/home5_6-1.jpg"
                        />
                     </TableCell>
                     <TableCell align="left">
                        <div>
                           <h3>Product</h3>
                           <p>Detail</p>
                        </div>
                     </TableCell>
                     <TableCell align="right">50.00$</TableCell>
                     <TableCell align="right">2</TableCell>
                     <TableCell align="right">100.00$</TableCell>
                     <TableCell align="right">
                        <div className="product__remove-btn">
                           <Tooltip title="Remove item" placement="top">
                              <IconButton>
                                 <ClearIcon color="error" />
                              </IconButton>
                           </Tooltip>
                        </div>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   )
}

export default CartItemList
