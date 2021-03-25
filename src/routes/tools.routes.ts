import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';

import CreateToolService from '../services/CreateToolService';
import ToolsRepository from '../repositories/ToolsRepository';

const toolsRouter = Router();
const createToolService = new CreateToolService();

// List all tools, or list tools based on tags passed by query params
toolsRouter.get('/', async (request, response) => {
  const toolsRepository = getCustomRepository(ToolsRepository);

  const { tags } = request.query;

  let tools;

  tools = await toolsRepository.find();

  if (tags !== undefined) {
    console.log(tags);

    tools = await toolsRepository.findByTags(tags);
  }

  return response.json(tools);
});

// Create Tool
toolsRouter.post('/', async (request, response) => {
  const { title, link, description, tags } = request.body;

  const tool = await createToolService.execute({
    title,
    link,
    description,
    tags,
  });

  return response.status(201).json(tool);
});

// Delete Tool By ID

toolsRouter.delete('/:id', async (request, response) => {
  const toolsRepository = getCustomRepository(ToolsRepository);

  const { id } = request.params;

  // Check if id is a uuid
  if (!validate(id)) {
    return response.status(404).json({ error: 'Invalid type of id' });
  }

  // Searching in database for tool
  const tool = await toolsRepository.find({
    where: { id },
  });

  // Checking if tools was found
  if (tool.length === 0) {
    return response
      .status(404)
      .json({ error: 'Tool with provided Id was not found.' });
  }

  await toolsRepository.delete(id);
  console.log(tool);

  return response.status(204).json();
});

export default toolsRouter;
