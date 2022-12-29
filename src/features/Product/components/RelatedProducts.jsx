import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './RelatedProducts.scss'
// import required modules
import { Navigation } from 'swiper'
import ProductItem from './ProductItem'
import PropTypes from 'prop-types'

const RelatedProducts = ({ products, onAddCart }) => {
   return (
      <Swiper
         spaceBetween={30}
         slidesPerGroup={1}
         loop={true}
         loopFillGroupWithBlank={true}
         pagination={{
            clickable: true
         }}
         breakpoints={{
            460: {
               slidesPerView: 1,
               spaceBetween: 30
            },
            640: {
               slidesPerView: 2,
               spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
               spaceBetween: 40
            }
         }}
         navigation={true}
         modules={[Navigation]}
         className="related-products"
         noSwiping={true}
         noSwipingClass={'related-products'}
      >
         {products.map(product => (
            <SwiperSlide key={product._id}>
               <ProductItem product={product} onAddCart={onAddCart} />
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

RelatedProducts.propTypes = {
   products: PropTypes.array.isRequired,
   onAddCart: PropTypes.func.isRequired
}
export default RelatedProducts
