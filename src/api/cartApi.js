import axiosClient from './axiosCilent'

const cartApi = {
   getCart: () => {
      const url = 'carts/readUserCart'
      return axiosClient.get(url)
   },
   addToCart: (_id, data) => {
      const url = `carts/add-item/${_id}`
      return axiosClient.put(url, JSON.stringify(data))
   }
}
export default cartApi
