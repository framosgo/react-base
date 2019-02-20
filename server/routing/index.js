import routes from './routes';

const setRouting = app => (
  routes.map(route => app[route.method](route.url, route.handler))
);

export default setRouting;
