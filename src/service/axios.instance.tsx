import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://74.208.201.97:3000',
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(config => {
  console.log('🚀 ~ config:', config);
  //TODO VALIDATION LOGIC
  return config;
});

instance.interceptors.response.use(response => {
  console.log('🚀 ~ response:', response);
  return response.data;
});

export const http = instance;

export default http;
