import axiosClient from '@/api/axiosCilent'
const productApi = {
   getProducts: (payload) => {
      const url = 'products'
      return axiosClient.get(url, { payload })
   }
}
export default productApi
