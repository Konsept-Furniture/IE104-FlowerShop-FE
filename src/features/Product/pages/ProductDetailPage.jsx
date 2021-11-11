import React from 'react'
import PropTypes from 'prop-types'
import IconHeart from '@/assets/icons/IconHeart'

ProductDetailPage.propTypes = {}

function ProductDetailPage(props) {
   return (
      <div className="product">
         <div className="product__thumbnail">
            <img className="product__image"></img>
            <div className="product__overlay">
               <div className="overlay__actions">
                  <a className="wishlist">
                     <IconHeart />
                  </a>
                  <a className="quickview"></a>
               </div>
               <div className="overlay__add-cart"></div>
            </div>
         </div>
         <div></div>
      </div>
   )
}

export default ProductDetailPage
