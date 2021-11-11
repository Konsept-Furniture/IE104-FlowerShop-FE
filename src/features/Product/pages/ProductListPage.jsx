import useQuery from '@/hooks/useQuery'
import React, { useEffect, useState } from 'react'
import FilterPanel from '../components/Filter/FilterPanel'
import ProductList from '../components/ProductList'
import ProductSkeletonList from '../components/ProductSkeletonList'
import './ProductListPage.scss'

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
      }, 3000)
   }, [queryParams])

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
