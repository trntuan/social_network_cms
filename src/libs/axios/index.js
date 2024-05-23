//* LIB
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

//* IMPORT

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  timeout: 15 * 1000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Access-Control-Allow-Origin': '*',
    withCredentials: true,
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'multipart/form-data',
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

export default axiosIns;
