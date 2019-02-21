import path from 'path';
import express from 'express';
import { env } from 'base';
import Bundler from 'parcel-bundler';
import setRouting from './routing';
import setStatics from './statics';

const { EXPRESS_PORT } = env.ENV;
const entryFiles = path.join(__dirname, '../src/app/index.html');
const app = express();
const bundler = new Bundler(entryFiles, {});

setStatics(app);
setRouting(app);
app.use(bundler.middleware());
app.listen(EXPRESS_PORT);
