import { injectable, inject } from 'tsyringe';
import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class DeleteToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(toolId: string): Promise<void> {
    await this.toolsRepository.delete(toolId);
  }
}

export default DeleteToolsService;
