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
   getParamValue,

   getBase64,
   getFileName
}
