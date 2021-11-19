import cartApi from '@/api/cartApi'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCart = createAsyncThunk(
   'cart/getCart',
   payloadCreator(cartApi.getCart)
)

const cart = createSlice({
   name: 'cart',
   initialState: {
      current: []
   },
   extraReducers: {
      [getCart.fulfilled]: (state, action) => {
         console.log('🚀 ~ file: cartSlice.js ~ line 17 ~ action', action)
         state.current = action.payload.data.products
      }
      // TODO: reset cart after logout
      // [logout.fulfilled]: state => {
      //   state.current = []
      // }
   }
})

const cartReducer = cart.reducer
export default cartReducer
