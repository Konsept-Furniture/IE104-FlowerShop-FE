import HeartFilledIcon from '@/assets/icons/HeartFilledIcon'
import HeartIcon from '@/assets/icons/HeartIcon'
import { path } from '@/constants/path'
import { updateMe } from '@/features/Auth/authSlice'
import { Box, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const AddToWishlistButton = ({ productId }) => {
   const dispatch = useDispatch()
   const profile = useSelector(state => state.auth.profile)
   const history = useHistory()
   const storedInWishlist = useMemo(() => {
      if (!profile?._id) return false
      const wishlist = profile.wishlist || []

      if (wishlist.includes(productId)) {
         return true
      }

      return false
   }, [productId, profile])

   const handleClick = async () => {
      if (!profile?._id) {
         history.push(`${path.login}?message_code=LOGIN_REQUIRED`)
         return
      }

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
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleClick}>
         {storedInWishlist ? (
            <>
               <HeartFilledIcon width={24} height={24} />
               <Typography sx={{ ml: 1 }}>The product is already in your wishlist!</Typography>
            </>
         ) : (
            <>
               <HeartIcon width={20} height={20} />
               <Typography sx={{ ml: 1 }}>Add to wishlist</Typography>
            </>
         )}
      </Box>
   )
}
AddToWishlistButton.propTypes = {
   productId: PropTypes.string.isRequired
}
export default AddToWishlistButton
