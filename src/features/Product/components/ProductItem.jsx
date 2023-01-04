import IconEye from '@/assets/icons/IconEye'
import IconHeart from '@/assets/icons/IconHeart'
import IconHeartFull from '@/assets/icons/IconHeartFull'
import { path } from '@/constants/path'
import { updateMe } from '@/features/Auth/authSlice'
import { CircularProgress } from '@mui/material'
import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import './ProductItem.scss'

ProductItem.propTypes = {
   product: PropTypes.object,
   onAddCart: PropTypes.func.isRequired
}

function ProductItem({ product, onAddCart }) {
   const { enqueueSnackbar } = useSnackbar()
   const history = useHistory()
   const [loading, setLoading] = useState(false)
   const profile = useSelector(state => state.auth.profile)
   const dispatch = useDispatch()
   const storedInWishlist = useMemo(() => {
      if (!profile?._id) return false
      const wishlist = profile.wishlist || []

      if (wishlist.includes(product._id)) {
         return true
      }

      return false
   }, [product, profile])

   const handleAddToCart = async e => {
      e.stopPropagation()
      setLoading(true)
      if (onAddCart) await onAddCart(product)
      setLoading(false)
   }
   const handleReadMore = () => {
      history.push(`/products/${product._id}`)
   }
   const handleAddToWishlist = async () => {
      if (!profile?._id) {
         history.push(`${path.login}?message_code=LOGIN_REQUIRED`)
         return
      }

      const productId = product._id

      try {
         if (storedInWishlist) {
            const wishlist = profile.wishlist || []
            const newWishlist = wishlist.filter(_ => _ !== productId)
            const payload = {
               wishlist: newWishlist
            }
            dispatch(updateMe(payload))
         } else {
            const wishlist = profile.wishlist || []
            const newWishlist = wishlist.concat(productId)
            const payload = {
               wishlist: newWishlist
            }
            dispatch(updateMe(payload))
            enqueueSnackbar('Added to wishlist', { variant: 'success' })
         }
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <div className="product">
         <div className="product__thumbnail" onClick={handleReadMore}>
            <img
               className="product__thumbnail-image"
               src={
                  product.img ||
                  'https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg'
               }
               alt=""
            />
            <div className="product__thumbnail-overlay">
               {/* TODO: no-time to develop */}
               <div className="overlay__icons">
                  <a className="wishlist" onClick={(e) => {
                     e.stopPropagation()
                     handleAddToWishlist()
                  }}>
                     {storedInWishlist ? (
                        <IconHeartFull width={20} height={20} />
                     ) : (
                        <IconHeart width={20} height={20} />
                     )}
                  </a>
                  <a className="quickview hidden">
                     <IconEye width={25} height={25} />
                  </a>
               </div>
               <div className="overlay__add-cart">
                  {product.quantity > 0 ? (
                     !loading ? (
                        <a className="konsept-link text--italic" onClick={handleAddToCart}>
                           Add To Cart
                        </a>
                     ) : (
                        <CircularProgress color="black" size={24} />
                     )
                  ) : (
                     <a className="konsept-link text--italic" onClick={handleReadMore}>
                        Read  more
                     </a>
                  )}
               </div>
            </div>
         </div>

         <div className="product__content">
            <div className="product__info">
               <h5 className="product__info-title cursor-pointer" onClick={handleReadMore}>{product.title}</h5>
               <div className="product__info-category">
                  {product.categories.map((cate, idx) => (
                     <span key={cate}>
                        {idx !== 0 ? ', ' : ''}
                        <a
                           onClick={() => {
                              history.push({
                                 pathname: path.products,
                                 search: `?category=${cate}`
                              })
                           }}
                           style={{ textTransform: 'capitalize' }}
                        >
                           {cate}
                        </a>
                     </span>
                  ))}
               </div>
            </div>
            <div className="product__info-price">${product.price.toFixed(2)}</div>
         </div>
      </div>
   )
}

export default ProductItem
