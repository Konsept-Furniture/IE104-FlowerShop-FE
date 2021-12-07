/* eslint-disable multiline-ternary */
import PrimaryButton, { OutlinedButton } from '@/components/button/Button'
import { path } from '@/constants/path'
import { yupResolver } from '@hookform/resolvers/yup'
import {
   Backdrop,
   Checkbox,
   CircularProgress,
   Stack,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Toolbar,
   Typography
} from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import CartItem from './Cartitem'
import './CartItemList.scss'

CartItemList.propTypes = {
   creatingOrder: PropTypes.bool.isRequired,
   products: PropTypes.array.isRequired,
   onUpdateList: PropTypes.func.isRequired,
   onCheckoutClick: PropTypes.func.isRequired
}

function CartItemList({ creatingOrder, products, onUpdateList, onCheckoutClick }) {
   const cart = useSelector(state => state.cart)
   const [currentCartProducts, setCurrentCartProducts] = useState([])

   const [updating, setUpdating] = useState(false)
   const [isUpdated, setIsUpdated] = useState(false)
   const [selectedProducts, setSelectedProducts] = useState([])

   const schema = yup.object().shape({
      quantity: yup.array().of(yup.number().min(0))
   })
   const form = useForm({
      resolver: yupResolver(schema)
   })
   const {
      reset,
      formState: { isDirty },
      getValues
   } = form

   useEffect(() => {
      setCurrentCartProducts(products)
   }, [products])

   useEffect(() => {
      if (products.length > 0) {
         const defaultValues = products.map(item => item.quantity)
         reset({
            quantity: defaultValues
         })
      }
   }, [products])

   useEffect(() => {
      if (isDirty) {
         setIsUpdated(true)
      }
   }, [isDirty])

   const handleSelectAll = event => {
      let newSelectedProducts

      if (event.target.checked) {
         newSelectedProducts = currentCartProducts
      } else {
         newSelectedProducts = []
      }

      setSelectedProducts(newSelectedProducts)
   }

   const handleSelectOne = item => {
      const idx = selectedProducts.findIndex(product => product._id === item._id)
      let newSelectedProducts = [...selectedProducts]

      if (idx === -1) {
         newSelectedProducts.push(item)
      } else {
         newSelectedProducts = [...selectedProducts].filter(product => product._id !== item._id)
      }
      setSelectedProducts(newSelectedProducts)
   }

   const handleRemoveOne = product => {
      setIsUpdated(true)

      // set current products after remove
      const newCartProducts = [...currentCartProducts].filter(item => item._id !== product._id)
      setCurrentCartProducts(newCartProducts)

      // set selected products after remove
      const newSelectedProducts = [...selectedProducts].filter(item => item._id !== product._id)
      setSelectedProducts(newSelectedProducts)
   }

   const handleUpdateCart = async () => {
      setUpdating(true)

      if (onUpdateList) {
         const payload = {
            cartId: cart._id,
            payload: {
               products: currentCartProducts.map((product, idx) => ({
                  productId: product._id,
                  quantity: getValues(`quantity.${idx}`)
               }))
            }
         }

         const isSuccess = await onUpdateList(payload)
         if (isSuccess) {
            setIsUpdated(false)
            setSelectedProducts([])
         }
      }
      setUpdating(false)
   }

   const handleCheckoutClick = () => {
      if (onCheckoutClick) {
         onCheckoutClick(selectedProducts)
      }
   }

   const renderTotal = () => {
      return selectedProducts.reduce((prev, cur, curIndex) => {
         return prev + cur.quantity * cur.price
      }, 0)
   }

   return (
      <div className="cart__product-list">
         <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={updating}>
            <CircularProgress color="inherit" />
         </Backdrop>

         {cart.current.length > 0 ? (
            <Stack direction="column" spacing={3}>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell padding="checkbox">
                           <Checkbox
                              checked={selectedProducts.length === currentCartProducts.length}
                              color="black"
                              indeterminate={
                                 selectedProducts.length > 0 &&
                                 selectedProducts.length < currentCartProducts.length
                              }
                              onChange={handleSelectAll}
                           />
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
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {currentCartProducts.map((item, idx) => (
                        <CartItem
                           key={item._id}
                           data={item}
                           form={{ form, name: `quantity.${idx}` }}
                           selected={
                              selectedProducts.length > 0 &&
                              selectedProducts.findIndex(product => product?._id === item._id) !==
                                 -1
                           }
                           onSelect={handleSelectOne}
                           onRemove={handleRemoveOne}
                        />
                     ))}
                  </TableBody>
               </Table>
               <Toolbar
                  sx={{
                     pl: { sm: 2 },
                     pr: { xs: 1, sm: 1 },
                     whiteSpace: 'nowrap',
                     alignItems: 'center'
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
                        component="h6"
                     ></Typography>
                  )}

                  <Stack direction="row" spacing={2} alignItems="center">
                     {!isUpdated && selectedProducts.length > 0 && (
                        <Typography variant="h6" id="tableTitle" component="p">
                           Total: {renderTotal().toFixed(2)}$
                        </Typography>
                     )}
                     {isUpdated && (
                        <OutlinedButton onClick={handleUpdateCart}>Update Cart</OutlinedButton>
                     )}
                     {!isUpdated && selectedProducts.length > 0 && (
                        <PrimaryButton loading={creatingOrder} onClick={handleCheckoutClick}>
                           Checkout
                        </PrimaryButton>
                     )}
                  </Stack>
               </Toolbar>
            </Stack>
         ) : (
            <Box
               sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
            >
               <Typography
                  sx={{
                     flex: '1 1 100%'
                  }}
                  variant="h6"
                  id="tableTitle"
                  component="div"
               >
                  Your cart is empty. {"\nLet's "}
                  <Link to={path.products} style={{ textDecoration: 'underline' }}>
                     shopping
                  </Link>
                  !
               </Typography>
            </Box>
         )}
      </div>
   )
}

export default CartItemList
