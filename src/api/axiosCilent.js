import axios from "axios";
import queryString from "query-string";
import { tokenUtil } from "@/utils/token";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const envVariables = process.env;
const { REACT_APP_API_URL } = 'envVariables';

const axiosClient = axios.create({
   baseURL: REACT_APP_API_URL,
   headers: {
      get: {
         "content-type": "application/json",
      },
   },
   paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
   //add authorization
   const token = tokenUtil.getAccessToken();
   if (token) {
      config.headers.Authorization = `Bearer ${token}`;
   }

   return config;
});

axiosClient.interceptors.response.use((response) => {
   tokenUtil.checkExpiredToken(response.data);

   if (response && response.data.error_code === 0) {
      return response.data;
   }

   throw response.data;
});

export default axiosClient;
