import { Request, Response } from 'express';
import { validate } from 'uuid';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import ToolsRepository from '../repositories/ToolsRepository';
import CreateToolService from '../services/CreateToolService';
import DeleteToolsService from '../services/DeleteToolsService';

class ToolsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const toolsRepository = getCustomRepository(ToolsRepository);

    const filteredTags = request.query.tags as string;

    let tools;

    tools = await toolsRepository.find();

    if (filteredTags !== undefined) {
      tools = await toolsRepository.findByTags(filteredTags);
    }

    return response.json(tools);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const createTool = new CreateToolService();

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(tool);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTool = new DeleteToolsService();

    if (!validate(id)) {
      throw new AppError('Invalid type of id');
    }

    await deleteTool.execute(id);

    return response.status(204).json();
  }
}

export default ToolsController;
