import React from 'react'
import PropTypes from 'prop-types'
import IconHeart from '@/assets/icons/IconHeart'
import IconEye from '@/assets/icons/IconEye'
import './ProductItem.scss'

ProductItem.propTypes = {
   product: PropTypes.object
}

function ProductItem({ product }) {
   return (
      <div className="product">
         <div className="product__thumbnail">
            <img
               className="product__thumbnail-image"
               src={product.img || 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg'}
               alt=""
            />
            <div className="product__thumbnail-overlay">
               <div className="overlay__icons">
                  <a className="wishlist">
                     <IconHeart />
                  </a>
                  <a className="quickview">
                     <IconEye width={25} height={25} />
                  </a>
               </div>
               <div className="overlay__add-cart">
                  <a className="konsept-link text--italic">
                     Add To Cart
                  </a>
               </div>
            </div>
         </div>

         <div className="product__content">
            <div className="product__info">
               <h5 className="product__info-title">{product.title}</h5>
               <div className="product__info-category">
                  <a>{product.categories[0]}</a>
               </div>
            </div>
            <div className="product__info-price">${product.price.toFixed(2)}</div>
         </div>
      </div>
   )
}

export default ProductItem
