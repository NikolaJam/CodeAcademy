import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';

import indexRouter from './indexRouter/index';
import models from './models/index';

const app = express();
const port = process.env.PORT || 3000;

// added middlewares 
app.use(logger('dev'));
app.use(cors());
app.use(helmet()); // helps you secure your Express apps by setting various HTTP headers
app.use(bodyParser.urlencoded({
  extended: false
}));  // basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.json()); // basically tells the system that you want json to be used

app.use(indexRouter);

// API listener
app.listen(port, () => {
  console.log(`API is running on ${port}`);
});
