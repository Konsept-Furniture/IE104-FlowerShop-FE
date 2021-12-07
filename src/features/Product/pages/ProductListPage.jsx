/* eslint-disable multiline-ternary */
import { path } from '@/constants/path'
import { getCart } from '@/features/Cart/cartSlice'
import { addToCart, getCategories } from '@/features/Product/productSlice'
import useQuery from '@/hooks/useQuery'
import { common } from '@/utils/common'
import { renderPaginationText } from '@/utils/helper'
import { Box, Pagination, Skeleton, Stack, Button, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import FilterPanel from '../components/Filter/FilterPanel'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'
import productApi from '../productApi'
import './ProductListPage.scss'

function ProductListPage() {
   const dispatch = useDispatch()
   const history = useHistory()
   const { enqueueSnackbar, closeSnackbar } = useSnackbar()
   const cartId = useSelector(state => state.cart._id)

   const productListRef = useRef(null)
   const [loading, setLoading] = useState(true)
   const [products, setProducts] = useState([])
   const [categories, setCategories] = useState([])
   const [pagination, setPagination] = useState({
      totalItems: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 9
   })

   const queryParams = useQuery()
   const filters = {
      ...queryParams,
      minPrice: Number.parseInt(queryParams.minPrice) || 0,
      maxPrice: Number.parseInt(queryParams.maxPrice) || 200
   }

   useEffect(() => {
      ;(async () => {
         try {
            const res = await dispatch(getCategories())
            const result = unwrapResult(res)
            setCategories(result.data)
         } catch (error) {
            console.log(error)
         }
      })()
   }, [dispatch])

   const getProducts = async _pagination => {
      executeScroll()
      setLoading(true)
      try {
         const payload = {
            page: _pagination.currentPage,
            pageSize: _pagination.pageSize,
            ...filters
         }
         const res = await productApi.getProducts(payload)
         console.log(res)
         setProducts(res.data)
         setPagination(res.pagination)
      } catch (error) {
         console.log(error)
      }
      setLoading(false)
   }

   useEffect(() => {
      getProducts({ currentPage: 1, pageSize: 9 })
   }, [queryParams])

   const handleChangePagination = (_, value) => {
      // executeScroll()
      getProducts({ currentPage: value, pageSize: pagination.pageSize })
   }
   const executeScroll = () => productListRef.current.scrollIntoView()

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
      <main className="products konsept-container">
         <div className="products__filters">
            <FilterPanel categories={categories} filters={filters} />
         </div>
         <div className="products__list" ref={productListRef}>
            <Box pl="10px" mb={3} mt={2} className="text--italic color--gray">
               {loading ? (
                  <Skeleton width="180px" height="25px" />
               ) : (
                  <h5>{renderPaginationText(pagination)}</h5>
               )}
            </Box>
            {loading ? (
               <ProductSkeletonList />
            ) : (
               <ProductList data={products} onAddCart={handleAddProductToCart} />
            )}
            {products.length > 0 ? (
               <Stack direction="row" justifyContent="center">
                  <Pagination
                     count={pagination.totalPages}
                     page={pagination.currentPage}
                     onChange={handleChangePagination}
                  />
               </Stack>
            ) : (
               <Box
                  sx={{ mt: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
               >
                  {!loading && (
                     <Typography variant="h5">
                        No product found. Please try again with new filters.
                     </Typography>
                  )}
               </Box>
            )}
         </div>
      </main>
   )
}

export default ProductListPage
