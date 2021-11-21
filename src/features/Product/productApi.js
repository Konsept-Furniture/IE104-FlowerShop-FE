import axiosClient from '@/api/axiosCilent'
const productApi = {
   getProducts: (params) => {
      const url = 'products'
      return axiosClient.get(url, { params })
   },
   getProduct: (_id) => {
      const url = `products/${_id}`
      return axiosClient.get(url)
   },
   getAllCategories: () => {
      const url = 'categories'
      return axiosClient.get(url)
   }
}
export default productApi
