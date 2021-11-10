import React from 'react'
import PropTypes from 'prop-types'
import './ProductList.scss'
import ProductItem from '../components/ProductItem'

ProductList.propTypes = {}

function ProductList(props) {
   // const
   return (
      <main className="products konsept-container">
         <div className="products__filters">filters</div>
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
