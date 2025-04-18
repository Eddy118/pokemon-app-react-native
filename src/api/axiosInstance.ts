import axios from 'axios';
import { baseURl } from '../constants';

const axiosInstance = axios.create({
  baseURL: baseURl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;