import PrimaryButton, { OutlinedButton } from '@/components/button/Button'
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
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, updateCart } from '../cartSlice'
import CartItem from './Cartitem'
import './CartItemList.scss'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import { Link } from 'react-router-dom'
import { path } from '@/constants/path'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

CartItemList.propTypes = {
   products: PropTypes.array.isRequired,
   onUpdateList: PropTypes.func.isRequired,
   onPurchase: PropTypes.func.isRequired
}

function CartItemList() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
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
      setCurrentCartProducts(cart.current)
   }, [cart.current])

   useEffect(() => {
      if (cart.current.length > 0) {
         const defaultValues = cart.current.map(item => item.quantity)
         reset({
            quantity: defaultValues
         })
      }
   }, [cart.current])

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
      const idx = selectedProducts.findIndex(
         product => product._id === item._id
      )
      let newSelectedProducts = [...selectedProducts]

      if (idx === -1) {
         newSelectedProducts.push(item)
      } else {
         newSelectedProducts = [...selectedProducts].filter(
            product => product._id !== item._id
         )
      }
      setSelectedProducts(newSelectedProducts)
   }

   const handleRemoveOne = product => {
      setIsUpdated(true)

      // set current products after remove
      const newCartProducts = [...currentCartProducts].filter(
         item => item._id !== product._id
      )
      setCurrentCartProducts(newCartProducts)

      // set selected products after remove
      const newSelectedProducts = [...selectedProducts].filter(
         item => item._id !== product._id
      )
      setSelectedProducts(newSelectedProducts)
   }

   const handleUpdateCart = async () => {
      setUpdating(true)
      try {
         const payload = {
            cartId: cart._id,
            payload: {
               products: currentCartProducts.map((product, idx) => ({
                  productId: product._id,
                  quantity: getValues(`quantity.${idx}`)
               }))
            }
         }
         console.log(payload)
         const res = await dispatch(updateCart(payload)).then(unwrapResult)
         console.log(res)

         setIsUpdated(false)
         setUpdating(false)
         setSelectedProducts([])
         enqueueSnackbar(res.message, {
            variant: 'success'
         })

         // get cart again
         await dispatch(getCart()).then(unwrapResult)
      } catch (error) {
         setUpdating(false)
         console.log('error to update cart', error)
      }
   }

   const renderTotal = () => {
      console.log('render total', selectedProducts)
      return selectedProducts.reduce((prev, cur, curIndex) => {
         console.log(cur)
         return prev + cur.quantity * cur.price
      }, 0)
   }

   return (
      <div className="cart__product-list">
         <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={updating}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         {cart.current.length > 0 ? (
            <>
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
                        <OutlinedButton onClick={handleUpdateCart}>
                           Update Cart
                        </OutlinedButton>
                     )}
                     {!isUpdated && selectedProducts.length > 0 && (
                        <PrimaryButton>Checkout</PrimaryButton>
                     )}
                  </Stack>
               </Toolbar>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell padding="checkbox">
                           <Checkbox
                              checked={
                                 selectedProducts.length ===
                                 currentCartProducts.length
                              }
                              color="black"
                              indeterminate={
                                 selectedProducts.length > 0 &&
                                 selectedProducts.length <
                                    currentCartProducts.length
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
                     {currentCartProducts.map((item, idx) => (
                        <CartItem
                           key={item._id}
                           data={item}
                           form={{ form, name: `quantity.${idx}` }}
                           selected={
                              selectedProducts.length > 0 &&
                              selectedProducts.findIndex(
                                 product => product?._id === item._id
                              ) !== -1
                           }
                           onSelect={handleSelectOne}
                           onRemove={handleRemoveOne}
                        />
                     ))}
                  </TableBody>
               </Table>
            </>
         ) : (
            <Typography
               sx={{ flex: '1 1 100%' }}
               variant="h6"
               id="tableTitle"
               component="div"
            >
               Your cart is empty. {"Let's "}
               <Link to={path.products}>shopping</Link>!
            </Typography>
         )}
      </div>
   )
}

export default CartItemList
