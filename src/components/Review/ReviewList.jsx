import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, List, ListItem, Rating, Typography } from '@mui/material'
import { format, parseISO } from 'date-fns'
import { stringAvatar } from '@/utils/helper'

const ReviewList = ({ reviews }) => {
   return (
      <List sx={{ width: '100%' }}>
         {reviews.map(review => (
            <ListItem key={review._id}>
               <Box
                  sx={{
                     width: '100%',
                     display: 'flex',
                     alignItems: 'center'
                  }}
               >
                  {review.sender.name ? (
                     <Avatar
                        variant="rounded"
                        alt=""
                        sx={{ width: 80, height: 80 }}
                        {...stringAvatar(review.sender.name)}
                     />
                  ) : (
                     <Avatar
                        variant="rounded"
                        alt=""
                        src={require('@/assets/images/avatar.svg').default}
                        sx={{ width: 80, height: 80 }}
                     />
                  )}
                  <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2.5 }}>
                     <Rating name="read-only" value={review.rating} readOnly />
                     <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ textTransform: 'uppercase', fontWeight: 500 }}>
                           {review.sender.name || review.sender.username}{' '}
                        </Typography>
                        <Typography color={'GrayText'}>
                           {' - '}
                           {format(parseISO(review.createdAt), 'MMMM d, yyyy')}
                        </Typography>
                     </Box>
                     <Typography color={'GrayText'}>{review.message}</Typography>
                  </Box>
               </Box>
            </ListItem>
         ))}
      </List>
   )
}
ReviewList.propTypes = {
   reviews: PropTypes.array
}
export default ReviewList
