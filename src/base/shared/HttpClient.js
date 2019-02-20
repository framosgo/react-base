import axios from 'axios';
import { env } from 'base';
import { initializeInterceptor } from './HttpInterceptor';

const createInstance = domain => {
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.defaults.baseURL = domain;

  initializeInterceptor(instance);

  return instance;
};

export const http = createInstance(env.API_URL);
