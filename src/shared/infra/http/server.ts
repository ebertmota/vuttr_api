import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import cors from 'cors';

import globalExceptionHandler from '@shared/infra/http/middlewares/globalExceptionHandler';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use(globalExceptionHandler);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log("Server started on port 3000!");
});
