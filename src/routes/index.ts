import { Router } from 'express';
import toolsRouter from './tools.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello VUTTR lives!' });
});

routes.use('/tools', toolsRouter);

export default routes;
