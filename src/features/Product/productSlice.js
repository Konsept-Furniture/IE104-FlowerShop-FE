import cartApi from '@/api/cartApi'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const addToCart = createAsyncThunk(
   'product/addToCart',
   payloadCreator(cartApi.addToCart)
)
