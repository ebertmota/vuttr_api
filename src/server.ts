import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import routes from './routes';
import globalExceptionHandler from './middlewares/globalExceptionHandler';

import './database';

const app = express();
app.use(express.json());
app.use(routes);

app.use(globalExceptionHandler);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log("Server started on port 3000!");
});
