import { injectable, inject } from 'tsyringe';
import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(
    tags: string | undefined,
    title: string | undefined,
  ): Promise<Tool[] | undefined> {
    let tools;

    if (tags !== undefined) {
      tools = this.toolsRepository.findByTags(tags);
    }

    if (title !== undefined) {
      tools = this.toolsRepository.findByTitle(title);
    }

    if (title === undefined && tags === undefined) {
      tools = this.toolsRepository.findAll();
    }

    return tools;
  }
}

export default CreateToolService;
