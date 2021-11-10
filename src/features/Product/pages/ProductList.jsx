import React from 'react'
import PropTypes from 'prop-types'
import './ProductList.scss'
import ProductItem from '../components/ProductItem'
import FilterPanel from '../components/Filter/FilterPanel'

ProductList.propTypes = {}

function ProductList(props) {
   const categories = [
      {
         name: 'Art',
         number: 7
      },
      {
         name: 'Chair',
         number: 1
      },
      {
         name: 'Creative',
         number: 7
      },
      {
         name: 'Decorative',
         number: 17
      }
   ]
   const filters = {

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
