import StorageKeys from '@/constants/StorageKeys'

const saveBearerToken = token => {
   localStorage.setItem(StorageKeys.accessToken, token)
}

const saveCurrentUser = (data) => {
   localStorage.setItem(StorageKeys.user, data)
}

const removeBearerToken = () => {
   localStorage.removeItem(StorageKeys.accessToken)
}

const removeCurrentUser = () => {
   localStorage.removeItem(StorageKeys.user)
}

const addProductToCartLocalStorage = (_id, quantity) => {
   if (!localStorage.getItem(StorageKeys.cart)) {
      localStorage.setItem(StorageKeys.cart, JSON.stringify([]))
   }

   const cart = JSON.parse(localStorage.getItem(StorageKeys.cart))
   const idx = cart.findIndex(item => item._id === _id)
   if (idx >= 0) {
      cart[idx].quantity += quantity
   } else {
      cart.push({
         _id,
         quantity
      })
   }
   localStorage.setItem(StorageKeys.cart, JSON.stringify(cart))
}

const resetCartInLocalStorage = () => {
   localStorage.setItem(StorageKeys.cart, JSON.stringify([]))
}

const getParamValue = query => {
   const objResult = query
      ? (/^[?#]/.test(query) ? query.slice(1) : query)
         .split('&')
         .reduce((params, param) => {
            const [key, value] = param.split('=')
            params[key] = value
               ? decodeURIComponent(value.replace(/\+/g, ' '))
               : ''
            return params
         }, {})
      : {}
   return objResult || ''
}

function getBase64(file) {
   return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
   })
}

const getFileName = file => {
   return file.replace(/\.[^/.]+$/, '')
}

export const common = {
   saveBearerToken,
   saveCurrentUser,
   removeBearerToken,
   removeCurrentUser,
   addProductToCartLocalStorage,
   resetCartInLocalStorage,

   getParamValue,

   getBase64,
   getFileName

}
