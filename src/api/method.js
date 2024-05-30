//* IMPORT
// eslint-disable-next-line import/no-cycle
import axiosIns from 'src/libs/axios';

export const getApi = async (url, params, config) => {
    const queryParams = params || {};

    const response = await axiosIns.get(url, { params: queryParams, ...config });
    return response?.data;
};

export const postApi = async (url, data, config) => {
    const response = await axiosIns.post(url, data, config);
    return response?.data;
};

export const putApi = async (url, data, config) => {
    const response = await axiosIns.put(url, data, config);
    return response?.data;
};

export const patchApi = async (url, data, config) => {
    const response = await axiosIns.patch(url, data, config);
    return response?.data;
};

export const deleteApi = async (url, config) => {
    const response = await axiosIns.delete(url, config);
    return response?.data;
};
