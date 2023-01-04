export const isEmail = value =>
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
   )

export const payloadCreator = asyncFunc => async (arg, thunkAPI) => {
   try {
      const res = await asyncFunc(arg)
      return res
   } catch (error) {
      return thunkAPI.rejectWithValue(error)
   }
}

export const generateNameId = ({ name, _id }) =>
   encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`)

export const getIdFromNameId = url => {
   const arr = url.split('-i.')
   return arr[arr.length - 1]
}

export const rateSale = (original, sale) => Math.round(((original - sale) / original) * 100) + '%'

export const formatMoney = (value, character = '.') =>
   String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)
export const format2Decimal = numb => {
   return Math.round((numb + Number.EPSILON) * 100) / 100
}
export const formatK = value => {
   const price = Number((Number(value) / 1000).toFixed(2))
   if (price > 1) {
      return price + 'k'
   }
   return value
}

export const renderPaginationText = pagination => {
   const isLastIndex = pagination.currentPage === pagination.totalPages
   return `Showing ${
      pagination.totalItems > 0 ? (pagination.currentPage - 1) * pagination.pageSize + 1 : 0
   }–${!isLastIndex ? pagination.currentPage * pagination.pageSize : pagination.totalItems} of ${
      pagination.totalItems
   } results`
}
export function stringToColor(string) {
   let hash = 0
   let i

   /* eslint-disable no-bitwise */
   for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
   }

   let color = '#'

   for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
   }
   /* eslint-enable no-bitwise */

   return color
}

export function stringAvatar(name) {
   return {
      // sx: {5
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
   }
}
