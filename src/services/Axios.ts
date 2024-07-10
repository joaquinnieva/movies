import { BASE_URL, TOKEN_API } from '@/consts';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const AxiosInterceptor = () => {
  axios.defaults.baseURL = BASE_URL;

  const updateHeader = (request: AxiosRequestConfig): AxiosRequestConfig => {
    request.headers = {
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${TOKEN_API}`,
      ...request.headers,
    };

    return request;
  };

  axios.interceptors.request.use((request: any) => {
    if (request.url?.includes('assets')) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      return { ...error.response };
    }
  );
};
