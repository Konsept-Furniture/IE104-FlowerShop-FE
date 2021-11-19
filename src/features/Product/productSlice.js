import cartApi from '@/api/cartApi'
import { payloadCreator } from '@/utils/helper'
import { createAsyncThunk } from '@reduxjs/toolkit'
import productApi from './productApi'

export const addToCart = createAsyncThunk(
   'product/addToCart',
   payloadCreator(cartApi.addToCart)
)
export const getCategories = createAsyncThunk(
   'product/getCategories',
   payloadCreator(productApi.getAllCategories)
)
