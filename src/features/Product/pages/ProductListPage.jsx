import useQuery from '@/hooks/useQuery'
import React, { useEffect, useState } from 'react'
import FilterPanel from '../components/Filter/FilterPanel'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'
import productApi from '../productApi'
import './ProductListPage.scss'
import { Box, Skeleton } from '@mui/material'

function ProductListPage() {
   const [loading, setLoading] = useState(true)
   const [data, setData] = useState([])
   const [pagination, setPagination] = useState({
      totalRows: 0,
      pageNo: 1,
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

   const getProducts = async(pagination) => {
      setLoading(true)
      try {
         const payload = {
            page: pagination.pageNo,
            size: pagination.pageSize
         }
         const res = await productApi.getProducts(payload)
         console.log(res)
         setData(res.products)
         setPagination({
            totalRows: res.totalItems,
            pageNo: res.currentPageIndex,
            pageSize: Math.round(res.totalItems / res.totalPages)
         })
      } catch (error) {
         console.log(error)
      }
      setLoading(false)
   }

   useEffect(() => {
      getProducts({ pageNo: 1, pageSize: 10 })
      console.log(pagination)
   }, [queryParams])

   return (
      <main className="products konsept-container">
         <div className="products__filters">
            <FilterPanel categories={categories} filters={filters}/>
         </div>
         <div className="products__list">
            <Box pl="10px" mb={3} mt={2} className="text--italic color--gray">
               {loading
                  ? <Skeleton width="180px" height="25px"/>
                  : <h5>Showing {pagination.pageNo * pagination.pageSize + 1}–{(pagination.pageNo + 1) * pagination.pageSize} of {pagination.totalRows} results</h5>
               }
            </Box>
            {loading
               ? <ProductSkeletonList />
               : <ProductList data={data}/>
            }
         </div>
      </main>
   )
}

export default ProductListPage
