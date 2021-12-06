import axiosClient from './axiosCilent'

const userApi = {
   getMe: () => {
      const url = 'users/read/infor'
      return axiosClient.get(url)
   },
   updateMe: payload => {
      const url = 'users/update/infor'
      return axiosClient.put(url, JSON.stringify(payload))
   }
}
export default userApi
