// import OrderStep from '@/components/OrderStep/OrderStep'
import ShoppingIcon from '@/assets/icons/ShoppingIcon'
import { IMAGES } from '@/assets/images'
import { OutlinedButton } from '@/components/button/Button'
import { path } from '@/constants/path'
import { updateMe } from '@/features/Auth/authSlice'
import { Grid } from '@mui/material'
import { useSnackbar } from 'notistack'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import WishlistProductList from '../components/WishlistProductList'
import productApi from '../../Product/productApi'

function WishlistPage() {
   const { enqueueSnackbar } = useSnackbar()
   const dispatch = useDispatch()
   const profile = useSelector(state => state.auth.profile)
   const wishlist = useMemo(() => profile ? profile.wishlist : [], [profile])
   const background = IMAGES.WishlistCover

   const [products, setProducts] = useState([])

   useEffect(() => {
      const fetchProducts = async () => {
         const promises = wishlist.map(async id => productApi.getProduct(id))
         const res = (await Promise.all(promises)).map(_ => _.data)
         setProducts(res)
      }
      fetchProducts()
   }, [wishlist])

   const handleRemoveWishlist = async (id) => {
      try {
         const newWishlist = wishlist.filter(_ => _ !== id)
         const payload = {
            wishlist: newWishlist
         }
         const res = await dispatch(updateMe(payload))

         enqueueSnackbar(res.message, {
            variant: 'success'
         })
         return true
      } catch (error) {
         console.log('error to update cart', error)
         return false
      }
   }

   // if (wishlist.length === 0) {
   //    return (
   //       <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
   //          <h2 className="lg:text-2xl md:text-xl font-poppins text-3xl font-bold py-2">
   //             Your wishlist is empty
   //          </h2>
   //          <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
   //             <ShoppingIcon />
   //          </div>
   //          <div className="md:hidden grid place-content-center">
   //             <ShoppingIcon />
   //          </div>
   //          <OutlinedButton component={Link} to={path.products}>
   //             Shopping now
   //          </OutlinedButton>
   //       </div>
   //    )
   // }

   return (
      <div>
         <div className="flex">
            <div
               className="w-full bg-cover bg-center h-96 mb-4"
               style={{ backgroundImage: 'url(' + background + ')' }}
            >
               <div className="flex items-center justify-center h-full w-full bg-opacity-50">
                  <div className="text-center">
                     <h1 className="text-white text-2xl font-josefins font-bold tracking-widest uppercase md:text-4xl">
                        WISHLIST
                     </h1>
                  </div>
               </div>
            </div>
         </div>

         {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 lg:py-12 md:px-16 px-4">
               <h2 className="lg:text-2xl md:text-xl font-poppins text-3xl font-bold py-2">
                  Your wishlist is empty
               </h2>
               <div className="hidden md:grid place-content-center lg:w-1/3 w-1/2">
                  <ShoppingIcon />
               </div>
               <OutlinedButton component={Link} to={path.products}>
                  Shopping now
               </OutlinedButton>
            </div>
         ) : (

            <Grid container className="konsept-container cart-page" sx={{ height: '100%', mt: 3 }}>
               <Grid item xs={12} sm={12} md={12} lg={12}>
                  <WishlistProductList
                     products={products}
                     onRemoveProduct={handleRemoveWishlist}
                  />
               </Grid>
            </Grid>
         )}

      </div>
   )
}

export default WishlistPage
