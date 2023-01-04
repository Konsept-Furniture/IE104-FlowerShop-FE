import axiosClient from './axiosCilent'

const reviewApi = {
   create: payload => {
      const url = 'reviews'
      return axiosClient.post(url, JSON.stringify(payload))
   },
   get: id => {
      const url = `reviews/${id}`
      return axiosClient.get(url)
   },
   getAll: () => {
      const url = 'reviews'
      return axiosClient.get(url)
   },
   update: ({ id, payload }) => {
      const url = `reviews/${id}`
      return axiosClient.put(url, JSON.stringify(payload))
   }
}
export default reviewApi
