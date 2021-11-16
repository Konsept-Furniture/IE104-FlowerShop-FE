import useQuery from '@/hooks/useQuery'
import React, { useEffect, useRef, useState } from 'react'
import FilterPanel from '../components/Filter/FilterPanel'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'
import productApi from '../productApi'
import './ProductListPage.scss'
import { Box, Pagination, Skeleton, Stack } from '@mui/material'

function ProductListPage() {
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
      minPrice: queryParams.minPrice || 0,
      maxPrice: queryParams.maxPrice || 100
   }

   const getProducts = async(_pagination) => {
      setLoading(true)
      try {
         const payload = {
            page: _pagination.currentPage,
            pageSize: _pagination.pageSize
         }
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
      getProducts({ pageNo: 1, pageSize: 10 })
   }, [queryParams])

   const handleChangePagination = (_, value) => {
      executeScroll()
      getProducts({ currentPage: value, pageSize: pagination.pageSize })
   }

   const executeScroll = () => productListRef.current.scrollIntoView()

   return (
      <main className="products konsept-container">
         <div className="products__filters">
            <FilterPanel categories={categories} filters={filters}/>
         </div>
         <div className="products__list" ref={productListRef}>
            <Box pl="10px" mb={3} mt={2} className="text--italic color--gray">
               {loading
                  ? <Skeleton width="180px" height="25px"/>
                  : <h5>Showing {(pagination.currentPage - 1) * pagination.pageSize + 1}–{pagination.currentPage * pagination.pageSize} of {pagination.totalRows} results</h5>
               }
            </Box>
            {loading
               ? <ProductSkeletonList />
               : <ProductList data={data}/>
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
