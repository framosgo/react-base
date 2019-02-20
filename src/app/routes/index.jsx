import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

import ROUTES from './routes';

const Login = lazy(() => import('containers/Login'));

export const Routes = () => (
  <Route exact={ true } path={ ROUTES.PUBLIC.ROOT } component={ Login } />
);
