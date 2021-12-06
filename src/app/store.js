import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@/appSlice'
import authReducer from '@/features/Auth/authSlice'
import cartReducer from '@/features/Cart/cartSlice'
import orderReducer from '@/features/Order/orderSlice'

const rootReducer = {
   app: appReducer,
   auth: authReducer,
   cart: cartReducer,
   order: orderReducer
   // theme: themeReducer,
   // option: optionsReducer,
}

const store = configureStore({
   reducer: rootReducer,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: false
      })
})

export default store
