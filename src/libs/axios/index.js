//* LIB
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line import/no-cycle
import AuthService from 'src/services/AuthService';

//* IMPORT

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  timeout: 15 * 1000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Origin': '*',
    withCredentials: true,
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json', // Update Content-Type to application/json
  },
});

axiosIns.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || '';

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosIns.interceptors.response.use(
  (res) => {
    console.log(res, '----------1--------------');
    return res
  }, // Simply return the response
  // eslint-disable-next-line consistent-return
  async (err) => {
    const status = err.response ? err.response.status : null;

    if (status === 401) {
      const refreshTokenFromStorage = localStorage.getItem('token');
      AuthService.refresh(refreshTokenFromStorage)
        .then((res) => {
          localStorage.setItem('token', res.access_token);
          axiosIns.defaults.headers.common.Authorization = `Bearer ${res.access_token}`;
          return axiosIns();
        })
        // eslint-disable-next-line no-shadow
        .catch((err) => Promise.reject(err));
    }
  }
);

export default axiosIns;
