import axiosClient from '@/api/axiosCilent'
const authApi = {
   login: data => {
      const url = 'auth/login'
      return axiosClient.post(url, data)
   },
   logout: () => {
      const url = 'auth/logout'
      return axiosClient.get(url)
   },
   changePassword: payload => {
      const url = 'auth/change-password'
      return axiosClient.put(url, JSON.stringify(payload))
   },
   register: data => {
      const url = 'auth/register'
      return axiosClient.post(url, data)
   },
   checkAccessToken: () => {
      const url = 'auth/check-token'
      return axiosClient.post(url)
   }
}
export default authApi
