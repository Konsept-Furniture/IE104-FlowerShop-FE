import { path } from '@/constants/path';
import StorageKeys from '@/constants/storage-keys';
import { common } from "./common";

const getAccessToken = () => {
   return localStorage.getItem(StorageKeys.TOKEN);
}

const checkExpiredToken = async (responseData) => {

   if (responseData.errorCode === 401 && responseData.message === "Token is invalid or expired") {
      common.removeBearerToken();
      window.location.hash = path.login;
   }
}

export const tokenUtil = {
   getAccessToken,
   checkExpiredToken,
}

