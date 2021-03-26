import { Request, Response } from 'express';
import { validate } from 'uuid';
import { container } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import CreateToolsService from '@modules/tools/services/CreateToolsService';
import DeleteToolsService from '@modules/tools/services/DeleteToolsService';
import ListToolsService from '@modules/tools/services/ListToolsService';
import UpdateToolsService from '@modules/tools/services/UpdateToolsService';

class ToolsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listTools = container.resolve(ListToolsService);

    const tags = request.query.tags as string;
    const title = request.query.title as string;

    const tools = await listTools.execute(tags, title);

    return response.json(tools);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const createTool = container.resolve(CreateToolsService);

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.status(201).json(tool);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, ...params } = request.body;

    const updateTool = container.resolve(UpdateToolsService);

    if (!validate(id)) {
      throw new AppError('Invalid type of id');
    }

    const tool = await updateTool.execute({ id, ...params });

    return response.json(tool);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTool = container.resolve(DeleteToolsService);

    if (!validate(id)) {
      throw new AppError('Invalid type of id');
    }

    await deleteTool.execute(id);

    return response.status(204).json();
  }
}

export default ToolsController;
