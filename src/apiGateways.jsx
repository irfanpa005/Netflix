import axios from 'axios';
import { baseUrl } from './urls';

export const tmdbGateways = axios.create({
    baseURL: baseUrl,
  });