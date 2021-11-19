import axiosClient from '@/api/axiosCilent'
const productApi = {
   getProducts: (params) => {
      const url = 'products'
      return axiosClient.get(url, { params })
   },
   getAllCategories: () => {
      const url = 'categories'
      return axiosClient.get(url)
   }
}
export default productApi
