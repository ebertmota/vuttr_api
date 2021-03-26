import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Tool from '../infra/typeorm/entities/Tool';
import IToolsRepository from '../repositories/IToolsRepository';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const checkIfToolAlreadyExists = await this.toolsRepository.findByLink(
      link,
    );

    if (checkIfToolAlreadyExists && checkIfToolAlreadyExists.length > 0) {
      throw new AppError('This tool is already registered', 409);
    }

    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
