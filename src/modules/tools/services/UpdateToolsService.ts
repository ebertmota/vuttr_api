import { injectable, inject } from 'tsyringe';
import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';
import IUpdateToolDTO from '../dtos/IUpdateToolDTO';

@injectable()
class UpdateToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    id,
    title,
    link,
    description,
    tags,
  }: IUpdateToolDTO): Promise<Tool> {
    const tool = await this.toolsRepository.update({
      id,
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default UpdateToolsService;
