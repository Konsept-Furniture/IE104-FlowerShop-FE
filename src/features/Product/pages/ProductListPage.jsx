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

   const [data, setData] = useState([])

   const getProducts = async() => {
      setLoading(true)
      try {
         const payload = {
            page: 1,
            size: 10
         }
         const res = await productApi.getProducts(payload)
         console.log(res)
         setData(res.products)
      } catch (error) {
         console.log(error)
      }
      setLoading(false)
   }

   useEffect(() => {
      getProducts()
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
                  : <h5>Showing 1–9 of 90 results</h5>
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
