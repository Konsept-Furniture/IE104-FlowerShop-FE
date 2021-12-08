import axiosClient from './axiosCilent'

const orderApi = {
   create: payload => {
      const url = 'orders'
      return axiosClient.post(url, JSON.stringify(payload))
   },
   get: id => {
      const url = `orders/${id}`
      return axiosClient.get(url)
   },
   getAll: () => {
      const url = 'orders/user-orders'
      return axiosClient.get(url)
   },
   update: ({ id, payload }) => {
      const url = `orders/${id}`
      return axiosClient.put(url, JSON.stringify(payload))
   }
}
export default orderApi
