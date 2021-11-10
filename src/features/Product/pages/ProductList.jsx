import React from 'react'
import PropTypes from 'prop-types'
import './ProductList.scss'
import ProductItem from '../components/ProductItem'
import FilterPanel from '../components/Filter/FilterPanel'
import { useLocation } from 'react-router'
import queryString from 'query-string'

ProductList.propTypes = {}

function ProductList(props) {
   const location = useLocation()
   const params = queryString.parse(location.search)

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
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice100 || 100
   }
   return (
      <main className="products konsept-container">
         <div className="products__filters">
            <FilterPanel categories={categories} filters={filters}/>
         </div>
         <div className="products__list">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
         </div>
      </main>
   )
}

export default ProductList
