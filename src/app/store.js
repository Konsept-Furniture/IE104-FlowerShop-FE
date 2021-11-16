import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@/appSlice'
import authReducer from '@/features/Auth/authSlice'

const rootReducer = {
   app: appReducer,
   user: authReducer
   // theme: themeReducer,
   // option: optionsReducer,
}

const store = configureStore({
   reducer: rootReducer
})

export default store
