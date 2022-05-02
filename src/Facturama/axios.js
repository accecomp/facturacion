import axios from "axios";
import config from "./config";

//token de cuenta fake para facturama
//WGljb3RlbmNhdGw6eGljb2ZhY3R1cmFtYQ==
const $axios = axios.create({
  baseURL: config.app_url,
  auth: {
    username: config.valuesFake.user,
    password: config.valuesFake.pass,
  }
});

$axios.interceptors.response.use(
  response => {
    console.log('response: ', response);
    return response;
  },
  error => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  },
);

export default $axios;