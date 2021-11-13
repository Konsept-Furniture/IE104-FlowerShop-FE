import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import React from 'react'
import ProductItem from './ProductItem'

ProductList.propTypes = {
   data: PropTypes.array.isRequired
}

function ProductList({ data }) {
   return (
      <Grid container>
         {data.map(product => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={4}>
               <ProductItem product={product}/>
            </Grid>
         ))}
      </Grid>
   )
}

export default ProductList
