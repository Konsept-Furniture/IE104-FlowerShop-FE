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

function ProductDetailPage(props) {
   const { productId } = useParams()
   const [loading, setLoading] = useState(true)
   const [productData, setProductData] = useState({})
   const cartId = useSelector(state => state.cart._id)
   const dispatch = useDispatch()
   const { enqueueSnackbar } = useSnackbar()

   useEffect(() => {
      (async() => {
         setLoading(true)
         try {
            const res = await productApi.getProduct(productId)
            setProductData(res.data)
         } catch (error) {
            console.log(error)
         }
         setLoading(false)
      })()
   }, [])

   const handleAddToCart = async(_data) => {
      if (cartId) {
         try {
            const data = {
               cartId,
               payload: {
                  productId,
                  quantity: _data.quantity
               }
            }
            const res = await dispatch(addToCart(data)).then(unwrapResult)
            enqueueSnackbar(res.message, {
               variant: 'success'
            })
            history.go(0)
            // get cart again
            await dispatch(getCart()).then(unwrapResult)
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
      } else {
         // Add to localStorage
         common.addProductToCartLocalStorage(productId, _data.quantity)
         enqueueSnackbar('Add to cart successfully', {
            variant: 'success'
         })
         history.go(0)
      }
   }

   return (
      <main className="konsept-container">
         {loading
            ? <ProductDetailSkeleton />
            : <ProductDetail
               product={productData}
               onAddToCart={handleAddToCart}
            />
         }
      </main>
   )
}

export default ProductDetailPage
