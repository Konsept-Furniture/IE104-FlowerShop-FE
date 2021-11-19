import StorageKeys from '@/constants/StorageKeys'
import { getCart } from '@/features/Cart/cartSlice'
import { addToCart } from '@/features/Product/productSlice'
import { useAuthenticated } from '@/hooks/useAuthenticated'
import useQuery from '@/hooks/useQuery'
import { common } from '@/utils/common'
import { Box, Pagination, Skeleton, Stack } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import FilterPanel from '../components/Filter/FilterPanel'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'
import productApi from '../productApi'
import './ProductListPage.scss'
import Slide from '@material-ui/core/Slide'

function ProductListPage() {
   const authenticated = useAuthenticated()
   const dispatch = useDispatch()
   const { enqueueSnackbar } = useSnackbar()

   const productListRef = useRef(null)
   const [loading, setLoading] = useState(true)
   const [data, setData] = useState([])
   const [pagination, setPagination] = useState({
      totalItems: 0,
      totalPages: 0,
      currentPage: 1,
      pageSize: 10
   })

   const queryParams = useQuery()

   const categories = [
      {
         _id: '0',
         name: 'Art',
         number: 7
      },
      {
         _id: '1',
         name: 'Chair',
         number: 1
      },
      {
         _id: '2',
         name: 'Creative',
         number: 7
      },
      {
         _id: '3',
         name: 'Decorative',
         number: 17
      }
   ]
   const filters = {
      minPrice: Number.parseInt(queryParams.minPrice) || 0,
      maxPrice: Number.parseInt(queryParams.maxPrice) || 100
   }

   const getProducts = async(_pagination) => {
      setLoading(true)
      try {
         const payload = {
            page: _pagination.currentPage,
            pageSize: _pagination.pageSize,
            ...filters
         }
         console.log('🚀 ~ file: ProductListPage.jsx ~ line 60 ~ getProducts ~ payload', payload)
         const res = await productApi.getProducts(payload)
         console.log(res)
         setData(res.data)
         setPagination(res.pagination)
      } catch (error) {
         console.log(error)
      }
      setLoading(false)
   }

   useEffect(() => {
      getProducts({ currentPage: 1, pageSize: 10 })
   }, [queryParams])

   const handleChangePagination = (_, value) => {
      executeScroll()
      getProducts({ currentPage: value, pageSize: pagination.pageSize })
   }
   const executeScroll = () => productListRef.current.scrollIntoView()

   const handleAddProductToCart = async(product) => {
      if (authenticated) {
         // TODO: Add to db if logged in
         try {
            const data = {
               products: [
                  {
                     productId: product._id,
                     quantity: 1
                  }
               ]
            }
            const res = await dispatch(addToCart(data))
            const result = unwrapResult(res)
            enqueueSnackbar(result.message, {
               variant: 'success',
               anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right'
               },
               TransitionComponent: Slide
            })
            // TODO: get cart again
            await dispatch(getCart())
         } catch (error) {
            console.log('🚀 ~ file: ProductListPage.jsx ~ line 109 ~ handleAddProductToCart ~ error', error)
            // enqueueSnackbar(error.message, {
            //    variant: 'error'
            // })
         }
      } else {
         console.log(localStorage.getItem(StorageKeys.cart))
         // Add to localStorage
         common.addProductToCartLocalStorage(product._id, 1)
      }
   }

   return (
      <main className="products konsept-container">
         <div className="products__filters">
            <FilterPanel categories={categories} filters={filters}/>
         </div>
         <div className="products__list" ref={productListRef}>
            <Box pl="10px" mb={3} mt={2} className="text--italic color--gray">
               {loading
                  ? <Skeleton width="180px" height="25px"/>
                  : <h5>Showing {(pagination.currentPage - 1) * pagination.pageSize + 1}–{pagination.currentPage * pagination.pageSize} of {pagination.totalItems} results</h5>
               }
            </Box>
            {loading
               ? <ProductSkeletonList />
               : <ProductList data={data} onAddCart={handleAddProductToCart}/>
            }

            <Stack
               direction="row"
               justifyContent="center"
            >
               <Pagination count={pagination.totalPages} page={pagination.currentPage} onChange={handleChangePagination} />
            </Stack>
         </div>
      </main>
   )
}

export default ProductListPage
