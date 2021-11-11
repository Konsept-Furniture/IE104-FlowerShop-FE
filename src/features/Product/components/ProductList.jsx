import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import ProductItem from './ProductItem'

ProductList.propTypes = {
   data: PropTypes.array.isRequired
}

function ProductList({ data }) {
   return (
      <div>
         <Box pl="10px" mb={3} mt={2} className="text--italic color--gray">
            <h5>Showing 1–9 of 90 results</h5>
         </Box>
         <Grid container>
            {data.map(product => (
               <Grid item key={product._id} xs={12} sm={6} md={4} lg={4}>
                  <ProductItem product={product}/>
               </Grid>
            ))}
         </Grid>
      </div>
   )
}

export default ProductList
