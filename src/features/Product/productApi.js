import axiosClient from '@/api/axiosCilent'
const productApi = {
   getProducts: (params) => {
      const url = 'products'
      return axiosClient.get(url, { params })
   }
}
export default productApi
