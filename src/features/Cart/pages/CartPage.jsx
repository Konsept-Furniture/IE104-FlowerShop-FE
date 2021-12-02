import { Grid } from '@mui/material'
import React from 'react'
import CartItemList from '../components/CartItemList'
import './CartPage.scss'

CartPage.propTypes = {}

const products = [
   {
      productId: '618bfa84477b9dfacb1090eg',
      quantity: 3
   },
   {
      productId: '618bfa84477b9dfacb1090eb',
      quantity: 3
   },
   {
      productId: '618bfa84477b9dfacb1090ea',
      quantity: 3
   },
   {
      productId: '618bfa84477b9dfacb1090ec',
      quantity: 3
   },
   {
      productId: '618bfa84477b9dfacb1090ed',
      quantity: 3
   },
   {
      productId: '618bfa84477b9dfacb1090ee',
      quantity: 3
   }
]
function CartPage(props) {
   const handleUpdateList = () => {}

   const handlePurchase = () => {}
   return (
      <Grid container className="konsept-container">
         {/* TODO: Add cover */}

         <Grid item lg={12}>
            <CartItemList
               products={products}
               onUpdateList={handleUpdateList}
               onPurchase={handlePurchase}
            />
         </Grid>
      </Grid>
   )
}

export default CartPage
