import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@/appSlice'
import authReducer from '@/features/Auth/authSlice'
import cartReducer from '@/features/Cart/cartSlice'

const rootReducer = {
   app: appReducer,
   auth: authReducer,
   cart: cartReducer
   // theme: themeReducer,
   // option: optionsReducer,
}

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false
      })
})

export default store
