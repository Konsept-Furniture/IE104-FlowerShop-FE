import React from 'react';
import PropTypes from 'prop-types';
import IconHeart from '@/assets/icons/IconHeart';
import IconEye from '@/assets/icons/IconEye';
import './ProductItem.scss';

ProductItem.propTypes = {};

function ProductItem(props) {
   return (
      <div className="product">
         <div className="product__thumbnail">
            <img
               className="product__thumbnail-image"
               src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist7-600x811.jpg"
               alt=""
            />
            <div className="product__thumbnail-overlay">
               <div className="overlay__icons">
                  <a className="wishlist">
                     <IconHeart />
                  </a>
                  <a className="quickview">
                     <IconEye width={20} height={20} />
                  </a>
               </div>
               <div className="overlay__add-cart">
                  <a className="konsept-link konsept-link--italic">
                     Add To Cart
                  </a>
               </div>
            </div>
         </div>

         <div className="product__content">
            <div className="product__info">
               <h5 className="product__info-title">DRESSER</h5>
               <div className="product__info-category">
                  <a>Bedroom</a>
               </div>
            </div>
            <div className="product__info-price">$95.00</div>
         </div>
      </div>
   );
}

export default ProductItem;
