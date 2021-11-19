import axiosClient from './axiosCilent'

const cartApi = {
   getCart: (_id) => {
      const url = `carts/${_id}`
      return axiosClient.get(url)
   },
   addToCart: (data) => {
      const url = 'carts'
      return axiosClient.post(url, JSON.stringify(data))
   }
}
export default cartApi
