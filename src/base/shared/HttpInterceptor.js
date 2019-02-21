// import { env } from 'base';
// FIXME use above env configuration
export const initializeInterceptor = instance => {
  instance.interceptors.request.use(
    config => {
      const conf = config;
      const AUTH_TOKEN = '';// fixme Cookies.get('token');

      if (AUTH_TOKEN) {
        const auth = { Authorization: `Bearer ${ AUTH_TOKEN }` };
        conf.headers = { ...config.headers, ...auth };
      }

      return conf;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(undefined, error => {
    errorHandler(error);
    return Promise.reject(error);
  });
};

const errorHandler = error => {
  switch (error.response.status) {
    case 500:
    // FIXME it shouldn't be here...
      break;

    default:
      break;
  }
};