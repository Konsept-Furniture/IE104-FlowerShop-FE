import axiosClient from './axiosCilent'

const orderApi = {
   create: payload => {
      const url = 'orders'
      return axiosClient.post(url, JSON.stringify(payload))
   }
}
export default orderApi
