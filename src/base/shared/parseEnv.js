import * as commonConfig from 'env/env';
import * as dev from 'env/env.development';
import * as prod from 'env/env.production';
import env from './environment';

const envConf = env === 'development' ? dev : prod;
const conf = { ...commonConfig, ...envConf };

export default conf;
