import orderApi from '@/api/orderApi'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getOrder = createAsyncThunk('order/getOrder', payloadCreator(orderApi.get))
export const createOrder = createAsyncThunk('order/createOrder', payloadCreator(orderApi.create))
export const updateOrder = createAsyncThunk('order/updateOrder', payloadCreator(orderApi.update))
const order = createSlice({
   name: 'order',
   initialState: {
      isPaid: false,
      current: null
   },
   reducers: {
      payOrder: (state, action) => {
         state.isPaid = true
      }
   },
   extraReducers: {
      [getOrder.fulfilled]: (state, action) => {
         state.current = action.payload.data
      },
      [updateOrder.fulfilled]: (state, action) => {
         console.log(action.payload.data)
         state.current = action.payload.data
      },
      [getOrder.rejected]: (state, action) => {
         // TODO: redirect
      },
      [createOrder.fulfilled]: (state, action) => {
         state.current = action.payload.data
      }
   }
})

const orderReducer = order.reducer
export const { payOrder } = order.actions
export default orderReducer
