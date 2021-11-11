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
      <>
         <Box pl="10px" mb={2}>
            <Skeleton height={50} width="30%"/>
         </Box>
         <Grid container>
            {Array.from(new Array(length)).map((_, index) => (
               <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                  <Box px={1.2} mb={6}>
                     <Box>
                        <Skeleton variant="rectangular" width="100%" sx={{
                           minHeight: {
                              lg: '350px',
                              md: '350px',
                              sm: '450px',
                              xs: '450px'
                           }
                        }}/>
                     </Box>
                     <Box className="product__info--skeleton" mt={0.5}>
                        <Box width="40%">
                           <Skeleton height={50}/>
                        </Box>
                        <Box width="25%">
                           <Skeleton height={35}/>
                        </Box>
                     </Box>
                  </Box>
               </Grid>
            ))}
         </Grid>
      </>
   )
}

export default ProductSkeletonList
