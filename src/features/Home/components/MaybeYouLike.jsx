import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import './MaybeYouLike.scss'
// import required modules
import { Navigation, Grid } from 'swiper'
import productApi from '@/features/Product/productApi'
import { common } from '@/utils/common'
import { getCart } from '@/features/Cart/cartSlice'
import { addToCart } from '@/features/Product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import ProductItem from '@/features/Product/components/ProductItem'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const MaybeYouLike = () => {
   const cartId = useSelector(state => state.cart._id)
   const { enqueueSnackbar } = useSnackbar()
   const { productId } = useParams()
   const dispatch = useDispatch()

   const [products, setProducts] = useState([])

   useEffect(() => {
      ;(async () => {
         try {
            const payload = {
               page: 1,
               pageSize: 12
            }
            const products = (await productApi.getProducts(payload)).data
            setProducts(products)
         } catch (error) {
            console.log(error)
         }
      })()
   }, [])

   if (products.length === 0) return <></>

   const handleAddToCart = async _data => {
      if (cartId) {
         try {
            const data = {
               cartId,
               payload: {
                  productId,
                  quantity: _data.quantity
               }
            }
            console.log(data)
            const res = await dispatch(addToCart(data))
            enqueueSnackbar(res.message, {
               variant: 'success'
            })

            // get cart again
            dispatch(getCart())
         } catch (error) {
            enqueueSnackbar(error.message, {
               variant: 'error'
            })
         }
      } else {
         // Add to localStorage
         common.addProductToCartLocalStorage(productId, _data.quantity)
         enqueueSnackbar('Add to cart successfully', {
            variant: 'success'
         })
      }
   }
   return (
      <div className="konsept-container">
         <Box
            sx={{
               marginTop: 5,
               marginBottom: 2,
               width: '100%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center'
            }}
         >
            <Typography variant="h5">MAYBE YOU LIKE</Typography>
         </Box>
         <Swiper
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
               clickable: true
            }}
            grid={{
               rows: 2,
               fill: 'row'
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
                  spaceBetween: 50
               }
            }}
            navigation={true}
            modules={[Navigation, Grid]}
            className="maybe-you-like"
            noSwiping={true}
            noSwipingClass={'maybe-you-like'}
         >
            {products.map(product => (
               <SwiperSlide key={product._id}>
                  <ProductItem product={product} onAddCart={handleAddToCart} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}

MaybeYouLike.propTypes = {}
export default MaybeYouLike
