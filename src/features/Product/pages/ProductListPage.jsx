import queryString from 'query-string'
import React, { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import FilterPanel from '../components/Filter/FilterPanel'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'
import './ProductListPage.scss'

function ProductListPage() {
   const location = useLocation()
   const [loading, setLoading] = useState(true)

   const queryParams = useMemo(() => {
      const params = queryString.parse(location.search)

      return {
         ...params
         // _page: Number.parseInt(params._page) || 1,
         // _limit: Number.parseInt(params._limit) || 9,
         // _sort: params._sort || 'salePrice:ASC'
      }
   }, [location.search])

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

   const data = [
      {
         _id: 0,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 1,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 2,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 3,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 4,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 5,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 6,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 7,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      },
      {
         _id: 8,
         name: 'Dresser',
         imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg',
         category: 'Bedroom',
         price: '96.00'
      }
   ]

   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 5000)
   }, [])

   return (
      <main className="products konsept-container">
         <div className="products__filters">
            <FilterPanel categories={categories} filters={filters}/>
         </div>
         <div className="products__list">
            {loading
               ? <ProductSkeletonList />
               : <ProductList data={data}/>
            }

         </div>
      </main>
   )
}

export default ProductListPage
