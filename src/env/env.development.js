import { ENV } from './env';

const { EXPRESS_PORT, SOCKET_PORT } = ENV;
export const BASE_URL = 'http://localhost';
export const SERVER_URL = `${ BASE_URL }:${ EXPRESS_PORT }`;

export const HOST = {
  SERVER_URL,
  SOCKET_URL: `${ BASE_URL }:${ SOCKET_PORT }`,
  API_URL: `${ SERVER_URL }/api`
};

export const API = {
  LOGIN_GET: `${ HOST.API_URL }/login.get.json`,
  LOGIN_POST: `${ HOST.API_URL }/login`
};
