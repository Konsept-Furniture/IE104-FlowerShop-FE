import axiosClient from '@/api/axiosCilent'
const authApi = {
   login: (data) => {
      const url = 'auth/login'
      return axiosClient.post(url, data)
   },
   checkAccessToken: () => {
      const url = 'auth/check-token'
      return axiosClient.post(url)
   }
}
export default authApi
