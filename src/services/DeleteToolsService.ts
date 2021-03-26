import { getCustomRepository } from 'typeorm';
import ToolsRepository from '../repositories/ToolsRepository';
import AppError from '../errors/AppError';

class DeleteToolsService {
  public async execute(toolId: string): Promise<void> {
    const toolsRepository = getCustomRepository(ToolsRepository);

    // Searching in database for tool
    const tool = await toolsRepository.find({
      where: { id: toolId },
    });

    // Checking if tools was found
    if (tool.length === 0) {
      throw new AppError('Tool with provided Id was not found.', 404);
    }

    await toolsRepository.delete(toolId);
  }
}

export default DeleteToolsService;
