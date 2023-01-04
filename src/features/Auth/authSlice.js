import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import authApi from 'src/api/auth.api'
// import userApi from 'src/api/user.api'
import StorageKeys from '@/constants/StorageKeys'
import { payloadCreator } from '@/utils/helper'
import authApi from './authApi'
import { common } from '@/utils/common'
import userApi from '@/api/userApi'

export const register = createAsyncThunk('auth/register', payloadCreator(authApi.register))
export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))
export const logout = createAsyncThunk('auth/logout', payloadCreator(authApi.logout))
export const getMe = createAsyncThunk('auth/getMe', payloadCreator(userApi.getMe))
export const changePassword = createAsyncThunk(
   'auth/changePassword',
   payloadCreator(authApi.changePassword)
)
export const updateMe = createAsyncThunk('auth/updateMe', payloadCreator(userApi.updateMe))

const handleAuthFulfilled = (state, action) => {
   const { user, accessToken } = action.payload.data
   state.profile = user
   common.saveBearerToken(accessToken)
   common.saveCurrentUser(JSON.stringify(user))
}

const handleUnauth = state => {
   state.profile = {}
   common.removeBearerToken()
   common.removeCurrentUser()
}

const auth = createSlice({
   name: 'auth',
   initialState: {
      profile: JSON.parse(localStorage.getItem(StorageKeys.user)) || {},
      settings: {}
   },
   reducers: {
      unauthorize: handleUnauth
   },
   extraReducers: {
      // [register.fulfilled]: handleAuthFulfilled,
      [login.fulfilled]: handleAuthFulfilled,
      [getMe.fulfilled]: (state, action) => {
         const user = action.payload.data
         state.profile = user
         common.saveCurrentUser(JSON.stringify(user))
      },
      [logout.fulfilled]: handleUnauth,
      [changePassword.fulfilled]: (state, action) => {
         state.profile = action.payload.data
         localStorage.setItem(StorageKeys.user, JSON.stringify(state.profile))
      },
      [updateMe.fulfilled]: (state, action) => {
         state.profile = action.payload.data
         localStorage.setItem(StorageKeys.user, JSON.stringify(state.profile))
      }
   }
})

const authReducer = auth.reducer
export const { unauthorize } = auth.actions
export default authReducer
