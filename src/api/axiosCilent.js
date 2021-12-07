import axios from 'axios'
import queryString from 'query-string'
import { tokenUtil } from '@/utils/token'
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

const axiosClient = axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers: {
      'Content-Type': 'application/json'
   },
   paramsSerializer: params => queryString.stringify(params)
})

axiosClient.interceptors.request.use(
   async config => {
      // add authorization
      const token = tokenUtil.getAccessToken()
      if (token) {
         config.headers.Authorization = `Bearer ${token}`
      }

      return config
   },
   function (error) {
      // Do something with request error
      return Promise.reject(error)
   }
)

axiosClient.interceptors.response.use(response => {
   tokenUtil.checkExpiredToken(response.data)

   if (response && response.data.errorCode === 0) {
      return response.data
   }
   throw response.data
})

export default axiosClient
