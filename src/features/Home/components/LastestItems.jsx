import { path } from '@/constants/path'
import { getCart } from '@/features/Cart/cartSlice'
import ProductList from '@/features/Product/components/ProductList'
import ProductSkeletonList from '@/features/Product/components/ProductSkeletonList'
import productApi from '@/features/Product/productApi'
import { addToCart } from '@/features/Product/productSlice'
import { common } from '@/utils/common'
import { Button } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './LastestItems.scss'

function LastestItems() {
   const cartId = useSelector(state => state.cart._id)
   const { enqueueSnackbar, closeSnackbar } = useSnackbar()
   const dispatch = useDispatch()

   const [loading, setLoading] = useState(false)
   const [products, setProducts] = useState([])

   useEffect(() => {
      const getProducts = async () => {
         setLoading(true)
         try {
            const payload = {
               page: 1,
               pageSize: 12,
               orderBy: 'createdAt-desc'
            }
            const res = await productApi.getProducts(payload)
            setProducts(res.data)
         } catch (error) {
            console.log(error)
         }
         setLoading(false)
      }
      getProducts()
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
   const handleAddProductToCart = async product => {
      if (cartId) {
         try {
            const data = {
               cartId,
               payload: {
                  productId: product._id,
                  quantity: 1
               }
            }
            console.log(data)
            const res = await dispatch(addToCart(data)).then(unwrapResult)
            enqueueSnackbar(res.message, {
               variant: 'success',
               action: snackbarAction
            })

            // reduce quantity
            const _data = [...products]
            _data.forEach(item => {
               if (item._id === product._id && item.quantity > 0) {
                  item.quantity--
               }
            })
            setProducts(_data)

            // get cart again
            await dispatch(getCart()).then(unwrapResult)
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
      } else {
         // Add to localStorage
         common.addProductToCartLocalStorage(product._id, 1)
         enqueueSnackbar('Add to cart successfully', {
            variant: 'success',
            action: snackbarAction
         })
         // reduce quantity
         const _data = [...products]
         _data.forEach(item => {
            if (item._id === product._id && item.quantity > 0) {
               item.quantity--
            }
         })
         setProducts(_data)
      }
   }
   return (
      <div className="lastest-items konsept-container">
         <div className="lastest-items__header">
            {/* <p>Lastest Collection</p> */}
            <h2>LATEST ITEMS</h2>
         </div>
         <div className="lastest-items__products">
            {loading ? (
               <ProductSkeletonList />
            ) : (
               <ProductList data={products} onAddCart={handleAddProductToCart} />
            )}
         </div>
      </div>
   )
}

export default LastestItems
