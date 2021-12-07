import { Skeleton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './ProductDetail.scss'

function ProductDetailSkeleton() {
   return (
      <div className="product-detail">
         <Box
            className="product-detail__thumbnail"
            sx={{
               height: '800px',
               padding: '0 30px'
            }}
         >
            <Skeleton variant="rectangular" width="100%" height="100%" />
         </Box>
         <Box
            className="product-detail__info"
            sx={{
               marginTop: '15px'
            }}
         >
            <Skeleton height="60px" />
            <Skeleton height="20px" width="50px" />
            <Skeleton height="200px" />
            <Skeleton height="100px" />
            <Skeleton height="20px" />
         </Box>
      </div>
   )
}

export default ProductDetailSkeleton
