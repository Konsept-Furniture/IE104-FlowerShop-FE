import cartApi from '@/api/cartApi'
import { common } from '@/utils/common'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCart = createAsyncThunk(
   'cart/getCart',
   payloadCreator(cartApi.getCart)
)

const cart = createSlice({
   name: 'cart',
   initialState: {
      _id: null,
      current: []
   },
   extraReducers: {
      [getCart.fulfilled]: (state, action) => {
         console.log('cart: ', action.payload.data)
         state._id = action.payload.data._id
         state.current = action.payload.data.products
         common.resetCartInLocalStorage()
      }
      // TODO: reset cart after logout
      // [logout.fulfilled]: state => {
      //   state.current = []
      // }
   }
})

const cartReducer = cart.reducer
export default cartReducer
