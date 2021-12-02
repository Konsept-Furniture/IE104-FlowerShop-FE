import cartApi from '@/api/cartApi'
import { common } from '@/utils/common'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getCart = createAsyncThunk(
   'cart/getCart',
   payloadCreator(cartApi.get)
)
export const updateCart = createAsyncThunk(
   'cart/updateCart',
   payloadCreator(cartApi.update)
)

const cart = createSlice({
   name: 'cart',
   initialState: {
      _id: null,
      current: []
   },
   reducers: {
      removeCartItem: (state, action) => {
         state.current = state.current.filter(
            item => item._id !== action.payload._id
         )
      }
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
export const { removeCartItem } = cart.actions
export default cartReducer
