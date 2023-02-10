import axiosClient from './axiosCilent'

const cartApi = {
   get: () => {
      const url = 'carts/readUserCart'
      return axiosClient.get(url)
   },
   update: ({ cartId, payload }) => {
      console.log('🚀 ~ file: cartApi.js:21 ~ payload', payload)
      const url = `carts/${cartId}`
      return axiosClient.put(url, JSON.stringify(payload))
   },
   addToCart: ({ cartId, payload }) => {
      const url = `carts/add-item/${cartId}`
      return axiosClient.put(url, JSON.stringify(payload))
   },
   createOrder: payload => {
      const url = 'orders'
      return axiosClient.post(url, JSON.stringify(payload))
   }
}
export default cartApi
