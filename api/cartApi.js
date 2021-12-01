import axiosClient from './axiosCilent'

const cartApi = {
   getCart: () => {
      const url = 'carts/readUserCart'
      return axiosClient.get(url)
   },
   addToCart: ({ cartId, payload }) => {
      const url = `carts/add-item/${cartId}`
      console.log(cartId, payload)
      return axiosClient.put(url, JSON.stringify(payload))
   }
}
export default cartApi
