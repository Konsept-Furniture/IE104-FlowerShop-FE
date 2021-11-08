import StorageKeys from '@/constants/storage-keys'

const saveBearerToken = data => {
  localStorage.setItem(StorageKeys.TOKEN, data.access_token)
  // localStorage.setItem(constants.BEARER_REFRESH_TOKEN_VARIABLE_NAME, data.refresh_token);
}

const removeBearerToken = () => {
  localStorage.removeItem(StorageKeys.TOKEN)
  // localStorage.removeItem(constants.BEARER_REFRESH_TOKEN_VARIABLE_NAME);
}

const removeCurrentUser = () => {
  localStorage.removeItem(StorageKeys.USER)
  // localStorage.removeItem(constants.BEARER_REFRESH_TOKEN_VARIABLE_NAME);
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

function getBase64 (file) {
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
  removeBearerToken,
  removeCurrentUser,
  getParamValue,

  getBase64,
  getFileName
}
