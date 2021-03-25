import { getCustomRepository } from 'typeorm';
import Tool from '../models/Tool';
import ToolsRepository from '../repositories/ToolsRepository';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string;
}

class CreateToolService {
  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tool> {
    const toolsRepository = getCustomRepository(ToolsRepository);

    const tool = toolsRepository.create({
      title,
      link,
      description,
      tags: [tags],
    });

    await toolsRepository.save(tool);

    return tool;
  }
}

export default CreateToolService;
