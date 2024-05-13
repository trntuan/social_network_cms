//* LIB
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

//* IMPORT

const axiosIns = axios.create({
  baseURL: `http://localhost:0.0.0.0`,
  timeout: 15 * 1000,
  headers: {
    Accept: 'application/json',
  },
});

axiosIns.interceptors.request.use(
  (config) => {
    const auth = process.env.API_TOKEN;

    config.headers.Authorization = `Bearer ${auth}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosIns
