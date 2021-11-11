import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import { Skeleton, Box } from '@mui/material'
import './ProductItem.scss'

ProductSkeletonList.propTypes = {
   length: PropTypes.number
}

ProductSkeletonList.defaultProps = {
   length: 9
}

function ProductSkeletonList({ length }) {
   return (
      <Grid container>
         {Array.from(new Array(length)).map((_, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
               <Box px={2.5} mb={6}>
                  <Box>
                     <Skeleton variant="rectangular" width="100%" sx={{
                        minHeight: {
                           lg: '250px',
                           sm: '250px'

                        }
                     }}/>
                  </Box>
                  <Box className="product__info--skeleton" mt={0.5}>
                     <Box width="40%">
                        <Skeleton height={50}/>
                        {/* <Skeleton height={25} mt={-1}/> */}
                     </Box>
                     <Box width="25%">
                        <Skeleton height={35}/>
                     </Box>
                  </Box>
               </Box>
            </Grid>
         ))}
      </Grid>
   )
}

export default ProductSkeletonList
