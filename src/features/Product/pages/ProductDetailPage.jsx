import React, { useEffect, useState } from 'react'
import './ProductDetailPage.scss'
import ProductDetailSkeleton from '../components/ProductDetailSkeleton'
import ProductDetail from '../components/ProductDetail'
import { useParams } from 'react-router'
import productApi from '../productApi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../productSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import { getCart } from '@/features/Cart/cartSlice'
import { common } from '@/utils/common'
import { Backdrop, CircularProgress, Button } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { path } from '@/constants/path'

function ProductDetailPage(props) {
   const cartId = useSelector(state => state.cart._id)
   const { enqueueSnackbar, closeSnackbar } = useSnackbar()
   const { productId } = useParams()
   const dispatch = useDispatch()
   const history = useHistory()

   const [firstLoding, setFirstLoading] = useState(true)
   const [addingToCart, setAddingToCart] = useState(false)
   const [productData, setProductData] = useState({})

   useEffect(() => {
      ;(async () => {
         try {
            const res = await productApi.getProduct(productId)
            setProductData(res.data)
         } catch (error) {
            console.log(error)
         }
         setFirstLoading(false)
      })()
   }, [])

   const snackbarAction = key => (
      <>
         <Button
            variant="text"
            color="inherit"
            onClick={() => {
               history.push(path.cart)
               closeSnackbar(key)
            }}
         >
            View Cart
         </Button>
      </>
   )

   const handleAddToCart = async _data => {
      if (cartId) {
         setAddingToCart(true)
         try {
            const data = {
               cartId,
               payload: {
                  productId,
                  quantity: _data.quantity
               }
            }
            console.log(data)
            const res = await dispatch(addToCart(data)).then(unwrapResult)
            enqueueSnackbar(res.message, {
               variant: 'success',
               action: snackbarAction
            })

            setAddingToCart(false)
            // get cart again
            await dispatch(getCart()).then(unwrapResult)
         } catch (error) {
            setAddingToCart(false)
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
      } else {
         // Add to localStorage
         common.addProductToCartLocalStorage(productId, _data.quantity)
         enqueueSnackbar('Add to cart successfully', {
            variant: 'success',
            action: snackbarAction
         })
      }
   }

   return (
      <section className="konsept-container">
         <Backdrop
            sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
            open={addingToCart}
         >
            <CircularProgress color="inherit" />
         </Backdrop>

         {firstLoding ? (
            <ProductDetailSkeleton />
         ) : (
            <ProductDetail product={productData} onAddToCart={handleAddToCart} />
         )}
      </section>
   )
}

export default ProductDetailPage
