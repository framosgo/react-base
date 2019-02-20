import path from 'path';
import express from 'express';
import Bundler from 'parcel-bundler';
import setRouting from './routing';
import setStatics from './statics';

const port = 8000;
const entryFiles = path.join(__dirname, '../src/app/index.html');
const app = express();
const bundler = new Bundler(entryFiles, {});

setStatics(app);
setRouting(app);
app.use(bundler.middleware());

app.listen(port);
