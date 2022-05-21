import axios from 'axios';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';
import configStore from '../state_management';

const {store} = configStore();

const FetchInterceptor = axios.create({
  baseURL: Config.BASE_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// API Request interceptor
FetchInterceptor.interceptors.request.use(
  config => {
    const {method, url} = config;
    console.log(`Request ${method.toUpperCase()} ${url}: `, config.data);

    // const {userToken} = store.getState().authentication;
    // if (userToken) {
    //   config.headers.Authorization = `Bearer ${userToken}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// API respone interceptor
FetchInterceptor.interceptors.response.use(
  response => {
    const {method, url} = response.config;
    console.log(`Response ${method.toUpperCase()} ${url}: `, response.data);
    return response.data;
  },
  error => {
    const {method, url} = error.config;
    console.log(
      `Response Error ${method.toUpperCase()} ${url}: `,
      error.response,
    );

    if (error.response && error.response.status) {
      const {status} = error.response;
      if (status === 500) {
        Toast.show({
          type: 'error',
          text1: 'Mohon maaf, terjadi kesalahan',
          text2: 'silahkan coba kembali nanti.',
        });
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Mohon maaf, terjadi kesalahan',
        text2: 'silahkan coba kembali nanti.',
      });
    }
    return Promise.reject(error);
  },
);

export default FetchInterceptor;
