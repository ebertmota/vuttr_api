import { Router } from 'express';

import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

// List all tools, or list tools based on tags passed by query params
toolsRouter.get('/', toolsController.index);

toolsRouter.post('/', toolsController.create);

toolsRouter.delete('/:id', toolsController.delete);

export default toolsRouter;
